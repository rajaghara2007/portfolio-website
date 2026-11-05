import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Download } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

export default function ResumeViewer({ resumePath = '/resume/Raj-Aghara-Resume.pdf' }) {
  return (
    <section id="resume" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 overflow-hidden">
      
      {/* Soft Ambient Nebula Glow in Background */}
      <div className="absolute -top-12 left-1/4 w-[38rem] h-[38rem] bg-purple-600/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-20 w-[40rem] h-[40rem] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-[34rem] h-[34rem] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Animated Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            badge="CURRICULUM VITAE"
            title="Resume / CV"
            subtitle="Review my background, academic credentials, and full-stack software competencies."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="cosmic-card rounded-3xl overflow-hidden shadow-2xl border border-purple-500/30 relative"
        >
          {/* Subtle card top glowing light sheen */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-24 bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl pointer-events-none" />

          {/* Cyber Holographic Scanline Sweep on Scroll */}
          <motion.div
            initial={{ y: '-100%', opacity: 0 }}
            whileInView={{ y: '300%', opacity: [0, 0.6, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: 'easeInOut', delay: 0.2 }}
            className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent pointer-events-none z-20"
          />

          {/* Header Action Bar */}
          <div className="p-4 sm:p-6 border-b border-purple-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#080c22]/90 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 h-10 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-transform"
              >
                <FileText className="w-5 h-5" />
              </motion.div>
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
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0a0f28] hover:bg-[#12183d] text-slate-200 hover:text-white font-medium text-xs border border-purple-500/30 shadow-sm transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>Open in Tab</span>
              </a>

              <a
                href={resumePath}
                download="Raj-Aghara-Resume.pdf"
                className="btn-neon-pill inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-white font-semibold text-xs transition-all shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Embedded PDF */}
          <div className="relative w-full h-[650px] sm:h-[750px] bg-[#050714]">
            <iframe
              src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=1`}
              title="Raj Aghara Resume Preview"
              className="w-full h-full border-0"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
