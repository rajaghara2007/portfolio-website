import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, Info, GitFork, ArrowUpRight } from 'lucide-react';
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-dark-border/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="PORTFOLIO"
          title="Featured Projects"
          subtitle="Explore selected applications, intelligence tools, and developer projects I have built."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white font-semibold shadow-md'
                  : 'bg-dark-card hover:bg-dark-hover text-slate-400 hover:text-white border border-dark-border'
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
              className="portfolio-card portfolio-card-hover rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image Banner */}
                <div className="relative h-48 bg-dark-surface overflow-hidden border-b border-dark-border">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-dark-bg/90 text-blue-400 border border-blue-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.isFork && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md">
                        <GitFork className="w-3 h-3" />
                        <span>Fork</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-400/90 mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-dark-bg text-slate-300 border border-dark-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-dark-border/40 mt-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 pt-3">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-sm transition-colors"
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
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-dark-bg hover:bg-dark-hover border border-dark-border text-slate-300 hover:text-white text-xs font-medium transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="pt-3 text-xs font-mono text-slate-400 hover:text-blue-400 cursor-pointer flex items-center gap-1 transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-3 h-3" />
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
