import React from 'react';
import { User, ShieldCheck, Code, Network, Lightbulb, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const coreValues = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      title: 'Ethical Cybersecurity',
      desc: 'Exploring threat mitigation, evidence preservation, credential safety, and secure authentication models.'
    },
    {
      icon: <Code className="w-5 h-5 text-emerald-400" />,
      title: 'Programming & Logic',
      desc: 'Building clean code implementations in C, C++, Java, and Python with focus on Data Structures and Algorithms.'
    },
    {
      icon: <Network className="w-5 h-5 text-purple-400" />,
      title: 'Networking & Systems',
      desc: 'Studying OS fundamentals, Linux commands, network protocols, Wi-Fi mechanics, and ESP32 hardware experiments.'
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-amber-400" />,
      title: 'Learning by Building',
      desc: 'Turning theoretical computer science principles into practical software and Android mobile applications.'
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded bg-cyan-950/60 border border-cyan-500/30">
            <User className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">About Me</h2>
        </div>
        <p className="text-slate-400 font-mono text-sm mb-12">
          // WHO_I_AM — STUDENT &amp; TECH EXPLORER
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Text Description Box */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="glass-card rounded-xl p-6 sm:p-8 space-y-4">
              <blockquote className="border-l-4 border-cyan-400 pl-4 py-1 text-cyan-300 font-mono text-base italic">
                "{PERSONAL_INFO.bioQuote}"
              </blockquote>

              <p className="text-slate-300 leading-relaxed">
                I am a Computer Science and Engineering student specializing in <strong className="text-white">Cyber Security</strong> at <strong className="text-cyan-400">Sri Krishna College of Engineering and Technology (SKCET), Coimbatore</strong> (Expected Graduation 2029).
              </p>

              <p className="text-slate-300 leading-relaxed">
                My technical journey centers around understanding how systems work under the hood—from core programming in C and C++ to network packet flows, credential protection logic, and mobile applications. Rather than just relying on classroom theory, I actively reinforce my learning by designing and building practical software projects.
              </p>

              <p className="text-slate-300 leading-relaxed">
                Whether it's logging digital fraud evidence, creating secure credential management concepts, tracking motorcycle ride telemetry on Android, or experimenting with wireless security on ESP32 microcontrollers, I am driven by curiosity, analytical problem-solving, and continuous technical learning.
              </p>

              {/* Education Highlight Badge */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-cyan-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>SKCET Coimbatore</span>
                </div>
                <div className="text-slate-600">•</div>
                <div className="text-emerald-400">B.E. CSE (Cyber Security)</div>
                <div className="text-slate-600">•</div>
                <div className="text-slate-400">Batch 2025 - 2029</div>
              </div>
            </div>

          </div>

          {/* Core Values / Strengths Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                    {val.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{val.title}</h3>
                    <p className="text-slate-400 text-sm leading-snug">{val.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
