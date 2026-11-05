import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';

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
        className="fixed inset-0 bg-[#020308]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#080c22] border border-purple-500/40 rounded-3xl shadow-[0_0_50px_rgba(139,92,246,0.35)] overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Banner */}
        <div className="relative h-48 sm:h-56 w-full bg-[#0a0e24] overflow-hidden border-b border-purple-500/20">
          <img
            src={project.previewImage}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080c22] via-[#080c22]/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#0d122c]/80 hover:bg-[#151c44] text-slate-300 hover:text-white border border-purple-500/30 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-600/40 text-cyan-300 border border-purple-500/40 shadow-sm backdrop-blur-md">
              {project.category}
            </span>
            <h3 className="text-2xl font-display font-extrabold text-white mt-1.5">
              {project.title}
            </h3>
            <p className="text-purple-400 text-xs font-mono font-medium">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-2 font-semibold">
              Project Overview
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              {project.longDescription || project.description}
            </p>
          </div>

          {project.features && project.features.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-2.5 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Key Features &amp; Architecture
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {project.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-300 bg-[#090d24]/70 p-3 rounded-2xl border border-purple-500/15 font-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0 shadow-[0_0_8px_#00f5ff]" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-2.5 font-semibold flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-purple-400" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-[#090d24] text-slate-200 border border-purple-500/25"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="p-4 sm:p-6 border-t border-purple-500/20 bg-[#06091c]/80 flex items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0f28] hover:bg-[#12183d] border border-purple-500/30 text-slate-300 hover:text-white text-xs font-medium transition-all"
            >
              <Github className="w-3.5 h-3.5 text-purple-400" />
              <span>Source Code</span>
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-pill inline-flex items-center gap-2 px-5 py-2 rounded-full text-white font-semibold text-xs shadow-md"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Launch App</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
