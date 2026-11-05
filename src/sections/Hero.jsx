import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, FileDown, Layers, ShieldCheck, Zap, Crosshair } from 'lucide-react';
import TacticalButton from '../components/TacticalButton';
import { socialLinks } from '../data/socialLinks';
import { aboutData } from '../data/about';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Tactical Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* WayneTech Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-amber-500/40 text-amber-400 text-xs font-mono tracking-widest shadow-bat-gold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>WAYNETECH SECURITY // VULNERABILITY INTELLIGENCE</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white">
                Hi, I'm <span className="text-gradient-gold">Raj Aghara</span>
              </h1>
              <p className="text-xl sm:text-2xl font-display font-medium text-slate-300">
                Full Stack Developer / Software Developer
              </p>
            </div>

            {/* Short Intro */}
            <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Engineering high-performance vulnerability intelligence platforms, scalable web architectures, and dark cinematic 3D digital experiences. Architect of{' '}
              <a
                href="https://aegis-lens.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 font-semibold hover:underline decoration-amber-500 underline-offset-4"
              >
                AegisLens
              </a>
              .
            </p>

            {/* Tactical Action Buttons with Hover & Click Effects */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <TacticalButton
                variant="gold"
                icon={Layers}
                onClick={() => scrollTo('projects')}
              >
                Explore Projects
              </TacticalButton>

              <TacticalButton
                variant="dark"
                icon={FileDown}
                href="/resume/Raj-Aghara-Resume.pdf"
                download="Raj-Aghara-Resume.pdf"
              >
                Download Resume
              </TacticalButton>
            </div>

            {/* Social Links & Real Profile */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4 text-slate-400">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
                <Crosshair className="w-3.5 h-3.5 text-amber-500" />
                Target Links:
              </span>
              
              {/* GitHub Link */}
              {socialLinks.github.url && (
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500 text-slate-300 hover:text-amber-400 transition-all hover:shadow-bat-gold active:scale-90"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}

              {/* LinkedIn Link (Hides if empty) */}
              {socialLinks.linkedin.url && (
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-amber-500 text-slate-300 hover:text-amber-400 transition-all hover:shadow-bat-gold active:scale-90"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>

          {/* Right Column: Batman Profile Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Bat-Signal Glow Aura */}
              <div className="absolute inset-0 rounded-3xl bg-amber-500/20 blur-3xl animate-pulse-slow" />
              
              <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-tr from-amber-500/40 via-red-500/20 to-amber-400/40 shadow-bat-gold">
                <div className="w-full h-full rounded-[22px] bg-slate-950/95 backdrop-blur-xl border border-amber-500/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
                  
                  {/* Photo / Stylized Avatar */}
                  <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-amber-500 to-amber-300 mb-4 shadow-bat-gold">
                    <img
                      src={aboutData.profileImage}
                      alt="Raj Aghara"
                      className="w-full h-full object-cover rounded-full bg-slate-900"
                      onError={(e) => {
                        e.currentTarget.src = '/images/profile.svg';
                      }}
                    />
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-amber-400 border-2 border-slate-950 shadow-bat-gold" title="Active on Grid" />
                  </div>

                  <h3 className="font-display font-bold text-white text-lg">
                    Raj Aghara
                  </h3>
                  <p className="text-xs font-mono text-amber-400 mt-0.5">
                    Full Stack Developer
                  </p>

                  <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>AegisLens Creator</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 text-center">
          <button
            onClick={() => scrollTo('about')}
            className="inline-flex flex-col items-center gap-2 text-xs font-mono text-slate-500 hover:text-amber-400 transition-colors cursor-pointer active:scale-95"
            aria-label="Scroll to About section"
          >
            <span>DISPATCH SCROLL TELEMETRY</span>
            <ArrowDown className="w-4 h-4 animate-bounce text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
