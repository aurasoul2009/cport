import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from '../ui/ProjectModal';
import { FiGithub, FiMaximize2, FiPlay } from 'react-icons/fi';

function ProjectVideoCard({ project, onSelect }) {
  const [videoError, setVideoError] = useState(false);
  const isVideoProject = project.mediaType === 'video' && Boolean(project.video);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="min-w-0 glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 hover:shadow-glow-blue transition-all group flex flex-col h-full relative"
    >
      {/* Video Preview Container */}
      <div className="relative w-full max-w-full aspect-[3/2] bg-[#08080c] overflow-hidden border-b border-white/10">
        {isVideoProject && !videoError ? (
          <video
            src={project.video}
            poster={project.poster || undefined}
            controls
            loop
            muted
            playsInline
            preload="metadata"
            onError={() => setVideoError(true)}
            aria-label={`${project.title} project video`}
            className="block w-full max-w-full h-auto aspect-[3/2] object-cover group-hover:scale-108 transition-transform duration-700"
          />
        ) : !isVideoProject && project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-cyan-950/40 via-purple-950/30 to-black relative">
            <div className="w-12 h-12 rounded-full glass-panel border border-cyan-400/40 flex items-center justify-center text-cyan-400 text-xl mb-3 shadow-glow-blue">
              <FiPlay className="ml-1" />
            </div>
            <span className="font-display font-bold text-sm text-white mb-1">
              {project.title} Preview Slot
            </span>
            <span className="text-[10px] font-mono text-cyan-300 px-3 py-1 rounded-full glass-panel border border-cyan-500/30">
              Preview coming soon
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-panel border border-cyan-400/40 text-[10px] sm:text-xs font-mono text-cyan-300 shadow-md z-10">
          {project.category}
        </div>

        {/* Expand Trigger */}
        <button type="button" onClick={() => onSelect(project)} aria-label={`Open ${project.title} case study`} className={`touch-target absolute ${isVideoProject ? 'bottom-14' : 'bottom-2'} right-2 w-11 h-11 rounded-full glass-panel flex items-center justify-center text-white border border-white/20 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors shadow-lg z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300`}>
          <FiMaximize2 className="text-xs" />
        </button>
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-1 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-cyan-400 mb-3">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 mb-5 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {(project.technologies || []).slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg glass-panel border border-white/10 text-[10px] font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Footer */}
          <div className="flex items-center justify-between border-t border-white/10 pt-3.5">
            <button type="button" onClick={() => onSelect(project)} className="touch-target text-left text-xs font-bold text-cyan-400 group-hover:underline flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 rounded-lg">
              View Case Study &rarr;
            </button>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                title="GitHub Repository"
              >
                <FiGithub className="text-sm sm:text-base" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-16 sm:py-24 relative z-10">
      <div className="w-[94%] sm:w-[92%] max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-3">
            Featured Case Studies & Work
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
            Highlight <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base max-w-xl mt-3">
            Interactive MIS dashboards with responsive video previews, dynamic slicers, Power Query ETL, and executive P&amp;L matrices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.filter((project) => project.featured && project.visible !== false).map((project) => (
            <ProjectVideoCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {!projects.some((project) => project.featured && project.visible !== false) && (
          <div className="glass-panel rounded-3xl border border-white/10 p-8 sm:p-12 text-center text-sm text-slate-400">No featured projects are published yet.</div>
        )}

        {/* Modal Window */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
