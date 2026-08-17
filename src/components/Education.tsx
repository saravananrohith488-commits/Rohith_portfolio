import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Education: React.FC = () => {
  const coursework = [
    'Cyber Security Fundamentals',
    'Data Structures & Algorithms',
    'Computer Networks & Protocols',
    'Operating Systems & Linux',
    'Object-Oriented Programming (C++/Java)',
    'Computer Architecture & Memory Concepts',
    'Network & Authentication Security',
    'Hardware & Wireless Security (ESP32)'
  ];

  return (
    <section id="education" className="py-20 relative bg-[#050811] cyber-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded bg-cyan-950/60 border border-cyan-500/30">
            <GraduationCap className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Academic Education</h2>
        </div>
        <p className="text-slate-400 font-mono text-sm mb-12">
          // INSTITUTION_DETAILS — DEGREE, COLLEGE &amp; SPECIALIZATION
        </p>

        {/* Main Education Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            
            {/* Degree & College Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>2025 – 2029 (Expected Graduation)</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {PERSONAL_INFO.education}
              </h3>

              <div className="text-lg font-semibold text-cyan-400 font-mono flex items-center gap-2">
                <span>{PERSONAL_INFO.college}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400 text-sm font-mono pt-1">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed pt-2">
                Pursuing specialized engineering studies in Cyber Security at SKCET, building a strong foundation in computer science theory, core programming, network protocols, threat analysis, and hands-on laboratory security experiments.
              </p>

              <div className="pt-4 flex items-center gap-3">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-xs font-mono text-slate-400">Expo Honor</div>
                    <div className="text-xs font-bold text-white">2nd Prize SKCET Expo '25</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Coursework Grid */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-sm font-mono font-bold text-cyan-400 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Relevant Academic Coursework
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-300 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
