import { DiscordSDK } from '@discord/embedded-app-sdk';
import { GameScene } from './scene.js';
import { BUILDINGS } from '../shared/map.js';
import { forwardVector, spawnQuaternion } from '../shared/flight.js';
import { GAME, SPAWNS } from '../shared/config.js';
import { flightAxes, mouseAngles, normalizeSensitivity } from './controls.js';
import './style.css';

const app = document.querySelector('#app');
app.innerHTML = `
  <div id="world"></div>
  <div class="vignette"></div>
  <div class="topbar"><div class="brand"><span class="brand-mark">H<span>1</span></span><span>HELI <b>1V1</b></span></div><div class="topbar-right"><span class="live-dot"></span><span id="connection">LOCAL PREVIEW</span><button id="settings-toggle" class="icon-button" title="操作設定" aria-label="操作設定">⚙</button><button id="sound-toggle" class="icon-button" title="サウンドの切り替え">♪</button></div></div>
  <div id="menu" class="menu-shell">
    <div class="menu-main">
      <div class="eyebrow"><span></span> TACTICAL AIR COMBAT / 01</div>
      <h1>OWN THE<br /><em>SKY.</em></h1>
      <p class="lead">ビル群の間を縫い、敵機を捕捉せよ。<br />友達と一騎打ちする、3本先取の空中戦。</p>
      <div class="feature-row"><span>01 <b>1 VS 1</b></span><span>02 <b>FIRST TO 3</b></span><span>03 <b>URBAN ARENA</b></span></div>
      <div class="deploy-card">
        <label for="room-code">ルームコード <small id="room-hint">友達と同じコードを入力</small></label>
        <div class="room-line"><input id="room-code" maxlength="20" autocomplete="off" spellcheck="false" /><button id="copy-room" title="招待リンクをコピー">リンクをコピー ↗</button></div>
        <div class="deploy-actions"><button id="deploy" class="primary-button">フレンドと出撃 <span>→</span></button><button id="practice" class="secondary-button">ソロ練習</button></div>
      </div>
    </div>
    <aside class="briefing"><div class="brief-head"><span>MISSION BRIEF</span><span>01 / 03</span></div><div class="brief-rule"></div><div class="brief-art"><div class="target-ring"></div><div class="target-ring ring-two"></div><div class="cross-line horizontal"></div><div class="cross-line vertical"></div><div class="art-label">AH-64<br />INSPIRED</div></div><div class="brief-list"><div><span>01</span><p><b>街を使って姿を隠す</b><small>ビルとビルの隙間が射線を切る。</small></p></div><div><span>02</span><p><b>機銃で削り切る</b><small>約30発の命中で敵機を撃墜。</small></p></div><div><span>03</span><p><b>アビリティで逆転</b><small>フレアと2種類のミサイルを使い分ける。</small></p></div></div><div class="brief-footer">DESIGNED FOR DISCORD ACTIVITIES</div></aside>
  </div>
  <div id="waiting" class="modal-backdrop hidden"><div class="modal"><div class="eyebrow"><span></span> HANGAR / READY</div><h2>僚機の到着待ち</h2><p>友達が同じDiscordアクティビティ、または下のルームコードで参加すると自動的に始まります。</p><div class="waiting-code" id="waiting-code"></div><button id="leave-room" class="secondary-button">メニューに戻る</button></div></div>
  <div id="settings-modal" class="modal-backdrop hidden" role="dialog" aria-modal="true" aria-labelledby="settings-title"><div class="modal settings-modal"><div class="eyebrow"><span></span> FLIGHT CONTROLS</div><h2 id="settings-title">操作設定</h2><label for="sensitivity-range">マウス操作感度</label><div class="sensitivity-row"><input id="sensitivity-range" type="range" min="0.2" max="3" step="0.1" value="1" /><input id="sensitivity-number" type="number" min="0.2" max="3" step="0.1" value="1.0" aria-label="マウス操作感度の数値" /><span>×</span></div><p>0.2～3.0 倍。ヨーとピッチの最高旋回速度はキー操作と同じです。</p><button id="settings-close" class="secondary-button">閉じる</button></div></div>
  <div id="hud" class="hud hidden">
    <div class="scoreboard"><div class="score-side friendly"><small>YOU / BLUE</small><div id="self-wins" class="win-pips"></div></div><div class="score-center"><span>ROUND <b id="round-number">01</b></span><strong>VS</strong></div><div class="score-side enemy"><small>OPPONENT / ORANGE</small><div id="enemy-wins" class="win-pips"></div></div></div>
    <div class="flight-info"><span id="flight-speed">000</span><small>KM/H</small><i></i><span id="flight-alt">000</span><small>ALT</small></div>
    <div id="enemy-indicator" class="enemy-indicator">▲ ENEMY <span id="enemy-distance">---</span>M</div>
    <div id="crosshair" class="crosshair"><div class="ch top"></div><div class="ch bottom"></div><div class="ch left"></div><div class="ch right"></div><div class="ch-dot"></div><div id="hitmarker" class="hitmarker">×</div></div>
    <div id="cockpit" class="cockpit hidden"><div class="cockpit-arch"></div><div class="cockpit-l">FLIGHT SYSTEM<br />ONLINE</div><div class="cockpit-r">TADS / LIVE<br />30 MM ARMED</div></div>
    <div id="center-message" class="center-message hidden"><small id="message-kicker">ROUND COMPLETE</small><strong id="message-title">VICTORY</strong><span id="message-subtitle">次のラウンドへ</span><button id="rematch" class="primary-button hidden">もう一度対戦 →</button></div>
    <div class="hud-bottom"><div class="health-panel"><div class="hud-label">HULL INTEGRITY <span id="health-text">100%</span></div><div class="health-track"><div id="health-fill"></div></div><div class="health-caption"><span>HELI 1V1 // COMBAT READY</span><span>SHARED HEALTH POOL</span></div></div><div class="ammo-panel"><div class="hud-label">M134 MINIGUN <span id="reload-text"></span></div><div class="ammo-numbers"><strong id="ammo-count">100</strong><span>/ 100 <small>∞ RESERVE</small></span></div><div class="ammo-caption">LMB FIRE <span>R RELOAD</span></div></div><div class="ability-panel"><div class="ability" id="ability-flare"><kbd>F</kbd><div><b>FLARE</b><small>誘導妨害</small></div><span class="ability-time">READY</span></div><div class="ability" id="ability-unguided"><kbd>1</kbd><div><b>ROCKET</b><small>無誘導</small></div><span class="ability-time">READY</span></div><div class="ability" id="ability-lock"><kbd>2</kbd><div><b>SEEKER</b><small>ロックオン</small></div><span class="ability-time">READY</span></div></div></div>
    <div class="minimap-wrap"><div class="map-heading"><span>TACTICAL MAP</span><span>N ↑</span></div><canvas id="minimap" width="184" height="184"></canvas></div>
    <div class="controls-hint">W / S スロットル　Q / E ロール　A / D ヨー　左SHIFT 上げ / 左CTRL 下げ　MOUSE 縦ピッチ・横ヨー　LMB 機銃　RMB コックピット</div>
    <div id="lock-notice" class="lock-notice hidden">クリックでマウス操縦 / ESCで解除</div>
  </div>
  <div id="toast" class="toast hidden"></div>
`;

