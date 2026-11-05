import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import EmptyState from '../components/EmptyState';
import TiltCard from '../components/TiltCard';
import TacticalButton from '../components/TacticalButton';
import { certificates } from '../data/certificates';

export default function Certificates() {
  const hasCertificates = certificates && certificates.length > 0;

  return (
    <section id="certificates" className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          index="// 05_ACCREDITATIONS"
          title="Verified Certifications"
          subtitle="Official industry credentials, security accreditations, and verified architectural competencies."
        />

        {hasCertificates ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <TiltCard className="h-full" radarScan={true}>
                  <div className="h-full glass-panel-glow bg-slate-950/90 rounded-2xl border border-amber-500/20 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-bat-gold">
                          <Award className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {cert.issueDate}
                        </span>
                      </div>

                      <h4 className="text-lg font-display font-bold text-white mb-1">
                        {cert.title}
                      </h4>
                      <p className="text-xs font-mono text-amber-400 mb-3">
                        {cert.issuer}
                      </p>
                      {cert.credentialId && (
                        <p className="text-[11px] font-mono text-slate-400 mb-4">
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>

                    {cert.credentialUrl && (
                      <div className="pt-4 border-t border-slate-800">
                        <TacticalButton
                          variant="dark"
                          icon={ExternalLink}
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full text-xs"
                        >
                          Verify Credential
                        </TacticalButton>
                      </div>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        ) : (
          <EmptyState
            title="Certifications & Accreditations"
            message="No verified certificates have been loaded yet. We strictly refrain from listing fabricated certificates."
            dataFilePath="src/data/certificates.js"
          />
        )}
      </div>
    </section>
  );
}
