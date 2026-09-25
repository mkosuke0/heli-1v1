import test from 'node:test';
import assert from 'node:assert/strict';
import { flightAxes, mouseAngles, normalizeSensitivity } from '../src/controls.js';

test('left Shift raises the nose and left Ctrl lowers it', () => {
  assert.equal(flightAxes(new Set(['ShiftLeft'])).pitchAxis, 1);
  assert.equal(flightAxes(new Set(['ControlLeft'])).pitchAxis, -1);
  assert.equal(flightAxes(new Set(['ShiftRight', 'ControlRight'])).pitchAxis, 0);
});

test('mouse right yaws right and mouse up pitches up', () => {
  assert.deepEqual(mouseAngles(20, -10, 0.0025), { yaw: 0.05, pitch: 0.025 });
});

test('sensitivity setting stays within the slider range', () => {
  assert.equal(normalizeSensitivity('1.56'), 1.6);
  assert.equal(normalizeSensitivity('0'), 0.2);
  assert.equal(normalizeSensitivity('9'), 3);
  assert.equal(normalizeSensitivity('bad'), 1);
});
