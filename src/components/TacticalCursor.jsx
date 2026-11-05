import React, { useEffect, useState, useRef } from 'react';

/**
 * High-tech Batman / WayneTech HUD Cursor with Click Sonar FX
 */
export default function TacticalCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);

      // Check if hovering over interactive element
      const target = e.target;
      const isInteractive =
        target.closest('button') ||
        target.closest('a') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.getAttribute('role') === 'button';

      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = (e) => {
      const id = Date.now() + Math.random();
      setRipples((prev) => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 700);
    };

    const handleMouseLeave = () => setVisible(false);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {/* Click Sonar Shockwave Ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="sonar-ripple"
          style={{ left: r.x, top: r.y }}
        />
      ))}

      {/* Outer Tactical Reticle */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ease-out flex items-center justify-center ${
          isHovered
            ? 'w-12 h-12 border-bat-gold/90 bg-bat-gold/10 shadow-bat-gold scale-110'
            : 'w-7 h-7 border-slate-500/50 bg-transparent'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {/* Reticle Tick Crosshairs when hovering */}
        {isHovered && (
          <>
            <span className="absolute -top-1.5 w-1 h-1 bg-bat-gold" />
            <span className="absolute -bottom-1.5 w-1 h-1 bg-bat-gold" />
            <span className="absolute -left-1.5 w-1 h-1 bg-bat-gold" />
            <span className="absolute -right-1.5 w-1 h-1 bg-bat-gold" />
          </>
        )}
      </div>

      {/* Center Laser Point */}
      <div
        className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full transition-transform duration-75 ${
          isHovered ? 'bg-bat-gold-light scale-150 shadow-bat-gold' : 'bg-bat-gold shadow-sm'
        }`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
}

