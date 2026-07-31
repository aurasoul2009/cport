import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../../data/portfolioData';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa6';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <section className="py-24 relative z-10">
      <div className="w-[92%] max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-3">
            Client & Leader Endorsements
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            3D <span className="text-gradient-primary">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4" />
        </div>

        {/* 3D Card Stage */}
        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, rotateY: 45, scale: 0.9 }}
              animate={{ opacity: 1, rotateY: 0, scale: 1 }}
              exit={{ opacity: 0, rotateY: -45, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full glass-panel p-8 md:p-12 rounded-3xl border border-cyan-500/40 shadow-glow-blue relative overflow-hidden text-center"
            >
              <FaQuoteLeft className="text-4xl text-cyan-400/30 mx-auto mb-6" />

              <p className="text-base md:text-xl text-slate-200 italic leading-relaxed mb-8 max-w-3xl mx-auto">
                "{current.quote}"
              </p>

              <div className="flex items-center justify-center gap-1 text-amber-400 mb-4">
                {[...Array(current.rating)].map((_, i) => (
                  <FiStar key={i} className="fill-amber-400 text-lg" />
                ))}
              </div>

              <h4 className="font-display font-bold text-lg text-white">
                {current.author}
              </h4>
              <p className="text-xs font-mono text-cyan-400">
                {current.company}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full glass-panel border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
            aria-label="Previous Testimonial"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <span className="font-mono text-xs text-slate-400">
            {currentIndex + 1} / {testimonialsData.length}
          </span>
          <button
            onClick={handleNext}
            className="p-3 rounded-full glass-panel border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
            aria-label="Next Testimonial"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>

      </div>
    </section>
  );
}
