import React, { useState, useEffect, useRef } from 'react';

const Navbar = ({ scrollToSection, refs }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setIsMobileMenuOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed left-0 right-0 z-10 top-0 lg:mt-10">
      <div className="bg-white/10 backdrop-blur-md rounded-lg px-6 py-4 lg:max-w-2xl md:max-w-lg mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-widest hover:text-blue-400 transition">
          Atul Maurya
        </a>
        <button 
          ref={buttonRef} 
          onClick={toggleMenu} 
          className="text-white text-3xl md:hidden focus:outline-none"
        >
          &#9776;
        </button>
        <div className="hidden md:flex gap-6">
          <button onClick={() => scrollToSection(refs.aboutRef)} className="hover:text-blue-400 transition">About</button>
          <button onClick={() => scrollToSection(refs.projectRef)} className="hover:text-blue-400 transition">Projects</button>
          <button onClick={() => scrollToSection(refs.skillsRef)} className="hover:text-blue-400 transition">Skills</button>
          <a href="https://linktr.ee/atul5242_" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="mobile-menu open">
          <div className="bg-white/10 backdrop-blur-md text-white rounded-lg px-6 py-4">
            <button onClick={() => { scrollToSection(refs.aboutRef); toggleMenu(); }} className="block py-2 hover:text-blue-400 transition">About</button>
            <button onClick={() => { scrollToSection(refs.projectRef); toggleMenu(); }} className="block py-2 hover:text-blue-400 transition">Projects</button>
            <button onClick={() => { scrollToSection(refs.skillsRef); toggleMenu(); }} className="block py-2 hover:text-blue-400 transition">Skills</button>
            <a href="https://linktr.ee/atul5242_" className="block py-2 hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
