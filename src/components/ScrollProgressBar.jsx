import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none overflow-hidden">
      {/* Background track (subtle translucent guide) */}
      <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px]" />

      {/* High-speed Cyber Laser Progress Beam */}
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-400 relative shadow-[0_0_12px_#00f5ff]"
        style={{ scaleX }}
      >
        {/* Glowing Comet Head Light at the leading edge */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[2px] shadow-[0_0_10px_#00f5ff,0_0_20px_#a855f7]" />
      </motion.div>
    </div>
  );
}

