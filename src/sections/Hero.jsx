import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Code2, Users, Star, Sparkles, Terminal, FileCode, CheckCircle2 } from 'lucide-react';
import { letterAnimation, letterHover } from '../animations/transitions';

const roles = [
  'Full Stack Developer',
  'Software Developer',
  'AegisLens Architect',
  'Frontend & Backend Engineer',
];

export default function Hero({ onNavigate }) {
  // Typewriter effect state for "Full Stack Developer"
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(90);

  useEffect(() => {
    const fullText = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        setSpeed(85);

        if (displayedText.length + 1 === fullText.length) {
          // Pause at complete word before backspacing
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting characters
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        setSpeed(40);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, speed]);

  const firstName = 'Raj';
  const lastName = 'Aghara';

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-32 md:pt-36 md:pb-44 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center">
      
      {/* Cosmic Nebula Glows in Background */}
      <div className="absolute top-10 left-1/4 w-[36rem] h-[36rem] bg-purple-600/18 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[40rem] h-[40rem] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[45rem] h-[28rem] bg-indigo-600/12 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Stars Background Grid */}
      <div className="absolute inset-0 cosmic-stars opacity-50 pointer-events-none -z-10" />

      {/* Orbital Glowing Light Ring wrapping around the scene (Exact match to reference) */}
      <div className="absolute top-1/4 right-[15%] w-[42rem] h-[25rem] rounded-[100%] border-[2px] border-purple-500/35 rotate-[-26deg] pointer-events-none -z-10 shadow-[0_0_40px_rgba(168,85,247,0.4)]" />
      <div className="absolute top-[26%] right-[12%] w-[46rem] h-[27rem] rounded-[100%] border-[1.5px] border-cyan-400/30 rotate-[-28deg] pointer-events-none -z-10 shadow-[0_0_35px_rgba(0,245,255,0.3)]" />
      <div className="absolute top-[30%] right-[18%] w-[38rem] h-[22rem] rounded-[100%] border border-indigo-400/20 rotate-[-22deg] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Hero Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left z-20">
            
            {/* Status Pill Badge (Exact match to reference) */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d1228]/85 border border-emerald-500/40 text-emerald-300 text-xs font-medium shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span>Available for Opportunities</span>
            </motion.div>

            {/* Main Headline with Animated Text */}
            <div className="space-y-1.5">
              
              {/* Animated "Hi, I'm" */}
              <motion.div
                initial={{ opacity: 0, x: -20, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-4xl font-display font-medium text-slate-200 flex items-center justify-center lg:justify-start gap-2"
              >
                <span>Hi, I'm</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.1, ease: 'linear' }}
                  className="text-purple-400 font-normal inline-block"
                >
                  |
                </motion.span>
              </motion.div>

              {/* Animated "Raj Aghara" with Staggered Letter Entrance and Spring Hover */}
              <h1 className="text-5xl sm:text-7xl font-display font-extrabold tracking-tight text-white leading-none flex flex-wrap items-center justify-center lg:justify-start gap-x-4 select-none py-1">
                {/* First Name: Raj */}
                <span className="inline-flex">
                  {firstName.split('').map((char, index) => (
                    <motion.span
                      key={`first-${index}`}
                      custom={index}
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                      whileHover={letterHover}
                      className="inline-block transition-colors cursor-default hover:text-cyan-300 hover:drop-shadow-[0_0_20px_rgba(0,245,255,0.8)]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>

                {/* Last Name: Aghara */}
                <span className="inline-flex">
                  {lastName.split('').map((char, index) => (
                    <motion.span
                      key={`last-${index}`}
                      custom={index + firstName.length + 1}
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                      whileHover={letterHover}
                      className="inline-block text-gradient-name text-glow-purple transition-colors cursor-default hover:drop-shadow-[0_0_30px_rgba(192,132,252,1)]"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </h1>
              
              {/* Animated "Full Stack Developer" with Typewriter & Blinking Cursor */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-4 pt-2.5"
              >
                <div className="text-xl sm:text-2xl font-display font-semibold text-slate-200 min-h-[2rem] flex items-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-purple-200 to-cyan-300 font-bold">
                    {displayedText}
                  </span>
                  {/* Blinking Cyan & Purple Neon Cursor */}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8, ease: 'easeInOut' }}
                    className="inline-block w-[3px] h-6 ml-1.5 rounded-full bg-gradient-to-b from-purple-400 to-cyan-400 shadow-[0_0_12px_#00f5ff]"
                  />
                </div>

                {/* Expanding Glowing Horizon Accent Bar */}
                <motion.span
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="origin-left h-[2px] w-24 sm:w-36 bg-gradient-to-r from-purple-500/80 via-cyan-400/60 to-transparent shadow-[0_0_12px_rgba(168,85,247,0.6)] hidden sm:inline-block"
                />
              </motion.div>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              I craft modern web experiences with code, creativity and innovation. Architect of AegisLens security intelligence platform.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              {/* Primary Glowing Neon Pill Button */}
              <a
                href="#projects"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('#projects', 'FEATURED PROJECTS');
                  }
                }}
                className="btn-neon-pill inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-semibold text-sm cursor-pointer shadow-lg hover:shadow-cyan-500/25 transition-all"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 text-cyan-300" />
              </a>

              {/* Secondary Circular Play Button */}
              <a
                href="#resume"
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate('#resume', 'CURRICULUM VITAE');
                  }
                }}
                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-[#0a0e24]/80 hover:bg-[#111738] border border-purple-500/30 hover:border-purple-400 text-slate-200 hover:text-white text-sm font-medium transition-all backdrop-blur-md shadow-md cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-purple-600/30 border border-purple-500/60 flex items-center justify-center text-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.6)]">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>View Resume</span>
              </a>
            </motion.div>

            {/* Bottom 3 Glass Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 max-w-lg mx-auto lg:mx-0"
            >
              {/* Stat 1 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0d1228]/80 border border-purple-500/30 backdrop-blur-md hover:border-purple-500/60 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] group">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-base sm:text-xl font-display">
                  <Code2 className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span>3+</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-mono mt-1 leading-tight">
                  Featured Projects
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0d1228]/80 border border-indigo-500/30 backdrop-blur-md hover:border-indigo-500/60 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] group">
                <div className="flex items-center gap-2 text-indigo-400 font-bold text-base sm:text-xl font-display">
                  <Users className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span>2+</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-mono mt-1 leading-tight">
                  Years Experience
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0d1228]/80 border border-cyan-500/30 backdrop-blur-md hover:border-cyan-500/60 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.4)] group">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-base sm:text-xl font-display">
                  <Star className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>100%</span>
                </div>
                <div className="text-[11px] sm:text-xs text-slate-300 font-mono mt-1 leading-tight">
                  Client Satisfaction
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Hero Column: Developer Figure & Floating Glass Cards */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* Center Glowing Light Aura behind Developer */}
            <div className="absolute w-80 h-80 sm:w-[28rem] sm:h-[28rem] rounded-full bg-gradient-to-tr from-purple-600/35 via-indigo-600/25 to-cyan-500/30 blur-3xl -z-10" />

            {/* Central Developer Visual Container */}
            <div className="relative w-80 h-96 sm:w-[26rem] sm:h-[30rem] flex items-end justify-center">
              
              {/* Stylized Developer Character Artwork with Sunglasses & Neon Lighting */}
              <svg
                viewBox="0 0 440 520"
                className="w-full h-full object-contain filter drop-shadow-[0_12px_45px_rgba(139,92,246,0.45)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Hoodie gradient */}
                  <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1f1b3c" />
                    <stop offset="45%" stopColor="#131027" />
                    <stop offset="100%" stopColor="#080714" />
                  </linearGradient>

                  {/* Hoodie Fabric Shadow */}
                  <linearGradient id="hoodieFolds" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2b2353" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0a0815" stopOpacity="0.9" />
                  </linearGradient>

                  {/* Curly Hair Gradient */}
                  <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#312658" />
                    <stop offset="60%" stopColor="#16122c" />
                    <stop offset="100%" stopColor="#0a0717" />
                  </linearGradient>

                  {/* Skin Gradient with side lighting */}
                  <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#dfb295" />
                    <stop offset="65%" stopColor="#c59273" />
                    <stop offset="100%" stopColor="#8d5b42" />
                  </linearGradient>

                  {/* Sunglasses Lens Gradient */}
                  <linearGradient id="glassesLensGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a0f30" />
                    <stop offset="60%" stopColor="#0b0817" />
                    <stop offset="100%" stopColor="#04020a" />
                  </linearGradient>

                  {/* Sunglasses Rim Gradient */}
                  <linearGradient id="glassesRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c084fc" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#00f5ff" />
                  </linearGradient>

                  {/* Neon Cyan & Purple Rim Light */}
                  <linearGradient id="neonRimLight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00f5ff" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#c084fc" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Developer Torso / Shoulders in Dark Hoodie */}
                <path
                  d="M40 520 C40 400, 110 335, 175 315 L265 315 C330 335, 400 400, 400 520 Z"
                  fill="url(#hoodieGrad)"
                  stroke="url(#neonRimLight)"
                  strokeWidth="2.5"
                />

                {/* Hoodie Details: Folds & Seams */}
                <path d="M110 460 Q170 410 220 420 Q270 410 330 460" stroke="#2a2254" strokeWidth="3" fill="none" />
                <path d="M140 520 L160 430 M300 520 L280 430" stroke="#211b43" strokeWidth="2.5" />

                {/* Hoodie Collar & Drawstrings */}
                <path d="M175 315 C200 375, 240 375, 265 315" fill="#0e0a1e" stroke="#372c68" strokeWidth="2" />
                <path d="M198 345 L198 420" stroke="#a855f7" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="198" cy="422" r="3.5" fill="#c084fc" />
                <path d="M242 345 L242 415" stroke="#00f5ff" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="242" cy="417" r="3.5" fill="#38bdf8" />

                {/* Neck */}
                <path d="M190 250 L190 320 L250 320 L250 250 Z" fill="url(#skinGrad)" />
                <path d="M190 290 Q220 310 250 290" stroke="#75442e" strokeWidth="2" fill="none" opacity="0.6" />

                {/* Head / Jaw (Angled slightly up-right like the reference image) */}
                <path
                  d="M165 170 C165 265, 195 285, 220 285 C245 285, 275 265, 275 170 C275 105, 245 95, 220 95 C195 95, 165 105, 165 170 Z"
                  fill="url(#skinGrad)"
                />

                {/* Ear (Right side) */}
                <path d="M273 175 C282 175, 286 195, 275 205" fill="#b98263" stroke="#8d5b42" strokeWidth="1.5" />

                {/* Stylish Dark Sunglasses (Exact match to reference image) */}
                <g filter="drop-shadow(0 0 14px rgba(168,85,247,0.8))">
                  {/* Left Lens */}
                  <path
                    d="M172 165 C172 153, 178 148, 208 152 C214 153, 215 160, 215 185 C215 198, 195 202, 178 195 C172 192, 172 175, 172 165 Z"
                    fill="url(#glassesLensGrad)"
                    stroke="url(#glassesRimGrad)"
                    strokeWidth="2.5"
                  />
                  {/* Right Lens */}
                  <path
                    d="M225 153 C255 149, 268 153, 268 165 C268 175, 268 192, 262 195 C245 202, 225 198, 225 185 C225 160, 226 153, 225 153 Z"
                    fill="url(#glassesLensGrad)"
                    stroke="url(#glassesRimGrad)"
                    strokeWidth="2.5"
                  />
                  {/* Bridge */}
                  <path d="M214 163 Q220 160 226 163" stroke="url(#glassesRimGrad)" strokeWidth="3" strokeLinecap="round" />
                  
                  {/* Neon Lens Reflections (Purple & Cyan Horizon Glare) */}
                  <path d="M178 165 L195 188" stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M198 165 L208 178" stroke="rgba(0,245,255,0.6)" strokeWidth="2" strokeLinecap="round" />
                  <path d="M232 165 L248 188" stroke="rgba(255,255,255,0.75)" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M250 165 L260 178" stroke="rgba(168,85,247,0.6)" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Nose */}
                <path d="M220 188 L216 218 L227 218" stroke="#874e35" strokeWidth="2.5" fill="none" strokeLinecap="round" />

                {/* Confident Smile */}
                <path d="M205 242 Q222 254 238 242" stroke="#68341f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                
                {/* Facial Hair / Stubble Shadow */}
                <path d="M202 248 Q222 268 242 248" stroke="rgba(20,15,35,0.5)" strokeWidth="4" fill="none" strokeLinecap="round" />

                {/* Volumetric Curly Modern Hair with Ambient Violet & Cyan Rim */}
                <path
                  d="M155 155 C135 130, 142 90, 168 75 C178 50, 215 42, 248 55 C275 48, 305 68, 298 105 C315 125, 305 160, 285 175 C295 130, 275 88, 225 88 C178 88, 160 125, 155 155 Z"
                  fill="url(#hairGrad)"
                  stroke="url(#neonRimLight)"
                  strokeWidth="2.5"
                />

                {/* Curly Hair Strands / Volume texture */}
                <path d="M180 75 Q195 55 215 70" stroke="#523d8c" strokeWidth="2" fill="none" />
                <path d="M225 60 Q245 45 265 65" stroke="#523d8c" strokeWidth="2" fill="none" />
                <path d="M260 80 Q285 75 285 100" stroke="#523d8c" strokeWidth="2" fill="none" />
                <path d="M165 110 Q145 95 160 85" stroke="#523d8c" strokeWidth="2" fill="none" />
              </svg>

              {/* Floating Glass Card 1 (Top-Left): </> Coding... Code Snippet */}
              <div className="absolute -top-6 -left-6 sm:-left-12 p-3 sm:p-4 rounded-2xl bg-[#090d24]/90 border border-purple-500/40 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,0.35)] animate-float z-30 w-44 sm:w-52">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-purple-500/20 text-[11px] font-mono text-purple-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-purple-400" />
                    <span>Coding...</span>
                  </span>
                </div>
                <div className="space-y-1 font-mono text-[9px] sm:text-[10px]">
                  <div className="text-purple-400">const developer = &#123;</div>
                  <div className="text-slate-300 pl-2">name: <span className="text-cyan-300">'Raj Aghara'</span>,</div>
                  <div className="text-slate-300 pl-2">role: <span className="text-pink-400">'FullStack'</span>,</div>
                  <div className="text-slate-300 pl-2">status: <span className="text-emerald-400">'Building'</span></div>
                  <div className="text-purple-400">&#125;;</div>
                </div>
              </div>

              {/* Floating Glass Card 2 (Right): Tech Stack Badge List */}
              <div className="absolute top-12 -right-4 sm:-right-8 p-3 sm:p-4 rounded-2xl bg-[#090d24]/90 border border-cyan-500/40 backdrop-blur-xl shadow-[0_0_30px_rgba(0,245,255,0.3)] animate-float-delayed z-30 space-y-2.5 w-36 sm:w-42">
                {/* React */}
                <div className="flex items-center gap-2.5 text-xs text-slate-200 hover:text-cyan-300 transition-colors">
                  <span className="w-4 h-4 rounded-full bg-cyan-400/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shadow-[0_0_8px_rgba(0,245,255,0.5)]">⚛</span>
                  <span className="font-medium text-xs">React</span>
                </div>
                {/* Next.js */}
                <div className="flex items-center gap-2.5 text-xs text-slate-200 hover:text-white transition-colors">
                  <span className="w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-[10px] shadow-[0_0_8px_rgba(255,255,255,0.5)]">N</span>
                  <span className="font-medium text-xs">Next.js</span>
                </div>
                {/* Node.js */}
                <div className="flex items-center gap-2.5 text-xs text-slate-200 hover:text-emerald-300 transition-colors">
                  <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shadow-[0_0_8px_rgba(16,185,129,0.5)]">⬡</span>
                  <span className="font-medium text-xs">Node.js</span>
                </div>
                {/* Python */}
                <div className="flex items-center gap-2.5 text-xs text-slate-200 hover:text-amber-300 transition-colors">
                  <span className="w-4 h-4 rounded-full bg-blue-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px] shadow-[0_0_8px_rgba(245,158,11,0.5)]">🐍</span>
                  <span className="font-medium text-xs">Python</span>
                </div>
                {/* Tailwind CSS */}
                <div className="flex items-center gap-2.5 text-xs text-slate-200 hover:text-cyan-300 transition-colors">
                  <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[10px] shadow-[0_0_8px_rgba(6,182,212,0.5)]">≈</span>
                  <span className="font-medium text-xs">Tailwind CSS</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Cosmic Curved Planet Earth Horizon at the Bottom (Exact match to reference) */}
      <div className="planet-horizon -z-10" />

      {/* Earth Horizon City Lights Twinkle Overlay */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-gradient-to-t from-cyan-400/25 to-transparent blur-md pointer-events-none -z-10" />

      {/* Dark Lunar / Cosmic Rock Silhouettes in Bottom Corners (Exact match to reference) */}
      <div className="absolute -bottom-6 -left-10 w-44 sm:w-64 h-28 sm:h-36 bg-[#03040a] rounded-tr-[100px] border-t border-purple-500/25 rotate-[12deg] pointer-events-none -z-10 shadow-2xl" />
      <div className="absolute -bottom-6 -right-10 w-44 sm:w-64 h-28 sm:h-36 bg-[#03040a] rounded-tl-[100px] border-t border-cyan-500/25 rotate-[-12deg] pointer-events-none -z-10 shadow-2xl" />

    </section>
  );
}
