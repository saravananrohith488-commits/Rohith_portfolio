import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { CSKnowledge } from './components/CSKnowledge';
import { Projects } from './components/Projects';
import { HardwareAndSystems } from './components/HardwareAndSystems';
import { Achievements } from './components/Achievements';
import { Timeline } from './components/Timeline';
import { Interests } from './components/Interests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Keyboard shortcut for CLI Terminal (Tilde ~ or Backtick `)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation Bar */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <About />
        <Skills />
        <CSKnowledge />
        <Projects />
        <HardwareAndSystems />
        <Achievements />
        <Timeline />
        <Interests />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

    </div>
  );
}

export default App;
