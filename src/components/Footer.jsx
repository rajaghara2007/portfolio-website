import React from 'react';
import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-purple-500/20 bg-[#03040a] py-14 overflow-hidden">
      {/* Background Subtle Horizon Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent shadow-[0_0_20px_#00f5ff]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-display font-extrabold italic text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]">
              Raj Aghara
            </span>
            <p className="text-xs text-slate-400 font-light">
              Full Stack Developer &amp; CSE Student at Swaminarayan University
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.github.url && (
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0a0f28] border border-purple-500/25 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-purple-400" />
              </a>
            )}
            {socialLinks.linkedin.url && (
              <a
                href={socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0a0f28] border border-purple-500/25 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,245,255,0.4)] transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-cyan-400" />
              </a>
            )}
            {socialLinks.leetcode.url && (
              <a
                href={socialLinks.leetcode.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0a0f28] border border-purple-500/25 flex items-center justify-center text-slate-300 hover:text-white hover:border-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all"
                aria-label="LeetCode"
              >
                <Code2 className="w-4 h-4 text-amber-400" />
              </a>
            )}
            {socialLinks.email.address && (
              <a
                href={`mailto:${socialLinks.email.address}`}
                className="w-9 h-9 rounded-full bg-[#0a0f28] border border-purple-500/25 flex items-center justify-center text-slate-300 hover:text-white hover:border-purple-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-purple-300" />
              </a>
            )}
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
            <span>© {new Date().getFullYear()} Raj Aghara</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#0a0f28] hover:bg-[#12183d] border border-purple-500/30 text-purple-300 hover:text-white transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
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
