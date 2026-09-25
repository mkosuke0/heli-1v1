import { Vector3 } from 'three';
import { quaternionFor } from '../shared/flight.js';

const BEARINGS = ['前方', '右前方', '右', '右後方', '後方', '左後方', '左', '左前方'];

export function incomingMissile(projectiles, me) {
  if (!me) return null;
  let closest = null;
  let closestDistance = Infinity;
  for (const missile of projectiles) {
    if (missile.kind !== 'lock' || missile.target !== me.id) continue;
    const direction = new Vector3(missile.x - me.x, missile.y - me.y, missile.z - me.z);
    const distance = direction.length();
    if (distance >= closestDistance) continue;
    const local = direction.applyQuaternion(quaternionFor(me).invert());
    const angle = Math.atan2(local.x, -local.z);
    const index = ((Math.round(angle / (Math.PI / 4)) % 8) + 8) % 8;
    const horizontal = Math.hypot(local.x, local.z);
    const height = Math.abs(local.y) > horizontal * 0.75 ? (local.y > 0 ? '・上' : '・下') : '';
    closest = { id: missile.id, distance, angle, label: `${BEARINGS[index]}${height}` };
    closestDistance = distance;
  }
  return closest;
}
