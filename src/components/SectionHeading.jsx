import React from 'react';

export default function SectionHeading({ badge, title, subtitle, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : ''}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold tracking-wider mb-3 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-slate-900">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-slate-600 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
}
