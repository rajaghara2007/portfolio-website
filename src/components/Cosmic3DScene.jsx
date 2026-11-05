import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Cosmic3DScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04050d, 0.016);

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 26);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 2. High-Tech Space & AI Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const purpleGlow = new THREE.PointLight(0xa855f7, 3.5, 70);
    purpleGlow.position.set(16, 12, 10);
    scene.add(purpleGlow);

    const cyanGlow = new THREE.PointLight(0x00f5ff, 3.5, 70);
    cyanGlow.position.set(-16, -12, 10);
    scene.add(cyanGlow);

    // 3. Deep Space Star Dust (Layered depth without visual clutter)
    const starCount = 1400;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0xa855f7), // Neon Purple
      new THREE.Color(0x00f5ff), // Cyan
      new THREE.Color(0x38bdf8), // Sky Blue
      new THREE.Color(0xffffff), // White Star
    ];

    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 110;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 160;
      starPos[i * 3 + 2] = -Math.random() * 80;

      const col = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.65,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });

    const starField = new THREE.Points(starGeo, starMaterial);
    scene.add(starField);

    // 4. AI NEURAL SYNAPSE WEB (Connected nodes drifting gently in deep background)
    const neuralGroup = new THREE.Group();
    const nodeCount = 45;
    const nodePositions = [];
    const nodeGeo = new THREE.SphereGeometry(0.25, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.7,
    });

    for (let i = 0; i < nodeCount; i++) {
      // Position nodes on the outer flanks to NEVER overlap text in center
      const side = i % 2 === 0 ? 1 : -1;
      const x = side * (12 + Math.random() * 8);
      const y = (Math.random() - 0.5) * 80;
      const z = -6 - Math.random() * 14;

      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(x, y, z);
      neuralGroup.add(node);
      nodePositions.push(new THREE.Vector3(x, y, z));
    }

    // Connect nearby neural nodes with subtle lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.25,
    });

    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < 9) {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([
            nodePositions[i],
            nodePositions[j],
          ]);
          const line = new THREE.Line(lineGeo, lineMat);
          neuralGroup.add(line);
        }
      }
    }
    scene.add(neuralGroup);

    // 5. SPACE EXPLORATION & AI SCULPTURES (Positioned exclusively on the sides/outer columns)
    // =========================================================================

    // Object A: Orbital Quantum Ring (Right Flank - Level with Hero)
    const orbitalRingGroup = new THREE.Group();
    const mainRing = new THREE.Mesh(
      new THREE.TorusGeometry(3.6, 0.08, 16, 90),
      new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        emissive: 0x6b21a8,
        emissiveIntensity: 0.6,
        wireframe: true,
      })
    );
    const innerRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.8, 0.05, 16, 70),
      new THREE.MeshBasicMaterial({
        color: 0x00f5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      })
    );
    innerRing.rotation.x = Math.PI / 3;
    orbitalRingGroup.add(mainRing, innerRing);
    orbitalRingGroup.position.set(13.5, 4, -4);
    scene.add(orbitalRingGroup);

    // Object B: Holographic AI Core (Left Flank - Level with About)
    const aiCoreGroup = new THREE.Group();
    const icoCage = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.8, 1),
      new THREE.MeshStandardMaterial({
        color: 0x00f5ff,
        emissive: 0x0284c7,
        emissiveIntensity: 0.5,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      })
    );
    const icoInner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.6, 0),
      new THREE.MeshStandardMaterial({
        color: 0x1e1b4b,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.4,
        roughness: 0.2,
      })
    );
    aiCoreGroup.add(icoCage, icoInner);
    aiCoreGroup.position.set(-13.5, -8, -4);
    scene.add(aiCoreGroup);

    // Object C: Cyber Tech Matrix (Right Flank - Level with Skills/Projects)
    const techMatrixGroup = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const box = new THREE.Mesh(
        new THREE.BoxGeometry(1.8 - i * 0.3, 1.8 - i * 0.3, 1.8 - i * 0.3),
        new THREE.MeshStandardMaterial({
          color: i % 2 === 0 ? 0xa855f7 : 0x00f5ff,
          emissive: i % 2 === 0 ? 0x9333ea : 0x00f5ff,
          emissiveIntensity: 0.45,
          wireframe: true,
        })
      );
      box.position.set(
        (i - 1.5) * 1.8,
        Math.sin(i) * 1.5,
        (Math.random() - 0.5) * 2
      );
      techMatrixGroup.add(box);
    }
    techMatrixGroup.position.set(13.5, -20, -5);
    scene.add(techMatrixGroup);

    // Object D: Deep Space Navigation Beacon (Left Flank - Level with Experience/Contact)
    const beaconGroup = new THREE.Group();
    const octa = new THREE.Mesh(
      new THREE.OctahedronGeometry(2.6, 0),
      new THREE.MeshStandardMaterial({
        color: 0xc084fc,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.5,
        wireframe: true,
      })
    );
    const beaconRings = [];
    for (let r = 0; r < 3; r++) {
      const bRing = new THREE.Mesh(
        new THREE.TorusGeometry(3.2 + r * 0.8, 0.04, 12, 60),
        new THREE.MeshBasicMaterial({
          color: 0x00f5ff,
          transparent: true,
          opacity: 0.5 - r * 0.1,
        })
      );
      bRing.rotation.x = Math.PI / 2.2;
      beaconRings.push(bRing);
      beaconGroup.add(bRing);
    }
    beaconGroup.add(octa);
    beaconGroup.position.set(-13.5, -34, -4);
    scene.add(beaconGroup);

    // 6. Scroll & Mouse Tracking with Smooth Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetCamX = 0;
    let targetCamY = 0;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // 7. Buttery-Smooth Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Track scroll position smoothly
      const currentScrollY = window.scrollY;
      const deltaScroll = currentScrollY - lastScrollY;
      scrollVelocity += (deltaScroll * 0.04 - scrollVelocity) * 0.08;
      lastScrollY = currentScrollY;

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? Math.min(Math.max(currentScrollY / docHeight, 0), 1) : 0;

      // Camera gently tracks down the page as user scrolls (smooth spaceship descent)
      const targetY = -scrollProgress * 32;
      camera.position.y += (targetY - camera.position.y) * 0.05;

      // Mouse Parallax on Camera
      targetCamX = mouseX * 1.5;
      targetCamY = camera.position.y - mouseY * 1.5;
      camera.position.x += (targetCamX - camera.position.x) * 0.04;

      // Gentle star drift in depth (accelerates softly on scroll)
      const positions = starGeo.attributes.position.array;
      const driftSpeed = 0.04 + Math.abs(scrollVelocity) * 0.08;
      for (let i = 0; i < starCount; i++) {
        positions[i * 3 + 2] += driftSpeed;
        if (positions[i * 3 + 2] > 20) {
          positions[i * 3 + 2] = -80;
        }
      }
      starGeo.attributes.position.needsUpdate = true;
      starField.rotation.y = elapsedTime * 0.015;

      // Smooth rotations for Space & AI Objects
      orbitalRingGroup.rotation.x = elapsedTime * 0.25;
      orbitalRingGroup.rotation.y = elapsedTime * 0.35 + scrollProgress * 3;
      innerRing.rotation.z = -elapsedTime * 0.4;

      aiCoreGroup.rotation.x = elapsedTime * 0.3 + scrollProgress * 4;
      aiCoreGroup.rotation.y = elapsedTime * 0.4;

      techMatrixGroup.rotation.y = elapsedTime * 0.35 + scrollProgress * 3;
      techMatrixGroup.children.forEach((child, idx) => {
        child.rotation.x = elapsedTime * (0.4 + idx * 0.1);
        child.rotation.z = elapsedTime * (0.3 + idx * 0.1);
      });

      beaconGroup.rotation.y = elapsedTime * 0.35;
      octa.rotation.x = elapsedTime * 0.4 + scrollProgress * 4;
      beaconRings.forEach((ring, idx) => {
        const pulse = Math.sin(elapsedTime * 2 - idx * 0.6);
        ring.scale.setScalar(1 + pulse * 0.05);
      });

      // Neural Web gentle pulse
      neuralGroup.rotation.y = Math.sin(elapsedTime * 0.2) * 0.06;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      starGeo.dispose();
      starMaterial.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none w-full h-full"
      style={{ zIndex: -15 }}
      aria-hidden="true"
    />
  );
}
