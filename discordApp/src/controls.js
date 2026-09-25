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

// Position-based steering keeps turning at the edge when an embedded host
// does not permit Pointer Lock and relative mouse movement runs out.
export function cursorSteering(x, y, anchorX, anchorY, width, height, sensitivity = 1) {
  const axis = (delta, span) => {
    const amount = Math.max(-1, Math.min(1, delta / Math.max(80, span) * sensitivity));
    const deadZone = 0.06;
    return Math.abs(amount) <= deadZone ? 0 : Math.sign(amount) * (Math.abs(amount) - deadZone) / (1 - deadZone);
  };
  return {
    yaw: axis(x - anchorX, width * 0.28),
    pitch: axis(anchorY - y, height * 0.28)
  };
}

export function normalizeSensitivity(value) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.round(Math.max(0.2, Math.min(3, number)) * 10) / 10 : 1;
}
