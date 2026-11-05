import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Compass, Target, Sparkles, Code2, Globe2, ShieldCheck, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { aboutData } from '../data/about';

export default function About() {
  return (
    <section id="about" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 overflow-hidden">
      
      {/* Soft Ambient Nebula Glow in Background */}
      <div className="absolute -top-12 left-1/4 w-[36rem] h-[36rem] bg-purple-600/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-20 w-[38rem] h-[38rem] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-[34rem] h-[34rem] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            badge="ABOUT ME"
            title="Origin &amp; Trajectory"
            subtitle="My software development journey, academic background, and engineering philosophies."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story Card (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 cosmic-card rounded-3xl p-6 sm:p-8 space-y-6 relative group overflow-hidden border border-purple-500/25 hover:border-purple-500/50"
          >
            {/* Subtle card top glowing light sheen */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-24 bg-gradient-to-b from-purple-500/25 to-transparent blur-2xl pointer-events-none" />

            <div className="space-y-2">
              <motion.div 
                className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold tracking-wider"
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Compass className="w-4 h-4 text-cyan-400 animate-spin-slow" />
                <span>ENGINEERING JOURNEY</span>
              </motion.div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                Designing Modern Experiences with Purpose &amp; Code
              </h3>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              {aboutData.bio}
            </p>

            <p className="text-slate-400 text-sm leading-relaxed font-light">
              {aboutData.developerJourney}
            </p>

            {/* 4 Interactive Metrics Boxes with Hover Physics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-purple-500/15">
              {aboutData.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -5,
                    scale: 1.05,
                    borderColor: 'rgba(168, 85, 247, 0.6)',
                    boxShadow: '0 8px 25px -4px rgba(168, 85, 247, 0.35)',
                  }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className="p-3.5 rounded-2xl bg-[#090d24]/75 border border-purple-500/20 text-center transition-all cursor-default backdrop-blur-md"
                >
                  <div className="text-lg sm:text-xl font-display font-bold text-purple-400 group-hover:text-cyan-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-slate-300 mt-1 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Education & Interests */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="cosmic-card rounded-3xl p-6 space-y-4 border border-purple-500/25 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold tracking-wider">
                <GraduationCap className="w-4 h-4 text-purple-400" />
                <span>EDUCATION</span>
              </div>

              {aboutData.education.map((edu, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-base font-display font-bold text-white hover:text-cyan-300 transition-colors">
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
                    <ul className="mt-2.5 space-y-1.5">
                      {edu.highlights.map((h, i) => (
                        <motion.li
                          key={i}
                          whileHover={{ x: 4 }}
                          className="text-xs text-slate-300 flex items-start gap-2 font-light transition-transform"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_6px_#00f5ff]" />
                          <span>{h}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Core Interests Card with Interactive Pill Animation */}
            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="cosmic-card rounded-3xl p-6 space-y-3.5 border border-purple-500/25 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold tracking-wider">
                <Target className="w-4 h-4 text-cyan-400" />
                <span>CORE INTERESTS</span>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {aboutData.interests.map((interest, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{
                      scale: 1.07,
                      y: -3,
                      borderColor: 'rgba(0, 245, 255, 0.7)',
                      boxShadow: '0 0 15px rgba(0, 245, 255, 0.35)',
                    }}
                    transition={{ type: 'spring', stiffness: 450, damping: 15 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#090d24]/85 border border-purple-500/25 text-xs font-medium text-slate-300 hover:text-white transition-colors cursor-default backdrop-blur-md"
                  >
                    <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                    <span>{interest}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
