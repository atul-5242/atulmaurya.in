import React, { useRef, useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import OpenSourceContributions from './components/OpenSourceContributions';
import ContentGallery from './components/ContentGallery';
import Stars from './components/Stars';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import ScrollReveal from './components/ScrollReveal';

function AppContent() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const achievementsRef = useRef(null);
  const openSourceRef = useRef(null);
  const contentRef = useRef(null);
  const footerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: aboutRef, name: 'about' },
        { ref: projectRef, name: 'projects' },
        { ref: skillsRef, name: 'skills' },
        { ref: experienceRef, name: 'experience' },
        { ref: achievementsRef, name: 'achievements' },
        { ref: contentRef, name: 'content' },
        { ref: openSourceRef, name: 'open source' },
      ];

      const currentSection = sections.find(({ ref }) => {
        if (ref.current) {
          const { top, bottom } = ref.current.getBoundingClientRect();
          return top <= 100 && bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.name);
      } else if (window.scrollY === 0) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Hero Section - No animation */}
      <div className="relative">
        <Stars />
        <Navbar 
          scrollToSection={scrollToSection} 
          refs={{
            heroRef,
            aboutRef,
            projectRef,
            skillsRef,
            experienceRef,
            achievementsRef,
            openSourceRef,
            footerRef,
            contentRef
          }}
          activeSection={activeSection}
        />
        <HeroSection />
      </div>

      {/* Animated Sections */}
      <div className="relative bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollReveal>
          <div ref={projectRef} className="py-8 md:py-12">
            <Project />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div ref={experienceRef} className="py-8">
            <Experience />
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div ref={contentRef} className="py-8">
            <ContentGallery />
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={100}>
          <div ref={skillsRef} className="py-8">
            <Skills />
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={200}>
          <div ref={aboutRef} className="py-8">
            <About />
          </div>
        </ScrollReveal>
        
        
        {/* <ScrollReveal delay={200}>
          <div ref={openSourceRef}>
            <OpenSourceContributions />
          </div>
        </ScrollReveal> */}

        {/* <ScrollReveal delay={200}>
          <div ref={achievementsRef}>
            <Achievements />
          </div>
        </ScrollReveal> */}
        
        <ScrollReveal delay={300}>
          <div ref={footerRef}>
            <Footer />
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
