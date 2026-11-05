import React from 'react';
import { Github, Linkedin, Code2, Mail, ArrowUp } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <span className="font-display font-bold text-slate-900 text-lg tracking-tight">
              Raj Aghara
            </span>
            <p className="text-xs text-slate-500">
              Full Stack Developer &amp; CSE Student at Swaminarayan University
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-slate-600">
            {socialLinks.github.url && (
              <a
                href={socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-100 hover:text-slate-900 transition-colors"
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
                className="p-2 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-colors"
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
                className="p-2 rounded-lg hover:bg-slate-100 hover:text-amber-600 transition-colors"
                aria-label="LeetCode"
              >
                <Code2 className="w-4 h-4" />
              </a>
            )}
            {socialLinks.email.address && (
              <a
                href={`mailto:${socialLinks.email.address}`}
                className="p-2 rounded-lg hover:bg-slate-100 hover:text-emerald-600 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
            <span>© {new Date().getFullYear()} Raj Aghara</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
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
