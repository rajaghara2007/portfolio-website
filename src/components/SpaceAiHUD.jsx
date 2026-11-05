import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Compass, Cpu, Radio, Shield, Sparkles } from 'lucide-react';

const sectors = [
  { id: 'home', label: '01 // ORBITAL HOME' },
  { id: 'about', label: '02 // NEURAL ORIGIN' },
  { id: 'skills', label: '03 // TECH MATRIX' },
  { id: 'projects', label: '04 // PROJECT VAULT' },
  { id: 'experience', label: '05 // SPRINT ARENA' },
  { id: 'contact', label: '06 // COMMS BEACON' },
];

export default function SpaceAiHUD() {
  const [activeSector, setActiveSector] = useState('home');
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(Math.max(window.scrollY / docHeight, 0), 1) : 0;
      setScrollPercent(Math.round(progress * 100));

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSector(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* LEFT MARGIN TELEMETRY RAIL (Strictly positioned in outer gutters >= 1536px, 0% overlap with text) */}
      <div className="hidden 2xl:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-start gap-6 z-30 pointer-events-none select-none">
        
        {/* AI System Status Indicator */}
        <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#080d22]/80 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(0,245,255,0.2)]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-[10px] font-mono tracking-widest text-cyan-300 font-semibold flex items-center gap-1.5">
            <Cpu className="w-3 h-3 text-cyan-400" />
            <span>AI_SYS: ONLINE</span>
          </span>
        </div>

        {/* Sector Nav Rail */}
        <div className="space-y-2.5 pl-2 border-l border-purple-500/25">
          {sectors.map((sec) => {
            const isActive = activeSector === sec.id;
            return (
              <div
                key={sec.id}
                className={`flex items-center gap-2 text-[10px] font-mono transition-all duration-300 ${
                  isActive
                    ? 'text-cyan-300 font-bold translate-x-1.5'
                    : 'text-slate-500'
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-cyan-400 shadow-[0_0_8px_#00f5ff] scale-125'
                      : 'bg-slate-700'
                  }`}
                />
                <span>{sec.label}</span>
              </div>
            );
          })}
        </div>

        {/* Orbit Telemetry Coordinates */}
        <div className="space-y-1 text-[9px] font-mono text-slate-500 pl-2">
          <div>ORBIT_ALT: 408.2 KM</div>
          <div>LATENCY: 8MS // 120FPS</div>
          <div>BEACON: 23.02° N 72.57° E</div>
        </div>
      </div>

      {/* RIGHT MARGIN CELESTIAL HUD DIAL (Strictly in outer gutters >= 1536px) */}
      <div className="hidden 2xl:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-end gap-6 z-30 pointer-events-none select-none">
        
        {/* Scroll Progress Metric Dial */}
        <div className="flex flex-col items-end gap-1.5">
          <div className="text-[10px] font-mono tracking-widest text-purple-300 font-semibold flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-purple-400 animate-pulse" />
            <span>WARP_DESCENT</span>
          </div>
          <div className="text-xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-300">
            {scrollPercent}%
          </div>
          <div className="w-20 h-1 bg-[#090d24] rounded-full overflow-hidden border border-purple-500/30">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-150"
              style={{ width: `${scrollPercent}%` }}
            />
          </div>
        </div>

        {/* Space Constellation Gyroscope Glyph */}
        <div className="relative w-16 h-16 rounded-full border border-purple-500/30 flex items-center justify-center bg-[#070b20]/60 backdrop-blur-md">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-dashed border-cyan-400/40"
          />
          <Compass className="w-6 h-6 text-purple-300" />
        </div>

        {/* Neural Synapse Activity Barcode */}
        <div className="flex items-center gap-1">
          {[40, 75, 55, 90, 60, 85, 45, 95].map((h, i) => (
            <motion.div
              key={i}
              animate={{ height: [`${h * 0.3}px`, `${h * 0.6}px`, `${h * 0.3}px`] }}
              transition={{
                duration: 1.2 + i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-1 bg-gradient-to-t from-purple-500 to-cyan-400 rounded-full opacity-60"
              style={{ height: `${h * 0.4}px` }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

