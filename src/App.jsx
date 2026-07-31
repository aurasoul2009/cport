import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Services from './components/sections/Services';
import Resume from './components/Resume';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import ScrollTop from './components/ScrollTop';
import ScrollProgress from './components/ScrollProgress';
import AnimatedCursor from './components/AnimatedCursor';
import MouseGlow from './components/MouseGlow';
import FloatingSocial from './components/FloatingSocial';
import ResumeModal from './components/ui/ResumeModal';
import { useTheme } from './hooks/usePortfolio';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { dark, toggle } = useTheme();

  const openResumeModal = () => setResumeOpen(true);
  const closeResumeModal = () => setResumeOpen(false);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className={`relative min-h-screen bg-background text-white ${dark ? 'dark' : 'light'}`}>
          <ScrollProgress />
          <AnimatedCursor />
          <MouseGlow />
          <Navbar onOpenResumeModal={openResumeModal} dark={dark} toggleTheme={toggle} />
          <FloatingSocial />
          <main>
            <Hero onOpenResumeModal={openResumeModal} />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Services />
            <Resume onOpenResumeModal={openResumeModal} />
            <Contact />
          </main>
          <Footer />
          <ScrollTop />
          <ResumeModal isOpen={resumeOpen} onClose={closeResumeModal} />
        </div>
      )}
    </>
  );
}
