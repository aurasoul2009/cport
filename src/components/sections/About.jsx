import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiTarget, FiZap } from 'react-icons/fi';

const icons = { target: FiTarget, book: FiBookOpen, zap: FiZap, award: FiAward };
const themes = {
  cyan: { text: 'text-cyan-400', border: 'border-cyan-500/30' },
  purple: { text: 'text-purple-400', border: 'border-purple-500/30' },
  emerald: { text: 'text-emerald-400', border: 'border-emerald-500/30' },
  amber: { text: 'text-amber-400', border: 'border-amber-500/30' }
};

export default function About({ cards }) {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="w-[92%] max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-3">
            Interactive Timeline & Objectives
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            About <span className="text-gradient-primary">Amirtha Varshini</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => {
            const Icon = icons[card.icon] || FiTarget;
            const theme = themes[card.theme] || themes.cyan;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`glass-panel p-8 rounded-3xl border ${theme.border} hover:shadow-glow-blue transition-all relative group overflow-hidden`}
              >
                <div className="absolute -right-20 -bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/10 to-purple-500/10 blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="w-14 h-14 rounded-2xl glass-panel flex items-center justify-center border border-white/10 group-hover:border-cyan-400 transition-colors">
                    <Icon className={`text-2xl ${theme.text}`} />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full glass-panel border border-white/10 text-slate-300">{card.tag}</span>
                </div>
                <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-3 relative z-10 group-hover:text-cyan-300 transition-colors">{card.title}</h3>
                <p className="text-sm md:text-base text-slate-300 leading-relaxed relative z-10">{card.content}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
