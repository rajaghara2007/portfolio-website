import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <section id="certifications" className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-purple-500/15 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="CREDENTIALS"
          title="Certifications &amp; Accreditations"
          subtitle="Official technical credentials, problem-solving coursework, and verified skill badges."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="cosmic-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-purple-500/25 hover:border-purple-500/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{cert.issueDate}</span>
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-cyan-300 mb-3 font-semibold">
                  {cert.issuer}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-4 font-light">
                  {cert.description}
                </p>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
