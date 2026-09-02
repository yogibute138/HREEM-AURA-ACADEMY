/**
 * HREEM AURA ACADEMY — Interactive Three.js WebGL 3D Scene
 * Premium spiritual 3D graphics: Glowing Aura Orb, Sacred Geometry Rings,
 * Floating Crystals, Light Rays, and 3000+ Gold Particles.
 */

class SpiritualScene {
  constructor() {
    this.container = document.getElementById('canvas-container');
    this.canvas = document.getElementById('webgl-canvas');

    if (!this.container || !this.canvas) return;

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scrollProgress = 0;
    this.clock = new THREE.Clock();

    this.initScene();
    this.createAuraOrb();
    this.createSacredGeometry();
    this.createFloatingCrystals();
    this.createCosmicParticles();
    this.createLightRays();
    this.addEventListeners();
    this.animate();
  }

  initScene() {
    // Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x060103, 0.025);

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 15);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;

    // Ambient Lighting
    const ambientLight = new THREE.AmbientLight(0xfff8e7, 0.6);
    this.scene.add(ambientLight);

    // Point Lights
    this.goldLight = new THREE.PointLight(0xd4af37, 3, 30);
    this.goldLight.position.set(0, 0, 4);
    this.scene.add(this.goldLight);

    this.burgundyLight = new THREE.PointLight(0x8b0000, 2, 40);
    this.burgundyLight.position.set(-8, 5, -5);
    this.scene.add(this.burgundyLight);
  }

  createAuraOrb() {
    this.orbGroup = new THREE.Group();

    // Inner Glowing Core
    const coreGeo = new THREE.IcosahedronGeometry(2.2, 5);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xd4af37,
      emissive: 0x8b0000,
      emissiveIntensity: 0.8,
      roughness: 0.2,
      metalness: 0.8,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.6,
      opacity: 0.95,
      transparent: true,
      wireframe: false
    });
    this.orbCore = new THREE.Mesh(coreGeo, coreMat);
    this.orbGroup.add(this.orbCore);

    // Outer Aura Atmosphere
    const auraGeo = new THREE.SphereGeometry(2.8, 32, 32);
    const auraMat = new THREE.MeshBasicMaterial({
      color: 0xf7e7ad,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    this.orbAura = new THREE.Mesh(auraGeo, auraMat);
    this.orbGroup.add(this.orbAura);

    this.scene.add(this.orbGroup);
  }

  createSacredGeometry() {
    this.geometryGroup = new THREE.Group();

    // Ring 1 — Outer Mandala Ring
    const ring1Geo = new THREE.TorusGeometry(4.2, 0.02, 16, 100);
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x3b0910,
      emissiveIntensity: 0.3
    });
    this.ring1 = new THREE.Mesh(ring1Geo, goldMat);
    this.ring1.rotation.x = Math.PI / 3;
    this.geometryGroup.add(this.ring1);

    // Ring 2 — Concentric Rotating Ring
    const ring2Geo = new THREE.TorusGeometry(3.4, 0.015, 16, 80);
    this.ring2 = new THREE.Mesh(ring2Geo, goldMat);
    this.ring2.rotation.y = Math.PI / 4;
    this.geometryGroup.add(this.ring2);

    // Octahedron Sacred Geometry Shell
    const octaGeo = new THREE.OctahedronGeometry(4.8, 0);
    const octaMat = new THREE.MeshBasicMaterial({
      color: 0xf7e7ad,
      wireframe: true,
      transparent: true,
      opacity: 0.22
    });
    this.octahedron = new THREE.Mesh(octaGeo, octaMat);
    this.geometryGroup.add(this.octahedron);

    this.scene.add(this.geometryGroup);
  }

  createFloatingCrystals() {
    this.crystals = [];
    const crystalGeo = new THREE.ConeGeometry(0.4, 1.2, 5);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0xfff8e7,
      emissive: 0xd4af37,
      emissiveIntensity: 0.4,
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.8,
      thickness: 0.5,
      transparent: true,
      opacity: 0.85
    });

    const crystalPositions = [
      { x: -5.5, y: 3.2, z: -2 },
      { x: 5.8, y: -2.8, z: -1 },
      { x: -4.2, y: -3.5, z: 1 },
      { x: 4.5, y: 3.8, z: -3 },
      { x: 0, y: 5.5, z: -4 },
      { x: -6.5, y: 0.5, z: -3 },
      { x: 6.2, y: 1.2, z: -2 }
    ];

    crystalPositions.forEach((pos, idx) => {
      const crystal = new THREE.Mesh(crystalGeo, crystalMat.clone());
      crystal.position.set(pos.x, pos.y, pos.z);
      crystal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      crystal.userData = {
        initialY: pos.y,
        speed: 0.8 + Math.random() * 0.5,
        rotSpeed: 0.01 + Math.random() * 0.015,
        offset: idx
      };
      this.crystals.push(crystal);
      this.scene.add(crystal);
    });
  }

  createCosmicParticles() {
    const particleCount = window.innerWidth < 768 ? 1200 : 3200;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      scales[i] = Math.random() * 0.08 + 0.02;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    // Particle Texture / Material
    const material = new THREE.PointsMaterial({
      color: 0xf7e7ad,
      size: 0.12,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  createLightRays() {
    const rayGeo = new THREE.CylinderGeometry(0.1, 2.5, 20, 16, 1, true);
    const rayMat = new THREE.MeshBasicMaterial({
      color: 0xd4af37,
      transparent: true,
      opacity: 0.06,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending
    });

    this.lightRay1 = new THREE.Mesh(rayGeo, rayMat);
    this.lightRay1.rotation.z = Math.PI / 4;
    this.lightRay1.position.set(-2, 0, -5);

    this.lightRay2 = new THREE.Mesh(rayGeo, rayMat);
    this.lightRay2.rotation.z = -Math.PI / 3;
    this.lightRay2.position.set(3, 0, -6);

    this.scene.add(this.lightRay1);
    this.scene.add(this.lightRay2);
  }

  addEventListeners() {
    window.addEventListener('resize', () => this.onWindowResize());
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('scroll', () => this.onScroll());
  }

  onMouseMove(e) {
    this.mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    this.mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
  }

  onScroll() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress = window.scrollY / (maxScroll || 1);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const elapsedTime = this.clock.getElapsedTime();

    // Lerp Mouse Position for Smooth Parallax
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Rotate Orb & Aura
    if (this.orbGroup) {
      this.orbCore.rotation.y = elapsedTime * 0.25;
      this.orbCore.rotation.x = elapsedTime * 0.15;
      this.orbAura.rotation.y = -elapsedTime * 0.15;

      // Pulse Core Scale
      const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.06;
      this.orbCore.scale.set(pulse, pulse, pulse);

      // Scroll-driven camera and orb position
      this.orbGroup.position.x = Math.sin(this.scrollProgress * Math.PI * 2) * 2.5 + this.mouse.x * 0.8;
      this.orbGroup.position.y = -this.scrollProgress * 8 + this.mouse.y * 0.8;
      this.orbGroup.position.z = -this.scrollProgress * 4;
    }

    // Sacred Geometry Rotations
    if (this.geometryGroup) {
      this.ring1.rotation.z = elapsedTime * 0.2;
      this.ring2.rotation.x = elapsedTime * 0.25;
      this.octahedron.rotation.y = elapsedTime * 0.1;
      this.octahedron.rotation.z = elapsedTime * 0.05;
    }

    // Animate Floating Crystals
    this.crystals.forEach((crystal) => {
      crystal.rotation.x += crystal.userData.rotSpeed;
      crystal.rotation.y += crystal.userData.rotSpeed;
      crystal.position.y = crystal.userData.initialY + Math.sin(elapsedTime * crystal.userData.speed + crystal.userData.offset) * 0.35;
    });

    // Cosmic Particles Drift
    if (this.particles) {
      this.particles.rotation.y = elapsedTime * 0.03 + this.mouse.x * 0.05;
      this.particles.rotation.x = elapsedTime * 0.015 + this.mouse.y * 0.05;
    }

    // Camera Motion Smooth Lerp
    this.camera.position.x += (this.mouse.x * 1.2 - this.camera.position.x) * 0.04;
    this.camera.position.y += (this.mouse.y * 1.2 - this.camera.position.y) * 0.04;
    this.camera.lookAt(0, 0, 0);

    this.renderer.render(this.scene, this.camera);
  }
}

// Initialize 3D Scene when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.spiritual3DScene = new SpiritualScene();
});
