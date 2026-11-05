import React from 'react';
import { ArrowDown, Github, Linkedin, Code2, Mail, FileText, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import { aboutData } from '../data/about';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introductions & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Software Engineering Opportunities</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <p className="text-slate-400 font-medium text-lg">
                👋 Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-white">
                <span className="text-brand-gradient">Raj Aghara</span>
              </h1>
              <p className="text-xl sm:text-2xl font-display font-semibold text-slate-300">
                Full Stack Developer &amp; CSE Student
              </p>
            </div>

            {/* Bio Summary */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I specialize in crafting high-performance full-stack web applications, intuitive user interfaces, and robust systems. Creator of{' '}
              <a
                href="https://aegis-lens.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 font-semibold hover:underline"
              >
                AegisLens
              </a>
              , an enterprise vulnerability intelligence platform.
            </p>

            {/* Location & Quick Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                <span>{aboutData.location}</span>
              </span>
              <span>•</span>
              <span>Swaminarayan University / CodingGita</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-colors shadow-lg shadow-blue-600/20"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-dark-card hover:bg-dark-hover border border-dark-border text-slate-200 hover:text-white font-medium text-sm transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/resume/Raj-Aghara-Resume.pdf"
                download="Raj-Aghara-Resume.pdf"
                className="px-6 py-3 rounded-xl bg-dark-card hover:bg-dark-hover border border-dark-border text-slate-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
              {socialLinks.github.url && (
                <a
                  href={socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {socialLinks.linkedin.url && (
                <a
                  href={socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {socialLinks.leetcode.url && (
                <a
                  href={socialLinks.leetcode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              )}
              {socialLinks.email.address && (
                <a
                  href={`mailto:${socialLinks.email.address}`}
                  className="p-2.5 rounded-xl bg-dark-card border border-dark-border text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Profile Image Card with Tech Floating Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Subtle ambient blur glow */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-3xl blur-3xl -z-10" />

              <div className="relative w-full h-full rounded-3xl p-1 bg-gradient-to-tr from-blue-500/30 via-indigo-500/20 to-purple-500/30 border border-dark-border shadow-2xl">
                <div className="w-full h-full rounded-[22px] bg-dark-surface p-6 flex flex-col items-center justify-center text-center">
                  
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-indigo-500 mb-4 shadow-md">
                    <img
                      src={aboutData.profileImage}
                      alt="Raj Aghara"
                      className="w-full h-full object-cover rounded-full bg-dark-bg"
                      onError={(e) => {
                        e.currentTarget.src = '/images/profile.svg';
                      }}
                    />
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-dark-surface" title="Active & Available" />
                  </div>

                  <h3 className="font-display font-bold text-white text-lg">
                    Raj Aghara
                  </h3>
                  <p className="text-xs font-mono text-blue-400 mt-0.5">
                    Full Stack Developer
                  </p>

                  {/* Quick skill chips */}
                  <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                    {['React', 'TypeScript', 'Node.js', 'Tailwind'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-dark-card border border-dark-border text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
