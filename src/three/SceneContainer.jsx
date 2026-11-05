import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { BatarangModel } from './BatarangModel';
import { BatSwarm } from './BatSwarm';
import { BatSignalBeams } from './BatSignalBeams';
import { GothamCityGrid } from './GothamCityGrid';
import { ScrollCameraController } from './ScrollCameraController';

export default function SceneContainer() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.8], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        onCreated={({ scene }) => {
          // Atmospheric Gotham mist and darkness
          scene.fog = new THREE.FogExp2('#020204', 0.035);
        }}
      >
        <Suspense fallback={null}>
          {/* Moody Gotham Lighting */}
          <ambientLight intensity={0.35} color="#0d1117" />
          
          {/* Harsh Rim Lighting for Titanium Blade Edges */}
          <directionalLight position={[10, 15, 8]} intensity={2.5} color="#ffffff" />
          <directionalLight position={[-10, -5, -4]} intensity={1.5} color="#38bdf8" />
          
          {/* Bat-Signal Golden / Amber Key Spotlight */}
          <spotLight
            position={[0, 10, 6]}
            angle={0.6}
            penumbra={0.8}
            intensity={4.5}
            color="#fbbf24"
          />

          {/* Underglow Cyan Surveillance Light */}
          <pointLight position={[0, -6, 2]} intensity={2.0} color="#00f5ff" distance={15} />

          {/* 3D Gotham Components */}
          <BatarangModel mouse={mouse} />
          <BatSwarm count={65} />
          <BatSignalBeams />
          <GothamCityGrid />
          <ScrollCameraController />
        </Suspense>
      </Canvas>
    </div>
  );
}
