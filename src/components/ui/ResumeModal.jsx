import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiPrinter, FiDownload, FiCheckCircle } from 'react-icons/fi';
import { personalInfo, experienceTimeline, certificatesList } from '../../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[99995] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-400/40 shadow-glow-blue z-10 max-h-[90vh] overflow-y-auto text-slate-200"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-white">
                {personalInfo.name}
              </h2>
              <p className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                {personalInfo.title}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-4 py-2 rounded-xl glass-panel border border-white/20 text-xs font-bold text-slate-200 hover:text-cyan-400 hover:border-cyan-400 transition-colors flex items-center gap-2"
              >
                <FiPrinter /> Print Resume
              </button>
              <button
                onClick={onClose}
                className="p-2.5 rounded-full glass-panel border border-white/20 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
              >
                <FiX className="text-lg" />
              </button>
            </div>
          </div>

          {/* Resume Body Document */}
          <div className="space-y-8 text-sm">
            
            {/* Header Contact Block */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl glass-panel border border-white/10 font-mono text-xs text-slate-300">
              <div><strong>Email:</strong> {personalInfo.email}</div>
              <div><strong>Phone:</strong> {personalInfo.phone}</div>
              <div><strong>Location:</strong> {personalInfo.location}</div>
              <div><strong>Visa Status:</strong> {personalInfo.visaStatus}</div>
            </div>

            {/* Professional Summary */}
            <div>
              <h3 className="font-display font-bold text-lg text-cyan-300 uppercase tracking-wider border-b border-cyan-400/30 pb-2 mb-3">
                Professional Summary
              </h3>
              <p className="leading-relaxed text-slate-300">
                {personalInfo.aboutSummary}
              </p>
            </div>

            {/* Project Experience */}
            <div>
              <h3 className="font-display font-bold text-lg text-cyan-300 uppercase tracking-wider border-b border-cyan-400/30 pb-2 mb-4">
                Project Experience
              </h3>
              <div className="space-y-4">
                <div className="p-4 rounded-xl glass-panel border border-white/5">
                  <h4 className="font-bold text-white text-base">Medicine Data Vault — MIS Dashboard Project</h4>
                  <p className="text-xs text-cyan-400 font-mono mb-2">Excel, Power Query, Power Pivot, DAX</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>Built an Excel-based MIS dashboard to track pharmaceutical Sales, Purchase, GST, and Profit Margin.</li>
                    <li>Designed interactive charts and slicers enabling fiscal-year-wise and staff-wise MIS reporting.</li>
                    <li>Consolidated multi-sheet pharmaceutical data into a single automated drill-down dashboard, cutting manual report effort by 70%.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl glass-panel border border-white/5">
                  <h4 className="font-bold text-white text-base">Fiscal Matrix — Financial MIS Dashboard</h4>
                  <p className="text-xs text-cyan-400 font-mono mb-2">Power Query, Power Pivot, DAX, Financial Analytics</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>Developed an Excel dashboard using Power Query, Power Pivot, and DAX to monitor Revenue, Expense, and P&L data.</li>
                    <li>Enabled department-wise and category-wise MIS analysis through dynamic slicers and pivot reporting.</li>
                    <li>Delivered a single interactive view of departmental P&L performance, replacing scattered tracking spreadsheets.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl glass-panel border border-white/5">
                  <h4 className="font-bold text-white text-base">Fraud Pulse Analytics — Risk & Data Analysis Dashboard</h4>
                  <p className="text-xs text-cyan-400 font-mono mb-2">Power Query, Power Pivot, DAX, Risk Modeling</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-300">
                    <li>Created a fraud detection MIS dashboard to analyze customer risk profiles, credit scores, and debt-to-income ratios.</li>
                    <li>Applied filters and slicers for occupation, payment behavior, and fraud-flag tracking to support decisions.</li>
                    <li>Enabled faster identification of high-risk accounts through automated fraud-flag filtering.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="font-display font-bold text-lg text-cyan-300 uppercase tracking-wider border-b border-cyan-400/30 pb-2 mb-3">
                Education
              </h3>
              <div className="font-semibold text-white">Bachelor of Science in Computer Science</div>
              <div className="text-xs font-mono text-slate-400">The American College, Madurai | 2022 – 2025 | CGPA: 8.5</div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-display font-bold text-lg text-cyan-300 uppercase tracking-wider border-b border-cyan-400/30 pb-2 mb-3">
                Certifications & Languages
              </h3>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li>Typewriting (English) — Junior & Senior, First Class with Distinction</li>
                <li>Excel Power Query, Power Pivot & DAX — Udemy Certified</li>
                <li>Languages: English (Professional Proficiency), Tamil (Native)</li>
              </ul>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
