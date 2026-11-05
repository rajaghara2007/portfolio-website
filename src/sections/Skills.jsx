import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Network
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
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
  Network
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map((c) => c.name)];
  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 overflow-hidden">
      
      {/* Background Nebulae */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-purple-600/12 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-600/12 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            badge="TECH STACK"
            title="Skills &amp; Technologies"
            subtitle="A comprehensive overview of languages, frameworks, and developer tooling verified in my repositories."
          />
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer backdrop-blur-md ${
                selectedCategory === cat
                  ? 'btn-neon-pill text-white font-semibold shadow-lg'
                  : 'bg-[#090d24]/70 hover:bg-[#111738] text-slate-400 hover:text-white border border-purple-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Categories Grid with Animated Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="cosmic-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-lg text-white">
                      {category.name}
                    </h3>
                    <span className="text-[11px] font-mono font-medium px-3 py-1 rounded-full bg-[#0a0f28] border border-purple-500/30 text-purple-300">
                      {category.skills.length} skills
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mb-6 font-light">
                    {category.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill, sIdx) => {
                      const IconComponent = iconMap[skill.icon] || Code;
                      return (
                        <motion.div
                          key={sIdx}
                          whileHover={{
                            scale: 1.03,
                            y: -2,
                            borderColor: 'rgba(0, 245, 255, 0.5)',
                            backgroundColor: 'rgba(14, 20, 52, 0.85)',
                          }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                          className="flex items-center justify-between p-3 rounded-2xl bg-[#090d24]/70 border border-purple-500/15 transition-all group cursor-default"
                        >
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all shadow-sm">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                                {skill.name}
                              </div>
                              <div className="text-[10px] text-slate-400 font-mono">
                                {skill.level}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
