import React from 'react';
import { Trophy, Calendar, Users, ExternalLink, Github, Lightbulb, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { hackathons } from '../data/hackathons';

export default function Hackathons() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="EXPERIENCE &amp; BUILDS"
          title="Hackathons &amp; Sprints"
          subtitle="Collaborative technical problem-solving events, competitive sprints, and real-world system builds."
        />

        <div className="space-y-6">
          {hackathons.map((hack) => (
            <div
              key={hack.id}
              className="cosmic-card rounded-3xl p-6 sm:p-8 space-y-6 border border-purple-500/25 hover:border-purple-500/50"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-500/15 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                      {hack.outcome}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{hack.date}</span>
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {hack.name}
                  </h3>
                  <p className="text-xs font-mono text-purple-400 font-semibold">
                    Organized by: {hack.organizer}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-[#090d24] px-3.5 py-1.5 rounded-full border border-purple-500/20">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>{hack.team}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 font-bold">
                    <Lightbulb className="w-4 h-4" />
                    <span>PROBLEM STATEMENT</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {hack.problemStatement}
                  </p>
                </div>

                <div className="space-y-2">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
