import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, ShieldCheck, MapPin, Copy, Check, ExternalLink, Globe, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const getGmailWebUrl = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Rohith,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.socials.email}&su=${subject}&body=${body}`;
  };

  const getDirectMailtoUrl = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Message from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Rohith,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${PERSONAL_INFO.socials.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setStatusMessage('');

    try {
      // Standard JSON payload for Web3Forms API online deployment
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'fa3c3798-c5f6-4123-b484-ab1695556dc7',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Security Contact from ${formData.name}`,
          message: formData.message,
          from_name: `${formData.name} (Rohith Portfolio)`,
          botcheck: false
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage(`Message delivered directly to ${PERSONAL_INFO.socials.email}`);
        setSubmitted(true);
      } else {
        console.warn('Web3Forms Online Notice:', result);
        setStatusMessage(`Web3Forms Online Check: Opening email to ${PERSONAL_INFO.socials.email}...`);
        setSubmitted(true);
        // Fallback: If domain restriction is active on online host, open direct mailto
        window.location.href = getDirectMailtoUrl();
      }
    } catch (err) {
      console.warn('Submission fallback:', err);
      setStatusMessage(`Message logged for ${PERSONAL_INFO.socials.email}`);
      setSubmitted(true);
      window.location.href = getDirectMailtoUrl();
    } finally {
      setLoading(false);
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
                Direct Email: <strong className="text-white font-mono">saravananrohith488@gmail.com</strong>
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
                    <div className="text-xs text-slate-400 font-mono">Direct Email</div>
                    <div className="text-sm font-mono font-semibold text-white">{PERSONAL_INFO.socials.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded bg-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Profile */}
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
                    <div className="text-xs text-slate-400 font-mono">LinkedIn</div>
                    <div className="text-sm font-mono font-semibold text-white group-hover:text-cyan-400">
                      LinkedIn Profile
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400">Connect ›</span>
              </a>

              {/* GitHub Profile */}
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
                    <div className="text-xs text-slate-400 font-mono">GitHub</div>
                    <div className="text-sm font-mono font-semibold text-white group-hover:text-cyan-400">
                      saravananrohith488-commits
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
                  <h3 className="text-2xl font-bold text-white">Message Logged!</h3>
                  <p className="text-emerald-400 font-mono text-sm">
                    {statusMessage || `Target: ${PERSONAL_INFO.socials.email}`}
                  </p>
                  <p className="text-slate-300 text-xs leading-relaxed max-w-md mx-auto">
                    Your message has been processed. You can also send it directly via Gmail or Mail App below:
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={getGmailWebUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-red-500 to-amber-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg hover:from-red-400 hover:to-amber-400 transition-all"
                    >
                      <Globe className="w-4 h-4" />
                      <span>Send via Gmail Web</span>
                    </a>
                    
                    <a
                      href={getDirectMailtoUrl()}
                      className="px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-cyan-300 font-mono text-xs flex items-center gap-1.5 hover:bg-slate-800 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Mail App</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2.5 rounded-lg bg-slate-950 text-slate-400 font-mono text-xs border border-slate-800 hover:text-white"
                    >
                      Write Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
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
                        name="email"
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
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Security Discussion / Project Collaboration"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white text-sm focus:border-cyan-400 focus:outline-none font-mono"
                    ></textarea>
                  </div>

                  {/* Direct Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex-1 py-3.5 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-emerald-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <a
                      href={getGmailWebUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="py-3.5 px-4 rounded-lg bg-slate-900 border border-cyan-500/40 text-cyan-300 font-bold text-sm hover:bg-cyan-950/40 transition-all flex items-center justify-center gap-2"
                      title="Open directly in Gmail"
                    >
                      <Globe className="w-4 h-4 text-red-400" />
                      <span>Send via Gmail</span>
                    </a>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
