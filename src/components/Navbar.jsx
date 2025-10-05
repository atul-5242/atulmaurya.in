import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ scrollToSection, refs }) => {
  const { theme, toggleTheme } = useTheme();
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
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg px-6 py-4 lg:max-w-2xl md:max-w-lg mx-auto flex justify-between items-center shadow-lg">
        <a href="#" className="text-2xl font-bold tracking-widest text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200">
          Atul Maurya
        </a>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-white/20 dark:bg-gray-700/50 hover:bg-white/30 dark:hover:bg-gray-600/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <FiSun className="w-6 h-6 text-white" />
            ) : (
              <FiMoon className="w-6 h-6 text-gray-800" />
            )}
          </button>
          <button
            ref={buttonRef}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex gap-6">
          <button onClick={() => scrollToSection(refs.aboutRef)} className="hover:text-blue-400 transition">About</button>
          <button onClick={() => scrollToSection(refs.projectRef)} className="hover:text-blue-400 transition">Projects</button>
          <button onClick={() => scrollToSection(refs.skillsRef)} className="hover:text-blue-400 transition">Skills</button>
          <a href="https://linktr.ee/atul5242_" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-8 absolute md:static top-full left-0 right-0 bg-white dark:bg-gray-800 md:bg-transparent p-4 md:p-0 rounded-lg mt-2 md:mt-0 shadow-lg md:shadow-none`}
        >
          <button
            onClick={() => {
              scrollToSection(refs.aboutRef);
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.projectRef);
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 mt-2 md:mt-0"
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.skillsRef);
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 mt-2 md:mt-0"
          >
            Skills
          </button>
          <button
            onClick={() => {
              scrollToSection(refs.footerRef);
              setIsMobileMenuOpen(false);
            }}
            className="block w-full text-left px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors duration-200 mt-2 md:mt-0"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
