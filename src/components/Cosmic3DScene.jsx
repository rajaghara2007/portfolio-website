import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Cosmic3DScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04050d, 0.015);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 2. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 4, 60);
    purpleLight.position.set(12, 10, 15);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x00f5ff, 4, 60);
    cyanLight.position.set(-12, -10, 15);
    scene.add(cyanLight);

    // 3. Cosmic Warp Starfield (Particles that react to scroll speed)
    const starCount = 1800;
    const starGeo = new THREE.BufferGeometry();
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color(0xa855f7), // Purple
      new THREE.Color(0x00f5ff), // Cyan
      new THREE.Color(0x38bdf8), // Sky Blue
      new THREE.Color(0xffffff), // White
    ];

    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 120;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 120;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 140;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.55,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const starField = new THREE.Points(starGeo, starMaterial);
    scene.add(starField);

    // 4. SECTION-SPECIFIC 3D OBJECTS
    // ==========================================

    // A. Section 1: Hero (Holographic Orbital Gyroscope)
    const heroGroup = new THREE.Group();
    const heroTorusGeo = new THREE.TorusGeometry(4.2, 0.25, 24, 100);
    const heroTorusMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x6b21a8,
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });
    const heroTorus1 = new THREE.Mesh(heroTorusGeo, heroTorusMat);
    const heroTorus2 = new THREE.Mesh(
      new THREE.TorusGeometry(3.2, 0.18, 20, 80),
      new THREE.MeshStandardMaterial({
        color: 0x00f5ff,
        emissive: 0x0284c7,
        emissiveIntensity: 0.7,
        wireframe: true,
      })
    );
    heroTorus2.rotation.x = Math.PI / 3;
    heroGroup.add(heroTorus1, heroTorus2);
    heroGroup.position.set(10, 0, 0); // Positioned subtly behind the right developer visual
    scene.add(heroGroup);

    // B. Section 2: About (Cybernetic Polyhedron Constellation Core)
    const aboutGroup = new THREE.Group();
    const icoInnerGeo = new THREE.IcosahedronGeometry(3.6, 1);
    const icoInnerMat = new THREE.MeshStandardMaterial({
      color: 0x1e1b4b,
      roughness: 0.1,
      metalness: 0.9,
      transparent: true,
      opacity: 0.85,
    });
    const icoInner = new THREE.Mesh(icoInnerGeo, icoInnerMat);

    const icoWireGeo = new THREE.IcosahedronGeometry(4.6, 1);
    const icoWireMat = new THREE.MeshStandardMaterial({
      color: 0x00f5ff,
      emissive: 0x00f5ff,
      emissiveIntensity: 0.5,
      wireframe: true,
    });
    const icoWire = new THREE.Mesh(icoWireGeo, icoWireMat);

    // Orbiting Electron Nodes around Icosahedron
    const satelliteCount = 8;
    const satellites = [];
    const satGeo = new THREE.SphereGeometry(0.35, 12, 12);
    const satMat = new THREE.MeshBasicMaterial({ color: 0xc084fc });

    for (let i = 0; i < satelliteCount; i++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      satellites.push(sat);
      aboutGroup.add(sat);
    }

    aboutGroup.add(icoInner, icoWire);
    aboutGroup.position.set(-11, 0, 0); // Floats left of the about cards
    aboutGroup.scale.set(0.001, 0.001, 0.001);
    scene.add(aboutGroup);

    // C. Section 3: Skills (Orbital Tech Cube Matrix)
    const skillsGroup = new THREE.Group();
    const cubeCoreGeo = new THREE.BoxGeometry(3.8, 3.8, 3.8);
    const cubeCoreMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      wireframe: true,
    });
    const cubeCore = new THREE.Mesh(cubeCoreGeo, cubeCoreMat);
    skillsGroup.add(cubeCore);

    // 12 Orbiting Satellite Cubes
    const smallCubes = [];
    const smallCubeGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    for (let i = 0; i < 10; i++) {
      const smallCubeMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0xa855f7 : 0x00f5ff,
        emissive: i % 2 === 0 ? 0x7c3aed : 0x00f5ff,
        emissiveIntensity: 0.6,
        wireframe: true,
      });
      const sc = new THREE.Mesh(smallCubeGeo, smallCubeMat);
      smallCubes.push(sc);
      skillsGroup.add(sc);
    }
    skillsGroup.position.set(11, 0, 0);
    skillsGroup.scale.set(0.001, 0.001, 0.001);
    scene.add(skillsGroup);

    // D. Section 4: Projects (Cyber Portal Gateway / Tunnel Rings)
    const projectsGroup = new THREE.Group();
    const portalRings = [];
    const ringCount = 7;
    for (let i = 0; i < ringCount; i++) {
      const pRingGeo = new THREE.TorusGeometry(5.5 - i * 0.4, 0.12, 16, 60);
      const pRingMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f5ff : 0xa855f7,
        wireframe: true,
        transparent: true,
        opacity: 0.8 - i * 0.08,
      });
      const pRing = new THREE.Mesh(pRingGeo, pRingMat);
      pRing.position.z = -i * 3.5;
      portalRings.push(pRing);
      projectsGroup.add(pRing);
    }
    projectsGroup.position.set(0, 0, -4);
    projectsGroup.scale.set(0.001, 0.001, 0.001);
    scene.add(projectsGroup);

    // E. Section 5: Experience / Hackathons (3D Crystal Trophy Lattice)
    const expGroup = new THREE.Group();
    const octGeo = new THREE.OctahedronGeometry(4.5, 0);
    const octMat = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0x9333ea,
      emissiveIntensity: 0.5,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });
    const octahedron = new THREE.Mesh(octGeo, octMat);

    const octInner = new THREE.Mesh(
      new THREE.OctahedronGeometry(2.8, 0),
      new THREE.MeshStandardMaterial({
        color: 0x34d399,
        emissive: 0x059669,
        emissiveIntensity: 0.6,
        wireframe: true,
      })
    );
    expGroup.add(octahedron, octInner);
    expGroup.position.set(-10, 0, 0);
    expGroup.scale.set(0.001, 0.001, 0.001);
    scene.add(expGroup);

    // F. Section 6: Contact & Resume (Cosmic Beacon / Communications Vortex)
    const contactGroup = new THREE.Group();
    const beaconRings = [];
    for (let i = 0; i < 5; i++) {
      const bGeo = new THREE.TorusGeometry(3.5 + i * 1.2, 0.08, 16, 80);
      const bMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x00f5ff : 0xec4899,
        transparent: true,
        opacity: 0.7 - i * 0.1,
      });
      const bMesh = new THREE.Mesh(bGeo, bMat);
      beaconRings.push(bMesh);
      contactGroup.add(bMesh);
    }
    contactGroup.position.set(10, 0, 0);
    contactGroup.scale.set(0.001, 0.001, 0.001);
    scene.add(contactGroup);

    // 5. Scroll & Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;
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

    // 6. Animation Loop (60/120fps with smooth Lerp)
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Compute scroll velocity
      const currentScrollY = window.scrollY;
      const deltaScroll = currentScrollY - lastScrollY;
      scrollVelocity += (deltaScroll * 0.05 - scrollVelocity) * 0.1;
      lastScrollY = currentScrollY;

      // Overall scroll percentage (0 to 1)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? Math.min(Math.max(currentScrollY / docHeight, 0), 1) : 0;

      // Mouse Parallax on Camera
      targetCameraX = mouseX * 2.5;
      targetCameraY = -mouseY * 2.5;
      camera.position.x += (targetCameraX - camera.position.x) * 0.05;
      camera.position.y += (targetCameraY - camera.position.y) * 0.05;

      // Dynamic warp starfield drift & scroll speed reactivity
      const positions = starGeo.attributes.position.array;
      const speed = 0.08 + Math.abs(scrollVelocity) * 0.15;
      for (let i = 0; i < starCount; i++) {
        positions[i * 3 + 2] += speed;
        if (positions[i * 3 + 2] > 60) {
          positions[i * 3 + 2] = -80;
        }
      }
      starGeo.attributes.position.needsUpdate = true;
      starField.rotation.y = elapsedTime * 0.02;

      // Helper function to calculate active weight for a section
      const getSectionWeight = (center, spread) => {
        const dist = Math.abs(scrollProgress - center);
        return Math.max(0, 1 - dist / spread);
      };

      // SECTION WEIGHTS:
      // Hero: 0.02
      // About: 0.20
      // Skills: 0.38
      // Projects: 0.58
      // Experience: 0.78
      // Resume / Contact: 0.94
      const heroWeight = getSectionWeight(0.04, 0.14);
      const aboutWeight = getSectionWeight(0.20, 0.14);
      const skillsWeight = getSectionWeight(0.38, 0.14);
      const projectsWeight = getSectionWeight(0.58, 0.14);
      const expWeight = getSectionWeight(0.78, 0.14);
      const contactWeight = getSectionWeight(0.94, 0.14);

      // A. HERO 3D ROTATION & TRANSITION
      const heroTargetScale = heroWeight > 0.05 ? heroWeight * 1.1 : 0.001;
      heroGroup.scale.lerp(new THREE.Vector3(heroTargetScale, heroTargetScale, heroTargetScale), 0.1);
      heroGroup.rotation.x = elapsedTime * 0.35 + scrollProgress * 4;
      heroGroup.rotation.y = elapsedTime * 0.45;
      heroTorus2.rotation.z = -elapsedTime * 0.5;

      // B. ABOUT 3D MORPHING POLYHEDRON
      const aboutTargetScale = aboutWeight > 0.05 ? aboutWeight * 1.05 : 0.001;
      aboutGroup.scale.lerp(new THREE.Vector3(aboutTargetScale, aboutTargetScale, aboutTargetScale), 0.1);
      aboutGroup.rotation.x = elapsedTime * 0.3 + scrollProgress * 6;
      aboutGroup.rotation.y = elapsedTime * 0.4;
      icoWire.rotation.z = elapsedTime * 0.25;

      // Satellites orbiting about core
      satellites.forEach((sat, i) => {
        const angle = elapsedTime * 1.2 + (i * Math.PI * 2) / satelliteCount;
        sat.position.x = Math.cos(angle) * 5.8;
        sat.position.y = Math.sin(angle * 1.5) * 3.2;
        sat.position.z = Math.sin(angle) * 5.8;
      });

      // C. SKILLS 3D CUBE MATRIX
      const skillsTargetScale = skillsWeight > 0.05 ? skillsWeight * 1.1 : 0.001;
      skillsGroup.scale.lerp(new THREE.Vector3(skillsTargetScale, skillsTargetScale, skillsTargetScale), 0.1);
      cubeCore.rotation.x = elapsedTime * 0.5 + scrollProgress * 5;
      cubeCore.rotation.y = elapsedTime * 0.6;
      smallCubes.forEach((sc, i) => {
        const theta = elapsedTime * 0.8 + (i * Math.PI * 2) / smallCubes.length;
        sc.position.x = Math.cos(theta) * 5.2;
        sc.position.y = Math.sin(theta * 1.3) * 3.8;
        sc.position.z = Math.sin(theta) * 5.2;
        sc.rotation.x = elapsedTime * 1.2;
        sc.rotation.y = elapsedTime * 0.9;
      });

      // D. PROJECTS 3D PORTAL GATEWAY
      const projectsTargetScale = projectsWeight > 0.05 ? projectsWeight * 1.1 : 0.001;
      projectsGroup.scale.lerp(new THREE.Vector3(projectsTargetScale, projectsTargetScale, projectsTargetScale), 0.1);
      portalRings.forEach((pRing, i) => {
        pRing.rotation.z = elapsedTime * 0.4 * (i % 2 === 0 ? 1 : -1) + scrollProgress * 5;
        pRing.rotation.x = Math.sin(elapsedTime * 0.5 + i) * 0.2;
      });

      // E. EXPERIENCE 3D CRYSTAL LATTICE
      const expTargetScale = expWeight > 0.05 ? expWeight * 1.1 : 0.001;
      expGroup.scale.lerp(new THREE.Vector3(expTargetScale, expTargetScale, expTargetScale), 0.1);
      expGroup.rotation.x = elapsedTime * 0.45 + scrollProgress * 4;
      expGroup.rotation.y = elapsedTime * 0.55;
      octInner.rotation.z = -elapsedTime * 0.7;

      // F. CONTACT 3D COMMUNICATIONS BEACON
      const contactTargetScale = contactWeight > 0.05 ? contactWeight * 1.1 : 0.001;
      contactGroup.scale.lerp(new THREE.Vector3(contactTargetScale, contactTargetScale, contactTargetScale), 0.1);
      contactGroup.rotation.x = Math.PI / 4 + Math.sin(elapsedTime * 0.4) * 0.15;
      contactGroup.rotation.z = elapsedTime * 0.3;
      beaconRings.forEach((bRing, i) => {
        const pulse = Math.sin(elapsedTime * 2.5 - i * 0.8);
        bRing.scale.setScalar(1 + pulse * 0.08);
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
      heroTorusGeo.dispose();
      heroTorusMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-15 w-full h-full"
      style={{ zIndex: -15 }}
      aria-hidden="true"
    />
  );
}
