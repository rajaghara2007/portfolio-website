import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, ArrowUpRight, GitFork, Sparkles } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 overflow-hidden">
      
      {/* Background Nebulae */}
      <div className="absolute top-1/2 -left-28 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-cyan-600/12 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="PORTFOLIO"
          title="Featured Projects"
          subtitle="Explore verified applications, security platforms, and engineering builds I have designed and deployed."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all cursor-pointer backdrop-blur-md ${
                activeCategory === cat
                  ? 'btn-neon-pill text-white font-semibold'
                  : 'bg-[#090d24]/70 hover:bg-[#111738] text-slate-400 hover:text-white border border-purple-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="cosmic-card rounded-3xl overflow-hidden flex flex-col justify-between group border border-purple-500/25 hover:border-purple-500/50"
            >
              <div>
                {/* Banner Image Preview Container */}
                <div className="relative h-48 bg-[#0a0e24] overflow-hidden border-b border-purple-500/20">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d24] via-transparent to-transparent opacity-80" />
                  
                  {/* Category & Fork Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0a0f28]/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md shadow-sm">
                      {project.category}
                    </span>
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#090d24] hover:bg-[#111738] border border-purple-500/30 text-slate-300 hover:text-white text-xs font-medium transition-all"
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
            </div>
          ))}
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
