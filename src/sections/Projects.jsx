import React, { useState, useMemo } from 'react';
import { ExternalLink, Github, ArrowUpRight, GitFork } from 'lucide-react';
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="PORTFOLIO"
          title="Featured Projects"
          subtitle="Explore selected applications, intelligence tools, and developer projects I have built."
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/20'
                  : 'bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
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
              className="light-card rounded-2xl overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Banner Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden border-b border-slate-100">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-white/95 text-blue-700 border border-blue-200 shadow-sm backdrop-blur-md">
                      {project.category}
                    </span>
                    {project.isFork && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-50 text-amber-700 border border-amber-200 backdrop-blur-md shadow-sm">
                        <GitFork className="w-3 h-3" />
                        <span>Fork</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-blue-600 font-semibold mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 pt-3">
                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shadow-sm shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
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
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-medium shadow-sm transition-all hover:border-slate-300"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="pt-3 text-xs font-mono text-slate-500 hover:text-blue-600 cursor-pointer flex items-center gap-1 transition-colors"
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
