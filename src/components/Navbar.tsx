import React, { useState, useEffect } from 'react';
import { Shield, Terminal, FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'CS Knowledge', href: '#cs-knowledge' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050811]/85 backdrop-blur-md border-b border-cyan-500/20 py-3 shadow-lg shadow-cyan-950/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group text-decoration-none"
        >
          <div className="relative p-2 rounded-lg bg-cyan-950/40 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
            <Shield className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-emerald-400"></span>
          </div>
          <div>
            <span className="font-mono font-bold text-lg text-white tracking-wider">
              ROHTIH<span className="text-cyan-400">.sys</span>
            </span>
            <span className="block text-[10px] font-mono text-emerald-400 tracking-widest uppercase">
              SEC_LEVEL: STUDENT
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 py-1 border-b-2 border-transparent hover:border-cyan-400/60"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* CLI Terminal Toggle Button */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/80 border border-cyan-500/30 text-cyan-400 font-mono text-xs hover:bg-cyan-950/50 hover:border-cyan-400 transition-all duration-200 shadow-sm"
            title="Open Developer CLI Terminal (~)"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>CLI [~]</span>
          </button>

          {/* Resume Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-semibold text-xs hover:from-cyan-400 hover:to-emerald-400 transition-all duration-200 shadow-md shadow-cyan-500/20 active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 border border-slate-700/50"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d16]/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-950/30"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-md bg-slate-900 border border-cyan-500/40 text-cyan-400 font-mono text-sm"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch Developer CLI (~)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-md bg-cyan-500 text-slate-950 font-semibold text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