const $ = (selector) => document.querySelector(selector);
const scene = new GameScene($('#world'));
const params = new URLSearchParams(location.search);
const localCode = params.get('room') || Math.random().toString(36).slice(2, 8).toUpperCase();
$('#room-code').value = localCode;
const clientId = import.meta.env.VITE_DISCORD_CLIENT_ID;
let discord = null;
let discordRoom = null;
if (clientId && window.parent !== window) {
  try {
    discord = new DiscordSDK(clientId);
    discord.ready().then(() => {
      discordRoom = `discord-${discord.instanceId}`;
      $('#room-code').value = 'DISCORD SESSION';
      $('#room-code').disabled = true;
      $('#room-hint').textContent = '同じアクティビティに参加';
      $('#copy-room').classList.add('hidden');
      $('#connection').textContent = 'DISCORD CONNECTED';
    }).catch(() => toast('Discordへの接続に失敗しました'));
  } catch { toast('Discord SDKを開始できませんでした'); }
}

let ws = null;
let meId = null;
let players = [];
let projectiles = [];
let phase = 'menu';
let round = 1;
let ads = false;
let pointerLocked = false;
let mouseSteeringActive = false;
let pendingMouseYaw = 0;
let pendingMousePitch = 0;
let last = performance.now();
let nextInput = 0;
let hitUntil = 0;
let messageUntil = 0;
let muted = false;
let settingsOpen = false;
let sensitivityMultiplier = 1;
try {
  const saved = localStorage.getItem('heli1v1.mouseSensitivity');
  if (saved !== null) sensitivityMultiplier = normalizeSensitivity(saved);
} catch { /* Storage may be unavailable in an embedded activity. */ }
$('#sensitivity-range').value = String(sensitivityMultiplier);
$('#sensitivity-number').value = sensitivityMultiplier.toFixed(1);
const keys = new Set();
const pending = new Set();
const preview = SPAWNS.map((p, i) => ({ ...p, id: `preview-${i}`, slot: i, q: spawnQuaternion(p.yaw).toArray() }));

