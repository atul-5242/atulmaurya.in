import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Stars from './components/Stars';
import Project from './components/Project';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const footerRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div
        className="bg-black text-white lg:h-screen relative overflow-hidden"
        style={{ boxShadow: '0 25px 50px rgba(0, 0, 0, 0.75)' }}
        ref={heroRef}
      >
        <Stars />
        <Navbar scrollToSection={scrollToSection} refs={{ aboutRef, projectRef, skillsRef, footerRef }} />
        <HeroSection />
      </div>
      <div className="relative bg-black bg-cover bg-center h-screen">
        <div ref={aboutRef}><About /></div>
        <div ref={projectRef}><Project /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={footerRef}><Footer /></div>
      </div>
    </div>
  );
}

export default App;
