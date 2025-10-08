import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
import Atul from "../assets/atulmaurya2ndimage.png";

const About = () => {
    return (
        <section id="about" className="relative bg-white dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-8">
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-8 mt-6">
                    {/* Profile Image */}
                    <div className="lg:w-1/3 group relative">
                        <div className="relative rounded-2xl overflow-hidden">
                            <div className="relative overflow-hidden rounded-2xl">
                                <img 
                                    src={Atul} 
                                    alt="Atul Maurya" 
                                    className="w-full h-auto rounded-2xl border-4 border-white dark:border-gray-800 transform transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center p-4">
                                    <div className="text-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <p className="text-white text-sm italic">
                                            "The only way to do great work is to love what you do."
                                            <span className="block text-blue-200 text-xs mt-1">— Steve Jobs</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Static Quote for mobile */}
                        <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 lg:hidden">
                            <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                                "The only way to do great work is to love what you do."
                                <span className="block text-right text-xs mt-1 text-gray-500 dark:text-gray-400">— Steve Jobs</span>
                            </p>
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
                                href="https://www.linkedin.com/in/atulmaurya5242/" 
                                target="_blank"
                                rel="noopener noreferrer"
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
