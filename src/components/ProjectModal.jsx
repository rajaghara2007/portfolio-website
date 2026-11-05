import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Youtube, FileText, CheckCircle2, Layers } from 'lucide-react';

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

  if (!project || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-dark-surface border border-dark-border rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Banner */}
        <div className="relative h-48 sm:h-56 w-full bg-dark-bg overflow-hidden border-b border-dark-border">
          <img
            src={project.previewImage}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-600 text-white">
              {project.category}
            </span>
            <h3 className="text-2xl font-display font-bold text-white mt-1">
              {project.title}
            </h3>
            <p className="text-blue-400 text-xs font-mono">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Project Overview
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                Key Features &amp; Architecture
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-slate-300 bg-dark-card p-2.5 rounded-lg border border-dark-border"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-indigo-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded-md bg-dark-card text-slate-300 text-xs font-mono border border-dark-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-dark-border flex flex-wrap gap-3">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors"
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-dark-card hover:bg-dark-hover border border-dark-border text-slate-200 hover:text-white font-medium text-xs transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
