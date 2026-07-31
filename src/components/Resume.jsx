import { personalInfo, experienceTimeline, certificatesList } from '../data/portfolioData';
import { FiArrowRight, FiBriefcase, FiAward, FiCheckCircle, FiDownload } from 'react-icons/fi';

export default function Resume({ onOpenResumeModal }) {
  return (
    <section id="resume" className="relative py-24 sm:py-28">
      <div className="w-[94%] sm:w-[92%] max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold mb-2">Resume</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white">Professional Summary</h2>
          <p className="mt-4 max-w-3xl mx-auto text-slate-300 leading-relaxed">
            {personalInfo.careerObjective}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="glass-panel rounded-3xl border border-white/10 p-6 shadow-glow-blue">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-cyan-500/15 text-cyan-300">
                <FiBriefcase className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Work Experience</h3>
                <p className="text-sm text-slate-400">Built business intelligence dashboards and reporting systems.</p>
              </div>
            </div>
            <div className="space-y-4">
              {experienceTimeline.slice(0, 2).map((item) => (
                <div key={item.role} className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="font-semibold text-white">{item.role}</h4>
                    <span className="text-xs uppercase tracking-[0.3em] text-cyan-400">{item.period}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl border border-white/10 p-6 shadow-glow-blue">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-3 rounded-2xl bg-purple-500/15 text-purple-300">
                <FiAward className="text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Certifications</h3>
                <p className="text-sm text-slate-400">Verified credentials and professional achievements.</p>
              </div>
            </div>
            <div className="space-y-4">
              {certificatesList.slice(0, 3).map((certificate) => (
                <div key={certificate.title} className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="text-sm font-semibold text-white">{certificate.title}</h4>
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-400">{certificate.year}</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{certificate.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl border border-white/10 p-6 shadow-glow-blue flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-2xl bg-emerald-500/15 text-emerald-300">
                  <FiCheckCircle className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Core Skills</h3>
                  <p className="text-sm text-slate-400">Advanced Excel, Power Query, DAX, reporting and analytics.</p>
                </div>
              </div>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> Dashboard Design & KPI Tracking
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> Automated Reporting & Data Modeling
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> Power Query, Power Pivot & DAX
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.3em] text-white shadow-glow-blue transition hover:opacity-95"
            >
              View Full Resume <FiArrowRight className="text-base" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
