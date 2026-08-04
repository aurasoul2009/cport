import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(() => onComplete(), 800);
          }, 400);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(20px)', transition: { duration: 0.8, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden bg-[#050505] px-4 text-white selection:bg-none"
        >
          {/* Subtle Background Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 blur-[100px] animate-pulse-slow" />

          {/* Animated Logo Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <div className="w-24 h-24 rounded-2xl glass-panel flex items-center justify-center border border-cyan-500/30 shadow-glow-blue">
              <span className="font-display font-black text-4xl text-gradient-primary tracking-tighter">
                AV
              </span>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 rounded-3xl border border-dashed border-cyan-400/40 pointer-events-none"
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-display font-bold text-xl md:text-2xl tracking-widest text-center mb-2"
          >
            AMIRTHA VARSHINI V
          </motion.h2>

          <p className="max-w-full text-center text-[10px] sm:text-xs uppercase font-mono tracking-[0.18em] sm:tracking-[0.3em] text-cyan-400/80 mb-8">
            MIS Executive & Data Analyst Portfolio
          </p>

          {/* Loading Progress Bar */}
          <div className="w-64 md:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden relative mb-4 border border-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-electricBlue"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          {/* Percentage Indicator */}
          <div className="font-mono text-sm tracking-wider text-slate-300 flex items-center gap-2">
            <span className="text-cyan-400 font-bold">{progress}%</span>
            <span className="text-slate-500">SYSTEM INITIALIZING...</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
