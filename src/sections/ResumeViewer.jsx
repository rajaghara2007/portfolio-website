import React from 'react';
import { FileText, ExternalLink, Download } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function ResumeViewer({ resumePath = '/resume/Raj-Aghara-Resume.pdf' }) {
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          badge="CURRICULUM VITAE"
          title="Resume / CV"
          subtitle="Review my official background, academic foundation, and full-stack technical competencies."
        />

        <div className="light-card rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          {/* Header Action Bar */}
          <div className="p-4 sm:p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg">
                  Raj-Aghara-Resume.pdf
                </h3>
                <p className="text-xs text-slate-500 font-mono">
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-medium text-xs border border-slate-200 shadow-sm transition-all hover:border-slate-300"
              >
                <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                <span>Open in Tab</span>
              </a>

              <a
                href={resumePath}
                download="Raj-Aghara-Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-all shadow-md shadow-blue-500/20 hover:scale-105 active:scale-95"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Embedded PDF */}
          <div className="relative w-full h-[650px] sm:h-[750px] bg-slate-100">
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
