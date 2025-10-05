import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import Atul from "../assets/atul-b5ad09f1.jpg";

const About = () => {
    return (
        <section id="about" className="relative bg-white dark:bg-gray-900 transition-colors duration-300 py-20 overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
            {/* Accent line */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Profile Image */}
                    <div className="lg:w-1/3 relative group">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                            <img 
                                src={Atul} 
                                alt="Atul Maurya" 
                                className="w-full h-auto rounded-2xl border-4 border-white dark:border-gray-800"
                            />
                        </div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-75 blur-lg transition duration-500"></div>
                        
                        {/* Social Links */}
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
                        </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 mt-10 lg:mt-0">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
                            My Journey So Far: 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                Learning, Building & Growing in Tech
                            </span>
                        </h3>

                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1.5">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                                        <span className="text-sm">▹</span>
                                    </div>
                                </div>
                                <p className="ml-3 text-gray-600 dark:text-gray-300">
                                    I have completed my <span className="font-semibold text-gray-800 dark:text-white">B.Tech in CSE</span> from <span className="font-semibold text-gray-800 dark:text-white">Graphic Era Hill University</span> with <span className="font-semibold text-gray-800 dark:text-white">8.38 CGPA</span>.
                                </p>
                            </li>
                            
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1.5">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                                        <span className="text-sm">▹</span>
                                    </div>
                                </div>
                                <p className="ml-3 text-gray-600 dark:text-gray-300">
                                    I specialize in <span className="font-semibold text-gray-800 dark:text-white">MERN Stack Development</span> and love building scalable products for web and mobile platforms.
                                </p>
                            </li>

                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1.5">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                                        <span className="text-sm">▹</span>
                                    </div>
                                </div>
                                <p className="ml-3 text-gray-600 dark:text-gray-300">
                                    My projects include <span className="font-semibold text-gray-800 dark:text-white">RideEasy</span> (vehicle rental), <span className="font-semibold text-gray-800 dark:text-white">Code-X</span> (networking), <span className="font-semibold text-gray-800 dark:text-white">UptimeMatrix</span> (SaaS), and <span className="font-semibold text-gray-800 dark:text-white">Skin Cancer Detection</span> (AI + MERN).
                                </p>
                            </li>

                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-1.5">
                                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                                        <span className="text-sm">▹</span>
                                    </div>
                                </div>
                                <p className="ml-3 text-gray-600 dark:text-gray-300">
                                    Currently exploring <span className="font-semibold text-gray-800 dark:text-white">DevOps</span> (Docker, Kubernetes, AWS) and diving into <span className="font-semibold text-gray-800 dark:text-white">AI & Vector Databases</span>.
                                </p>
                            </li>
                        </ul>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a 
                                href="#contact" 
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/20 flex items-center"
                            >
                                Get In Touch
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                            <a 
                                href="#projects" 
                                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-medium rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-gray-200/20 dark:hover:shadow-gray-800/20 flex items-center"
                            >
                                View My Work
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
