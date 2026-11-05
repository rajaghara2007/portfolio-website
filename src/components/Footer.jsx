import React from 'react';
import { Github, Linkedin, Code2, Twitter, Youtube, ArrowUp, Shield, Radio } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-900 bg-slate-950/95 pt-16 pb-12 overflow-hidden z-10">
      {/* Gotham Bat-Signal Amber Horizon Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent shadow-bat-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Bio / Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-bat-gold">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Raj Aghara
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Full Stack Developer &amp; Software Developer. Architecting mission-critical security platforms, vulnerability intelligence solutions, and dark 3D web experiences.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>WayneTech Frequency: Active for Opportunities</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Tactical Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Origin Dossier</a></li>
              <li><a href="#skills" className="hover:text-amber-400 transition-colors">Armory Stack</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Mission Projects</a></li>
              <li><a href="#resume" className="hover:text-amber-400 transition-colors">Verified CV</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Encrypted Dispatch</a></li>
            </ul>
          </div>

          {/* Col 3: Verified Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold mb-4">
              Grid Telemetry
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              {socialLinks.github.url && (
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-amber-400" />
                  <span>GitHub ({socialLinks.github.handle})</span>
                </a>
              )}
              {socialLinks.linkedin.url ? (
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-amber-400" />
                  <span>LinkedIn</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-600">LinkedIn: In progress</span>
              )}
              {socialLinks.email.address && (
                <a
                  href={`mailto:${socialLinks.email.address}`}
                  className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors"
                >
                  <span className="text-xs font-mono">{socialLinks.email.address}</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Raj Aghara. WayneTech Architecture // 3D Gotham Edition.</p>
          <div className="flex items-center gap-4">
            <span>React + Three.js + Batman 3D Engine</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors active:scale-95 cursor-pointer shadow-bat-gold"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
