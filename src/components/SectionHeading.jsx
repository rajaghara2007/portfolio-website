import React from 'react';

export default function SectionHeading({ badge, title, subtitle, align = 'center' }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-2xl' : ''}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d1228]/80 border border-purple-500/35 text-purple-300 text-xs font-mono font-medium tracking-wider mb-3 shadow-[0_0_15px_rgba(168,85,247,0.25)] backdrop-blur-md ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00f5ff]" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-slate-400 text-base md:text-lg leading-relaxed font-light">
          {subtitle}
        </p>
      )}

      <div className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 shadow-[0_0_15px_rgba(168,85,247,0.8)] ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
}
