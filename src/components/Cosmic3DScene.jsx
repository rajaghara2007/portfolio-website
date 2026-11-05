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
    scene.fog = new THREE.FogExp2(0x04050d, 0.015);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 2. High-Tech Ambient & Accent Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 2.5, 80);
    purpleLight.position.set(20, 15, 10);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x00f5ff, 2.5, 80);
    cyanLight.position.set(-20, -15, 10);
    scene.add(cyanLight);

    // 3. WARP-SPEED HYPERSPACE STARFIELD
    // 2,200 Stars that dynamically stretch and accelerate on scroll
    const starCount = 2200;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starOriginalPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color(0x00f5ff), // Cyan
      new THREE.Color(0xa855f7), // Neon Purple
      new THREE.Color(0x38bdf8), // Sky Blue
      new THREE.Color(0xc084fc), // Violet
      new THREE.Color(0xffffff), // Pure Starlight
      new THREE.Color(0xe0f2fe), // Ice Blue
    ];

    for (let i = 0; i < starCount; i++) {
      const x = (Math.random() - 0.5) * 160;
      const y = (Math.random() - 0.5) * 160;
      const z = -Math.random() * 140;

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = y;
      starPositions[i * 3 + 2] = z;

      starOriginalPositions[i * 3] = x;
      starOriginalPositions[i * 3 + 1] = y;
      starOriginalPositions[i * 3 + 2] = z;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.75,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const starField = new THREE.Points(starGeo, starMaterial);
    scene.add(starField);

    // 4. DEEP-SPACE AI NEURAL CONSTELLATION MESH
    // Floating deep in space (z = -35 to -55) with zero chance of foreground occlusion
    const neuralGroup = new THREE.Group();
    const nodeCount = 55;
    const nodeGeo = new THREE.SphereGeometry(0.3, 10, 10);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.65,
    });

    const nodePositions = [];
    for (let i = 0; i < nodeCount; i++) {
      const radius = 25 + Math.random() * 25;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      const x = radius * Math.cos(theta) * Math.cos(phi);
      const y = radius * Math.sin(phi);
      const z = -40 + radius * Math.sin(theta) * Math.cos(phi) * 0.5;

      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(x, y, z);
      neuralGroup.add(nodeMesh);
      nodePositions.push(new THREE.Vector3(x, y, z));
    }

    // Connect constellation points with faint cyber threads
    const lineIndices = [];
    const linePositions = [];
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 13) {
          linePositions.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
          linePositions.push(nodePositions[j].x, nodePositions[j].y, nodePositions[j].z);
        }
      }
    }

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const neuralLines = new THREE.LineSegments(linesGeo, linesMat);
    neuralGroup.add(neuralLines);
    scene.add(neuralGroup);

    // 5. COSMIC SHOOTING STARS / METEOR TRAILS
    // Periodic cyber meteors streaking diagonally across deep cosmos
    const meteorCount = 6;
    const meteors = [];
    const meteorGroup = new THREE.Group();

    for (let m = 0; m < meteorCount; m++) {
      const mLength = 4 + Math.random() * 5;
      const mGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(-mLength, -mLength * 0.6, -mLength * 0.4),
      ]);
      const mMat = new THREE.LineBasicMaterial({
        color: m % 2 === 0 ? 0x00f5ff : 0xa855f7,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
      });
      const meteor = new THREE.Line(mGeo, mMat);

      // Random initial trajectory state
      meteors.push({
        mesh: meteor,
        active: false,
        timer: Math.random() * 200,
        speed: 1.2 + Math.random() * 1.5,
        opacity: 0,
      });
      meteorGroup.add(meteor);
    }
    scene.add(meteorGroup);

    // 6. Smooth Scroll & Mouse Tracking
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

      // Track scroll physics smoothly
      const currentScrollY = window.scrollY;
      const deltaScroll = currentScrollY - lastScrollY;
      scrollVelocity += (deltaScroll * 0.05 - scrollVelocity) * 0.1;
      lastScrollY = currentScrollY;

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? Math.min(Math.max(currentScrollY / docHeight, 0), 1) : 0;

      // Camera gently descends with scroll progress
      const targetY = -scrollProgress * 24;
      camera.position.y += (targetY - camera.position.y) * 0.06;

      // Mouse Parallax on Camera
      targetCamX = mouseX * 1.8;
      targetCamY = camera.position.y - mouseY * 1.8;
      camera.position.x += (targetCamX - camera.position.x) * 0.04;

      // WARP EFFECT: Stars streak and advance based on baseline drift + scroll velocity
      const posArray = starGeo.attributes.position.array;
      const warpSpeed = 0.08 + Math.abs(scrollVelocity) * 0.35;

      for (let i = 0; i < starCount; i++) {
        // Advance in Z
        posArray[i * 3 + 2] += warpSpeed;
        if (posArray[i * 3 + 2] > 25) {
          posArray[i * 3 + 2] = -140;
          posArray[i * 3] = (Math.random() - 0.5) * 160;
          posArray[i * 3 + 1] = (Math.random() - 0.5) * 160;
        }
      }
      starGeo.attributes.position.needsUpdate = true;

      // Starfield gentle cosmic rotation
      starField.rotation.y = elapsedTime * 0.012 + scrollProgress * 0.4;
      starField.rotation.x = Math.sin(elapsedTime * 0.08) * 0.04;

      // Dynamic star size modulation with warp speed
      starMaterial.size = 0.75 + Math.min(Math.abs(scrollVelocity) * 0.15, 0.8);

      // Deep Neural Constellation Rotation & Organic Pulse
      neuralGroup.rotation.y = elapsedTime * 0.04 + scrollProgress * 1.5;
      neuralGroup.rotation.x = Math.sin(elapsedTime * 0.15) * 0.1;
      neuralGroup.position.y = -scrollProgress * 10;

      // Shooting Stars / Meteors Update
      meteors.forEach((m) => {
        if (!m.active) {
          m.timer--;
          // Spawn meteor periodically, accelerated by scroll
          if (m.timer <= 0) {
            m.active = true;
            m.mesh.position.set(
              (Math.random() - 0.2) * 80,
              25 + Math.random() * 20,
              -15 - Math.random() * 25
            );
            m.opacity = 0;
          }
        } else {
          // Move diagonally across screen
          m.mesh.position.x -= m.speed;
          m.mesh.position.y -= m.speed * 0.6;
          m.mesh.position.z -= m.speed * 0.3;

          // Fade in then fade out
          if (m.mesh.position.y > 0) {
            m.opacity = Math.min(m.opacity + 0.1, 0.85);
          } else {
            m.opacity = Math.max(m.opacity - 0.06, 0);
          }
          m.mesh.material.opacity = m.opacity;

          if (m.mesh.position.y < -35 || m.opacity <= 0 && m.mesh.position.y < 0) {
            m.active = false;
            m.timer = 150 + Math.random() * 350;
            m.mesh.material.opacity = 0;
          }
        }
      });

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
      linesGeo.dispose();
      linesMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
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
