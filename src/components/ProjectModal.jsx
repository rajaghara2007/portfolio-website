import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Youtube, FileText, CheckCircle2, Layers, Shield } from 'lucide-react';
import TacticalButton from './TacticalButton';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
          />

          {/* Modal Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl glass-panel-glow bg-slate-950/95 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col tactical-bracket"
          >
            {/* Header image banner */}
            <div className="relative h-48 sm:h-64 w-full bg-slate-950 overflow-hidden border-b border-slate-800">
              <img
                src={project.previewImage}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer active:scale-90"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    {project.category}
                  </span>
                  {project.isFork && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-red-500/20 text-red-400 border border-red-500/30">
                      Fork: {project.forkOriginal}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-amber-400 text-sm font-medium mt-0.5">
                  {project.tagline}
                </p>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Tactical Overview</h4>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.longDescription || project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    Key Capabilities &amp; Architecture
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-400" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md bg-slate-900 text-slate-200 text-xs font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Conditional Action Buttons with TacticalButton */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
                {project.liveDemoUrl && (
                  <TacticalButton
                    variant="gold"
                    icon={ExternalLink}
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Production App
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
                    View Repository
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
                    Watch Demo
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
                    Postman API Docs
                  </TacticalButton>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
