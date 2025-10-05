import React, { useState, useRef, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Skills from './components/Skills';
import About from './components/About';
import Stars from './components/Stars';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function AppContent() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen overflow-hidden transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="h-screen relative">
        <Stars />
        <Navbar scrollToSection={scrollToSection} refs={{ aboutRef, projectRef, skillsRef, footerRef }} />
        <HeroSection />
      </div>
      <div className="relative bg-white dark:bg-gray-900 transition-colors duration-300">
        <div ref={projectRef} className="py-12"><Project /></div>
        <div ref={skillsRef} className="py-12"><Skills /></div>
        <div ref={aboutRef} className="py-12"><About /></div>
        <div ref={footerRef}><Footer /></div>
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
