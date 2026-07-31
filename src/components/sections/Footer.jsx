import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/portfolioData';

export default function Footer() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTimeString(new Date().toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative z-10 border-t border-white/10 glass-panel mt-16">
      <div className="w-[92%] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding & Live Clock */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-display font-bold text-base text-white tracking-wider">
              AMIRTHA VARSHINI V
            </span>
          </div>
          <p className="text-xs font-mono text-slate-400">
            Madurai, India • <span className="text-cyan-400 font-bold">{timeString} IST</span>
          </p>
        </div>

        {/* Center: Copyright */}
        <div className="text-xs text-slate-400 font-mono text-center flex items-center gap-1.5">
          <span>&copy; {new Date().getFullYear()} All Rights Reserved. Crafted with</span>
          <FiHeart className="text-rose-500 fill-rose-500 text-sm inline" />
        </div>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400 flex items-center justify-center text-slate-300 hover:text-cyan-400 shadow-glow-blue transition-colors"
          title="Back to Top"
        >
          <FiArrowUp className="text-lg" />
        </button>

      </div>
    </footer>
  );
}
