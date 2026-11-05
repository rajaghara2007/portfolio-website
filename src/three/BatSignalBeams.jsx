import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BatSignalBeams() {
  const beam1Ref = useRef();
  const beam2Ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (beam1Ref.current) {
      beam1Ref.current.rotation.z = Math.sin(t * 0.4) * 0.25 - 0.4;
      beam1Ref.current.rotation.x = Math.cos(t * 0.3) * 0.15;
    }

    if (beam2Ref.current) {
      beam2Ref.current.rotation.z = -Math.cos(t * 0.35) * 0.25 + 0.35;
      beam2Ref.current.rotation.x = Math.sin(t * 0.45) * 0.15;
    }
  });

  return (
    <group position={[0, -10, -8]}>
      {/* Primary Bat-Signal Beam 1 (Amber / Gold) */}
      <group ref={beam1Ref} position={[-4, 0, 0]}>
        <mesh position={[0, 15, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[4.5, 0.4, 30, 32, 1, true]} />
          <meshBasicMaterial
            color="#fbbf24"
            transparent
            opacity={0.12}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Secondary Searchlight Beam 2 (Gotham Cool White / Cyan) */}
      <group ref={beam2Ref} position={[4, 0, 0]}>
        <mesh position={[0, 15, 0]} rotation={[0, 0, 0]}>
          <cylinderGeometry args={[4.0, 0.35, 30, 32, 1, true]} />
          <meshBasicMaterial
            color="#38bdf8"
            transparent
            opacity={0.08}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>
    </group>
  );
}

