import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#04050d]/85 backdrop-blur-md py-3.5 border-b border-purple-500/15 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo (Glowing Monogram like "JD" in image -> "RA") */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-display font-extrabold italic text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)] group-hover:scale-105 transition-transform">
              RA
            </span>
          </a>

          {/* Center: Floating Navigation Pill (Exact match to reference image) */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0a0d20]/80 border border-purple-500/20 backdrop-blur-lg shadow-lg">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium transition-all ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {link.label}
                  {/* Glowing purple horizontal underline for active item */}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[2.5px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_10px_rgba(168,85,247,0.9)]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: "Let's Talk ->" Glowing Pill Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#111636]/90 hover:bg-[#1a214d] text-white font-semibold text-xs border border-purple-500/50 hover:border-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.45)] hover:shadow-[0_0_25px_rgba(139,92,246,0.7)] transition-all hover:scale-105 active:scale-95"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5 text-purple-300" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#0e122a] border border-purple-500/30 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-2xl bg-[#090c20]/95 border border-purple-500/30 shadow-2xl space-y-1 backdrop-blur-xl">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-purple-900/20 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-purple-500/20">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-xs shadow-lg"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
