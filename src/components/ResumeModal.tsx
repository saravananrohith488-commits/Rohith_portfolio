import React from 'react';
import { X, Printer, FileText, Award } from 'lucide-react';
import { PERSONAL_INFO, PROGRAMMING_LANGUAGES, PROJECTS, ACHIEVEMENT } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#0b1221] border border-cyan-500/40 rounded-2xl max-w-4xl w-full h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header Bar */}
        <div className="bg-[#070b16] px-6 py-4 border-b border-cyan-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm">
            <FileText className="w-5 h-5" />
            <span className="font-bold text-white">RESUME_VIEW — ROHTIH.pdf</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-slate-200 text-xs font-mono hover:text-cyan-400 hover:border-cyan-400 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper View Body */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-slate-950 text-slate-200 space-y-8 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/rohi.jpeg"
                alt="Rohtih"
                className="w-16 h-16 rounded-full object-cover object-top border-2 border-cyan-400 shrink-0"
              />
              <div>
                <h1 className="text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
                <p className="text-cyan-400 font-mono text-sm font-semibold mt-0.5">{PERSONAL_INFO.title}</p>
                <p className="text-slate-400 text-xs mt-1">{PERSONAL_INFO.location} • {PERSONAL_INFO.socials.email}</p>
              </div>
            </div>
            <div className="text-left sm:text-right font-mono text-xs text-slate-400">
              <p className="text-white font-bold">{PERSONAL_INFO.college}</p>
              <p>{PERSONAL_INFO.education}</p>
              <p className="text-emerald-400">Expected Graduation: {PERSONAL_INFO.graduationYear}</p>
            </div>
          </div>

          {/* About Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-2">
              PROFILE SUMMARY
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {PERSONAL_INFO.tagline} Focused on learning cybersecurity, networking, ethical security practices, and system software development. Demonstrated ability through practical project implementation and competition awards.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-3">
              EDUCATION
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex justify-between items-start">
              <div>
                <h3 className="text-base font-bold text-white">{PERSONAL_INFO.college}</h3>
                <p className="text-sm text-cyan-300 font-mono">{PERSONAL_INFO.education}</p>
                <p className="text-xs text-slate-400 mt-1">Coimbatore, Tamil Nadu, India</p>
              </div>
              <span className="px-3 py-1 rounded bg-slate-950 border border-slate-800 text-emerald-400 text-xs font-mono">
                2025 - 2029 (Expected)
              </span>
            </div>
          </div>

          {/* Key Award */}
          <div>
            <h2 className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider mb-3">
              HONORS &amp; AWARDS
            </h2>
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-3">
              <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-bold text-white">{ACHIEVEMENT.title}</h3>
                <p className="text-xs font-mono text-slate-300">{ACHIEVEMENT.organization} • {ACHIEVEMENT.department}</p>
                <p className="text-xs text-slate-400 mt-1">{ACHIEVEMENT.description}</p>
              </div>
            </div>
          </div>

          {/* Programming Languages & Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-3">
              TECHNICAL SKILLS &amp; PROFICIENCY
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROGRAMMING_LANGUAGES.map((l) => (
                <div key={l.name} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 flex justify-between items-center">
                  <span className="font-mono text-sm font-bold text-white">{l.name}</span>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-300 border border-slate-800">
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider mb-3">
              PROJECT EXPERIENCE
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-white">{p.title}</h3>
                    <span className="text-xs font-mono text-cyan-400">{p.category}</span>
                  </div>
                  <p className="text-xs text-slate-300">{p.shortDesc}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {p.technologies.map((t, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
