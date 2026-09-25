import { randomUUID } from 'node:crypto';
import { Matrix4, Quaternion, Vector3 } from 'three';
import { GAME, SPAWNS } from '../shared/config.js';
import { aimRay, forwardVector, spawnQuaternion, traceMinigun, upVector } from '../shared/flight.js';
import { hitBuildingSphere, rayBuildingDistance } from '../shared/map.js';

const W = GAME.weapons;
const clamp = (n, min, max) => Math.min(max, Math.max(min, n));
const distance = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
const send = (ws, value) => {
  if (ws?.readyState === 1) ws.send(JSON.stringify(value));
};

function player(ws, slot, bot = false) {
  const spawn = SPAWNS[slot];
  return {
    id: randomUUID(), ws, slot, bot, name: bot ? 'ACE BOT' : `PILOT 0${slot + 1}`,
    x: spawn.x, y: spawn.y, z: spawn.z, vx: 0, vy: 0, vz: 0,
    q: spawnQuaternion(spawn.yaw), health: GAME.maxHealth, wins: 0,
    ammo: W.minigun.magazine, reloadUntil: 0, nextShot: 0,
    flareUntil: 0, flareReady: 0, unguidedReady: 0, lockReady: 0,
    lockProgress: 0, input: {}, mouseYaw: 0, mousePitch: 0, lastInput: 0, hitFlash: 0
  };
}

function resetPlayer(p) {
  const s = SPAWNS[p.slot];
  Object.assign(p, { x: s.x, y: s.y, z: s.z, vx: 0, vy: 0, vz: 0,
    q: spawnQuaternion(s.yaw), health: GAME.maxHealth, ammo: W.minigun.magazine,
    reloadUntil: 0, nextShot: 0, flareUntil: 0, flareReady: 0,
    unguidedReady: 0, lockReady: 0, lockProgress: 0, input: {}, mouseYaw: 0, mousePitch: 0 });
}

export class GameServer {
  constructor() {
    this.rooms = new Map();
    this.connections = new Map();
    this.timer = setInterval(() => this.tick(), 1000 / GAME.tickRate);
  }

  connect(ws) {
    ws.on('message', raw => {
      if (raw.length > 1024) return;
      let msg;
      try { msg = JSON.parse(raw.toString()); } catch { return; }
      if (msg.type === 'join') this.join(ws, msg);
      else {
        const entry = this.connections.get(ws);
        if (!entry) return;
        if (msg.type === 'input' && msg.input && typeof msg.input === 'object') {
          const i = msg.input;
          entry.player.input = {
            throttle: clamp(Number(i.throttle) || 0, -1, 1),
            roll: clamp(Number(i.roll) || 0, -1, 1),
            yawAxis: clamp(Number(i.yawAxis) || 0, -1, 1),
            pitchAxis: clamp(Number(i.pitchAxis) || 0, -1, 1),
            fire: Boolean(i.fire),
            flare: Boolean(i.flare), unguided: Boolean(i.unguided),
            lock: Boolean(i.lock), reload: Boolean(i.reload)
          };
          if (Number.isFinite(i.mouseYaw)) entry.player.mouseYaw = clamp(entry.player.mouseYaw + clamp(i.mouseYaw, -0.35, 0.35), -0.6, 0.6);
          if (Number.isFinite(i.mousePitch)) entry.player.mousePitch = clamp(entry.player.mousePitch + clamp(i.mousePitch, -0.35, 0.35), -0.6, 0.6);
          entry.player.lastInput = Date.now();
        } else if (msg.type === 'rematch') this.rematch(entry.room);
      }
    });
    ws.on('close', () => this.leave(ws));
  }

