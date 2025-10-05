import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/atul-b5ad09f1.jpg';

const HeroSection = () => {
  const handleButtonClick = () => {
    // Replace with your resume link
    const resumeLink = 'https://drive.google.com/file/d/1OXpBT8WXDcRRwVKkygrL1rp2_VowMDVi/view';
    window.open(resumeLink, '_blank'); // Opens the link in a new tab
  };

  return (
    <section id="home" className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-gray-200 dark:shadow-gray-900 p-8 md:p-12 lg:p-16 transition-all duration-300">
        {/* Text Section */}
        <div className="text-gray-800 dark:text-white w-full md:w-1/2">
          <div className="flex flex-col gap-3">
            <div className="space-y-1">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Atul Maurya</span>
              </h1>
              <div className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                Full Stack Developer
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full my-4"></div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-base leading-normal mb-2">
              I build exceptional digital experiences with modern web technologies. Specializing in the MERN stack, I create scalable, performant applications that solve real-world problems through clean code and intuitive design.
            </p>
            
            <div className="p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700">
              <p className="text-sm font-semibold text-gray-800 dark:text-white mb-1 flex items-center">
                <svg className="w-3 h-3 mr-1 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                Featured Work
              </p>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                      <span className="text-xs font-medium">1</span>
                    </div>
                  </div>
                  <div className="ml-1.5">
                    <a 
                      href="https://uptimematrix.atulmaurya.in" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center"
                    >
                      UptimeMatrix
                      <svg className="w-2.5 h-2.5 ml-0.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-tight mt-0.5">Website & API monitoring with real-time alerts</p>
                  </div>
                </li>
              </ul>
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-1">More projects coming soon...</p>
            </div>
            
            {/* Professional Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="px-3 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium border border-purple-200 dark:border-purple-800">
                #MERNStack
              </span>
              <span className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-medium border border-green-200 dark:border-green-800">
                #FullStackEngineer
              </span>
              <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium border border-blue-200 dark:border-blue-800">
                #ReactNextJS
              </span>
              <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full text-xs font-medium border border-cyan-200 dark:border-cyan-800">
                #DevOpsAndCloud
              </span>
              <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium border border-indigo-200 dark:border-indigo-800">
                #SaaSBuilder
              </span>
              <span className="px-3 py-1 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-xs font-medium border border-pink-200 dark:border-pink-800">
                #AIAndML
              </span>
              <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full text-xs font-medium border border-amber-200 dark:border-amber-800">
                #Communication
              </span>
            </div>

            <div className="mt-3">
              <button 
                onClick={handleButtonClick} 
                className="group relative px-8 py-4 overflow-hidden font-semibold text-white rounded-xl shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%)',
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Resume
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
                  }}
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-8 md:mt-0">
          <div className="relative group w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto">
            <div className="relative w-full h-full overflow-hidden rounded-2xl border-4 border-white dark:border-gray-800 shadow-2xl shadow-gray-300 dark:shadow-gray-800 transition-all duration-300 group-hover:shadow-cyan-200 dark:group-hover:shadow-cyan-900/50">
              <img 
                src={profileImage} 
                alt="Atul Maurya" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold text-white mb-1">Full Stack Developer</h3>
                  <p className="text-xs text-gray-200">Crafting digital experiences with clean code</p>
                </div>
              </div>
            </div>
            {/* Glow effect */}
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 -z-10"></div>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mt-6">
            <a 
              href="https://www.linkedin.com/in/atulmaurya5242/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-3 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a 
              href="https://github.com/atul-5242" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-3 rounded-full text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://twitter.com/atulmaurya5242" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-3 rounded-full text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={20} />
            </a>
            <a 
              href="mailto:atulfzdlko2001@gmail.com"
              className="bg-white dark:bg-gray-800 p-3 rounded-full text-red-500 hover:bg-red-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              aria-label="Email Me"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
