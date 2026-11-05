import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <section id="certifications" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 overflow-hidden">
      
      {/* 1. Cosmic Background Vector Graphic Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none -z-20 opacity-60 mix-blend-screen"
        style={{ backgroundImage: "url('/images/cosmic-bg.svg')" }}
      />

      {/* 2. Cyber Matrix Grid Overlay */}
      <div className="absolute inset-0 cosmic-cyber-grid opacity-70 pointer-events-none -z-10" />

      {/* 3. Deep Space Stars */}
      <div className="absolute inset-0 cosmic-stars opacity-40 pointer-events-none -z-10" />

      {/* 4. Layered Glowing Nebula Clouds */}
      <div className="absolute -top-12 left-1/3 w-[36rem] h-[36rem] bg-purple-600/18 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-16 w-[38rem] h-[38rem] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-[34rem] h-[34rem] bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* 5. Cosmic Orbital Geometry in Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[52rem] h-[26rem] rounded-[100%] border border-purple-500/20 rotate-[-14deg] pointer-events-none -z-10 shadow-[0_0_35px_rgba(168,85,247,0.15)]" />
      <div className="absolute top-[37%] left-[48%] -translate-x-1/2 w-[56rem] h-[28rem] rounded-[100%] border border-cyan-400/15 rotate-[-17deg] pointer-events-none -z-10 shadow-[0_0_30px_rgba(0,245,255,0.1)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Animated Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <SectionHeading
            badge="CREDENTIALS"
            title="Certifications &amp; Accreditations"
            subtitle="Official technical credentials, problem-solving coursework, and verified skill badges."
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="cosmic-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-purple-500/25 hover:border-purple-500/50 relative overflow-hidden group"
            >
              {/* Subtle card top glowing light sheen */}
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-24 bg-gradient-to-b from-purple-500/20 to-transparent blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-11 h-11 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-transform"
                  >
                    <Award className="w-5 h-5 text-purple-400 group-hover:text-cyan-300 transition-colors" />
                  </motion.div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 bg-[#090d24] px-3 py-1 rounded-full border border-purple-500/20">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.issueDate}</span>
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-purple-400 mb-3 font-semibold">
                  {cert.issuer}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 font-light">
                  {cert.description}
                </p>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#090d24] text-slate-300 border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-4 mt-4 border-t border-purple-500/15">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-300 hover:text-cyan-300 font-semibold transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
