import { Quaternion, Vector3 } from 'three';
import { GAME } from './config.js';
import { rayBuildingDistance, raySphereDistance } from './map.js';

export function quaternionFor(player) {
  return Array.isArray(player.q) ? new Quaternion(...player.q) : player.q;
}

export function spawnQuaternion(yaw) {
  return new Quaternion().setFromAxisAngle(new Vector3(0, 1, 0), -yaw);
}

export function forwardVector(player) {
  return new Vector3(0, 0, -1).applyQuaternion(quaternionFor(player));
}

export function upVector(player) {
  return new Vector3(0, 1, 0).applyQuaternion(quaternionFor(player));
}

// The muzzle offset matches the visible cannon on the low-poly helicopter.
export function aimRay(player) {
  const q = quaternionFor(player);
  const dir = new Vector3(0, 0, -1).applyQuaternion(q);
  const origin = new Vector3(0, -0.8, -2.95).applyQuaternion(q);
  origin.x += player.x;
  origin.y += player.y;
  origin.z += player.z;
  return { origin, dir };
}

// Both damage and the 3rd-person reticle use this exact trace.
export function traceMinigun(shooter, target) {
  const { origin, dir } = aimRay(shooter);
  const range = GAME.weapons.minigun.range;
  const wall = rayBuildingDistance(origin, dir, range);
  const targetHit = target?.health > 0 ? raySphereDistance(origin, dir, target, GAME.heliRadius) : Infinity;
  const distance = Math.min(wall, targetHit, range);
  return { origin, dir, distance, end: origin.clone().addScaledVector(dir, distance),
    hit: targetHit < wall && targetHit < range };
}
