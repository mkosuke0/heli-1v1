import * as THREE from 'three';
import { traceMinigun } from '../shared/flight.js';
import { BUILDINGS, rayBuildingDistance } from '../shared/map.js';
import { GAME } from '../shared/config.js';

const color = (hex) => new THREE.MeshStandardMaterial({ color: hex, metalness: 0.28, roughness: 0.72 });
const mats = {
  ground: color(0x161f29), road: color(0x202a33), roadLine: new THREE.MeshBasicMaterial({ color: 0x647881 }),
  building: [color(0x344451), color(0x40515a), color(0x293944), color(0x46515b)],
  roof: color(0x1d2d36), dark: color(0x111c24), glass: new THREE.MeshStandardMaterial({ color: 0x42616b, metalness: 0.45, roughness: 0.22 }),
  window: new THREE.MeshBasicMaterial({ color: 0xa7d0ce, transparent: true, opacity: 0.46, depthWrite: false }),
  orange: new THREE.MeshBasicMaterial({ color: 0xffa568 }),
  cyan: new THREE.MeshBasicMaterial({ color: 0x79e2e8 })
};

function box(parent, material, w, h, d, x = 0, y = 0, z = 0) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function cylinder(parent, material, rTop, rBottom, height, x, y, z, segments = 8) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rTop, rBottom, height, segments), material);
  mesh.position.set(x, y, z);
  parent.add(mesh);
  return mesh;
}

function helicopter(tint) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const olive = color(tint === 'cyan' ? 0x566e69 : 0x6c6254);
  const trim = color(tint === 'cyan' ? 0x8aa49b : 0x9c8b75);
  const accent = tint === 'cyan' ? mats.cyan : mats.orange;
  const fuselage = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), olive);
  fuselage.scale.set(1.1, 0.67, 2.55);
  body.add(fuselage);
  const canopy = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8), mats.glass);
  canopy.scale.set(0.72, 0.42, 1.05);
  canopy.position.set(0, 0.37, -0.82);
  body.add(canopy);
  box(body, trim, 1.32, 0.13, 0.07, 0, 0.43, -0.84);
  box(body, olive, 0.36, 0.4, 4.1, 0, 0.15, 3.0);
  box(body, olive, 0.2, 1.03, 1.35, 0, 0.54, 4.64);
  box(body, olive, 1.75, 0.11, 0.65, 0, 0.77, 4.65);
  const tailRotor = new THREE.Group();
  tailRotor.position.set(0.22, 0.55, 4.67);
  tailRotor.rotation.z = Math.PI / 2;
  tailRotor.add(box(tailRotor, mats.dark, 0.1, 1.35, 0.09));
  tailRotor.add(box(tailRotor, mats.dark, 0.1, 0.09, 1.35));
  body.add(tailRotor);
  const rotor = new THREE.Group();
  rotor.position.set(0, 1.16, -0.25);
  cylinder(body, mats.dark, 0.14, 0.18, 0.65, 0, 0.87, -0.25);
  cylinder(rotor, mats.dark, 0.46, 0.46, 0.14, 0, 0, 0);
  for (let i = 0; i < 4; i++) {
    const blade = box(rotor, mats.dark, 0.26, 0.042, 4.8, 0, 0.05, -2.45);
    blade.rotation.y = i * Math.PI / 2;
    blade.position.set(Math.sin(i * Math.PI / 2) * 2.45, 0.05, -Math.cos(i * Math.PI / 2) * 2.45);
  }
  body.add(rotor);
  for (const side of [-1, 1]) {
    box(body, olive, 2.5, 0.13, 0.83, side * 1.38, -0.15, 0.21);
    box(body, mats.dark, 0.24, 0.15, 1.65, side * 2.16, -0.38, 0.27);
    for (let n = -1; n <= 1; n++) {
      const rocket = cylinder(body, mats.dark, 0.15, 0.16, 1.2, side * (1.76 + n * 0.25), -0.51, 0.28, 7);
      rocket.rotation.x = Math.PI / 2;
    }
    box(body, mats.dark, 0.1, 0.6, 0.1, side * 0.7, -0.77, -0.1);
    box(body, mats.dark, 0.12, 0.6, 0.12, side * 0.7, -0.77, 1.3);
    box(body, mats.dark, 0.13, 0.13, 2.45, side * 0.7, -1.08, 0.57);
    box(body, accent, 0.14, 0.08, 0.45, side * 0.56, -0.11, -2.23);
  }
  const gun = cylinder(body, mats.dark, 0.19, 0.21, 1.25, 0, -0.8, -2.32, 8);
  gun.rotation.x = Math.PI / 2;
  cylinder(body, mats.dark, 0.28, 0.28, 0.23, 0, -0.51, -1.85);
  const sensor = new THREE.Mesh(new THREE.SphereGeometry(0.29, 8, 6), mats.dark);
  sensor.position.set(0, -0.18, -2.49);
  body.add(sensor);
  return { root, body, rotor, tailRotor };
}

