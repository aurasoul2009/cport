import React from 'react';
import { motion } from 'framer-motion';
import { FiGrid, FiActivity, FiCpu, FiTrendingUp, FiFilter, FiArrowRight } from 'react-icons/fi';

const iconMap = {
  FiGrid: FiGrid,
  FiActivity: FiActivity,
  FiCpu: FiCpu,
  FiTrendingUp: FiTrendingUp,
  FiFilter: FiFilter,
};

export default function Services({ services }) {
  return (
    <section id="services" className="py-24 relative z-10">
      <div className="w-[92%] max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-cyan-400 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-3">
            Client Solutions & Consulting
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white">
            Services <span className="text-gradient-primary">Offered</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mt-3">
            Tailored business analytics, MIS report automation, financial modeling, and executive dashboard development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FiGrid;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-400/50 hover:shadow-glow-blue transition-all group flex flex-col justify-between lg:col-span-2 ${index === 3 ? 'lg:col-start-2' : ''}`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white text-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <IconComponent />
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 group-hover:text-white transition-colors"
                >
                  Inquire Solution <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
