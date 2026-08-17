import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Shield, Cpu, Smartphone, Lock, AlertTriangle, CheckCircle2, X } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Cybersecurity', 'Authentication', 'Android / GPS', 'Hardware Experiment'];

  const filteredProjects = filterCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.includes(filterCategory) || p.category === filterCategory);

  const getStatusBadge = (status: Project['status']) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40';
      case 'In Development':
        return 'bg-amber-950/80 text-amber-400 border-amber-500/40';
      case 'Academic Project':
        return 'bg-cyan-950/80 text-cyan-400 border-cyan-500/40';
      case 'Educational Experiment':
        return 'bg-purple-950/80 text-purple-400 border-purple-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const getCategoryIcon = (category: Project['category']) => {
    switch (category) {
      case 'Cybersecurity':
      case 'Digital Forensics':
        return <Shield className="w-5 h-5 text-cyan-400" />;
      case 'Authentication':
        return <Lock className="w-5 h-5 text-emerald-400" />;
      case 'Android / GPS':
        return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'Hardware Experiment':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative bg-[#050811] cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded bg-cyan-950/60 border border-cyan-500/30">
                <FolderGit2 className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">Featured Technical Projects</h2>
            </div>
            <p className="text-slate-400 font-mono text-sm">
              // PROJECT_PORTFOLIO — HANDS-ON CYBERSECURITY, ANDROID &amp; HARDWARE BUILD
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 p-1 bg-slate-900/90 rounded-lg border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors ${
                  filterCategory === cat ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-xl p-6 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Category & Status Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded bg-slate-950 border border-slate-800">
                      {getCategoryIcon(project.category)}
                    </div>
                    <span className="font-mono text-xs text-cyan-400 font-semibold uppercase">
                      {project.category}
                    </span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full border text-xs font-mono font-medium ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.shortDesc}
                </p>

                {/* Problem Statement Snippet */}
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 mb-4 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 font-semibold">
                    <AlertTriangle className="w-3.5 h-3.5" /> Problem Focus:
                  </div>
                  <p className="text-slate-400 text-xs line-clamp-2">
                    {project.problemStatement}
                  </p>
                </div>

                {/* Key Features List (Top 3) */}
                <div className="space-y-1.5 mb-4">
                  <span className="text-xs font-mono text-slate-400 block mb-1">Key Highlights:</span>
                  {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 font-mono text-[11px] text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 hover:underline"
                >
                  [ View Details &amp; Solution ]
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal Popup */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#0b1221] border border-cyan-500/40 rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl space-y-6">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category & Title */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-cyan-400 font-semibold uppercase">
                    {selectedProject.category}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full border text-xs font-mono ${getStatusBadge(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              </div>

              {/* Problem & Solution */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-1">
                  <div className="text-xs font-mono text-amber-400 font-bold flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" /> Problem Statement
                  </div>
                  <p className="text-slate-300 text-sm">{selectedProject.problemStatement}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
                  <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Technical Solution
                  </div>
                  <p className="text-slate-300 text-sm">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Key Features Full Breakdown */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono text-white font-bold">Full Feature Breakdown:</h4>
                <ul className="space-y-2">
                  {selectedProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="text-cyan-400 font-mono mt-0.5">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="text-sm font-mono text-slate-400">Tech Stack Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded bg-slate-900 border border-cyan-500/30 font-mono text-xs text-cyan-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Buttons */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:border-cyan-500/50 text-xs font-mono"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
