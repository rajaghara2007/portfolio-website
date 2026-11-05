import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BatSwarm({ count = 75 }) {
  const batsGroupRef = useRef();
  const wingsRefs = useRef([]);

  // Generate initial flight trajectories for each bat in the swarm
  const batsData = useMemo(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        radius: 6 + Math.random() * 18,
        speed: 0.6 + Math.random() * 1.2,
        heightOffset: (Math.random() - 0.5) * 16,
        phase: Math.random() * Math.PI * 2,
        wingSpeed: 10 + Math.random() * 10,
        tilt: (Math.random() - 0.5) * 0.4,
        scale: 0.12 + Math.random() * 0.18,
      });
    }
    return data;
  }, [count]);

  // Create a minimal geometric bat silhouette
  const batGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 0.2);
    shape.lineTo(0.1, 0.4);
    shape.lineTo(0.18, 0.25);
    shape.bezierCurveTo(0.6, 0.45, 1.2, 0.6, 1.8, 0.7);
    shape.lineTo(1.85, 0.65);
    shape.bezierCurveTo(1.4, 0.2, 1.1, 0.05, 0.9, -0.1);
    shape.bezierCurveTo(0.7, -0.25, 0.4, -0.3, 0.2, -0.2);
    shape.lineTo(0, -0.45);
    // Left wing
    shape.lineTo(-0.2, -0.2);
    shape.bezierCurveTo(-0.4, -0.3, -0.7, -0.25, -0.9, -0.1);
    shape.bezierCurveTo(-1.1, 0.05, -1.4, 0.2, -1.85, 0.65);
    shape.lineTo(-1.8, 0.7);
    shape.bezierCurveTo(-1.2, 0.6, -0.6, 0.45, -0.18, 0.25);
    shape.lineTo(-0.1, 0.4);
    shape.closePath();

    const geom = new THREE.ShapeGeometry(shape);
    geom.center();
    return geom;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (batsGroupRef.current) {
      batsGroupRef.current.children.forEach((batMesh, i) => {
        const d = batsData[i];
        if (!d) return;

        // Swirling circular / elliptical path around Gotham sky
        const angle = t * d.speed * 0.5 + d.phase;
        const x = Math.cos(angle) * d.radius;
        const z = Math.sin(angle) * d.radius * 0.8;
        const y = d.heightOffset + Math.sin(t * d.speed + d.phase) * 1.5;

        batMesh.position.set(x, y, z);

        // Face trajectory direction
        batMesh.rotation.y = -angle + Math.PI / 2;
        batMesh.rotation.z = Math.sin(t * d.speed) * 0.2 + d.tilt;

        // Flapping wings simulation via scaling along Z / Y axis
        const flap = Math.sin(t * d.wingSpeed);
        batMesh.scale.set(d.scale, d.scale * (0.8 + flap * 0.35), d.scale);
      });
    }
  });

  return (
    <group ref={batsGroupRef}>
      {batsData.map((d, i) => (
        <mesh key={i} geometry={batGeometry}>
          <meshBasicMaterial
            color="#08090d"
            side={THREE.DoubleSide}
            transparent
            opacity={0.85}
          />
        </mesh>
      ))}
    </group>
  );
}

