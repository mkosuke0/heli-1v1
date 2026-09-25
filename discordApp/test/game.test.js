import test from 'node:test';
import assert from 'node:assert/strict';
import { EventEmitter } from 'node:events';
import { Quaternion, Vector3 } from 'three';
import { GameServer } from '../server/game.js';
import { GAME } from '../shared/config.js';
import { forwardVector, spawnQuaternion, traceMinigun } from '../shared/flight.js';
import { hitBuildingSphere, rayBuildingDistance } from '../shared/map.js';

function setup() {
  const game = new GameServer();
  const a = { readyState: 1, send() {} };
  const b = { readyState: 1, send() {} };
  game.join(a, { room: 'test' });
  game.join(b, { room: 'test' });
  const room = game.rooms.get('test');
  return { game, room, p1: room.players[0], p2: room.players[1], cleanup: () => clearInterval(game.timer) };
}

test('minigun has one shared health pool and wins a round at 30 direct hits', () => {
  const { game, room, p1, p2, cleanup } = setup();
  try {
    Object.assign(p1, { x: -10, y: 110, z: 0, q: spawnQuaternion(Math.PI / 2) });
    Object.assign(p2, { x: 20, y: 110, z: 0 });
    p1.input = { fire: true };
    for (let i = 0; i < 29; i++) game.combat(p1, room, 100 + i * 0.1, 0.1);
    assert.equal(room.phase, 'playing');
    assert.ok(p2.health > 0 && p2.health < 4);
    game.combat(p1, room, 102.9, 0.1);
    assert.equal(room.phase, 'roundEnd');
    assert.equal(p2.health, 0);
    assert.equal(p1.wins, 1);
    assert.equal(p1.ammo, GAME.weapons.minigun.magazine - 30);
  } finally { cleanup(); }
});

test('buildings block shots and helicopter movement', () => {
  const { game, room, p1, p2, cleanup } = setup();
  try {
    Object.assign(p1, { x: -84, y: 35, z: 0, q: spawnQuaternion(Math.PI / 2) });
    Object.assign(p2, { x: 84, y: 35, z: 0 });
    p1.input = { fire: true };
    game.combat(p1, room, 100, 0.1);
    assert.equal(p2.health, 100);
    assert.equal(hitBuildingSphere(-84, 20, 0, 3), true);
    assert.ok(rayBuildingDistance({ x: -100, y: 20, z: 0 }, { x: 1, y: 0, z: 0 }, 200) < 200);
  } finally { cleanup(); }
});

test('three round wins end the match and rematch resets scores', () => {
  const { game, room, p1, p2, cleanup } = setup();
  try {
    for (let i = 0; i < 3; i++) {
      game.damage(room, p2, p1, 100);
      if (i < 2) {
        assert.equal(room.phase, 'roundEnd');
        room.phase = 'playing';
        p2.health = 100;
      }
    }
    assert.equal(room.phase, 'matchEnd');
    assert.equal(p1.wins, 3);
    game.rematch(room);
    assert.equal(room.phase, 'playing');
    assert.deepEqual(room.players.map(p => p.wins), [0, 0]);
    assert.deepEqual(room.players.map(p => p.health), [100, 100]);
  } finally { cleanup(); }
});

test('flare defeats an existing lock missile and abilities respect cooldown', () => {
  const { game, room, p1, p2, cleanup } = setup();
  try {
    Object.assign(p1, { x: -10, y: 110, z: 0, q: spawnQuaternion(Math.PI / 2) });
    Object.assign(p2, { x: 20, y: 110, z: 0 });
    p1.input = { lock: true, unguided: true };
    for (let i = 0; i < 14; i++) game.combat(p1, room, 100 + i * 0.1, 0.1);
    assert.equal(room.projectiles.filter(m => m.kind === 'unguided').length, 1);
    const guided = room.projectiles.find(m => m.kind === 'lock');
    assert.ok(guided);
    assert.equal(guided.target, p2.id);
    for (let i = 0; i < 8; i++) game.combat(p1, room, 101.4 + i * 0.1, 0.1);
    assert.equal(p1.lockProgress, 0, 'lock acquisition stays off during cooldown');
    assert.equal(room.projectiles.filter(m => m.kind === 'lock').length, 1);
    p2.input = { flare: true };
    game.combat(p2, room, 102.2, 0.1);
    game.projectiles(room, 1 / 30, 102.2);
    assert.equal(guided.target, null);
    assert.ok(p2.flareReady > 102.2);
  } finally { cleanup(); }
});

