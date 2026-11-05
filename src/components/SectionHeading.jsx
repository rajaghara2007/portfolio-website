import React from 'react';

export default function SectionHeading({ badge, title, subtitle, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : ''}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-indigo/10 border border-brand-indigo/20 text-brand-indigo text-xs font-mono font-medium mb-3 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-slate-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
}
