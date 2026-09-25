export function flightAxes(keys) {
  return {
    throttle: Number(keys.has('KeyW')) - Number(keys.has('KeyS')),
    roll: Number(keys.has('KeyQ')) - Number(keys.has('KeyE')),
    yawAxis: Number(keys.has('KeyD')) - Number(keys.has('KeyA')),
    pitchAxis: Number(keys.has('ShiftLeft')) - Number(keys.has('ControlLeft'))
  };
}

export function mouseAngles(movementX, movementY, sensitivity) {
  const dx = Math.max(-120, Math.min(120, movementX));
  const dy = Math.max(-120, Math.min(120, movementY));
  return { yaw: dx * sensitivity, pitch: -dy * sensitivity };
}

export function normalizeSensitivity(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.round(Math.max(0.2, Math.min(3, number)) * 10) / 10 : 1;
}
