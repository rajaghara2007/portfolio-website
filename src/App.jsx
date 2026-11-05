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
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 bg-light-grid selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
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
