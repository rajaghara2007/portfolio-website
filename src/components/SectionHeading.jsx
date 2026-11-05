import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ index, title, subtitle, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : ''}`}>
      {index && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs tracking-wider mb-3 shadow-bat-gold ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
          <span>{index}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-white"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-slate-400 text-base md:text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}

      <div
        className={`mt-4 h-0.5 w-20 bg-gradient-to-r from-amber-500 via-amber-300 to-red-500 shadow-bat-gold ${
          isCenter ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}
