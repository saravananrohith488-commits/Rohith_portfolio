import React, { useState } from 'react';
import { Code2, Globe, ShieldAlert, Wrench, CheckCircle2 } from 'lucide-react';
import { PROGRAMMING_LANGUAGES, WEB_DEV_STACK, CYBERSECURITY_TOPICS, TOOLS_AND_TECH } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'web' | 'cyber' | 'tools'>('all');

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Comfortable':
        return 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40';
      case 'Intermediate':
        return 'bg-cyan-950/80 text-cyan-400 border-cyan-500/40';
      case 'Familiar':
        return 'bg-purple-950/80 text-purple-400 border-purple-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#050811] cyber-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded bg-cyan-950/60 border border-cyan-500/30">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Technical Stack & Skills</h2>
            </div>
            <p className="text-slate-400 font-mono text-sm">
              // TECH_CAPABILITIES — LANGUAGES, WEB, SECURITY & TOOLS
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1 bg-slate-900/90 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors ${
                activeTab === 'all' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Domains
            </button>
            <button
              onClick={() => setActiveTab('languages')}
              className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors ${
                activeTab === 'languages' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Languages
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors ${
                activeTab === 'web' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setActiveTab('cyber')}
              className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors ${
                activeTab === 'cyber' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Cyber Security
            </button>
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors ${
                activeTab === 'tools' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              Tools & Hardware
            </button>
          </div>
        </div>

        {/* 1. Programming Languages Section */}
        {(activeTab === 'all' || activeTab === 'languages') && (
          <div className="mb-12">
            <h3 className="text-lg font-mono text-cyan-400 mb-4 flex items-center gap-2">
              <Code2 className="w-4 h-4" /> Programming Languages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROGRAMMING_LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className="glass-card rounded-xl p-5 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {lang.name}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full border text-xs font-mono font-medium ${getLevelBadgeColor(lang.level)}`}>
                      {lang.level}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {lang.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2. Web Development Stack */}
        {(activeTab === 'all' || activeTab === 'web') && (
          <div className="mb-12">
            <h3 className="text-lg font-mono text-emerald-400 mb-4 flex items-center gap-2">
              <Globe className="w-4 h-4" /> Web Development & APIs
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {WEB_DEV_STACK.map((tech) => (
                <div
                  key={tech}
                  className="p-3.5 rounded-lg bg-slate-900/70 border border-slate-800/80 hover:border-emerald-500/40 text-center transition-all group"
                >
                  <span className="font-mono text-sm font-semibold text-slate-200 group-hover:text-emerald-400">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Cyber Security Domains */}
        {(activeTab === 'all' || activeTab === 'cyber') && (
          <div className="mb-12">
            <h3 className="text-lg font-mono text-cyan-400 mb-4 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" /> Cyber Security Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CYBERSECURITY_TOPICS.map((topic) => (
                <div
                  key={topic.name}
                  className="p-4 rounded-xl bg-slate-900/60 border border-cyan-950 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white font-mono mb-1">{topic.name}</h4>
                      <p className="text-slate-400 text-xs">{topic.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Tools & Environments */}
        {(activeTab === 'all' || activeTab === 'tools') && (
          <div>
            <h3 className="text-lg font-mono text-purple-400 mb-4 flex items-center gap-2">
              <Wrench className="w-4 h-4" /> Tools, IDEs & Hardware
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {TOOLS_AND_TECH.map((item) => (
                <div
                  key={item.name}
                  className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-colors"
                >
                  <div className="font-mono text-sm font-bold text-white mb-0.5">{item.name}</div>
                  <div className="text-[11px] text-slate-400">{item.category}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
