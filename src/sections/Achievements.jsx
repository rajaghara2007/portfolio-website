import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal, ExternalLink, Calendar } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import EmptyState from '../components/EmptyState';
import TiltCard from '../components/TiltCard';
import TacticalButton from '../components/TacticalButton';
import { achievements } from '../data/achievements';

export default function Achievements() {
  const hasAchievements = achievements && achievements.length > 0;

  return (
    <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="// 07_BATTLE_HONORS"
          title="Milestones & Achievements"
          subtitle="Strictly verified awards, competitive rankings, and notable technical milestones."
        />

        {hasAchievements ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard className="h-full" radarScan={true}>
                  <div className="h-full glass-panel-glow bg-slate-950/90 rounded-2xl border border-amber-500/20 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-bat-gold">
                          <Trophy className="w-5 h-5" />
                        </div>
                        {item.date && (
                          <span className="text-[10px] font-mono text-slate-500">
                            {item.date}
                          </span>
                        )}
                      </div>

                      <h4 className="text-lg font-display font-bold text-white mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs font-mono text-amber-400 mb-3">
                        {item.organization}
                      </p>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {item.credentialUrl && (
                      <div className="pt-4 border-t border-slate-800">
                        <TacticalButton
                          variant="dark"
                          icon={ExternalLink}
                          href={item.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-xs"
                        >
                          Verification Record
                        </TacticalButton>
                      </div>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Honors & Achievements"
            message="No achievements have been published yet. Only verified milestones and authentic competitive records will be displayed here."
            dataFilePath="src/data/achievements.js"
          />
        )}
      </div>
    </section>
  );
}
