export function normalizeVolume(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.round(Math.max(0, Math.min(100, number))) : 70;
}

export class GameAudio {
  constructor() {
    this.volume = 70;
    this.muted = false;
    this.context = null;
    this.lastLockBeep = 0;
    this.lastThreatBeep = 0;
    this.wasLocked = false;
    this.lastThreatId = null;
    this.enginePlaying = false;
    this.lastEngineUpdate = -Infinity;
  }

  ensure() {
    if (this.context) return true;
    const Context = globalThis.AudioContext || globalThis.webkitAudioContext;
    if (!Context) return false;
    try {
      this.context = new Context();
      this.master = this.context.createGain();
      this.master.gain.value = this.muted ? 0 : this.volume / 100;
      this.master.connect(this.context.destination);
      this.limiter = this.context.createDynamicsCompressor();
      this.limiter.threshold.value = -14;
      this.limiter.knee.value = 6;
      this.limiter.ratio.value = 12;
      this.limiter.attack.value = 0.003;
      this.limiter.release.value = 0.2;
      this.mix = this.context.createGain();
      this.mix.gain.value = 3;
      this.mix.connect(this.limiter).connect(this.master);

      this.engine = this.context.createOscillator();
      this.engine.type = 'sawtooth';
      this.engine.frequency.value = 88;
      const filter = this.context.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 450;
      this.engineGain = this.context.createGain();
      this.engineGain.gain.value = 0;
      this.engine.connect(filter).connect(this.engineGain).connect(this.mix);
      this.engine.start();

      this.rotor = this.context.createOscillator();
      this.rotor.type = 'triangle';
      this.rotor.frequency.value = 32;
      this.rotorGain = this.context.createGain();
      this.rotorGain.gain.value = 0;
      this.rotor.connect(this.rotorGain).connect(this.mix);
      this.rotor.start();
      return true;
    } catch { this.context = null; return false; }
  }

  resume() {
    if (this.ensure() && this.context.state === 'suspended') this.context.resume().catch(() => {});
  }

  setVolume(value) {
    this.volume = normalizeVolume(value);
    this.updateMaster();
  }

  setMuted(value) {
    this.muted = Boolean(value);
    this.updateMaster();
  }

  updateMaster() {
    if (!this.context) return;
    this.master.gain.setTargetAtTime(this.muted ? 0 : this.volume / 100, this.context.currentTime, 0.025);
  }

  updateEngine(playing, throttle = 0, speed = 0) {
    if (!this.context) return;
    const time = this.context.currentTime;
    if (playing === this.enginePlaying && time - this.lastEngineUpdate < 0.08) return;
    this.enginePlaying = playing;
    this.lastEngineUpdate = time;
    const power = Math.abs(throttle);
    this.engine.frequency.setTargetAtTime(88 + power * 35 + Math.min(22, speed * 0.4), time, 0.12);
    this.rotor.frequency.setTargetAtTime(32 + power * 12, time, 0.12);
    this.engineGain.gain.setTargetAtTime(playing ? 0.07 + power * 0.035 : 0, time, 0.18);
    this.rotorGain.gain.setTargetAtTime(playing ? 0.06 + power * 0.02 : 0, time, 0.18);
  }

  tone(start, end, duration, type = 'sine', level = 0.1, delay = 0) {
    if (!this.context || this.muted || this.volume === 0) return;
    const time = this.context.currentTime + delay;
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(1, start), time);
    osc.frequency.exponentialRampToValueAtTime(Math.max(1, end), time + duration);
    gain.gain.setValueAtTime(0.001, time);
    gain.gain.exponentialRampToValueAtTime(level, time + Math.min(0.014, duration / 3));
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);
    osc.connect(gain).connect(this.mix);
    osc.start(time);
    osc.stop(time + duration + 0.01);
    osc.onended = () => { osc.disconnect(); gain.disconnect(); };
  }

  shot() { this.tone(118, 48, 0.065, 'sawtooth', 0.07); }
  hitConfirm() {
    this.tone(920, 1200, 0.08, 'triangle', 0.11);
    this.tone(1450, 1100, 0.07, 'sine', 0.08, 0.035);
  }
  damage() {
    this.tone(260, 110, 0.2, 'square', 0.14);
    this.tone(700, 330, 0.13, 'triangle', 0.1, 0.03);
  }
  explosion() { this.tone(95, 30, 0.4, 'sawtooth', 0.11); }
  launch(kind) {
    this.tone(kind === 'lock' ? 390 : 270, 75, 0.31, 'sawtooth', 0.07);
    if (kind === 'lock') this.tone(740, 480, 0.14, 'sine', 0.075);
  }
  flare() { this.tone(900, 160, 0.23, 'triangle', 0.08); }
  reload() { this.tone(310, 170, 0.095, 'square', 0.025); }

  updateLock(progress, now) {
    const locked = progress >= 1;
    if (locked && !this.wasLocked) {
      this.tone(760, 1050, 0.14, 'sine', 0.09);
      this.tone(1050, 1250, 0.15, 'sine', 0.09, 0.16);
    } else if (progress > 0.05 && !locked && now - this.lastLockBeep > 430) {
      this.tone(510 + progress * 260, 610 + progress * 260, 0.07, 'sine', 0.045);
      this.lastLockBeep = now;
    }
    this.wasLocked = locked;
  }

  updateThreat(threat, now) {
    if (!threat) { this.lastThreatId = null; return; }
    const interval = Math.max(180, Math.min(650, threat.distance * 3.5));
    if (threat.id !== this.lastThreatId || now - this.lastThreatBeep > interval) {
      this.tone(890, 710, 0.12, 'square', 0.11);
      this.tone(710, 890, 0.12, 'square', 0.11, 0.15);
      this.lastThreatBeep = now;
    }
    this.lastThreatId = threat.id;
  }
}
