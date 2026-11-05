import React from 'react';
import { motion } from 'framer-motion';
import { Figma, ExternalLink, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import EmptyState from '../components/EmptyState';
import TiltCard from '../components/TiltCard';
import TacticalButton from '../components/TacticalButton';
import { figmaDesigns } from '../data/figma';

export default function FigmaDesigns() {
  const hasDesigns = figmaDesigns && figmaDesigns.length > 0;

  return (
    <section id="figma" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="// 04_TACTICAL_UI"
          title="Figma & UI Prototypes"
          subtitle="User experience layouts, high-fidelity design systems, and interaction models."
        />

        {hasDesigns ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {figmaDesigns.map((design, idx) => (
              <motion.div
                key={design.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard className="h-full" radarScan={true}>
                  <div className="h-full glass-panel-glow bg-slate-950/90 rounded-2xl border border-amber-500/20 overflow-hidden flex flex-col justify-between">
                    <div>
                      <div className="relative h-44 bg-slate-900 overflow-hidden">
                        <img
                          src={design.previewImage}
                          alt={design.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="font-display font-bold text-lg text-white mb-1">
                          {design.title}
                        </h4>
                        <p className="text-xs text-slate-400 mb-4">
                          {design.description}
                        </p>
                      </div>
                    </div>
                    {design.figmaUrl && (
                      <div className="p-6 pt-0">
                        <TacticalButton
                          variant="gold"
                          icon={Figma}
                          href={design.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-xs"
                        >
                          Open in Figma
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
            title="UI / UX Prototypes & Figma Files"
            message="No Figma design files have been linked yet. Add your project design systems or wireframes to showcase your UI/UX workflow."
            dataFilePath="src/data/figma.js"
          />
        )}
      </div>
    </section>
  );
}
