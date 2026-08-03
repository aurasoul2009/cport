import { FiArrowRight } from 'react-icons/fi';

export default function Resume({ onOpenResumeModal }) {
  return (
    <section id="resume" className="relative py-24 sm:py-28">
      <div className="w-[94%] sm:w-[92%] max-w-7xl mx-auto text-center">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-bold mb-2">Resume</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white">Professional Summary</h2>
        </div>

        <div className="max-w-xl mx-auto">
          <button
            type="button"
            onClick={onOpenResumeModal}
            className="mt-8 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-5 py-3 text-sm font-bold uppercase tracking-[0.3em] text-white shadow-glow-blue transition hover:opacity-95"
          >
            View Full Resume <FiArrowRight className="text-base" />
          </button>
        </div>
      </div>
    </section>
  );
}
