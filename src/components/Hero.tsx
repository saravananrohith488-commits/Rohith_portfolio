import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail, Terminal, MapPin, Lock, User, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [typedText, setTypedText] = useState('');
  const [viewMode, setViewMode] = useState<'photo' | 'code'>('photo');

  const roles = [
    'Cyber Security Student',
    'C / C++ Developer',
    'Network Security Enthusiast',
    'Tech Explorer & Builder'
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 70);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 40);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    setTypedText(currentRole.substring(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center cyber-grid overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-mono text-xs text-cyan-300 tracking-wide">
                Sri Krishna College of Engineering &amp; Technology (SKCET)
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 glow-text-cyan">{PERSONAL_INFO.name}</span>
              </h1>
              
              <div className="h-10 flex items-center">
                <span className="font-mono text-xl sm:text-2xl text-cyan-400 font-semibold">
                  &gt; {typedText}
                  <span className="animate-pulse text-emerald-400">|</span>
                </span>
              </div>
            </div>

            {/* Supporting Tagline */}
            <p className="text-slate-300 text-lg max-w-2xl leading-relaxed font-sans">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Personal Branding Keywords */}
            <div className="flex flex-wrap gap-2 pt-1">
              {PERSONAL_INFO.brandingKeywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/60 font-mono text-xs text-cyan-300/90"
                >
                  #{kw}
                </span>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold text-sm hover:from-cyan-400 hover:to-emerald-400 transition-all duration-200 shadow-lg shadow-cyan-500/20 group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-slate-900/80 border border-cyan-500/40 text-cyan-300 font-semibold text-sm hover:bg-cyan-950/40 hover:border-cyan-400 transition-all duration-200"
              >
                Contact Me
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-lg bg-slate-800/60 border border-slate-700 text-slate-300 font-medium text-sm hover:text-white hover:border-slate-500 transition-all duration-200"
              >
                Download Resume
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="flex items-center gap-6 pt-6 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile (saravananrohith488-commits)"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.socials.email}`}
                  className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors"
                  aria-label="Email"
                  title="saravananrohith488@gmail.com"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Profile Photo & Code Box */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-5 border border-cyan-500/40 shadow-2xl relative space-y-4">
              
              {/* Card Top Control Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                </div>
                
                {/* View Switcher Tabs */}
                <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-lg border border-slate-800 font-mono text-[11px]">
                  <button
                    onClick={() => setViewMode('photo')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
                      viewMode === 'photo' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <User className="w-3 h-3" />
                    <span>I am</span>
                  </button>
                  <button
                    onClick={() => setViewMode('code')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors ${
                      viewMode === 'code' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Code className="w-3 h-3" />
                    <span>Code</span>
                  </button>
                </div>

                <button
                  onClick={onOpenTerminal}
                  className="font-mono text-[11px] text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <Terminal className="w-3 h-3" />
                  <span>CLI</span>
                </button>
              </div>

              {/* View Mode 1: Rohtih's Profile Photo */}
              {viewMode === 'photo' ? (
                <div className="space-y-4">
                  <div className="relative rounded-xl overflow-hidden border-2 border-cyan-500/30 group">
                    <img
                      src="/rohi.jpeg"
                      alt="Rohtih — Cyber Security Student & Developer"
                      className="w-full h-[380px] sm:h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Glowing Scanline Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-transparent to-transparent opacity-80"></div>
                    
                    {/* Security Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 border border-emerald-400/50 backdrop-blur-md flex items-center gap-1.5 font-mono text-xs text-emerald-300">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>SEC_VERIFIED</span>
                    </div>

                    {/* Bottom Label Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white text-sm font-mono">{PERSONAL_INFO.name}</div>
                        <div className="text-[11px] text-cyan-300 font-mono">SKCET Cyber Security '29</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* View Mode 2: Interactive Terminal Code Snippet Preview */
                <div className="font-mono text-xs space-y-3 text-slate-300 py-2">
                  <div className="text-slate-500">// Student Profile Status</div>
                  <div>
                    <span className="text-cyan-400">const</span> <span className="text-emerald-300">student</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">name</span>: <span className="text-amber-300">"{PERSONAL_INFO.name}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">degree</span>: <span className="text-amber-300">"B.E. CSE — Cyber Security"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">college</span>: <span className="text-amber-300">"SKCET Coimbatore"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">email</span>: <span className="text-cyan-300">"{PERSONAL_INFO.socials.email}"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">github</span>: <span className="text-cyan-300">"saravananrohith488-commits"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-purple-300">expectedGraduation</span>: <span className="text-emerald-400">2029</span>
                  </div>
                  <div>&#125;;</div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-400" /> Security Check: PASS
                    </span>
                    <span className="text-emerald-400 font-bold">2nd Prize SKCET Expo '25</span>
                  </div>
                </div>
              )}

              {/* Quick Stat Pill Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2 border-t border-slate-800/80">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                  <div className="text-xl font-bold font-mono text-cyan-400">B.E. CSE</div>
                  <div className="text-[11px] text-slate-400">Cyber Security</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-center">
                  <div className="text-xl font-bold font-mono text-emerald-400">4+</div>
                  <div className="text-[11px] text-slate-400">Core Projects</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
