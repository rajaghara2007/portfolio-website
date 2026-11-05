import React, { useState } from 'react';

export default function TacticalButton({
  children,
  onClick,
  href,
  download,
  target,
  rel,
  variant = 'gold', // 'gold' | 'cyan' | 'dark' | 'crimson'
  className = '',
  icon: Icon,
  type = 'button',
  disabled = false,
}) {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    // Local button ripple effect
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rippleId = Date.now();

    setRipples((prev) => [...prev.slice(-2), { id: rippleId, x, y }]);
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== rippleId));
    }, 600);

    if (onClick) onClick(e);
  };

  const variantStyles = {
    gold: 'bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-bold hover:shadow-bat-gold border-amber-400/80',
    cyan: 'bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 text-slate-950 font-bold hover:shadow-bat-cyan border-cyan-400/80',
    dark: 'bg-slate-900/90 hover:bg-slate-850 text-slate-200 hover:text-white border-slate-700/80 hover:border-amber-500/60 hover:shadow-bat-gold',
    crimson: 'bg-red-600/20 hover:bg-red-600/30 text-red-400 border-red-500/40 hover:shadow-bat-red',
  };

  const baseClasses = `
    group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono tracking-wider uppercase
    border transition-all duration-200 transform-gpu active:scale-95 overflow-hidden select-none cursor-pointer
    ${variantStyles[variant] || variantStyles.gold}
    ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}
    ${className}
  `;

  const innerContent = (
    <>
      {/* Tactical Corner Brackets */}
      <span className="absolute top-1 left-1 w-1.5 h-1.5 border-t-2 border-l-2 border-current opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
      <span className="absolute top-1 right-1 w-1.5 h-1.5 border-t-2 border-r-2 border-current opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
      <span className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b-2 border-l-2 border-current opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />
      <span className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b-2 border-r-2 border-current opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all" />

      {/* Hover Laser Sheen Sweep */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 pointer-events-none" />

      {/* Click Ripple Radiations */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/40 pointer-events-none animate-ping"
          style={{
            left: r.x - 10,
            top: r.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}

      {Icon && <Icon className="w-3.5 h-3.5 transition-transform group-hover:scale-110" />}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        onClick={handleClick}
        className={baseClasses}
      >
        {innerContent}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={baseClasses}
    >
      {innerContent}
    </button>
  );
}

