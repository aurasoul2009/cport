import { motion } from 'framer-motion';
import { FiArrowUpRight, FiAward, FiBarChart2, FiBriefcase, FiCheckCircle, FiDownload } from 'react-icons/fi';

export default function Resume({ personalInfo, professionalSummary, summaryStats, projects, skills, certificates }) {
  const counts = { Projects: projects.length, Skills: skills.length, Certificates: certificates.length };
  const displayedStats = summaryStats.map((stat) => ({
    ...stat,
    value: counts[stat.label] ?? stat.value
  }));

  return (
    <section id="resume" className="relative py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
      <div className="relative w-[94%] sm:w-[92%] max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold mb-2">Resume</p>
          <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl text-white">Professional Summary</h2>
          <p className="mt-5 max-w-4xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            {personalInfo.aboutSummary}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {professionalSummary.specialisms.map((specialism) => (
              <span key={specialism} className="px-3 py-1.5 rounded-full glass-panel border border-cyan-400/20 text-[10px] sm:text-xs font-mono text-cyan-200">
                {specialism}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mb-8">
          {displayedStats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="min-w-0 glass-panel rounded-2xl sm:rounded-3xl border border-white/10 p-4 sm:p-6 text-center hover:border-cyan-400/40 hover:shadow-glow-blue transition-all"
            >
              <div className="font-display font-black text-2xl sm:text-4xl text-gradient-primary">{stat.value}</div>
              <div className="mt-1 text-[11px] xs:text-xs sm:text-sm font-bold text-white break-words">{stat.label}</div>
              <div className="hidden sm:block mt-1 text-[10px] font-mono text-slate-500">{stat.detail}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div whileHover={{ y: -5 }} className="glass-panel rounded-3xl border border-white/10 p-6 shadow-glow-blue">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-cyan-500/15 text-cyan-300"><FiBriefcase className="text-xl" /></div>
              <div>
                <h3 className="text-lg font-semibold text-white">Work Experience</h3>
                <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">{professionalSummary.workExperienceYear}</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">{professionalSummary.workExperienceDescription}</p>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="glass-panel rounded-3xl border border-white/10 p-6 shadow-glow-blue">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-purple-500/15 text-purple-300"><FiAward className="text-xl" /></div>
              <div>
                <h3 className="text-lg font-semibold text-white">Certifications</h3>
                <p className="text-sm text-slate-400">Verified professional learning</p>
              </div>
            </div>
            <div className="space-y-3">
              {certificates.slice(0, 3).map((certificate) => (
                <div key={certificate.id} className="min-w-0 border-t border-white/10 pt-3 flex justify-between gap-3">
                  <span className="min-w-0 text-sm font-medium text-slate-200 break-words">{certificate.name}</span>
                  <span className="text-xs font-mono text-purple-300 shrink-0">{certificate.year}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="glass-panel rounded-3xl border border-white/10 p-6 shadow-glow-blue flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-300"><FiBarChart2 className="text-xl" /></div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Core Skills</h3>
                  <p className="text-sm text-slate-400">Reporting, analytics, and BI</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-300 text-sm">
                {skills.slice(0, 4).map((skill) => (
                  <li key={skill.id} className="flex items-center gap-3">
                    <FiCheckCircle className="text-cyan-400 shrink-0" /> {skill.name}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-white shadow-glow-blue transition hover:opacity-95"
            >
              View Full Resume <FiArrowUpRight className="text-base" />
            </a>
          </motion.div>
        </div>

        <div className="mt-6 text-center">
          <a href="/resume/resume.pdf" download className="touch-target inline-flex items-center gap-2 px-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-cyan-300 transition-colors">
            <FiDownload /> Download PDF copy
          </a>
        </div>
      </div>
    </section>
  );
}