function toast(text) {
  const el = $('#toast');
  el.textContent = text;
  el.classList.remove('hidden');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.add('hidden'), 3000);
}

function setPhase(value) {
  phase = value;
  if (['menu', 'waiting', 'matchEnd'].includes(value)) {
    mouseSteeringActive = false;
    if (document.pointerLockElement) document.exitPointerLock?.();
  }
  $('#menu').classList.toggle('hidden', value !== 'menu');
  $('#waiting').classList.toggle('hidden', value !== 'waiting');
  $('#hud').classList.toggle('hidden', value === 'menu' || value === 'waiting');
  if (value === 'waiting') $('#waiting-code').textContent = discordRoom ? 'DISCORD ACTIVITY' : $('#room-code').value;
}

function connect(practice = false) {
  if (discord && !discordRoom) return toast('Discord接続の準備中です');
  const code = practice ? `practice-${Math.random().toString(36).slice(2)}` : (discordRoom || $('#room-code').value.trim().toUpperCase());
  if (!code) return toast('ルームコードを入力してください');
  if (ws) ws.close();
  setPhase('waiting');
  const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
  ws = new WebSocket(`${protocol}//${location.host}/ws`);
  ws.addEventListener('open', () => {
    $('#connection').textContent = discordRoom ? 'DISCORD LINK ACTIVE' : 'SERVER LINK ACTIVE';
    ws.send(JSON.stringify({ type: 'join', room: code, practice }));
  });
  ws.addEventListener('message', event => {
    let msg;
    try { msg = JSON.parse(event.data); } catch { return; }
    handleMessage(msg);
  });
  ws.addEventListener('close', () => {
    if (phase !== 'menu') { setPhase('menu'); toast('サーバーとの接続が切れました'); }
    meId = null; players = []; projectiles = [];
    $('#connection').textContent = 'OFFLINE';
  });
  ws.addEventListener('error', () => toast('接続できません。サーバーを起動してください'));
}

function handleMessage(msg) {
  if (msg.type === 'error') { toast(msg.message); ws?.close(); return; }
  if (msg.type === 'joined') {
    meId = msg.id;
  } else if (msg.type === 'state') {
    players = msg.players;
    projectiles = msg.projectiles;
    round = msg.round;
    if (msg.phase === 'waiting') setPhase('waiting');
    else if (phase === 'waiting') { setPhase('playing'); showMessage('ENGAGE', '敵機を撃墜せよ', 'ROUND START', 1.6); }
    for (const event of msg.events) {
      scene.event(event);
      if (event.type === 'damage' && event.target === meId) playTone(115, 0.13, 'sawtooth', 0.07);
      if (event.type === 'shot' && event.owner === meId) playTone(90, 0.035, 'sawtooth', 0.022);
      if (event.type === 'shot' && event.hit && event.owner === meId) hitUntil = performance.now() + 130;
      if (event.type === 'explosion' || event.type === 'destroyed') playTone(55, 0.28, 'sawtooth', 0.09);
    }
    scene.setProjectiles(projectiles);
    updateHud();
  } else if (msg.type === 'roundStart') {
    setPhase('playing');
    showMessage('ENGAGE', '敵機を撃墜せよ', `ROUND ${String(msg.round).padStart(2, '0')}`, 1.7);
  } else if (msg.type === 'roundEnd') {
    setPhase('roundEnd');
    showMessage(msg.winner === meId ? 'ROUND WON' : 'ROUND LOST', '次のラウンドまで 3 秒', 'ROUND COMPLETE', 3.2);
  } else if (msg.type === 'matchEnd') {
    setPhase('matchEnd');
    showMessage(msg.winner === meId ? 'VICTORY' : 'DEFEAT', msg.winner === meId ? '空を制した' : '再戦で取り返そう', 'MATCH COMPLETE', Infinity);
    $('#rematch').classList.remove('hidden');
  } else if (msg.type === 'opponentLeft') {
    setPhase('waiting'); toast('相手が退出しました');
  }
}

