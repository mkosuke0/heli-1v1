import test from 'node:test';
import assert from 'node:assert/strict';
import { cursorSteering, flightAxes, mouseAngles, normalizeSensitivity } from '../src/controls.js';

test('left Shift raises the nose and left Ctrl lowers it', () => {
  assert.equal(flightAxes(new Set(['ShiftLeft'])).pitchAxis, 1);
  assert.equal(flightAxes(new Set(['ControlLeft'])).pitchAxis, -1);
  assert.equal(flightAxes(new Set(['ShiftRight', 'ControlRight'])).pitchAxis, 0);
});

test('mouse right yaws right and mouse up pitches up', () => {
  assert.deepEqual(mouseAngles(20, -10, 0.0025), { yaw: 0.05, pitch: 0.025 });
});

test('embedded cursor steering keeps turning at an edge and stays within keyboard speed', () => {
  assert.deepEqual(cursorSteering(500, 300, 500, 300, 1000, 600), { yaw: 0, pitch: 0 });
  assert.deepEqual(cursorSteering(1000, 0, 500, 300, 1000, 600), { yaw: 1, pitch: 1 });
  assert.deepEqual(cursorSteering(0, 600, 500, 300, 1000, 600), { yaw: -1, pitch: -1 });
  assert.ok(cursorSteering(650, 300, 500, 300, 1000, 600, 2).yaw > cursorSteering(650, 300, 500, 300, 1000, 600, 1).yaw);
});

test('sensitivity setting stays within the slider range', () => {
  assert.equal(normalizeSensitivity('1.56'), 1.6);
  assert.equal(normalizeSensitivity('0'), 0.2);
  assert.equal(normalizeSensitivity('9'), 3);
  assert.equal(normalizeSensitivity('bad'), 1);
});
