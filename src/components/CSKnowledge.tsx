import React from 'react';
import { Cpu, Binary, Layers } from 'lucide-react';
import { DSA_CONCEPTS, CS_CORE_TOPICS } from '../data/portfolioData';

export const CSKnowledge: React.FC = () => {
  return (
    <section id="cs-knowledge" className="py-20 relative bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded bg-cyan-950/60 border border-cyan-500/30">
            <Cpu className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Computer Science Knowledge</h2>
        </div>
        <p className="text-slate-400 font-mono text-sm mb-12">
          // ACADEMIC_FOUNDATION — DATA STRUCTURES, ALGORITHMS &amp; CORE THEORY
        </p>

        {/* DSA Concepts Grid */}
        <div className="mb-14">
          <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
            <Binary className="w-5 h-5 text-emerald-400" /> Data Structures &amp; Algorithms
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DSA_CONCEPTS.map((group, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-6 border border-slate-800 hover:border-emerald-500/30 transition-colors"
              >
                <h4 className="text-base font-mono font-bold text-emerald-400 mb-4 pb-2 border-b border-slate-800">
                  {group.title}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 p-2.5 rounded bg-slate-900/80 border border-slate-800/90"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></span>
                      <span className="font-mono text-xs text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CS Core Topics Grid */}
        <div>
          <h3 className="text-xl font-extrabold text-white mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" /> Core Computer Science Fundamentals
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CS_CORE_TOPICS.map((topic, idx) => (
              <div
                key={idx}
                className="glass-card rounded-xl p-5 border border-slate-800 hover:border-cyan-500/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold text-white font-mono mb-3 text-cyan-300">
                    {topic.title}
                  </h4>
                  <ul className="space-y-2">
                    {topic.concepts.map((concept, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="text-cyan-500 font-mono">›</span>
                        <span>{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
                  Academic Curriculum
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
