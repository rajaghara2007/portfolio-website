import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Hackathons from './sections/Hackathons';
import ResumeViewer from './sections/ResumeViewer';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Cosmic3DScene from './components/Cosmic3DScene';
import LogoPageTransition from './components/LogoPageTransition';
import ScrollProgressBar from './components/ScrollProgressBar';
import { useLenis } from './hooks/useLenis';

export default function App() {
  // Activate Lenis smooth scrolling with GSAP integration
  useLenis();

  // Navigation Logo Transition state
  const [transitionState, setTransitionState] = useState({
    isOpen: false,
    targetId: null,
    targetLabel: '',
  });

  const handleNavigate = (targetId, targetLabel) => {
    setTransitionState({
      isOpen: true,
      targetId,
      targetLabel: targetLabel || targetId.replace('#', '').toUpperCase(),
    });
  };

  const handleTransitionComplete = () => {
    if (transitionState.targetId) {
      const el = document.querySelector(transitionState.targetId);
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -30, duration: 1.0 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setTransitionState({ isOpen: false, targetId: null, targetLabel: '' });
  };

  return (
    <div className="min-h-screen bg-[#04050d] text-slate-100 selection:bg-purple-600/40 selection:text-purple-200 relative overflow-x-hidden">
      
      {/* 1. Interactive 3D Canvas (Space & AI Warp System with zero text occlusion) */}
      <Cosmic3DScene />

      {/* 2. Cyber Laser Scroll Progress Indicator */}
      <ScrollProgressBar />

      {/* 3. Cinematic Logo Transition Overlay */}
      <LogoPageTransition
        isOpen={transitionState.isOpen}
        targetLabel={transitionState.targetLabel}
        onTransitionComplete={handleTransitionComplete}
      />

      {/* 4. Unified Deep Cosmic Background Vector Graphic */}
      <div 
        className="fixed inset-0 pointer-events-none -z-50 bg-cover bg-center opacity-45 mix-blend-screen"
        style={{ backgroundImage: "url('/images/cosmic-bg.svg')" }}
      />

      {/* 5. Cyber Matrix Grid */}
      <div className="fixed inset-0 cosmic-cyber-grid opacity-60 pointer-events-none -z-40" />

      {/* 6. Deep Space Stars */}
      <div className="fixed inset-0 cosmic-stars opacity-45 pointer-events-none -z-30" />

      {/* 7. Ambient Glowing Cosmic Nebulae */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 opacity-50">
        <div className="absolute top-[15%] -left-36 w-[34rem] h-[34rem] bg-purple-700/20 rounded-full blur-[140px]" />
        <div className="absolute top-[45%] -right-36 w-[36rem] h-[36rem] bg-cyan-600/18 rounded-full blur-[150px]" />
        <div className="absolute top-[75%] left-1/4 w-[38rem] h-[38rem] bg-indigo-700/18 rounded-full blur-[140px]" />
      </div>

      {/* Floating Top Navbar with Logo Transition Trigger */}
      <Navbar onNavigate={handleNavigate} />

      {/* Main Content Sections (Uncluttered, High-Contrast Glassmorphism) */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Hackathons />
        <ResumeViewer />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