function showMessage(title, subtitle, kicker, duration) {
  $('#message-title').textContent = title;
  $('#message-subtitle').textContent = subtitle;
  $('#message-kicker').textContent = kicker;
  $('#center-message').classList.remove('hidden');
  $('#rematch').classList.toggle('hidden', duration !== Infinity);
  messageUntil = duration === Infinity ? Infinity : performance.now() + duration * 1000;
}

function pips(count, enemy = false) {
  return Array.from({ length: GAME.winsToMatch }, (_, i) => `<i class="${i < count ? (enemy ? 'on enemy-on' : 'on') : ''}"></i>`).join('');
}

function updateHud() {
  const me = players.find(p => p.id === meId);
  const enemy = players.find(p => p.id !== meId);
  if (!me) return;
  $('#round-number').textContent = String(round).padStart(2, '0');
  $('#self-wins').innerHTML = pips(me.wins);
  $('#enemy-wins').innerHTML = pips(enemy?.wins || 0, true);
  $('#health-text').textContent = `${Math.ceil(me.health)}%`;
  $('#health-fill').style.width = `${me.health}%`;
  $('#health-fill').classList.toggle('danger', me.health < 30);
  $('#ammo-count').textContent = String(me.ammo).padStart(3, '0');
  $('#reload-text').textContent = me.reload > 0 ? `RELOADING ${me.reload.toFixed(1)}S` : '';
  $('#flight-speed').textContent = String(Math.round(Math.hypot(me.vx, me.vz) * 3.6)).padStart(3, '0');
  $('#flight-alt').textContent = String(Math.round(me.y)).padStart(3, '0');
  for (const [id, value] of [['flare', me.flare], ['unguided', me.unguided], ['lock', me.lock]]) {
    const node = $(`#ability-${id}`);
    node.classList.toggle('cooling', value > 0);
    node.querySelector('.ability-time').textContent = value > 0 ? `${value.toFixed(1)}S` : 'READY';
  }
  $('#ability-lock').classList.toggle('locking', me.lockProgress > 0.05 && me.lock === 0);
  $('#ability-lock .ability-time').textContent = me.lock > 0 ? `${me.lock.toFixed(1)}S` : me.lockProgress >= 1 ? 'LOCKED' : me.lockProgress > 0.05 ? `${Math.round(me.lockProgress * 100)}%` : 'READY';
  if (enemy) {
    $('#enemy-distance').textContent = String(Math.round(Math.hypot(enemy.x - me.x, enemy.y - me.y, enemy.z - me.z))).padStart(3, '0');
    $('#enemy-indicator').classList.toggle('hidden', enemy.health <= 0);
  }
  drawMap(me, enemy);
}

