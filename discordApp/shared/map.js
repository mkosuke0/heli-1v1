// A deterministic city layout shared by simulation and renderer.
let seed = 43177;
function random() {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
}

export const BUILDINGS = [];
for (let gx = -4; gx <= 4; gx++) {
  for (let gz = -4; gz <= 4; gz++) {
    const x = gx * 42;
    const z = gz * 42;
    if (Math.abs(x) > 170 || Math.abs(z) > 170) continue;
    // Leave the middle more open while retaining cover for approaches.
    if (gx === 0 && gz === 0) continue;
    const w = 23 + random() * 7;
    const d = 23 + random() * 7;
    const h = 35 + random() * 58 + (Math.abs(gx) + Math.abs(gz) < 3 ? 16 : 0);
    BUILDINGS.push({ x, z, w, d, h, style: Math.floor(random() * 4), roof: random() });
  }
}

export function hitBuildingSphere(x, y, z, radius) {
  for (const b of BUILDINGS) {
    const cx = Math.max(b.x - b.w / 2, Math.min(x, b.x + b.w / 2));
    const cy = Math.max(0, Math.min(y, b.h));
    const cz = Math.max(b.z - b.d / 2, Math.min(z, b.z + b.d / 2));
    const dx = x - cx, dy = y - cy, dz = z - cz;
    if (dx * dx + dy * dy + dz * dz < radius * radius) return true;
  }
  return false;
}

export function rayBuildingDistance(origin, dir, maxDistance) {
  let nearest = maxDistance;
  for (const b of BUILDINGS) {
    const mins = [b.x - b.w / 2, 0, b.z - b.d / 2];
    const maxs = [b.x + b.w / 2, b.h, b.z + b.d / 2];
    const o = [origin.x, origin.y, origin.z];
    const d = [dir.x, dir.y, dir.z];
    let near = 0, far = nearest;
    for (let i = 0; i < 3; i++) {
      if (Math.abs(d[i]) < 1e-8) {
        if (o[i] < mins[i] || o[i] > maxs[i]) { near = Infinity; break; }
      } else {
        let t1 = (mins[i] - o[i]) / d[i];
        let t2 = (maxs[i] - o[i]) / d[i];
        if (t1 > t2) [t1, t2] = [t2, t1];
        near = Math.max(near, t1);
        far = Math.min(far, t2);
        if (near > far) break;
      }
    }
    if (near <= far && near < nearest) nearest = near;
  }
  return nearest;
}

export function raySphereDistance(origin, dir, center, radius) {
  const ox = origin.x - center.x, oy = origin.y - center.y, oz = origin.z - center.z;
  const b = ox * dir.x + oy * dir.y + oz * dir.z;
  const c = ox * ox + oy * oy + oz * oz - radius * radius;
  const discriminant = b * b - c;
  if (discriminant < 0) return Infinity;
  const t = -b - Math.sqrt(discriminant);
  return t >= 0 ? t : Infinity;
}
