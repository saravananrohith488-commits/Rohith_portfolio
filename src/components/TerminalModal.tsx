import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROGRAMMING_LANGUAGES, PROJECTS, ACHIEVEMENT } from '../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">ROHTIH SECURITY CLI TERMINAL v1.0.4</p>
          <p>Type <span className="text-emerald-400 font-bold">'help'</span> to view available commands.</p>
        </div>
      )
    }
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim().toLowerCase();

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400">Available commands:</p>
            <p><span className="text-emerald-400 font-bold">whoami</span> — Display Rohtih profile &amp; background</p>
            <p><span className="text-emerald-400 font-bold">skills</span> — List programming languages &amp; technical stack</p>
            <p><span className="text-emerald-400 font-bold">projects</span> — View cybersecurity &amp; Android projects</p>
            <p><span className="text-emerald-400 font-bold">achievements</span> — View SKCET 2nd Prize award details</p>
            <p><span className="text-emerald-400 font-bold">contact</span> — Get contact info &amp; social placeholders</p>
            <p><span className="text-emerald-400 font-bold">sudo hire</span> — Execute recruiter evaluation</p>
            <p><span className="text-emerald-400 font-bold">clear</span> — Clear terminal window</p>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p><strong className="text-white">Name:</strong> {PERSONAL_INFO.name}</p>
            <p><strong className="text-white">Title:</strong> {PERSONAL_INFO.title}</p>
            <p><strong className="text-white">College:</strong> {PERSONAL_INFO.college}</p>
            <p><strong className="text-white">Graduation:</strong> {PERSONAL_INFO.graduationYear}</p>
            <p><strong className="text-cyan-400 font-bold">Quote:</strong> "{PERSONAL_INFO.bioQuote}"</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-cyan-400">Languages &amp; Levels:</p>
            {PROGRAMMING_LANGUAGES.map((l) => (
              <p key={l.name}>
                • <strong className="text-white">{l.name}</strong>: <span className="text-emerald-400">{l.level}</span> — {l.desc}
              </p>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-slate-300">
            <p className="text-cyan-400">Core Technical Projects:</p>
            {PROJECTS.map((p, idx) => (
              <div key={p.id} className="pl-2 border-l-2 border-slate-700">
                <p className="font-bold text-white">[{idx + 1}] {p.title}</p>
                <p className="text-xs text-slate-400">Category: {p.category} | Status: {p.status}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'achievements':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p className="text-amber-400 font-bold">🏆 {ACHIEVEMENT.title}</p>
            <p><strong>Org:</strong> {ACHIEVEMENT.organization}</p>
            <p><strong>Dept:</strong> {ACHIEVEMENT.department}</p>
            <p><strong>Date:</strong> {ACHIEVEMENT.date}</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <p>📧 Email: <span className="text-cyan-300">{PERSONAL_INFO.socials.email}</span></p>
            <p>🔗 LinkedIn: <span className="text-cyan-300">{PERSONAL_INFO.socials.linkedin}</span></p>
            <p>💻 GitHub: <span className="text-cyan-300">{PERSONAL_INFO.socials.github}</span></p>
            <p>📍 Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'sudo hire':
        outputNode = (
          <div className="p-3 rounded bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 space-y-1">
            <p className="font-bold">[SECURITY PERMISSION: GRANTED]</p>
            <p>Rohtih is motivated, builds real projects, understands DSA fundamentals, and continuously explores cybersecurity!</p>
            <p className="text-xs text-emerald-400">Recommendation: Great candidate for internships &amp; student engineering programs!</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        outputNode = (
          <p className="text-red-400">
            Command not recognized: '<span className="text-white">{input}</span>'. Type '<span className="text-cyan-400">help</span>' for valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: input, output: outputNode }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#050811] border border-cyan-500/50 rounded-xl w-full max-w-3xl h-[550px] flex flex-col shadow-2xl overflow-hidden font-mono text-sm">
        
        {/* Header */}
        <div className="bg-[#0b1221] px-4 py-2.5 border-b border-cyan-500/30 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400">
            <Terminal className="w-4 h-4" />
            <span className="font-bold text-xs text-white">rohtih@skcet-security-cli:~</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Console Content Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command !== 'welcome' && (
                <div className="flex items-center gap-2 text-cyan-400">
                  <span>rohtih@skcet:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
              )}
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>

        {/* Input Bar */}
        <form onSubmit={handleCommand} className="p-3 bg-[#090d18] border-t border-slate-800 flex items-center gap-2">
          <span className="text-cyan-400 font-bold">rohtih@skcet:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'whoami', 'skills', 'projects'..."
            className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm focus:ring-0"
          />
          <button type="submit" className="text-slate-400 hover:text-cyan-400">
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </form>

      </div>
    </div>
  );
};
