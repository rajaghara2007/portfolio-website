import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download, Eye, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import TacticalButton from '../components/TacticalButton';

export default function ResumeViewer({ resumePath = '/resume/Raj-Aghara-Resume.pdf' }) {
  const [loadError, setLoadError] = useState(false);

  return (
    <section id="resume" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          index="// 08_DOSSIER_CV"
          title="Verified Credentials & Resume"
          subtitle="Inspect official technical background, engineering competencies, and architecture experience."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel-glow bg-slate-950/90 rounded-2xl border border-amber-500/25 overflow-hidden shadow-2xl tactical-bracket"
        >
          {/* Header Action Bar */}
          <div className="p-4 sm:p-6 border-b border-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-bat-gold">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base sm:text-lg">
                  Raj-Aghara-Resume.pdf
                </h3>
                <p className="text-[11px] font-mono text-amber-400/90">
                  Full Stack Developer / Software Developer // WAYNETECH SPEC
                </p>
              </div>
            </div>

            {/* Tactical Action Buttons: Open in Tab & Download */}
            <div className="flex items-center gap-3">
              <TacticalButton
                variant="dark"
                icon={ExternalLink}
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open In Tab
              </TacticalButton>

              <TacticalButton
                variant="gold"
                icon={Download}
                href={resumePath}
                download="Raj-Aghara-Resume.pdf"
              >
                Download PDF
              </TacticalButton>
            </div>
          </div>

          {/* Embedded PDF Frame */}
          <div className="relative w-full h-[650px] sm:h-[750px] bg-slate-950 flex flex-col items-center justify-center">
            {!loadError ? (
              <iframe
                src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Raj Aghara Resume Preview"
                className="w-full h-full border-0"
                onError={() => setLoadError(true)}
              />
            ) : (
              <div className="p-8 text-center max-w-md space-y-4">
                <FileText className="w-12 h-12 text-slate-600 mx-auto" />
                <h4 className="text-lg font-display font-semibold text-white">
                  PDF Preview Unavailable
                </h4>
                <p className="text-xs text-slate-400">
                  Your browser does not support embedded PDF viewing. You can open or download the resume directly.
                </p>
                <div className="pt-2 flex justify-center gap-3">
                  <TacticalButton variant="gold" href={resumePath} target="_blank">
                    Open Document
                  </TacticalButton>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Note */}
          <div className="p-4 bg-slate-900/50 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Configurable path: {resumePath}</span>
            <span className="flex items-center gap-1 text-amber-400">
              <Shield className="w-3.5 h-3.5" />
              <span>Verified Document // Checksum Confirmed</span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
