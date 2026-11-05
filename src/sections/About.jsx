import React from 'react';
import { GraduationCap, Code2, Sparkles, Target, Compass, Award } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { aboutData } from '../data/about';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-dark-border/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="GET TO KNOW ME"
          title="About & Background"
          subtitle="My journey in software engineering, academic foundation, and technical philosophy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story */}
          <div className="lg:col-span-7 portfolio-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-blue-400 font-mono text-xs">
                <Compass className="w-4 h-4" />
                <span>MY DEVELOPER STORY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Passionate about Building Real-World Solutions
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {aboutData.bio}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              {aboutData.developerJourney}
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-dark-border">
              {aboutData.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-dark-bg/60 border border-dark-border text-center">
                  <div className="text-lg sm:text-xl font-display font-bold text-blue-400">
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
            <div className="portfolio-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>

              {aboutData.education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-display font-semibold text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-mono text-blue-400 font-medium">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    {edu.duration} • {edu.location}
                  </div>
                  {edu.description && (
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                  {edu.highlights && (
                    <ul className="mt-2 space-y-1">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                          <span className="text-blue-400">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Interests & Goals */}
            <div className="portfolio-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold">
                <Target className="w-4 h-4" />
                <span>CORE INTERESTS</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-bg border border-dark-border text-xs font-medium text-slate-300"
                  >
                    <Sparkles className="w-3 h-3 text-blue-400" />
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
