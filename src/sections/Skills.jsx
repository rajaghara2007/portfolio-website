import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  FileCode2,
  Layout,
  Palette,
  Atom,
  Zap,
  Sparkles,
  BarChart3,
  Feather,
  Server,
  Cpu,
  GitBranch,
  Github,
  Cloud,
  Send,
  Package,
  Network,
  Boxes,
  Smartphone,
  ShieldAlert,
  Database,
  Layers,
  Crosshair
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';
import { skillCategories } from '../data/skills';

const iconMap = {
  Code,
  FileCode2,
  Layout,
  Palette,
  Atom,
  Zap,
  Sparkles,
  BarChart3,
  Feather,
  Server,
  Cpu,
  GitBranch,
  Github,
  Cloud,
  Send,
  Package,
  Network,
  Boxes,
  Smartphone,
  ShieldAlert,
  Database,
  Layers,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map((c) => c.name)];
  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="// 02_WAYNETECH_SPEC"
          title="Technical Armory & Stack"
          subtitle="Directly evidenced in public repositories, production deployments, and architecture blueprints."
        />

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-bat-gold'
                  : 'bg-slate-950/80 hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid with Radar Scan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, catIdx) => {
            const hasSkills = category.skills && category.skills.length > 0;

            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <TiltCard className="h-full" radarScan={true}>
                  <div className="h-full p-6 rounded-2xl glass-panel-glow bg-slate-950/90 border border-amber-500/20 flex flex-col justify-between">
                    <div>
                      {/* Category Header */}
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-bold text-lg text-white">
                          {category.name}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400">
                          {hasSkills ? `${category.skills.length} verified` : '0 entries'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mb-6">
                        {category.description}
                      </p>

                      {/* Skills List or Empty Placeholder */}
                      {hasSkills ? (
                        <div className="space-y-3">
                          {category.skills.map((skill, sIdx) => {
                            const IconComponent = iconMap[skill.icon] || Code;
                            return (
                              <div
                                key={sIdx}
                                className="group/item flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-all hover:shadow-bat-gold cursor-default"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-lg bg-slate-950 flex items-center justify-center text-amber-400 group-hover/item:text-amber-300 border border-slate-800">
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-semibold text-slate-200">
                                      {skill.name}
                                    </div>
                                    <div className="text-[10px] font-mono text-slate-400">
                                      {skill.evidence}
                                    </div>
                                  </div>
                                </div>
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-amber-400/90 border border-slate-800">
                                  {skill.level}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-slate-900/40 border border-dashed border-slate-800 text-center space-y-2">
                          <Database className="w-6 h-6 text-slate-600 mx-auto" />
                          <p className="text-xs text-slate-400">
                            {category.placeholderNote || 'Add entries in src/data/skills.js'}
                          </p>
                          <div className="text-[10px] font-mono text-amber-400">
                            [No database evidenced in public repos]
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
