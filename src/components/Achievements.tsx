import React from 'react';
import { Trophy, Calendar, Building, Sparkles, CheckCircle } from 'lucide-react';
import { ACHIEVEMENT } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative bg-[#050811] cyber-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded bg-amber-950/60 border border-amber-500/30">
            <Trophy className="w-5 h-5 text-amber-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Technical Achievements</h2>
        </div>
        <p className="text-slate-400 font-mono text-sm mb-10">
          // RECOGNITION — PROJECT EXPO AWARDS &amp; EXCELLENCE
        </p>

        {/* Prominent Achievement Card */}
        <div className="relative rounded-2xl bg-gradient-to-br from-amber-950/40 via-slate-900/90 to-cyan-950/40 border-2 border-amber-500/50 p-8 sm:p-10 shadow-2xl shadow-amber-500/10 overflow-hidden">
          
          {/* Decorative Background Glow & Sparkles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Trophy & Badge Left Box */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-xl bg-slate-950/70 border border-amber-500/30 space-y-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow-lg shadow-amber-500/30">
                  <Trophy className="w-10 h-10 text-slate-950" />
                </div>
                <div className="absolute -top-2 -right-2 p-1.5 rounded-full bg-slate-900 border border-amber-400 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <div>
                <span className="font-mono text-xs font-bold text-amber-400 tracking-wider uppercase block">
                  {ACHIEVEMENT.prize}
                </span>
                <h3 className="text-xl font-extrabold text-white mt-1">
                  Engineer's Day Expo '25
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>{ACHIEVEMENT.date}</span>
              </div>
            </div>

            {/* Content & Details Right Box */}
            <div className="lg:col-span-8 space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 font-mono text-xs text-cyan-300 mb-3">
                  <Building className="w-3.5 h-3.5" />
                  <span>{ACHIEVEMENT.organization}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {ACHIEVEMENT.title}
                </h3>
                <p className="text-slate-400 text-sm font-mono mt-1">
                  {ACHIEVEMENT.department}
                </p>
              </div>

              <p className="text-slate-300 text-base leading-relaxed">
                {ACHIEVEMENT.description}
              </p>

              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Practical Technical Innovation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Hands-on Prototype Demonstration</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>SKCET CSE Department Panel Selection</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
