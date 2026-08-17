import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldCheck, MapPin, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#070b16] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 font-mono text-xs">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let's Build Something Secure
          </h2>
          <p className="text-slate-300 text-base">
            Interested in cybersecurity, technology, collaboration or interesting projects? Let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Status Pill Card */}
            <div className="glass-card rounded-xl p-6 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="font-mono text-xs text-emerald-400 font-bold uppercase">
                  STATUS: AVAILABLE FOR PROJECTS &amp; COLLABORATION
                </span>
              </div>
              <p className="text-slate-300 text-sm">
                Open to security research discussions, open-source projects, and technical peer networking.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              
              {/* Email Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Email Placeholder</div>
                    <div className="text-sm font-mono font-semibold text-white">{PERSONAL_INFO.socials.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                  title="Copy email placeholder"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Placeholder */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-cyan-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 group-hover:text-cyan-400">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">LinkedIn Profile</div>
                    <div className="text-sm font-mono font-semibold text-white group-hover:text-cyan-400">
                      LinkedIn Connection Placeholder
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400">Connect ›</span>
              </a>

              {/* GitHub Placeholder */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-cyan-500/40 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 group-hover:text-cyan-400">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">GitHub Repositories</div>
                    <div className="text-sm font-mono font-semibold text-white group-hover:text-cyan-400">
                      GitHub Profile Placeholder
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400">Follow ›</span>
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-mono">College Location</div>
                  <div className="text-sm font-mono font-semibold text-white">Coimbatore, Tamil Nadu, India</div>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/30">
              
              {submitted ? (
                <div className="p-8 text-center space-y-4 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Transmitted!</h3>
                  <p className="text-slate-300 text-sm">
                    Thank you for reaching out. Your message has been logged.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-4 py-2 rounded-lg bg-slate-900 text-cyan-400 font-mono text-xs border border-slate-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Security Discussion / Project Collaboration"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none font-mono"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
