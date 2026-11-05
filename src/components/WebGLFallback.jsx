import React from 'react';

/**
 * Lightweight Gotham CSS searchlight fallback for environments where WebGL is unsupported,
 * disabled, or when user prefers reduced motion.
 */
export default function WebGLFallback() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Gotham Bat-Signal Amber Searchlight Spotlight */}
      <div className="absolute -top-24 left-1/3 w-[36rem] h-[36rem] bg-amber-500/10 rounded-full blur-[100px] animate-pulse-slow" />
      {/* Dark Knight Crimson Rim Aura */}
      <div className="absolute top-1/2 right-1/4 w-[28rem] h-[28rem] bg-red-600/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2.5s' }} />
      {/* Gotham Cool Sky Underglow */}
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[90px]" />
      <div className="absolute inset-0 bat-grid opacity-60" />
    </div>
  );
}
