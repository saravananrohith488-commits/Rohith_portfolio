import React from 'react';
import { Terminal, Cpu, Smartphone, Code, CheckCircle2, ChevronRight } from 'lucide-react';
import { CPP_DSA_PROJECTS, LINUX_KNOWLEDGE } from '../data/portfolioData';

export const HardwareAndSystems: React.FC = () => {
  return (
    <section className="py-20 relative bg-[#070b16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* 1. C / C++ Core Systems & DSA Problems Section */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded bg-cyan-950/60 border border-cyan-500/30">
              <Code className="w-5 h-5 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">C / C++ Systems &amp; DSA Practice</h2>
          </div>
          <p className="text-slate-400 font-mono text-sm mb-8">
            // PROGRAMMING_PRACTICE — DATA STRUCTURE IMPLEMENTATIONS &amp; ALGORITHMIC SIMULATIONS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CPP_DSA_PROJECTS.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-base font-bold text-white flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-cyan-400" />
                    {item.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 font-mono text-[11px] text-cyan-300">
                    {item.lang}
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Hardware Experiments & Android Development Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Hardware Security Experiments Box */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-amber-500/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-amber-950/50 border border-amber-500/30">
                <Cpu className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Hardware &amp; ESP32 Security Research</h3>
                <span className="font-mono text-xs text-amber-400">Educational Security Experiments</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Hands-on experimental setup using <strong className="text-white">ESP32 microcontrollers</strong> to study Wi-Fi protocol interactions, packet telemetry, signal monitoring, and IoT device security in isolated, controlled lab environments.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Wi-Fi packet frame structure analysis (Laboratory setting)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Wireless signal strength &amp; network monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>IoT device vulnerability testing &amp; controlled research</span>
              </div>
            </div>
          </div>

          {/* Android Development Box */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-purple-500/20 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-purple-950/50 border border-purple-500/30">
                <Smartphone className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Android Mobile Development</h3>
                <span className="font-mono text-xs text-purple-400">Android Studio &amp; Java</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Explored mobile app architecture, activity lifecycles, and location service integrations. Built the <strong className="text-white">Bike Tracking &amp; Ride Analytics Application</strong> for real-time GPS telemetry, speed monitoring, and trip statistics.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Android Studio IDE &amp; Java mobile layout design</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Real-time GPS Location Manager integration</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>Mobile device testing, permissions &amp; background data tracking</span>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Linux & System Knowledge Section */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-cyan-500/20">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded bg-cyan-950/60 border border-cyan-500/30">
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-white">Linux &amp; System Knowledge</h3>
              <p className="text-slate-400 font-mono text-xs">// CLI_OPERATIONS — PERMISSIONS, PROCESSES &amp; UTILITIES</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {LINUX_KNOWLEDGE.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <h4 className="font-mono text-xs font-bold text-cyan-400">{item.topic}</h4>
                <p className="text-slate-300 text-xs leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
