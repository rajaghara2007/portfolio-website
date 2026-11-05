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
      
      {/* 1. Cosmic Background Vector Graphic Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none -z-20 opacity-60 mix-blend-screen"
        style={{ backgroundImage: "url('/images/cosmic-bg.svg')" }}
      />

      {/* 2. Cyber Matrix Grid Overlay */}
      <div className="absolute inset-0 cosmic-cyber-grid opacity-70 pointer-events-none -z-10" />

      {/* 3. Deep Space Stars */}
      <div className="absolute inset-0 cosmic-stars opacity-40 pointer-events-none -z-10" />

      {/* 4. Layered Glowing Nebula Clouds */}
      <div className="absolute -top-10 -left-20 w-[38rem] h-[38rem] bg-purple-600/18 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-20 w-[40rem] h-[40rem] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-1/3 w-[36rem] h-[36rem] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* 5. Cosmic Orbital Geometry in Background */}
      <div className="absolute top-1/4 right-[10%] w-[50rem] h-[24rem] rounded-[100%] border border-purple-500/20 rotate-[18deg] pointer-events-none -z-10 shadow-[0_0_35px_rgba(168,85,247,0.15)]" />
      <div className="absolute top-[28%] right-[8%] w-[54rem] h-[26rem] rounded-[100%] border border-cyan-400/15 rotate-[15deg] pointer-events-none -z-10 shadow-[0_0_30px_rgba(0,245,255,0.1)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
                  : 'bg-[#090d24]/75 hover:bg-[#111738] text-slate-400 hover:text-white border border-purple-500/20'
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
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="cosmic-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-purple-500/25 hover:border-purple-500/50 relative overflow-hidden group"
              >
                {/* Subtle card top glowing light sheen */}
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-24 bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
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
                            scale: 1.04,
                            y: -3,
                            borderColor: 'rgba(0, 245, 255, 0.55)',
                            backgroundColor: 'rgba(14, 20, 52, 0.9)',
                            boxShadow: '0 8px 20px -4px rgba(0, 245, 255, 0.25)',
                          }}
                          transition={{ type: 'spring', stiffness: 450, damping: 15 }}
                          className="flex items-center justify-between p-3.5 rounded-2xl bg-[#090d24]/75 border border-purple-500/15 transition-all group cursor-default backdrop-blur-md"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all shadow-sm">
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
