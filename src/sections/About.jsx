import React from 'react';
import { GraduationCap, Compass, Target, Sparkles, Code2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { aboutData } from '../data/about';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="ABOUT ME"
          title="Origin &amp; Trajectory"
          subtitle="My software development journey, academic background, and engineering philosophies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story */}
          <div className="lg:col-span-7 cosmic-card rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                <Compass className="w-4 h-4" />
                <span>ENGINEERING JOURNEY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Designing Modern Experiences with Purpose &amp; Code
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {aboutData.bio}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed font-light">
              {aboutData.developerJourney}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-purple-500/15">
              {aboutData.stats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-[#090d24]/60 border border-purple-500/20 text-center hover:border-purple-500/40 transition-colors">
                  <div className="text-lg sm:text-xl font-display font-bold text-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Interests */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="cosmic-card rounded-3xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>

              {aboutData.education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-display font-bold text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-mono text-cyan-400 font-medium">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {edu.duration} • {edu.location}
                  </div>
                  {edu.description && (
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">
                      {edu.description}
                    </p>
                  )}
                  {edu.highlights && (
                    <ul className="mt-2 space-y-1">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-start gap-1.5 font-light">
                          <span className="text-purple-400">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Core Interests */}
            <div className="cosmic-card rounded-3xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                <Target className="w-4 h-4" />
                <span>CORE INTERESTS</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0f28] border border-purple-500/25 text-xs font-medium text-slate-300 hover:border-purple-400 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
