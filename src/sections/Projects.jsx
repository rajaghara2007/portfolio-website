import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, GitFork, Sparkles, Zap, RefreshCw } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [flinchCycle, setFlinchCycle] = useState(0);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Periodic chain reaction: Triggers a sequential flinch wave through the side-by-side cards every 5.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setFlinchCycle((prev) => prev + 1);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  // Trigger immediate flinch wave when switching category filters
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setFlinchCycle((prev) => prev + 1);
  };

  const triggerManualFlinch = () => {
    setFlinchCycle((prev) => prev + 1);
  };

  return (
    <section id="projects" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 overflow-hidden">
      
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
      <div className="absolute -top-10 right-1/4 w-[38rem] h-[38rem] bg-purple-600/18 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -left-20 w-[40rem] h-[40rem] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 right-10 w-[36rem] h-[36rem] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* 5. Cosmic Orbital Geometry in Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[54rem] h-[26rem] rounded-[100%] border border-purple-500/20 rotate-[-16deg] pointer-events-none -z-10 shadow-[0_0_35px_rgba(168,85,247,0.15)]" />
      <div className="absolute top-[37%] left-[48%] -translate-x-1/2 w-[58rem] h-[28rem] rounded-[100%] border border-cyan-400/15 rotate-[-19deg] pointer-events-none -z-10 shadow-[0_0_30px_rgba(0,245,255,0.1)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            badge="PORTFOLIO"
            title="Featured Projects"
            subtitle="Explore verified applications, security platforms, and engineering builds I have designed and deployed."
          />
        </motion.div>

        {/* Category Filters & Manual Flinch Wave Trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          
          {/* Category Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer backdrop-blur-md ${
                  activeCategory === cat
                    ? 'btn-neon-pill text-white font-semibold shadow-lg'
                    : 'bg-[#090d24]/75 hover:bg-[#111738] text-slate-400 hover:text-white border border-purple-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Interactive Flinch Ripple Trigger Badge */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={triggerManualFlinch}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d1228]/85 border border-cyan-500/35 text-cyan-300 text-xs font-mono font-medium hover:border-cyan-400 hover:bg-[#131b3e] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,245,255,0.2)] backdrop-blur-md"
            title="Click to trigger sequential flinch wave"
          >
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Sequential Flinch Wave</span>
          </motion.button>
        </div>

        {/* Side-by-Side Projects Cards Grid with Staggered Flinch Chain Reaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={`${project.id}-${flinchCycle}`}
                layout
                initial={{ opacity: 0, y: 35, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  // The "flinch" impulse: sharp upward recoil + micro-tilt + spring snap back
                  y: [0, -22, 6, -3, 0],
                  x: [0, -5, 5, -2, 0],
                  rotateZ: [0, -2, 2.2, -0.8, 0],
                  scale: [1, 1.045, 0.985, 1.015, 1],
                  borderColor: [
                    'rgba(139, 92, 246, 0.25)',
                    'rgba(0, 245, 255, 0.95)',
                    'rgba(168, 85, 247, 0.85)',
                    'rgba(139, 92, 246, 0.25)',
                  ],
                  boxShadow: [
                    '0 10px 35px -5px rgba(0, 0, 0, 0.6)',
                    '0 0 40px rgba(0, 245, 255, 0.65), 0 0 20px rgba(168, 85, 247, 0.5)',
                    '0 0 30px rgba(168, 85, 247, 0.75)',
                    '0 10px 35px -5px rgba(0, 0, 0, 0.6)',
                  ],
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.85,
                  // STAGGERED DELAY: Card 0 flinches at 0.0s, Card 1 at 0.24s, Card 2 at 0.48s
                  delay: idx * 0.24,
                  ease: [0.22, 1.25, 0.36, 1], // energetic spring overshoot
                }}
                whileHover={{
                  y: -10,
                  scale: 1.035,
                  rotateZ: 0.5,
                  borderColor: 'rgba(0, 245, 255, 0.9)',
                  boxShadow: '0 0 35px rgba(0, 245, 255, 0.55), 0 12px 35px rgba(0,0,0,0.6)',
                  transition: { type: 'spring', stiffness: 450, damping: 15 },
                }}
                whileTap={{ scale: 0.98, y: -2 }}
                className="cosmic-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-purple-500/25 relative transition-colors"
              >
                {/* Dynamic Glowing Neon Sheen */}
                <motion.div
                  animate={{
                    opacity: [0.15, 0.55, 0.15],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 0.85,
                    delay: idx * 0.24,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-24 bg-gradient-to-b from-cyan-400/25 via-purple-500/20 to-transparent blur-2xl pointer-events-none"
                />

                <div>
                  {/* Banner Image Preview Container */}
                  <div className="relative h-48 bg-[#0a0e24] overflow-hidden border-b border-purple-500/20">
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d24] via-transparent to-transparent opacity-80" />
                    
                    {/* Category & Fork Badges with Neon Pulse during Flinch */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <motion.span
                        animate={{
                          scale: [1, 1.12, 1],
                          borderColor: ['rgba(0,245,255,0.3)', 'rgba(0,245,255,0.9)', 'rgba(0,245,255,0.3)'],
                        }}
                        transition={{
                          duration: 0.6,
                          delay: idx * 0.24 + 0.1,
                        }}
                        className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0a0f28]/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md shadow-sm"
                      >
                        {project.category}
                      </motion.span>
                      {project.isFork && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-950/80 text-purple-300 border border-purple-500/30 backdrop-blur-md">
                          <GitFork className="w-3 h-3" />
                          <span>Fork</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-purple-400 font-medium mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed line-clamp-3 font-light">
                      {project.description}
                    </p>

                    {/* Tech stack tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#090d24] text-slate-300 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons Footer */}
                <div className="p-6 pt-0 border-t border-purple-500/15 mt-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 pt-3">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neon-pill inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-white font-semibold text-xs shadow-sm cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#090d24] hover:bg-[#111738] border border-purple-500/30 text-slate-300 hover:text-white text-xs font-medium transition-all"
                      >
                        <Github className="w-3.5 h-3.5 text-purple-400" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="pt-3 text-xs font-mono text-slate-400 hover:text-cyan-300 cursor-pointer flex items-center gap-1 transition-colors"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
