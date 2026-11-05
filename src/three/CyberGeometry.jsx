import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function CyberGeometry({ mouse }) {
  const outerRef = useRef();
  const innerRef = useRef();
  const ringRef = useRef();

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // Constant slow rotation
    if (outerRef.current) {
      outerRef.current.rotation.x = t * 0.15;
      outerRef.current.rotation.y = t * 0.2;
      outerRef.current.position.y = Math.sin(t * 1.5) * 0.15;

      // Mouse interactive tilt with lerp
      const targetX = (mouse.current.x * Math.PI) / 8;
      const targetY = (mouse.current.y * Math.PI) / 8;
      outerRef.current.rotation.y += THREE.MathUtils.lerp(0, targetX, 0.05);
      outerRef.current.rotation.x += THREE.MathUtils.lerp(0, -targetY, 0.05);
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = -t * 0.25;
      innerRef.current.rotation.z = t * 0.3;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.35;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={0.6}
          wireframe
          transparent
          opacity={0.45}
        />
      </mesh>

      {/* Inner Glowing Torus Knot */}
      <mesh ref={innerRef}>
        <torusKnotGeometry args={[1.0, 0.28, 100, 16]} />
        <meshStandardMaterial
          color="#818cf8"
          emissive="#4f46e5"
          emissiveIntensity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbital Neon Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[3.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.6} />
      </mesh>

      {/* Outer Accent Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#c084fc" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

