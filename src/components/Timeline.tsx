import React from 'react';
import { Compass, CheckCircle2, GraduationCap } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  return (
    <section id="journey" className="py-20 relative bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded bg-cyan-950/60 border border-cyan-500/30">
            <Compass className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Learning Journey</h2>
        </div>
        <p className="text-slate-400 font-mono text-sm mb-12">
          // CHRONOLOGY — ACADEMIC PROGRESSION &amp; TECHNICAL EVOLUTION
        </p>

        {/* Timeline Component */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 space-y-12 pl-6 sm:pl-10">
          {TIMELINE.map((evt, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Dot */}
              <div className={`absolute -left-[31px] sm:-left-[47px] top-0 w-6 h-6 rounded-full border-2 flex items-center justify-center bg-[#070b16] ${
                evt.highlight ? 'border-amber-400 text-amber-400 shadow-lg shadow-amber-500/30' : 'border-cyan-400 text-cyan-400'
              }`}>
                <div className={`w-2 h-2 rounded-full ${evt.highlight ? 'bg-amber-400' : 'bg-cyan-400'}`}></div>
              </div>

              {/* Event Card */}
              <div className={`glass-card rounded-xl p-6 border transition-all ${
                evt.highlight ? 'border-amber-500/40 bg-amber-950/10' : 'border-slate-800 hover:border-cyan-500/30'
              }`}>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xl font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded border border-cyan-500/30">
                      {evt.year}
                    </span>
                    <h3 className="text-lg font-bold text-white">{evt.title}</h3>
                  </div>

                  {evt.year === '2029' && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                      <GraduationCap className="w-3.5 h-3.5" /> Expected Graduation
                    </span>
                  )}
                </div>

                <ul className="space-y-2.5 mt-4">
                  {evt.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