test('a replacement player takes the vacated spawn slot', () => {
  const { game, room, p1, p2, cleanup } = setup();
  try {
    game.connections.set(p1.ws, { room, player: p1 });
    game.connections.set(p2.ws, { room, player: p2 });
    game.leave(p1.ws);
    const replacement = { readyState: 1, send() {} };
    game.join(replacement, { room: 'test' });
    assert.deepEqual(room.players.map(p => p.slot).sort(), [0, 1]);
    assert.equal(room.phase, 'playing');
  } finally { cleanup(); }
});

test('throttle, roll, yaw and pitch drive the expected flight axes', () => {
  const { game, p1, cleanup } = setup();
  const reset = () => Object.assign(p1, { x: 0, y: 60, z: 0, vx: 0, vy: 0, vz: 0, q: spawnQuaternion(0) });
  try {
    reset(); p1.input = { throttle: 1 }; game.move(p1, 0.1);
    assert.ok(p1.y > 60, 'W throttle climbs');
    reset(); p1.input = { throttle: -1 }; game.move(p1, 0.1);
    assert.ok(p1.y < 60, 'S throttle descends');
    reset(); p1.input = { roll: 1 }; game.move(p1, 0.1);
    assert.ok(p1.q.z > 0 && p1.x < 0, 'Q rolls and drifts left');
    reset(); p1.input = { roll: -1 }; game.move(p1, 0.1);
    assert.ok(p1.q.z < 0 && p1.x > 0, 'E rolls and drifts right');
    reset(); p1.input = { yawAxis: -1 }; game.move(p1, 0.1);
    assert.ok(forwardVector(p1).x < 0, 'A yaws left');
    reset(); p1.input = { yawAxis: 1 }; game.move(p1, 0.1);
    assert.ok(forwardVector(p1).x > 0, 'D yaws right');
    reset(); p1.input = { pitchAxis: -1 }; game.move(p1, 0.1);
    assert.ok(forwardVector(p1).y < 0 && p1.z < 0, 'negative pitch lowers the nose and moves forward');
    reset(); p1.input = { pitchAxis: 1 }; game.move(p1, 0.1);
    assert.ok(forwardVector(p1).y > 0 && p1.z > 0, 'positive pitch raises the nose and moves backward');
  } finally { cleanup(); }
});

test('inverted neutral flight falls and inverted throttle increases descent', () => {
  const { game, p1, cleanup } = setup();
  const inverted = new Quaternion().setFromAxisAngle(new Vector3(0, 0, 1), Math.PI);
  const reset = () => Object.assign(p1, { x: 0, y: 100, z: 0, vx: 0, vy: 0, vz: 0, q: inverted.clone() });
  try {
    reset(); p1.input = {}; game.move(p1, 0.1);
    const neutralDescent = p1.vy;
    assert.ok(neutralDescent < 0 && p1.y < 100);
    reset(); p1.input = { throttle: 1 }; game.move(p1, 0.1);
    assert.ok(p1.vy < neutralDescent);
    reset(); p1.q = spawnQuaternion(0); p1.input = {}; game.move(p1, 0.1);
    assert.ok(Math.abs(p1.vy) < 1e-8, 'upright neutral collective holds altitude');
  } finally { cleanup(); }
});

test('mouse yaw and pitch never exceed keyboard turning speed', () => {
  const { game, p1, cleanup } = setup();
  const dt = 1 / GAME.tickRate;
  try {
    for (const [axis, mouseField, rate] of [
      ['yawAxis', 'mouseYaw', GAME.yawRate],
      ['pitchAxis', 'mousePitch', GAME.pitchRate]
    ]) {
      p1.q = spawnQuaternion(0);
      p1.input = { [axis]: 1 };
      p1[mouseField] = 0.6;
      const before = p1.q.clone();
      game.move(p1, dt);
      assert.ok(p1.q.angleTo(before) <= rate * dt + 1e-7, `${mouseField} is rate limited`);
      assert.equal(p1[mouseField], 0, 'mouse delta is consumed after each tick');
    }
  } finally { cleanup(); }
});

