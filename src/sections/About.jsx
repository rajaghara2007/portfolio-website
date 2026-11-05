import React from 'react';
import { GraduationCap, Compass, Target, Sparkles, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { aboutData } from '../data/about';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="GET TO KNOW ME"
          title="About &amp; Background"
          subtitle="My journey in software engineering, academic foundation, and development philosophy."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story */}
          <div className="lg:col-span-7 light-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-semibold">
                <Compass className="w-4 h-4" />
                <span>MY DEVELOPER STORY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                Building Real-World Software with Impact
              </h3>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {aboutData.bio}
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              {aboutData.developerJourney}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
              {aboutData.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <div className="text-lg sm:text-xl font-display font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Interests */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="light-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2 text-indigo-600 font-mono text-xs font-semibold">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>

              {aboutData.education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-display font-bold text-slate-900">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-mono text-blue-600 font-medium">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    {edu.duration} • {edu.location}
                  </div>
                  {edu.description && (
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                  {edu.highlights && (
                    <ul className="mt-2 space-y-1">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <span className="text-blue-500">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Core Interests */}
            <div className="light-card rounded-2xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-blue-600 font-mono text-xs font-semibold">
                <Target className="w-4 h-4" />
                <span>CORE INTERESTS</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 hover:border-blue-300 transition-colors"
                  >
                    <Sparkles className="w-3 h-3 text-blue-600" />
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
