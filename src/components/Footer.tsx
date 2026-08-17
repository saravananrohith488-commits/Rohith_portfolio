import React from 'react';
import { Shield, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060d] border-t border-slate-800/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Brand Info */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="font-mono font-extrabold text-lg text-white tracking-wider uppercase">
                ROHITH
              </span>
            </div>
            <p className="text-slate-400 text-xs font-mono">
              Cyber Security Student • Developer • Tech Enthusiast
            </p>
            <p className="text-slate-500 text-xs">
              Sri Krishna College of Engineering and Technology (SKCET), Coimbatore
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-900 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
          <div>
            © 2026 Rohith. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>SYSTEM STATUS: ENCRYPTED &amp; ONLINE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
