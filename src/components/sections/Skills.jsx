import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillSphere3D from '../3d/SkillSphere3D';
import { FiActivity, FiBarChart2, FiBriefcase, FiCheckCircle, FiClipboard, FiCpu, FiDatabase, FiDollarSign, FiEdit3, FiEye, FiFilter, FiGrid, FiLayers, FiPieChart, FiRefreshCw, FiSearch, FiShield, FiSliders, FiStar, FiTarget, FiTrendingUp } from 'react-icons/fi';

const iconMap = { FiActivity, FiBarChart2, FiBriefcase, FiCheckCircle, FiClipboard, FiCpu, FiDatabase, FiDollarSign, FiEdit3, FiEye, FiFilter, FiGrid, FiLayers, FiPieChart, FiRefreshCw, FiSearch, FiShield, FiSliders, FiTarget, FiTrendingUp };

export default function Skills({ skills }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const skillCategories = Object.entries(
    skills.reduce((groups, skill) => {
      groups[skill.category] = [...(groups[skill.category] || []), skill];
      return groups;
    }, {})
  ).map(([name, categorySkills]) => ({ name, skills: categorySkills }));
  const safeCategory = Math.min(activeCategory, Math.max(skillCategories.length - 1, 0));

  return (
    <section id="skills" className="py-16 sm:py-24 relative z-10 overflow-hidden">
      <div className="w-[94%] sm:w-[92%] max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-cyan-400 px-3 sm:px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-3">
            3D Skill Matrix & Technical Stack
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white">
            Skills & <span className="text-gradient-primary">Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mt-3 px-2">
            Interactive 3D tag cloud and structured skill domain categorization for data analytics, MIS, and report automation.
          </p>
        </div>

        <div className="glass-panel p-3 sm:p-6 rounded-2xl sm:rounded-3xl border border-cyan-500/30 shadow-glow-blue mb-10 sm:mb-16 relative overflow-hidden">
          <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-6 flex items-center gap-2 z-10">
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
            <span className="truncate text-[9px] sm:text-xs font-mono uppercase tracking-wider text-cyan-300">Interactive 3D Tag Cloud • Drag to Orbit</span>
          </div>
          <SkillSphere3D skills={skills.map((skill) => skill.name)} />
        </div>

        <div className="flex sm:flex-wrap items-center sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 overflow-x-auto pb-2" aria-label="Skill categories">
          {skillCategories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(index)}
              aria-pressed={safeCategory === index}
              className={`touch-target shrink-0 px-4 sm:px-6 py-3 rounded-xl sm:rounded-2xl font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${safeCategory === index ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-glow-blue sm:scale-105' : 'glass-panel border border-white/10 text-slate-400 hover:text-white hover:border-white/30'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <motion.div key={safeCategory} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {(skillCategories[safeCategory]?.skills || []).map((skill) => {
            const Icon = iconMap[skill.icon] || FiCheckCircle;
            return (
              <motion.article key={skill.id} whileHover={{ scale: 1.02, y: -4 }} className="min-w-0 glass-panel p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-cyan-400/50 hover:shadow-glow-blue transition-all group relative overflow-hidden">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center text-cyan-400 text-xl font-bold border border-cyan-500/30 group-hover:scale-110 transition-transform shrink-0"><Icon aria-hidden="true" /></div>
                  {skill.proficiency && <span className="max-w-[60%] truncate text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300">{skill.proficiency}</span>}
                </div>
                <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors break-words">{skill.name}</h3>
                {skill.description && <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">{skill.description}</p>}
                {skill.proficiency && <div className="flex items-center gap-1 text-amber-400 text-xs mt-3" aria-label={`${skill.proficiency} proficiency`}>{[...Array(5)].map((_, index) => <FiStar key={index} className="fill-amber-400" aria-hidden="true" />)}</div>}
              </motion.article>
            );
          })}
        </motion.div>

        {!skills.length && <div className="glass-panel rounded-3xl border border-white/10 p-8 text-center text-sm text-slate-400">No skills are published yet.</div>}
      </div>
    </section>
  );
}
