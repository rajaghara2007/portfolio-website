import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#04050d] text-slate-100 selection:bg-purple-600/40 selection:text-purple-200 relative overflow-x-hidden">
      
      {/* 1. Deep Cosmic Background Vector Graphic across all sections */}
      <div 
        className="fixed inset-0 pointer-events-none -z-50 bg-cover bg-center opacity-45 mix-blend-screen"
        style={{ backgroundImage: "url('/images/cosmic-bg.svg')" }}
      />

      {/* 2. Cyber Matrix Grid across all sections */}
      <div className="fixed inset-0 cosmic-cyber-grid opacity-60 pointer-events-none -z-40" />

      {/* 3. Deep Space Stars across all sections */}
      <div className="fixed inset-0 cosmic-stars opacity-45 pointer-events-none -z-30" />

      {/* 4. Ambient glowing cosmic nebulae */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20 opacity-50">
        <div className="absolute top-[15%] -left-36 w-[34rem] h-[34rem] bg-purple-700/20 rounded-full blur-[140px]" />
        <div className="absolute top-[45%] -right-36 w-[36rem] h-[36rem] bg-cyan-600/18 rounded-full blur-[150px]" />
        <div className="absolute top-[75%] left-1/4 w-[38rem] h-[38rem] bg-indigo-700/18 rounded-full blur-[140px]" />
      </div>

      {/* Floating Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
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
