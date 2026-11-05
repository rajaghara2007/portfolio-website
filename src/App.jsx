import React, { Suspense, lazy } from 'react';
import { useLenis } from './hooks/useLenis';
import { useWebGLSupport } from './hooks/useWebGLSupport';
import { useActiveSection } from './hooks/useActiveSection';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WebGLFallback from './components/WebGLFallback';
import TacticalCursor from './components/TacticalCursor';

import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import FigmaDesigns from './sections/FigmaDesigns';
import Certificates from './sections/Certificates';
import Hackathons from './sections/Hackathons';
import Achievements from './sections/Achievements';
import ResumeViewer from './sections/ResumeViewer';
import Contact from './sections/Contact';

// Code-split and lazy-load the Three.js 3D Batman canvas scene
const SceneContainer = lazy(() => import('./three/SceneContainer'));

const SECTION_IDS = [
  'hero',
  'about',
  'skills',
  'projects',
  'figma',
  'certificates',
  'hackathons',
  'achievements',
  'resume',
  'contact',
];

export default function App() {
  // Initialize Lenis smooth scroll
  useLenis();

  // Check WebGL availability & reduced motion preference
  const { isWebGLSupported } = useWebGLSupport();

  // Track active section for navbar indicators
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="relative min-h-screen bg-background text-slate-100 selection:bg-amber-500/30 selection:text-white bat-grid">
      {/* Batman / WayneTech Custom HUD Cursor with click ripple fx */}
      <TacticalCursor />

      {/* 3D Batman Gotham Canvas Scene or Fallback */}
      {isWebGLSupported ? (
        <Suspense fallback={<WebGLFallback />}>
          <SceneContainer />
        </Suspense>
      ) : (
        <WebGLFallback />
      )}

      {/* Floating Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Page Sections */}
      <main className="relative z-10 space-y-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <FigmaDesigns />
        <Certificates />
        <Hackathons />
        <Achievements />
        <ResumeViewer />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
