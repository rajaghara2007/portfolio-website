import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          badge="CREDENTIALS"
          title="Certifications &amp; Accreditations"
          subtitle="Official technical credentials and specialized problem-solving coursework."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="light-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{cert.issueDate}</span>
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-slate-900 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-blue-600 mb-3 font-semibold">
                  {cert.issuer}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {cert.skills && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {cert.credentialUrl && (
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="w-3 h-3" />
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
