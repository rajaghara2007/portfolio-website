import React from 'react';
import { FileText, ExternalLink, Download, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function ResumeViewer({ resumePath = '/resume/Raj-Aghara-Resume.pdf' }) {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-dark-border/40">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="CURRICULUM VITAE"
          title="Resume / CV"
          subtitle="Review my official background, academic foundation, and full-stack technical competencies."
        />

        <div className="portfolio-card rounded-2xl overflow-hidden shadow-2xl border border-dark-border">
          {/* Header Action Bar */}
          <div className="p-4 sm:p-6 border-b border-dark-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-dark-surface">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base sm:text-lg">
                  Raj-Aghara-Resume.pdf
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Full Stack Developer / Software Developer
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-dark-bg hover:bg-dark-hover text-slate-200 hover:text-white font-medium text-xs border border-dark-border transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                <span>Open in Tab</span>
              </a>

              <a
                href={resumePath}
                download="Raj-Aghara-Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-md shadow-blue-600/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Embedded PDF */}
          <div className="relative w-full h-[650px] sm:h-[750px] bg-dark-bg">
            <iframe
              src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=1`}
              title="Raj Aghara Resume Preview"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
