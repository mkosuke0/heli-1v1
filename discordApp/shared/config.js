export const GAME = Object.freeze({
  title: 'Heli 1v1',
  tickRate: 30,
  worldLimit: 190,
  maxAltitude: 118,
  heliRadius: 3.6,
  maxHealth: 100,
  winsToMatch: 3,
  rotorSpeed: 34,
  gravity: 20,
  collectiveStrength: 22,
  airDrag: 0.55,
  maxHorizontalSpeed: 52,
  maxVerticalSpeed: 35,
  yawRate: 1.8,
  pitchRate: 1.55,
  rollRate: 2.35,
  mouseSensitivity: 0.0025,
  weapons: {
    minigun: { magazine: 100, damage: 100 / 30, interval: 0.085, reload: 2.2, range: 260 },
    flare: { cooldown: 13, duration: 3.2 },
    unguided: { cooldown: 5.5, speed: 76, damage: 29, blast: 8 },
    lock: { cooldown: 12, acquire: 1.25, speed: 62, damage: 42, blast: 7, range: 175, cone: 0.93 }
  }
});

export const SPAWNS = [
  { x: -155, y: 38, z: 22, yaw: Math.PI / 2 },
  { x: 155, y: 38, z: -22, yaw: -Math.PI / 2 }
];
