import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnQuaternion } from '../shared/flight.js';
import { incomingMissile } from '../src/threats.js';
import { normalizeVolume } from '../src/audio.js';

test('only a guided missile targeting this pilot produces an incoming warning', () => {
  const me = { id: 'me', x: 0, y: 40, z: 0, q: spawnQuaternion(0).toArray() };
  const missiles = [
    { id: 'other', kind: 'lock', target: 'friend', x: 2, y: 40, z: -2 },
    { id: 'unguided', kind: 'unguided', target: 'me', x: 1, y: 40, z: -1 },
    { id: 'incoming', kind: 'lock', target: 'me', x: 10, y: 40, z: -10 }
  ];
  const threat = incomingMissile(missiles, me);
  assert.equal(threat.id, 'incoming');
  assert.equal(threat.label, '右前方');
  assert.ok(Math.abs(threat.angle - Math.PI / 4) < 1e-8);
  missiles[2].target = null; // A flare breaks the missile's lock.
  assert.equal(incomingMissile(missiles, me), null);
});

test('volume is limited to 0–100 percent', () => {
  assert.equal(normalizeVolume('36.6'), 37);
  assert.equal(normalizeVolume(-5), 0);
  assert.equal(normalizeVolume(150), 100);
  assert.equal(normalizeVolume('invalid'), 70);
});
