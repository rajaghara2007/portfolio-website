import React from 'react';
import { ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EmptyState({ dataFilePath, message, title = 'No Entries Yet' }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="w-full max-w-xl mx-auto p-8 rounded-2xl glass-panel-subtle border border-amber-500/20 text-center relative overflow-hidden tactical-bracket"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-950 border border-amber-500/30 text-amber-400 mb-4 shadow-bat-gold">
        <ShieldAlert className="w-6 h-6" />
      </div>

      <h3 className="text-xl font-display font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm mb-6 leading-relaxed">
        {message || `This section is ready for your verified credentials and records.`}
      </p>

      {dataFilePath && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-950 border border-amber-500/30 text-xs font-mono text-amber-400 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Add entries in <strong className="text-white">{dataFilePath}</strong></span>
        </div>
      )}
    </motion.div>
  );
}
