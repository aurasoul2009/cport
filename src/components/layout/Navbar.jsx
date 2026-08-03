import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload, FiArrowUpRight } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-[999]">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-electricBlue"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%] max-w-7xl z-[990] transition-all duration-300 rounded-2xl ${
          scrolled
            ? 'glass-panel border-white/10 shadow-glass-card py-2.5 px-4 sm:py-3 sm:px-6'
            : 'bg-transparent py-3 px-4 sm:py-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center font-display font-bold text-base sm:text-lg text-white shadow-glow-blue group-hover:scale-105 transition-transform">
              AV
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xs sm:text-base tracking-wider text-slate-100 group-hover:text-cyan-400 transition-colors">
                AMIRTHA VARSHINI
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-slate-400">
                MIS EXECUTIVE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 glass-panel px-5 py-2 rounded-full border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-slate-300 hover:text-cyan-400 font-medium transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-glow-blue hover:opacity-90 hover:scale-105 transition-all flex items-center gap-2"
            >
              Contact Me <FiArrowUpRight className="text-base" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="touch-target md:hidden text-white text-xl p-2 rounded-xl glass-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 border-white/10"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-3 top-16 z-[989] max-h-[calc(100dvh-5rem)] overflow-y-auto glass-panel p-5 rounded-2xl border border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="touch-target flex items-center text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-cyan-400 py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
              
              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="touch-target w-full text-left py-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 flex items-center gap-2 border-b border-white/5"
              >
                <FiDownload /> Download Resume
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="touch-target mt-2 flex items-center justify-center text-center py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-blue"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
