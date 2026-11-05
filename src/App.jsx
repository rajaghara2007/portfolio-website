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
      
      {/* Ambient background light streaks across the entire page */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 opacity-40">
        <div className="absolute top-[20%] -left-48 w-96 h-96 bg-purple-700/20 rounded-full blur-[140px]" />
        <div className="absolute top-[50%] -right-48 w-96 h-96 bg-cyan-600/15 rounded-full blur-[150px]" />
        <div className="absolute top-[80%] left-1/3 w-96 h-96 bg-indigo-700/15 rounded-full blur-[140px]" />
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
