import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Code, Lightbulb, ExternalLink, Github, Calendar, Shield } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import EmptyState from '../components/EmptyState';
import TiltCard from '../components/TiltCard';
import TacticalButton from '../components/TacticalButton';
import { hackathons } from '../data/hackathons';

export default function Hackathons() {
  const hasHackathons = hackathons && hackathons.length > 0;

  return (
    <section id="hackathons" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="// 06_COMBAT_SPRINTS"
          title="Hackathons & Sprints"
          subtitle="High-intensity engineering sprints, competitive systems building, and rapid problem-solving showcases."
        />

        {hasHackathons ? (
          <div className="space-y-8">
            {hackathons.map((hack, idx) => (
              <motion.div
                key={hack.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <TiltCard radarScan={true}>
                  <div className="glass-panel-glow bg-slate-950/90 rounded-2xl border border-amber-500/20 p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30">
                            {hack.outcome}
                          </span>
                          <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-amber-400" />
                            {hack.date}
                          </span>
                        </div>
                        <h4 className="text-2xl font-display font-bold text-white">
                          {hack.name}
                        </h4>
                        <p className="text-xs font-mono text-amber-400">
                          Organized by: {hack.organizer}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                        <Users className="w-4 h-4 text-amber-400" />
                        <span>{hack.team}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400">
                          <Lightbulb className="w-4 h-4" />
                          <span>PROBLEM STATEMENT</span>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {hack.problemStatement}
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                          <Trophy className="w-4 h-4" />
                          <span>SOLUTION &amp; ARCHITECTURE</span>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {hack.solution}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {hack.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        {hack.projectUrl && (
                          <TacticalButton
                            variant="gold"
                            icon={ExternalLink}
                            href={hack.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live App
                          </TacticalButton>
                        )}
                        {hack.repoUrl && (
                          <TacticalButton
                            variant="dark"
                            icon={Github}
                            href={hack.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Repository
                          </TacticalButton>
                        )}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Hackathon Projects & Sprints"
            message="No hackathon participations have been added yet. Add your hackathon problem statements, solutions, and project repositories to showcase competitive engineering."
            dataFilePath="src/data/hackathons.js"
          />
        )}
      </div>
    </section>
  );
}
