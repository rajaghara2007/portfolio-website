import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink, FileText, Code2 } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#hackathons', label: 'Hackathons' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-bg/90 backdrop-blur-md border-b border-dark-border py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
              RA
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base tracking-tight group-hover:text-blue-400 transition-colors">
                Raj Aghara
              </span>
              <span className="text-[11px] font-mono text-slate-400 -mt-0.5">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-300 hover:text-white hover:border-slate-600 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href="#resume"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs shadow-sm transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-dark-card border border-dark-border text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 rounded-xl bg-dark-surface border border-dark-border shadow-2xl space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-dark-card transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-dark-border flex items-center justify-between gap-3">
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-400 hover:text-white"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href="#resume"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-medium"
              >
                View Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