export class GameScene {
  constructor(element) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.7));
    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.35;
    element.appendChild(this.renderer.domElement);
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x91a9ab);
    this.scene.fog = new THREE.FogExp2(0x91a9ab, 0.0024);
    this.camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.1, 650);
    this.scene.add(new THREE.HemisphereLight(0xe1eeee, 0x35414a, 2.1));
    const sun = new THREE.DirectionalLight(0xffdfb3, 2.3);
    sun.position.set(-80, 130, 50);
    this.scene.add(sun);
    this.playerMeshes = new Map();
    this.missileMeshes = new Map();
    this.effects = [];
    this.cameraTarget = new THREE.Vector3(0, 40, 0);
    this.buildWorld();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(innerWidth, innerHeight);
  }

  buildWorld() {
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(410, 410), mats.ground);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.12;
    this.scene.add(ground);
    for (let i = -4; i < 4; i++) {
      const at = i * 42 + 21;
      const roadX = box(this.scene, mats.road, 13, 0.04, 390, at, 0, 0);
      const roadZ = box(this.scene, mats.road, 390, 0.04, 13, 0, 0, at);
      roadX.receiveShadow = roadZ.receiveShadow = false;
      for (let j = -4; j < 5; j++) {
        box(this.scene, mats.roadLine, 0.25, 0.045, 6, at, 0.04, j * 42);
        box(this.scene, mats.roadLine, 6, 0.045, 0.25, j * 42, 0.04, at);
      }
    }
    const windowGeo = new THREE.PlaneGeometry(1.6, 2.25);
    const windowPositions = [];
    for (const b of BUILDINGS) {
      box(this.scene, mats.building[b.style], b.w, b.h, b.d, b.x, b.h / 2, b.z);
      box(this.scene, mats.roof, b.w + 0.8, 0.45, b.d + 0.8, b.x, b.h + 0.2, b.z);
      if (b.roof > 0.68) {
        box(this.scene, mats.dark, 5, 2.5, 5, b.x - 3, b.h + 1.5, b.z + 2);
        cylinder(this.scene, mats.dark, 0.12, 0.12, 8, b.x + 4, b.h + 4, b.z - 4);
      }
      const rows = Math.floor((b.h - 8) / 8);
      for (let row = 0; row < rows; row++) {
        const y = 5 + row * 8;
        for (let col = -1; col <= 1; col++) {
          if ((row + col + b.style) % 4 === 0) continue;
          windowPositions.push([b.x + col * 5, y, b.z + b.d / 2 + 0.014, 0]);
          windowPositions.push([b.x - col * 5, y, b.z - b.d / 2 - 0.014, Math.PI]);
          windowPositions.push([b.x + b.w / 2 + 0.014, y, b.z + col * 5, Math.PI / 2]);
          windowPositions.push([b.x - b.w / 2 - 0.014, y, b.z - col * 5, -Math.PI / 2]);
        }
      }
    }
    const windows = new THREE.InstancedMesh(windowGeo, mats.window, windowPositions.length);
    const dummy = new THREE.Object3D();
    windowPositions.forEach(([x, y, z, rot], i) => {
      dummy.position.set(x, y, z); dummy.rotation.set(0, rot, 0); dummy.updateMatrix();
      windows.setMatrixAt(i, dummy.matrix);
    });
    windows.instanceMatrix.needsUpdate = true;
    this.scene.add(windows);
    // A low cost helipad gives the center a recognizable arena landmark.
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(14, 14, 0.25, 24), mats.roof);
    pad.position.set(0, 0.14, 0);
    this.scene.add(pad);
    const ring = new THREE.Mesh(new THREE.RingGeometry(10.6, 11.2, 48), mats.cyan);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.29;
    this.scene.add(ring);
    box(this.scene, mats.cyan, 1.2, 0.04, 12, 0, 0.31, 0);
    box(this.scene, mats.cyan, 7, 0.04, 1.2, 0, 0.31, 0);
  }

  ensurePlayer(p) {
    let entry = this.playerMeshes.get(p.id);
    if (!entry) {
      entry = helicopter(p.slot === 0 ? 'cyan' : 'orange');
      entry.root.position.set(p.x, p.y, p.z);
      entry.root.quaternion.fromArray(p.q);
      this.playerMeshes.set(p.id, entry);
      this.scene.add(entry.root);
    }
    return entry;
  }

  setPlayers(players, me, dt, ads) {
    const valid = new Set(players.map(p => p.id));
    for (const [id, entry] of this.playerMeshes) if (!valid.has(id)) {
      this.scene.remove(entry.root); this.playerMeshes.delete(id);
    }
    for (const p of players) {
      const mesh = this.ensurePlayer(p);
      mesh.root.position.lerp(new THREE.Vector3(p.x, p.y, p.z), Math.min(1, dt * 13));
      mesh.root.quaternion.slerp(new THREE.Quaternion().fromArray(p.q), Math.min(1, dt * 13));
      mesh.rotor.rotation.y += GAME.rotorSpeed * dt;
      mesh.tailRotor.rotation.y += GAME.rotorSpeed * 1.6 * dt;
      mesh.root.visible = p.id !== me?.id || !ads;
    }
    if (me) {
      const craft = this.playerMeshes.get(me.id)?.root;
      const own = craft?.position || new THREE.Vector3(me.x, me.y, me.z);
      const q = craft?.quaternion || new THREE.Quaternion().fromArray(me.q);
      const forward = new THREE.Vector3(0, 0, -1).applyQuaternion(q);
      const up = new THREE.Vector3(0, 1, 0).applyQuaternion(q);
      const target = ads
        ? own.clone().addScaledVector(forward, 2.5).addScaledVector(up, 0.58)
        : own.clone().addScaledVector(forward, -18).add(new THREE.Vector3(0, 6.5, 0));
      if (!ads) {
        const ray = target.clone().sub(own);
        const length = ray.length();
        ray.normalize();
        const wall = rayBuildingDistance({ x: own.x, y: own.y, z: own.z }, { x: ray.x, y: ray.y, z: ray.z }, length);
        if (wall < length) target.copy(own).addScaledVector(ray, Math.max(3.5, wall - 1));
      }
      this.camera.position.lerp(target, Math.min(1, dt * (ads ? 17 : 7)));
      const look = own.clone().addScaledVector(forward, 30);
      this.cameraTarget.lerp(look, Math.min(1, dt * 12));
      this.camera.up.copy(ads ? up : new THREE.Vector3(0, 1, 0));
      this.camera.lookAt(this.cameraTarget);
      this.camera.fov += ((ads ? 58 : 72) - this.camera.fov) * Math.min(1, dt * 8);
      this.camera.updateProjectionMatrix();
      this.camera.updateMatrixWorld();
    }
  }

  reticlePosition(me, enemy, dt) {
    const own = this.playerMeshes.get(me.id)?.root;
    const shooter = own ? { x: own.position.x, y: own.position.y, z: own.position.z, q: own.quaternion } : me;
    const opposing = enemy && this.playerMeshes.get(enemy.id)?.root;
    const target = opposing ? { ...enemy, x: opposing.position.x, y: opposing.position.y, z: opposing.position.z } : enemy;
    const point = traceMinigun(shooter, target).end.project(this.camera);
    if (point.z < -1 || point.z > 1) { this.reticleCurrent = null; return null; }
    const x = (point.x + 1) * this.renderer.domElement.clientWidth / 2;
    const y = (1 - point.y) * this.renderer.domElement.clientHeight / 2;
    if (this.reticleOwner !== me.id || !this.reticleCurrent) {
      this.reticleOwner = me.id;
      this.reticleCurrent = { x, y };
    } else {
      // Smooth changes when the ray moves between nearby building faces.
      const blend = 1 - Math.exp(-Math.max(0, dt) * 22);
      this.reticleCurrent.x += (x - this.reticleCurrent.x) * blend;
      this.reticleCurrent.y += (y - this.reticleCurrent.y) * blend;
    }
    return this.reticleCurrent;
  }

  setProjectiles(projectiles) {
    const seen = new Set();
    for (const p of projectiles) {
      seen.add(p.id);
      let mesh = this.missileMeshes.get(p.id);
      if (!mesh) {
        mesh = new THREE.Mesh(new THREE.SphereGeometry(p.kind === 'lock' ? 0.62 : 0.48, 6, 4),
          new THREE.MeshBasicMaterial({ color: p.kind === 'lock' ? 0xff864c : 0xfbd18a }));
        this.missileMeshes.set(p.id, mesh);
        this.scene.add(mesh);
      }
      mesh.position.set(p.x, p.y, p.z);
    }
    for (const [id, mesh] of this.missileMeshes) if (!seen.has(id)) {
      this.scene.remove(mesh); mesh.geometry.dispose(); mesh.material.dispose(); this.missileMeshes.delete(id);
    }
  }

  event(event) {
    if (event.type === 'shot') {
      const start = new THREE.Vector3(event.from.x, event.from.y, event.from.z);
      const end = new THREE.Vector3(event.to.x, event.to.y, event.to.z);
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([start, end]),
        new THREE.LineBasicMaterial({ color: event.hit ? 0xffce88 : 0xf3e5b2, transparent: true, opacity: 0.9 }));
      this.scene.add(line);
      this.effects.push({ mesh: line, life: 0.105, total: 0.105 });
    } else if (event.type === 'explosion' || event.type === 'destroyed') {
      let at = event;
      if (event.type === 'destroyed') at = this.playerMeshes.get(event.target)?.root.position;
      if (!at) return;
      const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 8),
        new THREE.MeshBasicMaterial({ color: 0xff9d55, transparent: true, opacity: 0.8, depthWrite: false }));
      sphere.position.set(at.x, at.y, at.z);
      this.scene.add(sphere);
      this.effects.push({ mesh: sphere, life: 0.5, total: 0.5, grow: event.type === 'destroyed' ? 13 : 7 });
    } else if (event.type === 'flare') {
      const at = this.playerMeshes.get(event.owner)?.root.position;
      if (!at) return;
      for (let i = 0; i < 8; i++) {
        const spark = new THREE.Mesh(new THREE.SphereGeometry(0.36, 5, 4),
          new THREE.MeshBasicMaterial({ color: 0xffe19c, transparent: true, opacity: 1 }));
        spark.position.copy(at);
        this.scene.add(spark);
        this.effects.push({ mesh: spark, life: 1.15, total: 1.15,
          velocity: new THREE.Vector3(Math.cos(i * Math.PI / 4) * 8, -5 - i % 3, Math.sin(i * Math.PI / 4) * 8) });
      }
    }
  }

  render(dt, cinematic = false) {
    if (cinematic) {
      const t = performance.now() * 0.00016;
      this.camera.position.set(Math.cos(t) * 110, 92, Math.sin(t) * 110);
      this.camera.up.set(0, 1, 0);
      this.camera.lookAt(0, 39, 0);
    }
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const e = this.effects[i];
      e.life -= dt;
      if (e.velocity) e.mesh.position.addScaledVector(e.velocity, dt);
      if (e.grow) e.mesh.scale.setScalar(1 + (1 - e.life / e.total) * e.grow);
      e.mesh.material.opacity = Math.max(0, e.life / e.total);
      if (e.life <= 0) {
        this.scene.remove(e.mesh); e.mesh.geometry.dispose(); e.mesh.material.dispose(); this.effects.splice(i, 1);
      }
    }
    this.renderer.render(this.scene, this.camera);
  }
}
