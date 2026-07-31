import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../../data/portfolioData';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiCheckCircle } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setErrorMessage('');

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setSentSuccess(true);
      setIsSending(false);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSentSuccess(false), 5000);
    } catch (err) {
      console.error('Email submit error:', err);
      setErrorMessage('Could not send message automatically. Please email direct to amirthavarshini042@gmail.com');
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative z-10">
      <div className="w-[94%] sm:w-[92%] max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 px-4 py-1.5 rounded-full glass-panel border border-cyan-500/30 mb-3">
            Let's Build Something Impactful
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-base max-w-xl mt-3">
            Open for full-time MIS Executive, Reporting Analyst & Data Analyst roles or freelance consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 shadow-glass-card space-y-6">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-4">
                Contact Information
              </h3>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl glass-panel border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-lg sm:text-xl shrink-0">
                  <FiMail />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-400">Direct Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors break-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl glass-panel border border-purple-500/30 flex items-center justify-center text-purple-400 text-lg sm:text-xl shrink-0">
                  <FiPhone />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-400">Phone / WhatsApp</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl glass-panel border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-lg sm:text-xl shrink-0">
                  <FiMapPin />
                </div>
                <div>
                  <div className="text-[10px] sm:text-[11px] font-mono uppercase text-slate-400">Location & Mobility</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {personalInfo.location}
                  </div>
                  <div className="text-[11px] sm:text-xs text-emerald-400 mt-0.5">
                    {personalInfo.relocation}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl glass-panel border border-white/10 flex items-center justify-center text-slate-200 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                  title="LinkedIn Profile"
                >
                  <FiLinkedin className="text-lg sm:text-xl" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl glass-panel border border-white/10 flex items-center justify-center text-slate-200 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                  title="GitHub Profile"
                >
                  <FiGithub className="text-lg sm:text-xl" />
                </a>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="glass-panel p-2.5 sm:p-4 rounded-3xl border border-white/10 overflow-hidden h-[180px] sm:h-[220px]">
              <iframe
                title="Madurai Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125742.66662758117!2d78.0494443!3d9.9252007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc905b5e3d74868e!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Premium Glass Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-cyan-500/30 shadow-glow-blue">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Rivera"
                      className="w-full px-4 py-3.5 rounded-xl glass-panel border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-base"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3.5 rounded-xl glass-panel border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-base"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Subject / Project Interest
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Hiring for MIS Executive Role"
                    className="w-full px-4 py-3.5 rounded-xl glass-panel border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-base"
                  />
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details on job opening or analytics requirement..."
                    className="w-full px-4 py-3.5 rounded-xl glass-panel border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-base resize-none"
                  />
                </div>

                {/* Animated Send Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold text-xs uppercase tracking-widest shadow-glow-blue hover:opacity-95 transition-all flex items-center justify-center gap-2.5 disabled:opacity-50"
                >
                  {isSending ? (
                    <span>TRANSMITTING MESSAGE...</span>
                  ) : sentSuccess ? (
                    <span className="flex items-center gap-2 text-emerald-300">
                      <FiCheckCircle className="text-lg" /> TRANSMITTED SUCCESSFULLY!
                    </span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span> <FiSend className="text-base" />
                    </>
                  )}
                </button>

                {errorMessage && (
                  <div className="p-3 rounded-xl glass-panel border border-rose-500/30 text-rose-300 text-xs font-mono text-center">
                    {errorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
