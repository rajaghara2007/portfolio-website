import React from 'react';
import { ArrowDown, Github, Linkedin, Code2, Mail, FileText, ExternalLink, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { socialLinks } from '../data/socialLinks';
import { aboutData } from '../data/about';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Soft Ambient Pastel Mesh Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-purple-100/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-pink-100/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Intros & Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Software Engineering Opportunities</span>
            </div>

            {/* Name & Headline */}
            <div className="space-y-2">
              <p className="text-slate-500 font-medium text-lg">
                👋 Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-slate-900">
                <span className="text-gradient-primary">Raj Aghara</span>
              </h1>
              <p className="text-xl sm:text-2xl font-display font-semibold text-slate-700">
                Full Stack Developer &amp; CSE Student
              </p>
            </div>

            {/* Bio Summary */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              I specialize in building scalable full-stack web applications, intuitive user interfaces, and robust systems. Creator of{' '}
              <a
                href="https://aegis-lens.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                AegisLens
              </a>
              , an enterprise vulnerability intelligence platform.
            </p>

            {/* Location & Academic Meta */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-blue-600" />
                <span>{aboutData.location}</span>
              </span>
              <span>•</span>
              <span>Swaminarayan University / CodingGita</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm shadow-md shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-semibold text-sm shadow-sm transition-all hover:border-slate-300"
              >
                Get In Touch
              </a>

              <a
                href="/resume/Raj-Aghara-Resume.pdf"
                download="Raj-Aghara-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium text-sm shadow-sm transition-all hover:border-slate-300"
              >
                <FileText className="w-4 h-4 text-blue-600" />
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
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-400 shadow-sm transition-all hover:scale-105"
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
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 shadow-sm transition-all hover:scale-105"
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
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-amber-500 hover:border-amber-300 shadow-sm transition-all hover:scale-105"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              )}
              {socialLinks.email.address && (
                <a
                  href={`mailto:${socialLinks.email.address}`}
                  className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-300 shadow-sm transition-all hover:scale-105"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Profile Image Card & Floating Tech Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              
              {/* Outer Card with subtle shadow */}
              <div className="relative w-full h-full rounded-3xl p-2 bg-gradient-to-tr from-blue-100 via-indigo-100 to-purple-100 border border-slate-200/80 shadow-xl">
                <div className="w-full h-full rounded-[22px] bg-white p-6 flex flex-col items-center justify-center text-center shadow-sm">
                  
                  {/* Photo with gradient ring */}
                  <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-indigo-600 mb-4 shadow-md">
                    <img
                      src={aboutData.profileImage}
                      alt="Raj Aghara"
                      className="w-full h-full object-cover rounded-full bg-slate-50"
                      onError={(e) => {
                        e.currentTarget.src = '/images/profile.svg';
                      }}
                    />
                    <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" title="Active & Available" />
                  </div>

                  <h3 className="font-display font-bold text-slate-900 text-lg">
                    Raj Aghara
                  </h3>
                  <p className="text-xs font-mono text-blue-600 font-semibold mt-0.5">
                    Full Stack Developer
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap justify-center gap-1.5 mt-4">
                    {['React', 'TypeScript', 'Node.js', 'Tailwind'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>

              {/* Floating animated badge 1 (top-left) */}
              <div className="absolute -top-3 -left-4 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md text-xs font-semibold text-slate-800 flex items-center gap-1.5 animate-float hidden sm:flex">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Full Stack</span>
              </div>

              {/* Floating animated badge 2 (bottom-right) */}
              <div className="absolute -bottom-3 -right-4 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md text-xs font-semibold text-slate-800 flex items-center gap-1.5 animate-float hidden sm:flex" style={{ animationDelay: '2s' }}>
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>AegisLens</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