test('pitch and roll can each rotate through a full 360 degrees', () => {
  const { game, p1, cleanup } = setup();
  try {
    const dt = 1 / 60;
    for (const [axis, rate] of [['pitchAxis', GAME.pitchRate], ['roll', GAME.rollRate]]) {
      p1.q = spawnQuaternion(0);
      Object.assign(p1, { x: 0, y: 70, z: 0, vx: 0, vy: 0, vz: 0 });
      p1.input = { [axis]: 1 };
      const steps = Math.round(Math.PI * 2 / (rate * dt));
      let inverted = false;
      for (let i = 0; i < steps; i++) {
        game.move(p1, dt);
        if (axis === 'pitchAxis' && forwardVector(p1).y < -0.9) inverted = true;
      }
      assert.ok(p1.q.angleTo(spawnQuaternion(0)) < 0.04, `${axis} completed a full turn`);
      if (axis === 'pitchAxis') assert.ok(inverted, 'pitch passed the vertical');
    }
  } finally { cleanup(); }
});

test('reticle trace and server shot meet at the same point while pitched vertically', () => {
  const { game, room, p1, p2, cleanup } = setup();
  try {
    Object.assign(p1, { x: 0, y: 40, z: 0,
      q: new Quaternion().setFromAxisAngle(new Vector3(1, 0, 0), Math.PI / 2) });
    Object.assign(p2, { x: 0, y: 73, z: 0 });
    const expected = traceMinigun(p1, p2);
    assert.equal(expected.hit, true);
    p1.input = { fire: true };
    game.combat(p1, room, 100, 0.1);
    const shot = room.events.find(event => event.type === 'shot');
    assert.ok(shot);
    assert.ok(new Vector3(shot.to.x, shot.to.y, shot.to.z).distanceTo(expected.end) < 1e-8);
    assert.ok(p2.health < 100);
  } finally { cleanup(); }
});

test('mouse look deltas accumulate and rotate the helicopter only once', () => {
  const game = new GameServer();
  class Socket extends EventEmitter { readyState = 1; send() {} }
  const a = new Socket(), b = new Socket();
  try {
    game.connect(a); game.connect(b);
    a.emit('message', Buffer.from(JSON.stringify({ type: 'join', room: 'mouse-test' })));
    b.emit('message', Buffer.from(JSON.stringify({ type: 'join', room: 'mouse-test' })));
    const p = game.rooms.get('mouse-test').players[0];
    p.q = spawnQuaternion(0);
    a.emit('message', Buffer.from(JSON.stringify({ type: 'input', input: { mouseYaw: 0.08, mousePitch: 0.05 } })));
    a.emit('message', Buffer.from(JSON.stringify({ type: 'input', input: { mouseYaw: 0.04, mousePitch: 0.03 } })));
    game.move(p, 1 / 30);
    assert.ok(forwardVector(p).x > 0 && forwardVector(p).y > 0);
    const afterInput = p.q.clone();
    game.move(p, 1 / 30);
    assert.ok(p.q.angleTo(afterInput) < 1e-8);
  } finally { clearInterval(game.timer); }
});

test('state snapshots expose the guided missile target for incoming warnings', () => {
  const { game, room, p1, p2, cleanup } = setup();
  try {
    let state;
    p1.ws.send = raw => { const message = JSON.parse(raw); if (message.type === 'state') state = message; };
    room.projectiles.push({ id: 'guided', owner: p2.id, kind: 'lock', target: p1.id,
      x: p2.x, y: p2.y, z: p2.z, vx: 0, vy: 0, vz: 0, life: 4 });
    game.snapshot(room);
    assert.equal(state.projectiles[0].target, p1.id);
    room.projectiles[0].target = null;
    game.snapshot(room);
    assert.equal(state.projectiles[0].target, null);
  } finally { cleanup(); }
});
