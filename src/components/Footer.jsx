import React from 'react';
import { Github, Linkedin, Code2, Mail, Heart, ArrowUp } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-dark-border/60 bg-dark-bg/80 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-display font-bold text-white text-lg tracking-tight">
              Raj Aghara
            </span>
            <p className="text-xs text-slate-400">
              Full Stack Developer &amp; Computer Science Student
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            {socialLinks.github.url && (
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {socialLinks.linkedin.url && (
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {socialLinks.leetcode.url && (
              <a
                href={socialLinks.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-400 transition-colors"
                aria-label="LeetCode"
              >
                <Code2 className="w-4 h-4" />
              </a>
            )}
            {socialLinks.email.address && (
              <a
                href={`mailto:${socialLinks.email.address}`}
                className="hover:text-emerald-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Scroll to Top */}
          <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
            <span>© {new Date().getFullYear()} Raj Aghara</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-dark-card border border-dark-border text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
