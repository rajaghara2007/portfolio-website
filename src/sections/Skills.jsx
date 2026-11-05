import React, { useState } from 'react';
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-dark-border/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="TECH STACK"
          title="Skills & Technologies"
          subtitle="A comprehensive overview of languages, frameworks, and developer tooling I work with."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white font-semibold shadow-md'
                  : 'bg-dark-card hover:bg-dark-hover text-slate-400 hover:text-white border border-dark-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="portfolio-card portfolio-card-hover rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-lg text-white">
                    {category.name}
                  </h3>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-dark-bg border border-dark-border text-blue-400">
                    {category.skills.length} skills
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  {category.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill, sIdx) => {
                    const IconComponent = iconMap[skill.icon] || Code;
                    return (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-3 rounded-xl bg-dark-bg/80 border border-dark-border hover:border-slate-600 transition-colors"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-dark-card flex items-center justify-center text-blue-400 border border-dark-border">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-200">
                              {skill.name}
                            </div>
                            <div className="text-[10px] text-slate-500 font-mono">
                              {skill.level}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
