import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiCheck, FiLayers } from 'react-icons/fi';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99990] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-[95%] sm:w-full max-w-4xl glass-panel p-4 sm:p-8 rounded-3xl border border-cyan-400/40 shadow-glow-blue z-10 max-h-[92vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full glass-panel border border-white/20 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors z-20"
            aria-label="Close Case Study Modal"
          >
            <FiX className="text-lg sm:text-xl" />
          </button>

          {/* Video Preview */}
          <div className="w-full h-[180px] sm:h-[300px] md:h-[360px] rounded-2xl overflow-hidden mb-4 sm:mb-6 border border-white/10 relative bg-black mt-8 sm:mt-0">
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 rounded-full glass-panel border border-cyan-400/40 text-[10px] sm:text-xs font-mono text-cyan-300">
              {project.category}
            </div>
          </div>

          {/* Title & Subtitle */}
          <h3 className="font-display font-black text-xl sm:text-3xl md:text-4xl text-white mb-1 pr-8">
            {project.title}
          </h3>
          <p className="text-cyan-400 font-mono text-xs sm:text-sm mb-4 sm:mb-6">
            {project.subtitle}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-xl glass-panel border border-white/10 text-[10px] sm:text-xs font-mono text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Summary & Impact */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
            <p className="p-3.5 sm:p-4 rounded-2xl glass-panel border border-white/10">
              <strong className="text-cyan-300 font-bold block mb-1">Executive Overview:</strong>
              {project.summary}
            </p>
            <p className="p-3.5 sm:p-4 rounded-2xl glass-panel border border-emerald-500/30 bg-emerald-500/5">
              <strong className="text-emerald-400 font-bold block mb-1">Quantifiable Impact:</strong>
              {project.impact}
            </p>
          </div>

          {/* Key Features */}
          <div className="mb-6 sm:mb-8">
            <h4 className="font-display font-bold text-base sm:text-lg text-white mb-3 sm:mb-4 flex items-center gap-2">
              <FiLayers className="text-cyan-400" /> Key Technical Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 glass-panel p-2.5 sm:p-3 rounded-xl border border-white/5">
                  <FiCheck className="text-cyan-400 text-sm sm:text-base shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-4 sm:pt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl glass-panel border border-white/20 text-slate-200 hover:text-cyan-400 hover:border-cyan-400 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <FiGithub className="text-base" /> GitHub Repository
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-blue text-center"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
