import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/portfolioData';
import SkillSphere3D from '../3d/SkillSphere3D';
import { FiCheckCircle, FiStar, FiGrid, FiLayers, FiCpu } from 'react-icons/fi';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="w-[92%] max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-3">
            3D Skill Matrix & Technical Stack
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            Skills & <span className="text-gradient-primary">Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mt-3">
            Interactive 3D tag cloud and structured skill domain categorization for data analytics, MIS, and report automation.
          </p>
        </div>

        {/* 3D Interactive Canvas Skill Cloud */}
        <div className="glass-panel p-6 rounded-3xl border border-cyan-500/30 shadow-glow-blue mb-16 relative overflow-hidden">
          <div className="absolute top-4 left-6 flex items-center gap-2 z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-300">
              Interactive 3D Tag Cloud • Drag to Orbit
            </span>
          </div>

          <SkillSphere3D />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-6 py-3 rounded-2xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === idx
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-glow-blue scale-105'
                  : 'glass-panel border border-white/10 text-slate-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:shadow-glow-blue transition-all group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold border border-cyan-500/30 group-hover:scale-110 transition-transform">
                  <FiCheckCircle />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300">
                  {skill.level}
                </span>
              </div>

              <h4 className="font-display font-bold text-lg text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {skill.name}
              </h4>

              <div className="flex items-center gap-1 text-amber-400 text-xs mt-2">
                {[...Array(5)].map((_, index) => (
                  <FiStar key={index} className="fill-amber-400" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
