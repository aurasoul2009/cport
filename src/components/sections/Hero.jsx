import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import useMousePosition from '../../hooks/useMousePosition';
import MagneticButton from '../ui/MagneticButton';

const metricColors = {
  cyan: 'text-cyan-400',
  purple: 'text-purple-400',
  emerald: 'text-emerald-400'
};

export default function Hero({ personalInfo, metrics }) {
  const mouse = useMousePosition();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalInfo.roles;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center justify-center overflow-x-hidden">
      <div className="w-[94%] sm:w-[92%] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
        
        {/* Left Side: Animated Headlines & Roles */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-panel border border-cyan-500/30 mb-4 sm:mb-6 shadow-glow-blue max-w-full">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-cyan-300 truncate">
              {personalInfo.relocation}
            </span>
          </div>

          {/* Main Name Headline */}
          <h1 className="font-display font-black text-3xl sm:text-5xl md:text-7xl leading-tight tracking-tight text-white mb-3 sm:mb-4">
            Hi, I'm <br />
            <span className="text-gradient-primary drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              {personalInfo.name}
            </span>
          </h1>

          {/* Typewriter Role Loop */}
          <div className="h-10 sm:h-12 flex items-center gap-2 text-lg sm:text-2xl md:text-3xl font-mono font-semibold text-cyan-400 mb-4 sm:mb-6 max-w-full overflow-hidden">
            <span className="text-slate-400">&gt;</span>
            <span className="border-r-2 border-cyan-400 pr-1 animate-pulse truncate">
              {displayText}
            </span>
          </div>

          {/* Summary Paragraph */}
          <p className="text-xs sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mb-6 sm:mb-8">
            {personalInfo.aboutSummary}
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
            {/* View Projects */}
            <MagneticButton href="#projects" className="w-full sm:w-auto">
              <span className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-xs uppercase tracking-widest shadow-glow-blue hover:opacity-95 transition-all flex items-center justify-center gap-2.5">
                View Projects <FiArrowRight className="text-base" />
              </span>
            </MagneticButton>

            {/* Download Resume */}
            <MagneticButton href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <span className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl glass-panel border border-cyan-500/40 text-slate-200 hover:text-cyan-400 font-bold text-xs uppercase tracking-widest hover:border-cyan-400 hover:shadow-glow-blue transition-all flex items-center justify-center gap-2.5">
                <FiDownload className="text-base" /> Download Resume
              </span>
            </MagneticButton>

            {/* Contact Me */}
            <MagneticButton href="#contact" className="w-full sm:w-auto">
              <span className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white font-bold text-xs uppercase tracking-widest hover:border-white/30 transition-all text-center block">
                Contact Me
              </span>
            </MagneticButton>
          </div>

          {/* Quick Metrics */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 gap-3 sm:gap-8 w-full max-w-sm">
            {metrics.map((metric) => (
              <div key={metric.id}>
                <div className={`font-display font-extrabold text-xl sm:text-3xl ${metricColors[metric.color] || 'text-cyan-400'}`}>{metric.value}</div>
                <div className="text-[9px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider">{metric.detail}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Professional Portrait with Sizing to prevent 320px overflow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="lg:col-span-5 flex justify-center relative z-10 my-4 sm:my-0"
          style={{
            transform: `perspective(1000px) rotateX(${mouse.normalizedY * 6}deg) rotateY(${mouse.normalizedX * 6}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          {/* Animated Blob Backdrop */}
          <div className="absolute w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-tr from-cyan-500/30 via-purple-600/30 to-pink-500/20 blur-[50px] sm:blur-[60px] animate-pulse-slow" />

          {/* Outer Rotating Glowing Ring */}
          <div className="relative w-[230px] h-[230px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 sm:-inset-4 rounded-full border-2 border-dashed border-cyan-400/40 shadow-glow-blue pointer-events-none"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-5 sm:-inset-8 rounded-full border border-purple-500/30 pointer-events-none"
            />

            {/* Glass Portrait Card Container */}
            <div className="w-full h-full rounded-full p-2 glass-panel border-2 border-cyan-400/40 shadow-2xl relative overflow-hidden neon-border-animated">
              <img
                src="/profile.png"
                alt="Amirtha Varshini V"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover rounded-full filter saturate-[1.05] contrast-[1.05]"
              />
            </div>

            {/* Floating Tech Badges around Portrait */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 right-0 glass-panel border border-cyan-400/50 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-mono font-bold text-cyan-300 shadow-glow-blue flex items-center gap-1.5 z-20"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-400" /> Advanced Excel & DAX
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-0 left-0 glass-panel border border-purple-500/50 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-mono font-bold text-purple-300 shadow-glow-purple flex items-center gap-1.5 z-20"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400" /> Power Query & Pivot
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
