import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Target, Shield, Sparkles, Crosshair } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { aboutData } from '../data/about';

export default function About() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="// 01_ORIGIN_TELEMETRY"
          title="Developer Profile"
          subtitle="Engineering philosophy, high-assurance architecture, and the journey behind the code."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Bio & Journey Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel-glow bg-slate-950/90 rounded-2xl p-6 sm:p-8 border border-amber-500/20 space-y-6 tactical-bracket"
          >
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs mb-2">
                <Compass className="w-4 h-4" />
                <span>ORIGIN &amp; TRAJECTORY</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                Engineering Resilience &amp; Vulnerability Intelligence
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {aboutData.bio}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              {aboutData.developerJourney}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
              {aboutData.stats.map((stat, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 text-center hover:border-amber-500/40 transition-colors">
                  <div className="text-lg sm:text-xl font-display font-bold text-amber-400 text-glow-gold">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Education & Core Interests */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel-subtle bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4 tactical-bracket"
            >
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs">
                <GraduationCap className="w-4 h-4" />
                <span>ACADEMIC FOUNDATION</span>
              </div>

              {aboutData.education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-display font-semibold text-white">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-mono text-amber-400">
                    {edu.institution}
                  </div>
                  <div className="text-xs text-slate-500 font-mono">
                    {edu.duration}
                  </div>
                  {edu.highlights && (
                    <ul className="mt-2 space-y-1">
                      {edu.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-start gap-1.5">
                          <span className="text-amber-400">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Interests & Goals Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel-subtle bg-slate-950/80 rounded-2xl p-6 border border-slate-800 space-y-4 tactical-bracket"
            >
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs">
                <Target className="w-4 h-4" />
                <span>STRATEGIC OBJECTIVES</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:border-amber-500/40 transition-colors"
                  >
                    <Crosshair className="w-3 h-3 text-amber-400" />
                    <span>{interest}</span>
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