function drawMap(me, enemy) {
  const canvas = $('#minimap');
  const ctx = canvas.getContext('2d');
  const toMap = (n) => (n + 190) / 380 * canvas.width;
  ctx.fillStyle = '#101d26'; ctx.fillRect(0, 0, 184, 184);
  ctx.strokeStyle = '#273c46'; ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const at = i * 46; ctx.beginPath(); ctx.moveTo(at, 0); ctx.lineTo(at, 184); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, at); ctx.lineTo(184, at); ctx.stroke();
  }
  ctx.fillStyle = '#425560';
  for (const b of BUILDINGS) ctx.fillRect(toMap(b.x - b.w / 2), toMap(b.z - b.d / 2), b.w / 380 * 184, b.d / 380 * 184);
  if (enemy && enemy.health > 0) {
    ctx.fillStyle = '#ff8766'; ctx.beginPath(); ctx.arc(toMap(enemy.x), toMap(enemy.z), 4.5, 0, Math.PI * 2); ctx.fill();
  }
  const facing = forwardVector(me);
  ctx.save(); ctx.translate(toMap(me.x), toMap(me.z)); ctx.rotate(Math.atan2(facing.x, -facing.z));
  ctx.fillStyle = '#8aebea'; ctx.beginPath(); ctx.moveTo(0, -8); ctx.lineTo(-5, 6); ctx.lineTo(5, 6); ctx.closePath(); ctx.fill(); ctx.restore();
}

function sendInput(now) {
  if (now < nextInput || ws?.readyState !== WebSocket.OPEN || !meId) return;
  nextInput = now + 33;
  const active = phase === 'playing' && !settingsOpen;
  const input = active ? {
    ...flightAxes(keys),
    mouseYaw: pendingMouseYaw,
    mousePitch: pendingMousePitch,
    fire: keys.has('Mouse0'),
    flare: pending.has('KeyF'), unguided: pending.has('Digit1'), lock: pending.has('Digit2'), reload: pending.has('KeyR')
  } : {};
  ws.send(JSON.stringify({ type: 'input', input }));
  pendingMouseYaw = 0;
  pendingMousePitch = 0;
  pending.clear();
}

function animate(now) {
  requestAnimationFrame(animate);
  const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
  last = now;
  if (phase === 'menu' || phase === 'waiting') {
    scene.setPlayers(preview, null, dt, false);
    scene.render(dt, true);
  } else {
    const me = players.find(p => p.id === meId);
    scene.setPlayers(players, me, dt, ads);
    if (me) {
      const enemy = players.find(p => p.id !== meId);
      const reticle = scene.reticlePosition(me, enemy, dt);
      $('#crosshair').style.left = reticle ? `${reticle.x}px` : '-100px';
      $('#crosshair').style.top = reticle ? `${reticle.y}px` : '-100px';
    }
    scene.render(dt);
  }
  $('#cockpit').classList.toggle('hidden', !ads || phase !== 'playing');
  $('#crosshair').classList.toggle('ads', ads);
  $('#hitmarker').classList.toggle('visible', now < hitUntil);
  $('#lock-notice').classList.toggle('hidden', pointerLocked || mouseSteeringActive || phase !== 'playing' || settingsOpen);
  if (now > messageUntil && messageUntil !== Infinity) $('#center-message').classList.add('hidden');
  sendInput(now);
}
requestAnimationFrame(animate);

$('#deploy').addEventListener('click', () => connect(false));
$('#practice').addEventListener('click', () => connect(true));
$('#leave-room').addEventListener('click', () => { ws?.close(); setPhase('menu'); });
$('#rematch').addEventListener('click', () => ws?.send(JSON.stringify({ type: 'rematch' })));
$('#copy-room').addEventListener('click', async () => {
  const code = $('#room-code').value.trim().toUpperCase();
  const url = new URL(location.href); url.searchParams.set('room', code);
  try { await navigator.clipboard.writeText(url.href); toast('招待リンクをコピーしました'); }
  catch { toast(`ルームコード: ${code}`); }
});
$('#sound-toggle').addEventListener('click', () => {
  muted = !muted;
  $('#sound-toggle').classList.toggle('muted', muted);
  toast(muted ? 'サウンド OFF' : 'サウンド ON');
});
function setSettingsOpen(open) {
  settingsOpen = open;
  $('#settings-modal').classList.toggle('hidden', !open);
  $('#settings-toggle').setAttribute('aria-expanded', String(open));
  if (open) {
    keys.clear(); pending.clear(); pendingMouseYaw = 0; pendingMousePitch = 0;
    ads = false; mouseSteeringActive = false;
    if (document.pointerLockElement) document.exitPointerLock?.();
    $('#sensitivity-range').focus();
  } else $('#settings-toggle').focus();
}
function setSensitivity(value, updateNumber = true) {
  sensitivityMultiplier = normalizeSensitivity(value);
  $('#sensitivity-range').value = String(sensitivityMultiplier);
  if (updateNumber) $('#sensitivity-number').value = sensitivityMultiplier.toFixed(1);
  try { localStorage.setItem('heli1v1.mouseSensitivity', String(sensitivityMultiplier)); } catch { /* Keep the setting for this session. */ }
}
$('#settings-toggle').addEventListener('click', () => setSettingsOpen(!settingsOpen));
$('#settings-close').addEventListener('click', () => setSettingsOpen(false));
$('#settings-modal').addEventListener('mousedown', event => { if (event.target === $('#settings-modal')) setSettingsOpen(false); });
$('#sensitivity-range').addEventListener('input', event => setSensitivity(event.target.value));
$('#sensitivity-number').addEventListener('input', event => {
  if (event.target.value !== '') setSensitivity(event.target.value, false);
});
$('#sensitivity-number').addEventListener('change', event => setSensitivity(event.target.value));
$('#room-code').addEventListener('keydown', event => { if (event.key === 'Enter') connect(false); });

