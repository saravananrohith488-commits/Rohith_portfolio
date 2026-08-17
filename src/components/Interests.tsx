import React from 'react';
import { Flame } from 'lucide-react';
import { INTEREST_AREAS } from '../data/portfolioData';

export const Interests: React.FC = () => {
  return (
    <section className="py-16 relative bg-[#050811] cyber-dots border-t border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded bg-cyan-950/60 border border-cyan-500/30">
            <Flame className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-2xl font-extrabold text-white tracking-tight">Areas of Interest &amp; Curiosity</h2>
        </div>
        <p className="text-slate-400 font-mono text-xs mb-8">
          // DOMAINS_EXPLORED — TECHNICAL DOMAINS &amp; PASSIONS
        </p>

        <div className="flex flex-wrap gap-3">
          {INTEREST_AREAS.map((interest, idx) => (
            <div
              key={idx}
              className="px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 hover:bg-cyan-950/30 transition-all font-mono text-xs font-semibold text-slate-200 hover:text-cyan-300 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>{interest}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
