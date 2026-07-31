import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projectsData } from '../../data/portfolioData';
import ProjectModal from '../ui/ProjectModal';
import { FiGithub, FiMaximize2, FiVolume2, FiVolumeX, FiPlay, FiLayers } from 'react-icons/fi';

function ProjectVideoCard({ project, onSelect }) {
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 hover:shadow-glow-blue transition-all group flex flex-col h-full cursor-pointer relative"
      onClick={() => onSelect(project)}
    >
      {/* Video Preview Container */}
      <div className="relative w-full h-[200px] sm:h-[230px] bg-[#08080c] overflow-hidden border-b border-white/10">
        {!videoError ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 pointer-events-none"
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
              Ready for 003.mp4
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-panel border border-cyan-400/40 text-[10px] sm:text-xs font-mono text-cyan-300 shadow-md z-10">
          {project.category}
        </div>

        {/* Mute / Unmute Audio Button */}
        {!videoError && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsMuted(!isMuted);
            }}
            className="absolute top-3 right-3 p-2 rounded-full glass-panel border border-white/20 text-white hover:text-cyan-400 transition-colors z-10"
            title={isMuted ? "Unmute Preview Audio" : "Mute Preview Audio"}
          >
            {isMuted ? <FiVolumeX className="text-xs" /> : <FiVolume2 className="text-xs text-cyan-400" />}
          </button>
        )}

        {/* Expand Trigger */}
        <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full glass-panel flex items-center justify-center text-white border border-white/20 group-hover:bg-cyan-500 group-hover:border-cyan-400 transition-colors shadow-lg z-10">
          <FiMaximize2 className="text-xs" />
        </div>
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
            {project.summary}
          </p>
        </div>

        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.technologies.slice(0, 4).map((tech) => (
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
            <span className="text-xs font-bold text-cyan-400 group-hover:underline flex items-center gap-1">
              View Case Study &rarr;
            </span>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-2 rounded-xl glass-panel border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
              title="GitHub Repository"
            >
              <FiGithub className="text-sm sm:text-base" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
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
            Interactive MIS dashboards with auto-playing video previews, dynamic slicers, Power Query ETL, and executive P&L matrices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {projectsData.map((project) => (
            <ProjectVideoCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
