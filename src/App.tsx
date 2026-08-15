import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const handleOpenCVModal = () => {
    setIsCVModalOpen(true);
  };

  const handleCloseCVModal = () => {
    setIsCVModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation Header */}
      <Navbar onOpenCVModal={handleOpenCVModal} />

      {/* Main Content Sections */}
      <main>
        {/* Section 1: Home / Hero */}
        <Hero onOpenCVModal={handleOpenCVModal} />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Skills */}
        <Skills />

        {/* Section 4: Projects */}
        <Projects />

        {/* Section 5: Education */}
        <Education />

        {/* Section 6: Experience */}
        <Experience />

        {/* Section 7: Resume / CV */}
        <Resume onOpenCVModal={handleOpenCVModal} />

        {/* Section 9: Contact */}
        <Contact />
      </main>

      {/* Section 10: Footer */}
      <Footer />

      {/* Interactive CV Quick View Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={handleCloseCVModal} />
    </div>
  );
}

export default App;