const canvas = scene.renderer.domElement;
canvas.addEventListener('mousedown', event => {
  if (phase !== 'playing' || settingsOpen) return;
  mouseSteeringActive = true;
  if (!pointerLocked) {
    try {
      const lock = canvas.requestPointerLock?.();
      lock?.catch?.(() => {});
    } catch { /* Keyboard controls remain available. */ }
  }
  if (event.button === 0) keys.add('Mouse0');
  if (event.button === 2) ads = true;
});
window.addEventListener('mouseup', event => {
  if (event.button === 0) keys.delete('Mouse0');
  if (event.button === 2) ads = false;
});
window.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('pointerlockchange', () => {
  pointerLocked = document.pointerLockElement === canvas;
  if (!pointerLocked) { keys.clear(); pendingMouseYaw = 0; pendingMousePitch = 0; ads = false; mouseSteeringActive = false; }
});
document.addEventListener('mousemove', event => {
  if (phase !== 'playing' || settingsOpen || (!pointerLocked && (!mouseSteeringActive || event.target !== canvas))) return;
  const { yaw, pitch } = mouseAngles(event.movementX, event.movementY, GAME.mouseSensitivity * sensitivityMultiplier);
  pendingMouseYaw += yaw;
  pendingMousePitch += pitch;
});
window.addEventListener('keydown', event => {
  if (event.code === 'Escape' && settingsOpen) { setSettingsOpen(false); return; }
  if (settingsOpen) return;
  if (event.target instanceof HTMLInputElement) return;
  if (event.code === 'Escape' && !pointerLocked) mouseSteeringActive = false;
  if (phase === 'playing' && ['KeyW', 'KeyS', 'KeyQ', 'KeyE', 'KeyA', 'KeyD', 'ShiftLeft', 'ControlLeft', 'KeyF', 'Digit1', 'Digit2', 'KeyR'].includes(event.code)) event.preventDefault();
  keys.add(event.code);
  if (!event.repeat && ['KeyF', 'Digit1', 'Digit2', 'KeyR'].includes(event.code)) pending.add(event.code);
});
window.addEventListener('keyup', event => keys.delete(event.code));
window.addEventListener('blur', () => { keys.clear(); pendingMouseYaw = 0; pendingMousePitch = 0; ads = false; mouseSteeringActive = false; });

let audioContext;
function playTone(frequency, duration, waveform, volume) {
  if (muted) return;
  try {
    audioContext ||= new AudioContext();
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    osc.type = waveform; osc.frequency.setValueAtTime(frequency, audioContext.currentTime);
    osc.frequency.exponentialRampToValueAtTime(Math.max(35, frequency * 0.45), audioContext.currentTime + duration);
    gain.gain.setValueAtTime(volume, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
    osc.connect(gain).connect(audioContext.destination);
    osc.start(); osc.stop(audioContext.currentTime + duration);
  } catch { /* Audio is optional in restricted webviews. */ }
}
