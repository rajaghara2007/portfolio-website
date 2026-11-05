import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function GothamCityGrid() {
  const gridRef = useRef();

  useFrame((state, delta) => {
    if (gridRef.current) {
      gridRef.current.position.z = (gridRef.current.position.z + delta * 0.8) % 2;
    }
  });

  return (
    <group position={[0, -6, -5]} rotation={[-Math.PI / 2.2, 0, 0]}>
      {/* Tactical Gotham Sonar Grid Plane */}
      <mesh ref={gridRef}>
        <planeGeometry args={[60, 60, 40, 40]} />
        <meshBasicMaterial
          color="#f59e0b"
          wireframe
          transparent
          opacity={0.06}
        />
      </mesh>

      {/* Concentric Sonar Pulse Rings */}
      <mesh position={[0, 0, 0.05]}>
        <ringGeometry args={[4, 4.05, 64]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.15} />
      </mesh>
      <mesh position={[0, 0, 0.05]}>
        <ringGeometry args={[8, 8.05, 64]} />
        <meshBasicMaterial color="#f59e0b" transparent opacity={0.12} />
      </mesh>
      <mesh position={[0, 0, 0.05]}>
        <ringGeometry args={[14, 14.05, 64]} />
        <meshBasicMaterial color="#ef4444" transparent opacity={0.08} />
      </mesh>
    </group>
  );
}

