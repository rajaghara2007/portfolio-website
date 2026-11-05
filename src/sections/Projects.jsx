import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Youtube, FileText, Info, GitFork, Crosshair } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TiltCard from '../components/TiltCard';
import TacticalButton from '../components/TacticalButton';
import ProjectModal from '../components/ProjectModal';
import { projects } from '../data/projects';

const ALL_CATEGORY_NAMES = ['Full Stack', 'Frontend', 'Games', 'Website Clones', 'Other'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Compute categories with at least 1 project (hides empty categories)
  const availableCategories = useMemo(() => {
    const presentCats = new Set(projects.map((p) => p.category));
    const valid = ALL_CATEGORY_NAMES.filter((cat) => presentCats.has(cat));
    return ['All', ...valid];
  }, []);

  // Filter projects by category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="// 03_TACTICAL_DOSSIERS"
          title="Featured Projects"
          subtitle="Enterprise vulnerability intelligence, automated security scoring, and specialized web systems."
        />

        {/* Dynamic Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {availableCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer active:scale-95 ${
                activeCategory === cat
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-bat-gold'
                  : 'bg-slate-950/80 hover:bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects 3D Cards Grid with Sonar Scanlines */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <TiltCard className="h-full rounded-2xl" radarScan={true}>
                <div className="h-full glass-panel-glow bg-slate-950/90 rounded-2xl border border-amber-500/20 flex flex-col overflow-hidden group">
                  
                  {/* Preview Banner */}
                  <div className="relative h-52 sm:h-56 bg-slate-950 overflow-hidden border-b border-slate-800/80">
                    <img
                      src={project.previewImage}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-950/90 text-amber-400 border border-amber-500/30 backdrop-blur-md shadow-bat-gold">
                        {project.category}
                      </span>
                      {project.isFork && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono bg-red-500/20 text-red-300 border border-red-500/30 backdrop-blur-md">
                          <GitFork className="w-3 h-3" />
                          <span>Fork</span>
                        </span>
                      )}
                    </div>

                    {/* Tactical quick view button */}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-slate-950/90 hover:bg-slate-900 text-xs font-mono text-slate-300 hover:text-amber-400 border border-slate-800 hover:border-amber-500/40 flex items-center gap-1.5 transition-all cursor-pointer active:scale-95 shadow-sm"
                    >
                      <Crosshair className="w-3.5 h-3.5 text-amber-400" />
                      <span>Inspect Dossier</span>
                    </button>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono text-amber-400/90 mt-1">
                        {project.tagline}
                      </p>
                      <p className="text-slate-400 text-sm mt-3 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Links Bar with Tactical Button effects */}
                      <div className="pt-4 border-t border-slate-900 flex flex-wrap items-center gap-2">
                        {project.liveDemoUrl && (
                          <TacticalButton
                            variant="gold"
                            icon={ExternalLink}
                            href={project.liveDemoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live App
                          </TacticalButton>
                        )}

                        {project.githubUrl && (
                          <TacticalButton
                            variant="dark"
                            icon={Github}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Repository
                          </TacticalButton>
                        )}

                        {project.youtubeUrl && (
                          <TacticalButton
                            variant="crimson"
                            icon={Youtube}
                            href={project.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Demo
                          </TacticalButton>
                        )}

                        {project.postmanDocsUrl && (
                          <TacticalButton
                            variant="dark"
                            icon={FileText}
                            href={project.postmanDocsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            API Docs
                          </TacticalButton>
                        )}

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="ml-auto text-xs font-mono text-amber-400/80 hover:text-amber-300 underline decoration-amber-500/50 cursor-pointer active:scale-95 transition-colors"
                        >
                          Telemetry &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Modal for In-Depth Inspection */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
