import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiCheck, FiLayers } from 'react-icons/fi';
import useDialogA11y from '../../hooks/useDialogA11y';

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useDialogA11y(Boolean(project), onClose);
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
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          tabIndex={-1}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-panel p-4 sm:p-8 rounded-2xl sm:rounded-3xl border border-cyan-400/40 shadow-glow-blue z-10 max-h-[calc(100dvh-1.5rem)] sm:max-h-[92vh] overflow-y-auto focus:outline-none"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="touch-target absolute top-3 right-3 sm:top-6 sm:right-6 p-2.5 sm:p-3 rounded-full glass-panel border border-white/20 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            aria-label="Close Case Study Modal"
          >
            <FiX className="text-lg sm:text-xl" />
          </button>

          {/* Video Preview */}
          <div className="w-full h-[180px] sm:h-[300px] md:h-[360px] rounded-2xl overflow-hidden mb-4 sm:mb-6 border border-white/10 relative bg-black mt-8 sm:mt-0">
            {project.mediaType === 'video' && project.video ? (
              <video
                src={project.video}
                poster={project.image}
                controls
                loop
                muted
                playsInline
                preload="metadata"
                aria-label={`${project.title} project video`}
                className="w-full h-full object-cover"
              />
            ) : project.image ? (
              <img src={project.image} alt={`${project.title} preview`} loading="lazy" decoding="async" className="w-full h-full object-cover" />
            ) : <div className="w-full h-full bg-gradient-to-br from-cyan-950/60 via-purple-950/40 to-black" aria-label="No project media available" />}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 px-2.5 py-1 rounded-full glass-panel border border-cyan-400/40 text-[10px] sm:text-xs font-mono text-cyan-300">
              {project.category}
            </div>
          </div>

          {/* Title & Subtitle */}
          <h3 id="project-modal-title" className="font-display font-black text-xl sm:text-3xl md:text-4xl text-white mb-1 pr-10 break-words">
            {project.title}
          </h3>
          <p className="text-cyan-400 font-mono text-xs sm:text-sm mb-4 sm:mb-6">
            {project.subtitle}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {(project.technologies || []).map((tech) => (
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
              {project.description}
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
              {(project.features || []).map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 glass-panel p-2.5 sm:p-3 rounded-xl border border-white/5">
                  <FiCheck className="text-cyan-400 text-sm sm:text-base shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 border-t border-white/10 pt-4 sm:pt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-full sm:w-auto px-5 py-3 rounded-xl glass-panel border border-white/20 text-slate-200 hover:text-cyan-400 hover:border-cyan-400 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <FiGithub className="text-base" /> GitHub Repository
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="touch-target w-full sm:w-auto px-5 py-3 rounded-xl glass-panel border border-cyan-400/40 text-cyan-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors text-center"
              >
                Open Live Demo
              </a>
            )}
            {project.caseStudyUrl && (
              <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="touch-target w-full sm:w-auto px-5 py-3 rounded-xl glass-panel border border-purple-400/40 text-purple-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors text-center">Read Case Study</a>
            )}
            <button
              onClick={onClose}
              className="touch-target w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow-blue text-center"
            >
              Close Details
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
