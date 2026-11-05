import React from 'react';
import { Trophy, Calendar, Users, ExternalLink, Github, Lightbulb, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { hackathons } from '../data/hackathons';

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="COMPETITIVE BUILDS"
          title="Hackathons &amp; Sprints"
          subtitle="Collaborative technical problem-solving events, competitive sprints, and project builds."
        />

        <div className="space-y-6">
          {hackathons.map((hack) => (
            <div
              key={hack.id}
              className="light-card rounded-2xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {hack.outcome}
                    </span>
                    <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      <span>{hack.date}</span>
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900">
                    {hack.name}
                  </h3>
                  <p className="text-xs font-mono text-blue-600 font-semibold">
                    Organized by: {hack.organizer}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                  <Users className="w-4 h-4 text-indigo-600" />
                  <span>{hack.team}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-600 font-bold">
                    <Lightbulb className="w-4 h-4" />
                    <span>PROBLEM STATEMENT</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {hack.problemStatement}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 font-bold">
                    <Trophy className="w-4 h-4" />
                    <span>SOLUTION &amp; ARCHITECTURE</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {hack.solution}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {hack.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm transition-all hover:scale-105 active:scale-95"
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 font-medium text-xs shadow-sm transition-colors"
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
