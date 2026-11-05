import React from 'react';
import { Trophy, Calendar, Users, ExternalLink, Github, Lightbulb, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { hackathons } from '../data/hackathons';

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-dark-border/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="COMPETITIVE BUILDS"
          title="Hackathons & Sprints"
          subtitle="Collaborative technical problem-solving events, competitive sprints, and project builds."
        />

        <div className="space-y-6">
          {hackathons.map((hack) => (
            <div
              key={hack.id}
              className="portfolio-card portfolio-card-hover rounded-2xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-dark-border pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {hack.outcome}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{hack.date}</span>
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {hack.name}
                  </h3>
                  <p className="text-xs font-mono text-blue-400">
                    Organized by: {hack.organizer}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Users className="w-4 h-4 text-indigo-400" />
                  <span>{hack.team}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 font-semibold">
                    <Lightbulb className="w-4 h-4" />
                    <span>PROBLEM STATEMENT</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {hack.problemStatement}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
                    <Trophy className="w-4 h-4" />
                    <span>SOLUTION &amp; ARCHITECTURE</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {hack.solution}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-dark-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {hack.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-dark-bg text-slate-300 border border-dark-border"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-bg hover:bg-dark-hover border border-dark-border text-slate-300 hover:text-white font-medium text-xs transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
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
