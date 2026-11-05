import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Checks whether WebGL is supported by the user's browser/hardware.
 */
function isWebGLSupported() {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

/**
 * Premium Hybrid 3D Cosmic Environment with Section-Specific 3D Objects
 * Driven by GSAP ScrollTrigger & Lenis smooth scroll synchronization.
 */
export default function Cosmic3DScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isWebGLSupported()) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Track resources for complete memory cleanup on unmount
    const disposables = [];
    const track = (resource) => {
      if (resource) disposables.push(resource);
      return resource;
    };

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x04050d, 0.016);

    const isMobile = window.innerWidth < 768;

    const camera = new THREE.PerspectiveCamera(
      52,
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

    // 2. High-Tech Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 3.2, 90);
    purpleLight.position.set(18, 14, 12);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x00f5ff, 3.2, 90);
    cyanLight.position.set(-18, -14, 12);
    scene.add(cyanLight);

    // =========================================================================
    // 3. PERSISTENT COSMIC ENVIRONMENT: HYPERSPACE STARFIELD
    // =========================================================================
    const starCount = isMobile ? 700 : 1800;
    const starGeo = track(new THREE.BufferGeometry());
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color(0x00f5ff), // Cyan
      new THREE.Color(0xa855f7), // Neon Purple
      new THREE.Color(0x38bdf8), // Sky Blue
      new THREE.Color(0xc084fc), // Soft Violet
      new THREE.Color(0xffffff), // Pure Starlight
    ];

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 160;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 160;
      starPositions[i * 3 + 2] = -Math.random() * 120;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = track(
      new THREE.PointsMaterial({
        size: 0.7,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      })
    );

    const starField = new THREE.Points(starGeo, starMaterial);
    scene.add(starField);

    // Cosmic Shooting Stars / Meteor Trails
    const meteorCount = isMobile ? 3 : 5;
    const meteors = [];
    const meteorGroup = new THREE.Group();

    for (let m = 0; m < meteorCount; m++) {
      const mLength = 4.5 + Math.random() * 4;
      const mGeo = track(
        new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(-mLength, -mLength * 0.6, -mLength * 0.35),
        ])
      );
      const mMat = track(
        new THREE.LineBasicMaterial({
          color: m % 2 === 0 ? 0x00f5ff : 0xa855f7,
          transparent: true,
          opacity: 0,
          blending: THREE.AdditiveBlending,
        })
      );
      const meteorLine = new THREE.Line(mGeo, mMat);
      meteors.push({
        mesh: meteorLine,
        active: false,
        timer: Math.random() * 150,
        speed: 1.1 + Math.random() * 1.4,
        opacity: 0,
      });
      meteorGroup.add(meteorLine);
    }
    scene.add(meteorGroup);

    // =========================================================================
    // SECTION 1: HERO - GLOWING 3D PLANETARY STRUCTURE & ORBITAL GYROSCOPE
    // =========================================================================
    const heroGroup = new THREE.Group();
    // Offset to right on desktop to align behind developer art, centered on mobile
    heroGroup.position.set(isMobile ? 0 : 8.5, isMobile ? 2 : 1.5, -4);

    // Glowing planetary core
    const planetOuterGeo = track(new THREE.SphereGeometry(3.0, 24, 24));
    const planetOuterMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 0.5,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      })
    );
    const planetOuter = new THREE.Mesh(planetOuterGeo, planetOuterMat);

    const planetInnerGeo = track(new THREE.SphereGeometry(2.0, 18, 18));
    const planetInnerMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x1e1b4b,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.65,
        roughness: 0.2,
      })
    );
    const planetInner = new THREE.Mesh(planetInnerGeo, planetInnerMat);
    heroGroup.add(planetOuter, planetInner);

    // Multiple rotating orbital rings (Gyroscope)
    const heroRings = [];
    const ringConfigs = [
      { r: 4.8, tube: 0.05, color: 0xa855f7, rotX: 0.4, rotY: 0.2 },
      { r: 3.9, tube: 0.04, color: 0x00f5ff, rotX: -0.5, rotZ: 0.4 },
      { r: 5.6, tube: 0.03, color: 0xc084fc, rotY: 0.7, rotX: -0.3 },
    ];

    ringConfigs.forEach((cfg) => {
      const rGeo = track(new THREE.TorusGeometry(cfg.r, cfg.tube, 16, 90));
      const rMat = track(
        new THREE.MeshBasicMaterial({
          color: cfg.color,
          wireframe: true,
          transparent: true,
          opacity: 0.55,
        })
      );
      const ring = new THREE.Mesh(rGeo, rMat);
      ring.rotation.set(cfg.rotX || 0, cfg.rotY || 0, cfg.rotZ || 0);
      heroRings.push(ring);
      heroGroup.add(ring);
    });

    // Orbiting micro-satellites
    const satGeo = track(new THREE.BoxGeometry(0.35, 0.35, 0.35));
    const satMat = track(
      new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true })
    );
    const heroSatellites = [];
    for (let s = 0; s < 3; s++) {
      const sat = new THREE.Mesh(satGeo, satMat);
      heroSatellites.push(sat);
      heroGroup.add(sat);
    }
    scene.add(heroGroup);

    // =========================================================================
    // SECTION 2: ABOUT - FLOATING 3D GEOMETRIC CORE / POLYHEDRON
    // =========================================================================
    const aboutGroup = new THREE.Group();
    aboutGroup.position.set(isMobile ? 0 : -9.5, 0, -6);
    aboutGroup.scale.setScalar(0.001); // Controlled by ScrollTrigger

    const icoGeo = track(new THREE.IcosahedronGeometry(2.8, 1));
    const icoMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x00f5ff,
        emissive: 0x0284c7,
        emissiveIntensity: 0.55,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      })
    );
    const icoOuter = new THREE.Mesh(icoGeo, icoMat);

    const dodecaGeo = track(new THREE.DodecahedronGeometry(1.6, 0));
    const dodecaMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x2e1065,
        emissive: 0x9333ea,
        emissiveIntensity: 0.7,
        roughness: 0.3,
      })
    );
    const dodecaInner = new THREE.Mesh(dodecaGeo, dodecaMat);
    aboutGroup.add(icoOuter, dodecaInner);

    // Orbiting particle ring around polyhedron
    const aboutParticleCount = 28;
    const aboutPGeo = track(new THREE.BufferGeometry());
    const aboutPPos = new Float32Array(aboutParticleCount * 3);
    for (let p = 0; p < aboutParticleCount; p++) {
      const angle = (p / aboutParticleCount) * Math.PI * 2;
      const radius = 3.8 + (p % 2) * 0.4;
      aboutPPos[p * 3] = Math.cos(angle) * radius;
      aboutPPos[p * 3 + 1] = Math.sin(angle) * radius * 0.6;
      aboutPPos[p * 3 + 2] = (p % 3 - 1) * 0.8;
    }
    aboutPGeo.setAttribute('position', new THREE.BufferAttribute(aboutPPos, 3));
    const aboutPMat = track(
      new THREE.PointsMaterial({
        color: 0xa855f7,
        size: 0.4,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      })
    );
    const aboutParticles = new THREE.Points(aboutPGeo, aboutPMat);
    aboutGroup.add(aboutParticles);
    scene.add(aboutGroup);

    // =========================================================================
    // SECTION 3: SKILLS - 3D TECHNOLOGY UNIVERSE & ROTATING TESSERACT
    // =========================================================================
    const skillsGroup = new THREE.Group();
    skillsGroup.position.set(isMobile ? 0 : 9.5, 0, -6);
    skillsGroup.scale.setScalar(0.001);

    // Central rotating cyber tesseract (outer cube + inner rotated cube)
    const tesseractOuterGeo = track(new THREE.BoxGeometry(3.2, 3.2, 3.2));
    const tesseractOuterMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x00f5ff,
        emissive: 0x00f5ff,
        emissiveIntensity: 0.4,
        wireframe: true,
      })
    );
    const tesseractOuter = new THREE.Mesh(tesseractOuterGeo, tesseractOuterMat);

    const tesseractInnerGeo = track(new THREE.BoxGeometry(2.0, 2.0, 2.0));
    const tesseractInnerMat = track(
      new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        emissive: 0x9333ea,
        emissiveIntensity: 0.6,
        wireframe: true,
      })
    );
    const tesseractInner = new THREE.Mesh(tesseractInnerGeo, tesseractInnerMat);
    skillsGroup.add(tesseractOuter, tesseractInner);

    // 4 Orbiting Tech Elements (representing Languages, Frontend, Backend, Tools)
    const techOrbitals = [];
    const techGeos = [
      track(new THREE.OctahedronGeometry(0.7, 0)),
      track(new THREE.TetrahedronGeometry(0.7, 0)),
      track(new THREE.BoxGeometry(0.8, 0.8, 0.8)),
      track(new THREE.IcosahedronGeometry(0.65, 0)),
    ];
    techGeos.forEach((geo, idx) => {
      const mat = track(
        new THREE.MeshBasicMaterial({
          color: idx % 2 === 0 ? 0x00f5ff : 0xa855f7,
          wireframe: true,
          transparent: true,
          opacity: 0.75,
        })
      );
      const orbMesh = new THREE.Mesh(geo, mat);
      techOrbitals.push(orbMesh);
      skillsGroup.add(orbMesh);
    });
    scene.add(skillsGroup);

    // =========================================================================
    // SECTION 4: PROJECTS - CINEMATIC 3D PORTAL / DIMENSIONAL TUNNEL
    // =========================================================================
    const projectsGroup = new THREE.Group();
    projectsGroup.position.set(0, 0, -12);
    projectsGroup.scale.setScalar(0.001);

    // Series of 5 concentric rotating portal rings spaced in depth
    const portalRings = [];
    for (let i = 0; i < 5; i++) {
      const ringRadius = 6.0 - i * 0.6;
      const pRingGeo = track(new THREE.TorusGeometry(ringRadius, 0.05, 16, 80));
      const pRingMat = track(
        new THREE.MeshStandardMaterial({
          color: i % 2 === 0 ? 0x00f5ff : 0xa855f7,
          emissive: i % 2 === 0 ? 0x0284c7 : 0x7c3aed,
          emissiveIntensity: 0.55,
          wireframe: true,
          transparent: true,
          opacity: 0.5 - i * 0.06,
        })
      );
      const pRing = new THREE.Mesh(pRingGeo, pRingMat);
      pRing.position.z = -i * 3.5;
      portalRings.push(pRing);
      projectsGroup.add(pRing);
    }

    // Swirling portal vortex particles
    const portalPCount = 90;
    const portalPGeo = track(new THREE.BufferGeometry());
    const portalPPos = new Float32Array(portalPCount * 3);
    for (let p = 0; p < portalPCount; p++) {
      const angle = (p / portalPCount) * Math.PI * 6;
      const radius = 2.0 + (p / portalPCount) * 4.5;
      portalPPos[p * 3] = Math.cos(angle) * radius;
      portalPPos[p * 3 + 1] = Math.sin(angle) * radius;
      portalPPos[p * 3 + 2] = -(p / portalPCount) * 16;
    }
    portalPGeo.setAttribute('position', new THREE.BufferAttribute(portalPPos, 3));
    const portalPMat = track(
      new THREE.PointsMaterial({
        color: 0x00f5ff,
        size: 0.45,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      })
    );
    const portalVortex = new THREE.Points(portalPGeo, portalPMat);
    projectsGroup.add(portalVortex);
    scene.add(projectsGroup);

    // =========================================================================
    // SECTION 5: CERTIFICATES - FLOATING GLASS ACHIEVEMENT CRYSTALS
    // =========================================================================
    const certsGroup = new THREE.Group();
    certsGroup.position.set(isMobile ? 0 : -9.5, 0, -6);
    certsGroup.scale.setScalar(0.001);

    // Tall crystalline central prism
    const crystalGeo = track(new THREE.OctahedronGeometry(2.5, 0));
    const crystalMat = track(
      new THREE.MeshStandardMaterial({
        color: 0xa855f7,
        emissive: 0x6b21a8,
        emissiveIntensity: 0.6,
        wireframe: true,
        transparent: true,
        opacity: 0.65,
      })
    );
    const centralCrystal = new THREE.Mesh(crystalGeo, crystalMat);
    centralCrystal.scale.set(1.0, 1.7, 1.0);
    certsGroup.add(centralCrystal);

    // Floating glass badge planes
    const certPanels = [];
    for (let c = 0; c < 3; c++) {
      const panelGeo = track(new THREE.BoxGeometry(2.2, 1.4, 0.05));
      const panelMat = track(
        new THREE.MeshBasicMaterial({
          color: 0x00f5ff,
          wireframe: true,
          transparent: true,
          opacity: 0.45,
        })
      );
      const panel = new THREE.Mesh(panelGeo, panelMat);
      certPanels.push(panel);
      certsGroup.add(panel);
    }
    scene.add(certsGroup);

    // =========================================================================
    // SECTION 6: EXPERIENCE / HACKATHONS - 3D TROPHY & ORBITAL TIMELINE
    // =========================================================================
    const hackGroup = new THREE.Group();
    hackGroup.position.set(isMobile ? 0 : 9.5, 0, -6);
    hackGroup.scale.setScalar(0.001);

    // Geodesic Trophy Crown
    const trophyCrownGeo = track(new THREE.IcosahedronGeometry(2.0, 1));
    const trophyCrownMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x00f5ff,
        emissive: 0x0284c7,
        emissiveIntensity: 0.55,
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      })
    );
    const trophyCrown = new THREE.Mesh(trophyCrownGeo, trophyCrownMat);

    const trophyBaseGeo = track(new THREE.CylinderGeometry(0.8, 1.8, 2.2, 16));
    const trophyBaseMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x1e1b4b,
        emissive: 0x7c3aed,
        emissiveIntensity: 0.45,
        wireframe: true,
      })
    );
    const trophyBase = new THREE.Mesh(trophyBaseGeo, trophyBaseMat);
    trophyBase.position.y = -2.2;
    hackGroup.add(trophyCrown, trophyBase);

    // Orbital Timeline Helix Ring
    const helixCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.2, -2.5, 0),
      new THREE.Vector3(0, -1.0, 2.5),
      new THREE.Vector3(3.2, 0.5, 0),
      new THREE.Vector3(0, 2.0, -2.5),
      new THREE.Vector3(-2.8, 3.2, 0),
    ]);
    const helixGeo = track(new THREE.TubeGeometry(helixCurve, 40, 0.05, 8, false));
    const helixMat = track(
      new THREE.MeshBasicMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.6,
      })
    );
    const helixMesh = new THREE.Mesh(helixGeo, helixMat);
    hackGroup.add(helixMesh);
    scene.add(hackGroup);

    // =========================================================================
    // SECTION 7: RESUME - MINIMAL HOLOGRAPHIC FRAME & DATA PARTICLES
    // =========================================================================
    const resumeGroup = new THREE.Group();
    resumeGroup.position.set(isMobile ? 0 : -9.5, 0, -6);
    resumeGroup.scale.setScalar(0.001);

    // Floating Holographic Document Slate
    const slateGeo = track(new THREE.BoxGeometry(3.6, 5.0, 0.04));
    const slateMat = track(
      new THREE.MeshBasicMaterial({
        color: 0x00f5ff,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      })
    );
    const slateMesh = new THREE.Mesh(slateGeo, slateMat);

    // Interior scanline grid
    const scanlinesGeo = track(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-1.4, 1.5, 0.03),
        new THREE.Vector3(1.4, 1.5, 0.03),
        new THREE.Vector3(-1.4, 0.8, 0.03),
        new THREE.Vector3(1.4, 0.8, 0.03),
        new THREE.Vector3(-1.4, 0.1, 0.03),
        new THREE.Vector3(1.4, 0.1, 0.03),
        new THREE.Vector3(-1.4, -0.6, 0.03),
        new THREE.Vector3(1.4, -0.6, 0.03),
      ])
    );
    const scanlinesMat = track(
      new THREE.LineBasicMaterial({
        color: 0xa855f7,
        transparent: true,
        opacity: 0.5,
      })
    );
    const scanlines = new THREE.LineSegments(scanlinesGeo, scanlinesMat);
    resumeGroup.add(slateMesh, scanlines);
    scene.add(resumeGroup);

    // =========================================================================
    // SECTION 8: CONTACT - 3D COMMUNICATION BEACON & CONVERGING STREAM
    // =========================================================================
    const contactGroup = new THREE.Group();
    contactGroup.position.set(0, 1.5, -8);
    contactGroup.scale.setScalar(0.001);

    // Central beacon spire
    const spireGeo = track(new THREE.CylinderGeometry(0.08, 0.4, 6.0, 16));
    const spireMat = track(
      new THREE.MeshStandardMaterial({
        color: 0x00f5ff,
        emissive: 0x00f5ff,
        emissiveIntensity: 0.6,
        wireframe: true,
      })
    );
    const spireMesh = new THREE.Mesh(spireGeo, spireMat);

    // Pulsing radar broadcast rings
    const beaconRings = [];
    for (let b = 0; b < 3; b++) {
      const bRingGeo = track(new THREE.RingGeometry(1.6 + b * 1.2, 1.7 + b * 1.2, 32));
      const bRingMat = track(
        new THREE.MeshBasicMaterial({
          color: 0xa855f7,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.5 - b * 0.12,
        })
      );
      const bRing = new THREE.Mesh(bRingGeo, bRingMat);
      bRing.rotation.x = Math.PI / 2;
      beaconRings.push(bRing);
      contactGroup.add(bRing);
    }
    contactGroup.add(spireMesh);

    // Converging particle field
    const convPCount = 75;
    const convPGeo = track(new THREE.BufferGeometry());
    const convPPos = new Float32Array(convPCount * 3);
    const convPVel = [];

    for (let c = 0; c < convPCount; c++) {
      const r = 5.0 + Math.random() * 4.0;
      const th = Math.random() * Math.PI * 2;
      const ph = (Math.random() - 0.5) * Math.PI;
      convPPos[c * 3] = r * Math.cos(th) * Math.cos(ph);
      convPPos[c * 3 + 1] = r * Math.sin(ph);
      convPPos[c * 3 + 2] = r * Math.sin(th) * Math.cos(ph);
      convPVel.push({
        origR: r,
        currentR: r,
        th,
        ph,
        speed: 0.025 + Math.random() * 0.03,
      });
    }
    convPGeo.setAttribute('position', new THREE.BufferAttribute(convPPos, 3));
    const convPMat = track(
      new THREE.PointsMaterial({
        color: 0x00f5ff,
        size: 0.4,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      })
    );
    const convergingParticles = new THREE.Points(convPGeo, convPMat);
    contactGroup.add(convergingParticles);
    scene.add(contactGroup);

    // =========================================================================
    // 4. GSAP SCROLLTRIGGER ARCHITECTURE INTEGRATED WITH LENIS
    // =========================================================================
    const sectionTriggers = [];

    // State object interpolated for camera flight
    const cameraTarget = {
      x: 0,
      y: 0,
      z: 26,
      lookAtX: 0,
      lookAtY: 0,
    };

    const sectionConfigs = [
      {
        id: 'home',
        group: heroGroup,
        camX: 0,
        camY: 0,
        camZ: 26,
        lookX: 0,
      },
      {
        id: 'about',
        group: aboutGroup,
        camX: isMobile ? 0 : 2.5,
        camY: -3,
        camZ: 24,
        lookX: isMobile ? 0 : -2,
      },
      {
        id: 'skills',
        group: skillsGroup,
        camX: isMobile ? 0 : -2.5,
        camY: -6,
        camZ: 24,
        lookX: isMobile ? 0 : 2,
      },
      {
        id: 'projects',
        group: projectsGroup,
        camX: 0,
        camY: -9,
        camZ: 19, // Subtle portal travel depth!
        lookX: 0,
      },
      {
        id: 'certifications',
        group: certsGroup,
        camX: isMobile ? 0 : 2.5,
        camY: -12,
        camZ: 24,
        lookX: isMobile ? 0 : -2,
      },
      {
        id: 'experience',
        group: hackGroup,
        camX: isMobile ? 0 : -2.5,
        camY: -15,
        camZ: 24,
        lookX: isMobile ? 0 : 2,
      },
      {
        id: 'resume',
        group: resumeGroup,
        camX: isMobile ? 0 : 2.5,
        camY: -18,
        camZ: 25,
        lookX: isMobile ? 0 : -2,
      },
      {
        id: 'contact',
        group: contactGroup,
        camX: 0,
        camY: -21,
        camZ: 23,
        lookX: 0,
      },
    ];

    sectionConfigs.forEach((cfg) => {
      const el = document.getElementById(cfg.id);
      if (!el) return;

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress; // 0 to 1 as element enters and leaves
          // Parabolic bell curve for smooth scale & opacity: peaks at p = 0.5
          const bell = Math.sin(p * Math.PI);

          if (cfg.group) {
            // Hero stays visible at scroll top (p < 0.5)
            if (cfg.id === 'home') {
              const heroFactor = Math.max(0, 1 - p * 1.5);
              cfg.group.scale.setScalar(heroFactor);
            } else {
              cfg.group.scale.setScalar(Math.max(0.001, bell));
            }
          }

          // If this section is active in the viewport, glide camera target
          if (self.isActive) {
            cameraTarget.camX = cfg.camX;
            cameraTarget.camY = cfg.camY;
            cameraTarget.camZ = cfg.camZ;
            cameraTarget.lookAtX = cfg.lookX;
          }
        },
      });

      sectionTriggers.push(trigger);
    });

    // 5. Mouse Parallax & Dynamic Tracking
    let mouseX = 0;
    let mouseY = 0;
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

    // Tab visibility handling for zero GPU drain in background
    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 6. High-Performance Render Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isTabVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Track scroll physics smoothly
      const currentScrollY = window.scrollY;
      const deltaScroll = currentScrollY - lastScrollY;
      scrollVelocity += (deltaScroll * 0.05 - scrollVelocity) * 0.1;
      lastScrollY = currentScrollY;

      // Smooth Camera Interpolation (GSAP target + Mouse Parallax)
      const targetX = (cameraTarget.camX || 0) + mouseX * 1.2;
      const targetY = (cameraTarget.camY || 0) - mouseY * 1.0;
      const targetZ = cameraTarget.camZ || 26;

      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.position.z += (targetZ - camera.position.z) * 0.05;
      camera.lookAt(cameraTarget.lookAtX || 0, camera.position.y, 0);

      // Starfield Warp Drift
      const starPos = starGeo.attributes.position.array;
      const warpSpeed = prefersReducedMotion ? 0.03 : 0.06 + Math.abs(scrollVelocity) * 0.25;
      for (let i = 0; i < starCount; i++) {
        starPos[i * 3 + 2] += warpSpeed;
        if (starPos[i * 3 + 2] > 25) {
          starPos[i * 3 + 2] = -120;
          starPos[i * 3] = (Math.random() - 0.5) * 160;
          starPos[i * 3 + 1] = (Math.random() - 0.5) * 160;
        }
      }
      starGeo.attributes.position.needsUpdate = true;
      starField.rotation.y = elapsedTime * 0.015;

      // Section 1: Hero Animations
      planetOuter.rotation.y = elapsedTime * 0.25;
      planetOuter.rotation.x = elapsedTime * 0.15;
      planetInner.rotation.y = -elapsedTime * 0.2;
      heroRings.forEach((r, idx) => {
        r.rotation.z = elapsedTime * (0.3 + idx * 0.15);
      });
      heroSatellites.forEach((sat, idx) => {
        const a = elapsedTime * (0.8 + idx * 0.3) + idx * 2;
        const radius = 4.2 + idx * 0.6;
        sat.position.set(Math.cos(a) * radius, Math.sin(a * 0.7) * radius * 0.5, Math.sin(a) * radius);
        sat.rotation.x = elapsedTime * 2;
      });

      // Section 2: About Polyhedron Animations
      icoOuter.rotation.y = elapsedTime * 0.35;
      icoOuter.rotation.x = elapsedTime * 0.25;
      dodecaInner.rotation.y = -elapsedTime * 0.3;
      aboutParticles.rotation.z = elapsedTime * 0.4;

      // Section 3: Skills Tesseract Animations
      tesseractOuter.rotation.x = elapsedTime * 0.3;
      tesseractOuter.rotation.y = elapsedTime * 0.35;
      tesseractInner.rotation.x = -elapsedTime * 0.4;
      tesseractInner.rotation.z = elapsedTime * 0.3;
      techOrbitals.forEach((orb, idx) => {
        const a = elapsedTime * 0.7 + (idx * Math.PI) / 2;
        const r = 3.6;
        orb.position.set(Math.cos(a) * r, Math.sin(a * 1.2) * 1.4, Math.sin(a) * r);
        orb.rotation.x = elapsedTime * 2;
      });

      // Section 4: Projects Portal Animations
      portalRings.forEach((pRing, idx) => {
        pRing.rotation.z = elapsedTime * (0.2 + idx * 0.08) * (idx % 2 === 0 ? 1 : -1);
      });
      portalVortex.rotation.z = -elapsedTime * 0.35;

      // Section 5: Certificates Crystal Animations
      centralCrystal.rotation.y = elapsedTime * 0.4;
      certPanels.forEach((panel, idx) => {
        const a = elapsedTime * 0.5 + (idx * Math.PI * 2) / 3;
        panel.position.set(Math.cos(a) * 3.4, Math.sin(elapsedTime + idx) * 0.5, Math.sin(a) * 3.4);
        panel.rotation.y = -a + Math.PI / 2;
      });

      // Section 6: Hackathons Trophy Animations
      trophyCrown.rotation.y = elapsedTime * 0.4;
      trophyCrown.rotation.z = Math.sin(elapsedTime * 0.8) * 0.15;
      helixMesh.rotation.y = -elapsedTime * 0.3;

      // Section 7: Resume Hologram Animations
      slateMesh.rotation.y = Math.sin(elapsedTime * 0.5) * 0.2;
      slateMesh.rotation.x = Math.cos(elapsedTime * 0.4) * 0.1;
      scanlines.rotation.y = slateMesh.rotation.y;
      scanlines.rotation.x = slateMesh.rotation.x;

      // Section 8: Contact Beacon Animations
      spireMesh.rotation.y = elapsedTime * 0.6;
      beaconRings.forEach((bRing, idx) => {
        const scaleVal = 1 + ((elapsedTime * 1.2 + idx * 0.8) % 2.5);
        bRing.scale.setScalar(scaleVal);
        bRing.material.opacity = Math.max(0, 0.6 - (scaleVal - 1) * 0.24);
      });

      // Converging Particles update
      const convArray = convPGeo.attributes.position.array;
      for (let c = 0; c < convPCount; c++) {
        const vel = convPVel[c];
        vel.currentR -= vel.speed;
        if (vel.currentR < 0.4) {
          vel.currentR = vel.origR;
        }
        convArray[c * 3] = vel.currentR * Math.cos(vel.th) * Math.cos(vel.ph);
        convArray[c * 3 + 1] = vel.currentR * Math.sin(vel.ph);
        convArray[c * 3 + 2] = vel.currentR * Math.sin(vel.th) * Math.cos(vel.ph);
      }
      convPGeo.attributes.position.needsUpdate = true;

      // Meteors update
      meteors.forEach((m) => {
        if (!m.active) {
          m.timer--;
          if (m.timer <= 0) {
            m.active = true;
            m.mesh.position.set(
              (Math.random() - 0.2) * 80,
              20 + Math.random() * 20,
              -15 - Math.random() * 20
            );
            m.opacity = 0;
          }
        } else {
          m.mesh.position.x -= m.speed;
          m.mesh.position.y -= m.speed * 0.6;
          m.mesh.position.z -= m.speed * 0.3;

          if (m.mesh.position.y > 0) {
            m.opacity = Math.min(m.opacity + 0.12, 0.85);
          } else {
            m.opacity = Math.max(m.opacity - 0.08, 0);
          }
          m.mesh.material.opacity = m.opacity;

          if (m.mesh.position.y < -35 || (m.opacity <= 0 && m.mesh.position.y < 0)) {
            m.active = false;
            m.timer = 120 + Math.random() * 300;
            m.mesh.material.opacity = 0;
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // 7. Thorough Resource Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      // Kill all created ScrollTriggers
      sectionTriggers.forEach((trigger) => trigger.kill());

      // Dispose all tracked geometries and materials
      disposables.forEach((item) => {
        if (item && typeof item.dispose === 'function') {
          item.dispose();
        }
      });

      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none w-full h-full"
      style={{ zIndex: -10 }}
      aria-hidden="true"
    />
  );
}
