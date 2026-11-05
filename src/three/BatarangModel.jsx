import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BatarangModel({ mouse }) {
  const groupRef = useRef();
  const bladeRef = useRef();
  const coreRef = useRef();
  const ringRef = useRef();
  const ring2Ref = useRef();

  // Create the authentic aerodynamic 3D Batarang shape
  const batGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    
    // Top center notch between ears
    shape.moveTo(0, 0.38);
    // Right bat ear
    shape.lineTo(0.12, 0.72);
    // Right ear base
    shape.lineTo(0.25, 0.45);
    // Top edge curving outwards to the sharp wingtip
    shape.bezierCurveTo(0.8, 0.72, 1.6, 0.88, 2.45, 0.98);
    // Outer wingtip point
    shape.lineTo(2.55, 0.92);
    // Wing outer edge sweep into first scallop
    shape.bezierCurveTo(2.15, 0.35, 1.85, 0.15, 1.62, -0.05);
    // Scallop cut 2
    shape.bezierCurveTo(1.42, -0.32, 1.05, -0.42, 0.72, -0.35);
    // Scallop cut 3 into tail
    shape.bezierCurveTo(0.42, -0.52, 0.22, -0.68, 0, -0.8);
    // Left side mirrored: tail to scallop 3
    shape.bezierCurveTo(-0.22, -0.68, -0.42, -0.52, -0.72, -0.35);
    // Scallop 2
    shape.bezierCurveTo(-1.05, -0.42, -1.42, -0.32, -1.62, -0.05);
    // Scallop 1 to outer wingtip
    shape.bezierCurveTo(-1.85, 0.15, -2.15, 0.35, -2.55, 0.92);
    // Wingtip point
    shape.lineTo(-2.45, 0.98);
    // Top edge curving back into left ear
    shape.bezierCurveTo(-1.6, 0.88, -0.8, 0.72, -0.25, 0.45);
    // Left ear tip
    shape.lineTo(-0.12, 0.72);
    shape.closePath();

    // Center circular tactical grip / reactor port cut-out
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, 0.22, 0, Math.PI * 2, true);
    shape.holes.push(holePath);

    const geom = new THREE.ExtrudeGeometry(shape, {
      depth: 0.14,
      bevelEnabled: true,
      bevelSegments: 5,
      steps: 1,
      bevelSize: 0.05,
      bevelThickness: 0.05,
    });
    geom.center();
    return geom;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Floating harmonic hovering oscillation
      groupRef.current.position.y = Math.sin(t * 1.8) * 0.14;

      // Mouse tracking interpolation
      const targetRotY = (mouse.current.x * Math.PI) / 6;
      const targetRotX = (-mouse.current.y * Math.PI) / 7;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY + Math.sin(t * 0.8) * 0.08,
        0.06
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX + Math.cos(t * 1.1) * 0.05,
        0.06
      );
      groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.04;
    }

    if (coreRef.current) {
      // Pulsing tactical WayneTech core
      const pulse = 1.0 + Math.sin(t * 4.0) * 0.25;
      coreRef.current.scale.set(pulse, pulse, pulse);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 1.2;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.8) * 0.15;
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -t * 0.9;
      ring2Ref.current.rotation.y = Math.PI / 4 + Math.cos(t * 0.7) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[1.35, 1.35, 1.35]}>
      {/* Heavy Titanium Carbon Batarang Body */}
      <mesh ref={bladeRef} geometry={batGeometry}>
        <meshStandardMaterial
          color="#12141a"
          roughness={0.22}
          metalness={0.92}
          envMapIntensity={2.5}
        />
      </mesh>

      {/* Razor Edge Wireframe & Light Accent */}
      <mesh geometry={batGeometry} scale={[1.002, 1.002, 1.002]}>
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#d97706"
          emissiveIntensity={0.35}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* WayneTech Central Reactor Core */}
      <mesh ref={coreRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.18, 32, 32]} />
        <meshStandardMaterial
          color="#fbbf24"
          emissive="#f59e0b"
          emissiveIntensity={2.5}
          roughness={0.1}
          metalness={0.8}
        />
      </mesh>

      {/* Tactical Optical Point Light at Center of Batarang */}
      <pointLight position={[0, 0, 0.4]} color="#f59e0b" intensity={3.5} distance={5} />

      {/* Orbital WayneTech Gyro Rings */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.35, 0.018, 16, 80]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.55} />
      </mesh>

      <mesh ref={ring2Ref} position={[0, 0, 0]}>
        <torusGeometry args={[1.55, 0.014, 16, 80]} />
        <meshBasicMaterial color="#ef4444" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