  join(ws, msg) {
    if (this.connections.has(ws)) return;
    const code = String(msg.room || '').replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 80);
    if (!code) return send(ws, { type: 'error', message: 'ルームコードが必要です' });
    let room = this.rooms.get(code);
    if (!room) {
      room = { code, players: [], projectiles: [], events: [], phase: 'waiting',
        round: 1, roundEnds: 0, sequence: 0, lastSnapshot: 0 };
      this.rooms.set(code, room);
    }
    if (room.players.length >= 2) return send(ws, { type: 'error', message: 'このルームは満員です' });
    const slot = room.players.some(existing => existing.slot === 0) ? 1 : 0;
    const p = player(ws, slot);
    room.players.push(p);
    this.connections.set(ws, { room, player: p });
    send(ws, { type: 'joined', id: p.id, room: code, slot: p.slot });
    if (msg.practice && room.players.length === 1) room.players.push(player(null, 1 - slot, true));
    if (room.players.length === 2) {
      room.phase = 'playing';
      this.broadcast(room, { type: 'roundStart', round: room.round });
    }
    this.snapshot(room);
  }

  leave(ws) {
    const entry = this.connections.get(ws);
    if (!entry) return;
    this.connections.delete(ws);
    const room = entry.room;
    room.players = room.players.filter(p => p !== entry.player && !p.bot);
    room.projectiles = [];
    room.phase = 'waiting';
    room.round = 1;
    room.players.forEach(p => { p.wins = 0; resetPlayer(p); });
    this.broadcast(room, { type: 'opponentLeft' });
    if (!room.players.length) this.rooms.delete(room.code);
    else this.snapshot(room);
  }

  rematch(room) {
    if (room.phase !== 'matchEnd' || room.players.length !== 2) return;
    room.round = 1;
    room.projectiles = [];
    room.players.forEach(p => { p.wins = 0; resetPlayer(p); });
    room.phase = 'playing';
    this.broadcast(room, { type: 'roundStart', round: 1 });
    this.snapshot(room);
  }

  broadcast(room, data) { room.players.forEach(p => send(p.ws, data)); }

  tick() {
    const now = Date.now() / 1000;
    const dt = 1 / GAME.tickRate;
    for (const room of this.rooms.values()) {
      if (room.phase === 'roundEnd' && now >= room.roundEnds) {
        room.round++;
        room.projectiles = [];
        room.players.forEach(resetPlayer);
        room.phase = 'playing';
        this.broadcast(room, { type: 'roundStart', round: room.round });
      }
      if (room.phase === 'playing') {
        for (const p of room.players) {
          if (p.bot) this.botInput(p, room, dt, now);
          else if (Date.now() - p.lastInput > 500) p.input = {};
          this.move(p, dt);
        }
        for (const p of room.players) this.combat(p, room, now, dt);
        this.projectiles(room, dt, now);
      }
      if (now - room.lastSnapshot >= 1 / 20) {
        room.lastSnapshot = now;
        this.snapshot(room, now);
      }
    }
  }

  move(p, dt) {
    const i = p.input;
    // Rotate around the helicopter's own axes. The quaternion has no angle limits,
    // so holding pitch or roll can complete loops and barrel rolls.
    const yawLimit = GAME.yawRate * dt;
    const pitchLimit = GAME.pitchRate * dt;
    const yawChange = clamp((i.yawAxis || 0) * yawLimit + p.mouseYaw, -yawLimit, yawLimit);
    const pitchChange = clamp((i.pitchAxis || 0) * pitchLimit + p.mousePitch, -pitchLimit, pitchLimit);
    p.mouseYaw = 0;
    p.mousePitch = 0;
    if (yawChange) p.q.multiply(new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), -yawChange));
    if (pitchChange) p.q.multiply(new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), pitchChange));
    if (i.roll) p.q.multiply(new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), i.roll * GAME.rollRate * dt));
    p.q.normalize();
    const up = upVector(p);
    // Neutral collective balances gravity only while upright. Inverting the
    // rotor points its lift down, so an upside-down helicopter falls.
    const thrust = Math.max(0, GAME.gravity + (i.throttle || 0) * GAME.collectiveStrength);
    const drag = Math.exp(-GAME.airDrag * dt);
    p.vx = (p.vx + up.x * thrust * dt) * drag;
    p.vy = (p.vy + (up.y * thrust - GAME.gravity) * dt) * drag;
    p.vz = (p.vz + up.z * thrust * dt) * drag;
    const horizontalSpeed = Math.hypot(p.vx, p.vz);
    if (horizontalSpeed > GAME.maxHorizontalSpeed) {
      const scale = GAME.maxHorizontalSpeed / horizontalSpeed;
      p.vx *= scale;
      p.vz *= scale;
    }
    p.vy = clamp(p.vy, -GAME.maxVerticalSpeed, GAME.maxVerticalSpeed);
    const old = { x: p.x, y: p.y, z: p.z };
    const next = { x: p.x + p.vx * dt, y: p.y + p.vy * dt, z: p.z + p.vz * dt };
    next.x = clamp(next.x, -GAME.worldLimit + 3, GAME.worldLimit - 3);
    next.y = clamp(next.y, 5, GAME.maxAltitude);
    next.z = clamp(next.z, -GAME.worldLimit + 3, GAME.worldLimit - 3);
    if ((next.y === 5 && p.vy < 0) || (next.y === GAME.maxAltitude && p.vy > 0)) p.vy = 0;
    if ((next.x === -GAME.worldLimit + 3 && p.vx < 0) || (next.x === GAME.worldLimit - 3 && p.vx > 0)) p.vx = 0;
    if ((next.z === -GAME.worldLimit + 3 && p.vz < 0) || (next.z === GAME.worldLimit - 3 && p.vz > 0)) p.vz = 0;
    if (!hitBuildingSphere(next.x, next.y, next.z, GAME.heliRadius)) {
      Object.assign(p, next);
    } else {
      // Sliding along walls keeps flight fluid in the dense city.
      if (!hitBuildingSphere(next.x, old.y, old.z, GAME.heliRadius)) p.x = next.x; else p.vx = 0;
      if (!hitBuildingSphere(p.x, next.y, old.z, GAME.heliRadius)) p.y = next.y; else p.vy = 0;
      if (!hitBuildingSphere(p.x, p.y, next.z, GAME.heliRadius)) p.z = next.z; else p.vz = 0;
    }
  }

  combat(p, room, now, dt) {
    const i = p.input;
    const enemy = room.players.find(other => other !== p);
    if (!enemy) return;
    if (p.reloadUntil && now >= p.reloadUntil) { p.ammo = W.minigun.magazine; p.reloadUntil = 0; }
    if ((i.reload || p.ammo === 0) && p.ammo < W.minigun.magazine && !p.reloadUntil) {
      p.reloadUntil = now + W.minigun.reload;
      room.events.push({ type: 'reload', owner: p.id });
    }
    if (i.flare && now >= p.flareReady) {
      p.flareReady = now + W.flare.cooldown;
      p.flareUntil = now + W.flare.duration;
      room.events.push({ type: 'flare', owner: p.id });
    }
    const { origin, dir: aim } = aimRay(p);
    if (i.fire && p.ammo > 0 && !p.reloadUntil && now >= p.nextShot) {
      p.nextShot = now + W.minigun.interval;
      p.ammo--;
      const trace = traceMinigun(p, enemy);
      room.events.push({ type: 'shot', owner: p.id, from: trace.origin, to: trace.end, hit: trace.hit });
      if (trace.hit) this.damage(room, enemy, p, W.minigun.damage);
    }
    if (i.unguided && now >= p.unguidedReady) {
      p.unguidedReady = now + W.unguided.cooldown;
      this.launch(room, p, origin, aim, 'unguided', null);
    }
    const toEnemy = { x: enemy.x - p.x, y: enemy.y - p.y, z: enemy.z - p.z };
    const range = Math.hypot(toEnemy.x, toEnemy.y, toEnemy.z);
    const dot = range ? (aim.x * toEnemy.x + aim.y * toEnemy.y + aim.z * toEnemy.z) / range : 0;
    const clear = range < W.lock.range && dot > W.lock.cone &&
      rayBuildingDistance(origin, { x: toEnemy.x / range, y: toEnemy.y / range, z: toEnemy.z / range }, range) >= range - 4;
    const canLock = clear && now >= enemy.flareUntil;
    p.lockProgress = now < p.lockReady ? 0 : canLock
      ? Math.min(W.lock.acquire, p.lockProgress + dt)
      : Math.max(0, p.lockProgress - dt * 2);
    if (i.lock && p.lockProgress >= W.lock.acquire && now >= p.lockReady) {
      p.lockReady = now + W.lock.cooldown;
      p.lockProgress = 0;
      this.launch(room, p, origin, aim, 'lock', enemy.id);
    }
  }

  launch(room, owner, origin, dir, kind, target) {
    const spec = W[kind];
    const missile = { id: randomUUID(), owner: owner.id, kind, target,
      x: origin.x, y: origin.y, z: origin.z,
      vx: dir.x * spec.speed, vy: dir.y * spec.speed, vz: dir.z * spec.speed, life: 4.5 };
    room.projectiles.push(missile);
    room.events.push({ type: 'launch', owner: owner.id, kind, from: origin });
  }

  projectiles(room, dt, now) {
    for (const m of room.projectiles) {
      const spec = W[m.kind];
      const target = room.players.find(p => p.id === m.target);
      if (target && now >= target.flareUntil) {
        const dx = target.x - m.x, dy = target.y - m.y, dz = target.z - m.z;
        const len = Math.hypot(dx, dy, dz) || 1;
        const a = Math.min(1, dt * 2.8);
        m.vx += (dx / len * spec.speed - m.vx) * a;
        m.vy += (dy / len * spec.speed - m.vy) * a;
        m.vz += (dz / len * spec.speed - m.vz) * a;
      } else if (target && now < target.flareUntil) m.target = null;
      m.x += m.vx * dt; m.y += m.vy * dt; m.z += m.vz * dt; m.life -= dt;
      const victim = room.players.find(p => p.id !== m.owner && distance(p, m) < GAME.heliRadius + 1.2);
      const obstacle = m.y <= 1 || hitBuildingSphere(m.x, m.y, m.z, 0.7);
      if (victim || obstacle) {
        room.events.push({ type: 'explosion', x: m.x, y: m.y, z: m.z, kind: m.kind });
        const owner = room.players.find(p => p.id === m.owner);
        for (const p of room.players) {
          if (p.id === m.owner) continue;
          const d = distance(p, m);
          if (d < spec.blast + GAME.heliRadius) this.damage(room, p, owner, spec.damage * (1 - d / (spec.blast + GAME.heliRadius) * 0.45));
        }
        m.life = 0;
      }
      if (Math.abs(m.x) > 200 || Math.abs(m.z) > 200 || m.y > 130) m.life = 0;
    }
    room.projectiles = room.projectiles.filter(m => m.life > 0);
  }

  damage(room, target, attacker, amount) {
    if (room.phase !== 'playing') return;
    target.health = Math.max(0, target.health - amount);
    if (target.health < 0.001) target.health = 0;
    room.events.push({ type: 'damage', target: target.id, attacker: attacker?.id, amount });
    if (target.health > 0) return;
    attacker.wins++;
    room.events.push({ type: 'destroyed', target: target.id, attacker: attacker.id });
    if (attacker.wins >= GAME.winsToMatch) {
      room.phase = 'matchEnd';
      this.broadcast(room, { type: 'matchEnd', winner: attacker.id });
    } else {
      room.phase = 'roundEnd';
      room.roundEnds = Date.now() / 1000 + 3.5;
      this.broadcast(room, { type: 'roundEnd', winner: attacker.id, nextIn: 3.5 });
    }
  }

  botInput(p, room, dt, now) {
    const enemy = room.players.find(other => other !== p);
    if (!enemy) return;
    const dx = enemy.x - p.x, dy = enemy.y - p.y, dz = enemy.z - p.z;
    const range = Math.hypot(dx, dy, dz);
    const target = new Vector3(enemy.x, enemy.y, enemy.z);
    const desired = new Quaternion().setFromRotationMatrix(new Matrix4().lookAt(new Vector3(p.x, p.y, p.z), target, new Vector3(0, 1, 0)));
    if (range > 100) desired.multiply(new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), -0.2));
    p.q.slerp(desired, Math.min(1, dt * 1.8));
    const clear = rayBuildingDistance(p, { x: dx / range, y: dy / range, z: dz / range }, range) >= range - 4;
    const facing = forwardVector(p);
    const alignment = (facing.x * dx + facing.y * dy + facing.z * dz) / range;
    p.input = { yawAxis: 0, pitchAxis: 0, roll: 0,
      throttle: p.y < 90 ? 0.7 : p.y > 108 ? -0.5 : Math.sin(now * 0.6) * 0.15,
      fire: range < 160 && clear && alignment > 0.992,
      flare: range < 75 && Math.random() < dt * 0.25,
      unguided: range < 100 && clear && Math.random() < dt * 0.35,
      lock: range < 130 && clear };
  }

  snapshot(room, now = Date.now() / 1000) {
    const players = room.players.map(p => ({ id: p.id, slot: p.slot, name: p.name,
      x: p.x, y: p.y, z: p.z, vx: p.vx, vy: p.vy, vz: p.vz,
      q: p.q.toArray(), health: p.health, wins: p.wins,
      ammo: p.ammo, reload: Math.max(0, p.reloadUntil - now),
      flare: Math.max(0, p.flareReady - now), flareActive: Math.max(0, p.flareUntil - now),
      unguided: Math.max(0, p.unguidedReady - now), lock: Math.max(0, p.lockReady - now),
      lockProgress: p.lockProgress / W.lock.acquire }));
    this.broadcast(room, { type: 'state', phase: room.phase, round: room.round,
      players, projectiles: room.projectiles.map(m => ({ id: m.id, kind: m.kind, target: m.target,
        x: m.x, y: m.y, z: m.z })),
      events: room.events.splice(0), seq: room.sequence++ });
  }
}
