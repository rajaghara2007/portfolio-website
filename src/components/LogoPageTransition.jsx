import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';

export default function LogoPageTransition({ isOpen, targetLabel, onTransitionComplete }) {
  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling during transition
    document.body.style.overflow = 'hidden';

    // Sequence timing:
    // 1. 0 - 450ms: Logo and curtain enter with high-energy bloom
    // 2. 450ms: Scroll to destination
    // 3. 850ms: Curtain fades out
    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
      onTransitionComplete();
    }, 850);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onTransitionComplete]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="logo-transition-curtain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(12px)' }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#04050d]/98 backdrop-blur-3xl overflow-hidden pointer-events-auto"
        >
          {/* Cosmic Nebula Glows in Center */}
          <div className="absolute w-[36rem] h-[36rem] rounded-full bg-gradient-to-tr from-purple-600/30 via-indigo-600/25 to-cyan-500/30 blur-[130px] pointer-events-none" />

          {/* Deep Space Stars Background Grid */}
          <div className="absolute inset-0 cosmic-stars opacity-50 pointer-events-none" />
          <div className="absolute inset-0 cosmic-cyber-grid opacity-60 pointer-events-none" />

          {/* Center Logo Showcase */}
          <div className="relative flex flex-col items-center justify-center z-10">
            
            {/* Concentric Rotating Cyber Energy Rings */}
            <motion.div
              initial={{ scale: 0.5, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border-2 border-dashed border-purple-500/40 shadow-[0_0_35px_rgba(168,85,247,0.45)] pointer-events-none"
            />
            <motion.div
              initial={{ scale: 0.4, rotate: 0 }}
              animate={{ scale: 1, rotate: -360 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute w-44 h-44 sm:w-60 sm:h-60 rounded-full border border-cyan-400/40 shadow-[0_0_30px_rgba(0,245,255,0.35)] pointer-events-none"
            />

            {/* Glowing Monogram Logo: "RA" */}
            <motion.div
              initial={{ scale: 0.4, opacity: 0, y: 20 }}
              animate={{ scale: [0.4, 1.15, 1], opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-8 select-none"
            >
              <span className="font-display font-extrabold italic text-7xl sm:text-9xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 drop-shadow-[0_0_40px_rgba(168,85,247,0.9)]">
                RA
              </span>
            </motion.div>

            {/* Subtitle & Destination Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="mt-4 flex flex-col items-center gap-3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0a0e28] border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-widest uppercase shadow-[0_0_15px_rgba(0,245,255,0.25)]">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                <span>WARPING TO {targetLabel || 'DESTINATION'}</span>
              </div>

              {/* High-Tech Animated Loading Progress Bar */}
              <div className="w-48 sm:w-64 h-1.5 bg-[#090d24] rounded-full overflow-hidden border border-purple-500/30 relative">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.65, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.8)]"
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

