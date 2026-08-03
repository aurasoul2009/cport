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
import Certificates from './components/sections/Certificates';
import Resume from './components/Resume';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';
import ScrollTop from './components/ScrollTop';
import ScrollProgress from './components/ScrollProgress';
import AnimatedCursor from './components/AnimatedCursor';
import MouseGlow from './components/MouseGlow';
import FloatingSocial from './components/FloatingSocial';
import {
  aboutCards,
  certificatesList,
  experienceTimeline,
  heroMetrics,
  personalInfo,
  professionalSummary,
  projectsData,
  servicesData,
  skillsData,
  summaryStats
} from './data/portfolioData';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>{loading && <Loader onComplete={() => setLoading(false)} />}</AnimatePresence>
      {!loading && (
        <div className="relative min-h-screen overflow-x-hidden bg-background text-white">
          <ScrollProgress />
          <AnimatedCursor />
          <MouseGlow />
          <Navbar />
          <FloatingSocial personalInfo={personalInfo} />
          <main>
            <Hero personalInfo={personalInfo} metrics={heroMetrics} />
            <About cards={aboutCards} />
            <Skills skills={skillsData} />
            <Experience timeline={experienceTimeline} />
            <Projects projects={projectsData} />
            <Services services={servicesData} />
            <Resume
              personalInfo={personalInfo}
              professionalSummary={professionalSummary}
              summaryStats={summaryStats}
              projects={projectsData}
              skills={skillsData}
              certificates={certificatesList}
            />
            <Certificates certificates={certificatesList} />
            <Contact personalInfo={personalInfo} />
          </main>
          <Footer personalInfo={personalInfo} />
          <ScrollTop />
        </div>
      )}
    </>
  );
}
