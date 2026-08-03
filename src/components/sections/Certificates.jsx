import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiShield } from 'react-icons/fi';

export default function Certificates({ certificates }) {
  return (
    <section id="certificates" className="py-16 sm:py-24 relative z-10 overflow-hidden">
      <div className="w-[94%] sm:w-[92%] max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-3">
            Verified Credentials & Qualifications
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
            Professional <span className="text-gradient-primary">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4" />
        </div>

        {/* Horizontal Scroll Track */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="min-w-[260px] xs:min-w-[280px] sm:min-w-[340px] max-w-[380px] glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-400/50 hover:shadow-glow-blue transition-all group shrink-0 snap-center relative overflow-hidden flex flex-col justify-between"
            >
              {/* Light Reflection Sheen Effect */}
              <div className="absolute -top-24 -left-24 w-48 h-48 bg-gradient-to-br from-white/10 to-transparent rotate-45 group-hover:translate-x-96 group-hover:translate-y-96 transition-transform duration-1000 pointer-events-none" />

              <div>
                {cert.image && (
                  <img
                    src={cert.image}
                    alt={`${cert.name} certificate`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-32 object-cover rounded-2xl border border-white/10 mb-5"
                  />
                )}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                    <FiShield />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full glass-panel border border-cyan-400/30 text-cyan-300">
                    {cert.year}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-white mb-1.5 sm:mb-2 group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs font-mono text-purple-400 mb-3 sm:mb-4 font-semibold">
                  {cert.institute}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 sm:mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="border-t border-white/10 pt-3 sm:pt-4 flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 truncate">
                  ID: {cert.credentialId}
                </span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 shrink-0">
                  <FiCheckCircle /> Verified
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
