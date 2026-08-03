import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiAward, FiEdit3 } from 'react-icons/fi';

export default function Experience({ timeline }) {
  return (
    <section id="experience" className="py-16 sm:py-24 relative z-10 overflow-hidden">
      <div className="w-[94%] sm:w-[92%] max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-3">
            Career Journey & Milestones
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            Experience & <span className="text-gradient-primary">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Middle Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-blue-600 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="min-w-0 w-full md:w-[45%] glass-panel p-5 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-400/50 hover:shadow-glow-blue transition-all group"
                  >
                    <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-2 mb-4">
                      <span className="self-start px-3.5 py-1 rounded-full text-xs font-mono font-bold text-cyan-300 glass-panel border border-cyan-400/40">
                        {item.period}
                      </span>
                      <span className="text-xs font-mono text-purple-400 font-bold break-words xs:text-right">
                        {item.grade}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-mono text-slate-400 mb-4">
                      {item.organization}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Center Node Icon */}
                  <div className="my-4 md:my-0 md:w-[10%] flex justify-center z-10">
                    <div className="w-12 h-12 rounded-full glass-panel border-2 border-cyan-400 shadow-glow-blue flex items-center justify-center text-cyan-400 text-lg bg-[#050505]">
                      {item.type.toLowerCase() === 'education' ? (
                        <FiBookOpen />
                      ) : item.type.toLowerCase() === 'training' ? (
                        <FiAward />
                      ) : item.type.toLowerCase() === 'typewriting' ? (
                        <FiEdit3 />
                      ) : (
                        <FiBriefcase />
                      )}
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
