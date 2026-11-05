import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Shield, ArrowUpRight } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'figma', label: 'Figma' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ activeSection = 'hero' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl transition-all duration-300 ${
              scrolled
                ? 'glass-panel bg-slate-950/90 shadow-bat-gold border-amber-500/25'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Logo / Batman Monogram */}
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2.5 group text-left cursor-pointer active:scale-95 transition-transform"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-500 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-bat-gold">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Shield className="w-4 h-4 text-amber-400 group-hover:text-amber-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-white tracking-tight text-sm sm:text-base group-hover:text-amber-400 transition-colors">
                  Raj Aghara
                </span>
                <span className="font-mono text-[9px] text-amber-400/90 uppercase tracking-widest hidden sm:inline">
                  WAYNETECH // DEV.OPS
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer active:scale-95 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-slate-400 hover:text-amber-400 hover:bg-slate-900/60'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-amber-500/15 border border-amber-500/40 rounded-lg -z-10 shadow-bat-gold"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Right Action: GitHub button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-slate-300 hover:text-amber-400 bg-slate-950/90 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all hover:shadow-bat-gold active:scale-95"
              >
                <Github className="w-3.5 h-3.5 text-amber-400" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>

              {/* Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white lg:hidden active:scale-95"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-50 p-6 glass-panel-glow bg-slate-950/95 border border-amber-500/30 rounded-2xl shadow-2xl lg:hidden max-h-[80vh] overflow-y-auto tactical-bracket"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer active:scale-98 ${
                      isActive
                        ? 'bg-amber-500/20 text-amber-400 font-semibold border border-amber-500/40 shadow-bat-gold'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-amber-400'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-bat-gold" />}
                  </button>
                );
              })}

              <div className="pt-4 mt-2 border-t border-slate-800">
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-medium text-white hover:border-amber-500 active:scale-95"
                >
                  <Github className="w-4 h-4 text-amber-400" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
