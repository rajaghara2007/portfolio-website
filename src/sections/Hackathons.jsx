import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Users, ExternalLink, Github, Lightbulb, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { hackathons } from '../data/hackathons';

export default function Hackathons() {
  return (
    <section id="experience" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 overflow-hidden">
      
      {/* Soft Ambient Nebula Glow in Background */}
      <div className="absolute -top-12 right-1/4 w-[38rem] h-[38rem] bg-purple-600/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-[40rem] h-[40rem] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-1/3 w-[36rem] h-[36rem] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            badge="EXPERIENCE &amp; BUILDS"
            title="Hackathons &amp; Sprints"
            subtitle="Collaborative technical problem-solving events, competitive sprints, and real-world system builds."
          />
        </motion.div>

        <div className="space-y-6">
          {hackathons.map((hack, idx) => (
            <motion.div
              key={hack.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="cosmic-card rounded-3xl p-6 sm:p-8 space-y-6 border border-purple-500/25 hover:border-purple-500/50 relative overflow-hidden group"
            >
              {/* Subtle card top glowing light sheen */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-500/15 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {hack.outcome}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-[#090d24] px-3 py-1 rounded-full border border-purple-500/20">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{hack.date}</span>
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {hack.name}
                  </h3>
                  <p className="text-xs font-mono text-purple-400 font-semibold mt-0.5">
                    Organized by: {hack.organizer}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-[#090d24] px-4 py-1.5 rounded-full border border-purple-500/25">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>{hack.team}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 p-4 rounded-2xl bg-[#090d24]/60 border border-purple-500/15">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 font-bold">
                    <Lightbulb className="w-4 h-4" />
                    <span>PROBLEM STATEMENT</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {hack.problemStatement}
                  </p>
                </div>

                <div className="space-y-2 p-4 rounded-2xl bg-[#090d24]/60 border border-purple-500/15">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-bold">
                    <Trophy className="w-4 h-4" />
                    <span>SOLUTION &amp; ARCHITECTURE</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {hack.solution}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {hack.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#090d24] text-slate-300 border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {hack.projectUrl && (
                    <a
                      href={hack.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-neon-pill inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-white font-semibold text-xs shadow-sm transition-all"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live App</span>
                    </a>
                  )}
                  {hack.repoUrl && (
                    <a
                      href={hack.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#090d24] hover:bg-[#111738] border border-purple-500/30 text-slate-300 hover:text-white font-medium text-xs transition-colors"
                    >
                      <Github className="w-3.5 h-3.5 text-purple-400" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
