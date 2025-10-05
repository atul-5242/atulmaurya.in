import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/atulmaurya2ndimage.png';

const HeroSection = () => {
  const handleButtonClick = () => {
    // Replace with your resume link
    const resumeLink = 'https://drive.google.com/file/d/1OXpBT8WXDcRRwVKkygrL1rp2_VowMDVi/view';
    window.open(resumeLink, '_blank'); // Opens the link in a new tab
  };

  return (
    <section className="flex flex-col justify-center items-center relative pt-16 md:pt-20 pb-8 md:pb-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 w-11/12 max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-gray-200 dark:shadow-gray-900 p-6 md:p-12 transition-all duration-300">
        {/* Text Section */}
        <div className="text-gray-800 dark:text-white w-full md:w-1/2">
          <div className="flex flex-col gap-6">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Atul Maurya</span>
              </h1>
              <div className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                Full Stack Developer
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full my-4"></div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              I build exceptional digital experiences with modern web technologies. Specializing in the MERN stack, I create scalable, performant applications that solve real-world problems through clean code and intuitive design.
            </p>
            
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                JavaScript/TypeScript
              </span>
              <span className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                React.js
              </span>
              <span className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                Node.js
              </span>
            </div>

            <div className="mt-4">
              <button 
                onClick={handleButtonClick} 
                className="p-3 md:p-5 md:px-10 shadow-xl shadow-blue-200 dark:shadow-slate-600 hover:scale-95 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 font-semibold text-white duration-400 transition-all rounded-md"
              >
                View My Resume
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <div className="relative group overflow-hidden rounded-xl shadow-2xl shadow-gray-200 dark:shadow-gray-700">
            <img 
              src={profileImage} 
              alt="Atul Maurya" 
              className="w-72 h-72 sm:w-96 sm:h-96 md:w-full md:h-auto object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-1">Full Stack Developer</h3>
                <p className="text-sm text-gray-200">Crafting digital experiences with clean code & modern tech</p>
              </div>
            </div>
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
    </section>
  );
};

export default HeroSection;
