import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FiFilter, FiChevronDown, FiChevronUp, FiX } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { projectsData, CATEGORIES } from '../utils/moreProjects';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState(CATEGORIES.ALL);
  const [activeTypes, setActiveTypes] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Closed by default
  const dropdownRef = useRef(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get all unique types from projects
  const allTypes = useMemo(() => {
    const types = new Set();
    projectsData.forEach(project => {
      if (project.type && Array.isArray(project.type)) {
        project.type.forEach(type => types.add(type));
      }
    });
    return Array.from(types).sort();
  }, []);
  
  // Get projects filtered by category and type
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesCategory = activeCategory === CATEGORIES.ALL || project.category === activeCategory;
      const projectTypes = Array.isArray(project.type) ? project.type : [];
      const matchesType = activeTypes.length === 0 || 
        projectTypes.some(type => activeTypes.includes(type));
      return matchesCategory && matchesType;
    });
  }, [activeCategory, activeTypes, projectsData]);
  
  // Get unique categories from projects
  const categories = useMemo(() => {
    const cats = new Set([CATEGORIES.ALL]);
    projectsData.forEach(project => {
      if (project.category) cats.add(project.category);
    });
    return Array.from(cats);
  }, []);
  
  // Toggle project type filter
  const toggleType = (type) => {
    setActiveTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative element */}
        <div className='hidden lg:block w-1 h-[60rem] absolute left-20 bg-gradient-to-b from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 shadow-2xl transition-colors duration-300 -z-10'></div>

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            All Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are all of my projects. Click on any project to learn more about it.
          </p>

          {/* Filter Section */}
          <div className="w-full max-w-5xl mx-auto mt-8 space-y-6 px-4" ref={dropdownRef}>
            {/* Main Filter Card */}
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <div className="mb-6">
                {/* Categories Section - Always Visible */}
                <div className="mb-6">
                  <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                    <FiFilter className="mr-2 text-blue-500" />
                    Filter by Category
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 border ${
                          activeCategory === category
                            ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                            : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600/50'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Collapsible Technologies Section */}
                <div>
                  <button 
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="w-full flex items-center justify-between text-base font-semibold text-gray-700 dark:text-gray-300 mb-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-center">
                      <FiFilter className="mr-2 text-blue-500" />
                      Filter by Technologies
                    </div>
                    {isFilterOpen ? (
                      <FiChevronUp className="text-gray-500" />
                    ) : (
                      <FiChevronDown className="text-gray-500" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {isFilterOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="mt-2">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-gray-500 dark:text-gray-400">Select technologies:</span>
                            {activeTypes.length > 0 && (
                              <button 
                                onClick={() => setActiveTypes([])}
                                className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                              >
                                <FiX size={14} className="mr-1" /> Clear all
                              </button>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {allTypes.map((type) => {
                              const isActive = activeTypes.includes(type);
                              return (
                                <button
                                  key={type}
                                  onClick={() => toggleType(type)}
                                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-200 flex items-center ${
                                    isActive
                                      ? 'bg-blue-100 dark:bg-blue-900/70 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-200 shadow-sm'
                                      : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600/50'
                                  }`}
                                >
                                  {type}
                                  {isActive && (
                                    <FiX size={14} className="ml-1.5 text-blue-500 dark:text-blue-300" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                {/* Active Filters */}
                {(activeCategory !== CATEGORIES.ALL || activeTypes.length > 0) && (
                  <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-2">Active filters:</span>
                      {activeCategory !== CATEGORIES.ALL && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800">
                          {activeCategory}
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveCategory(CATEGORIES.ALL);
                            }}
                            className="ml-1.5 -mr-1 p-0.5 rounded-full hover:bg-blue-200/50 dark:hover:bg-blue-900/70 transition-colors"
                          >
                            <FiX size={12} className="text-blue-500 dark:text-blue-300" />
                          </button>
                        </span>
                      )}
                      {activeTypes.map(type => (
                        <span 
                          key={type} 
                          className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800"
                        >
                          {type}
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleType(type);
                            }}
                            className="ml-1.5 -mr-1 p-0.5 rounded-full hover:bg-blue-200/50 dark:hover:bg-blue-900/70 transition-colors"
                          >
                            <FiX size={12} className="text-blue-500 dark:text-blue-300" />
                          </button>
                        </span>
                      ))}
                      {(activeCategory !== CATEGORIES.ALL || activeTypes.length > 0) && (
                        <button 
                          onClick={() => {
                            setActiveCategory(CATEGORIES.ALL);
                            setActiveTypes([]);
                          }}
                          className="ml-auto text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                        >
                          <FiX size={12} className="mr-1" /> Clear all
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.length === 0 ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="col-span-full text-center py-12"
              >
                <p className={`text-lg ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  No projects found in this category.
                </p>
              </motion.div>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-[1.02] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-gray-800 h-full flex flex-col">
                    <a href={project.demoLink || project.githubLink} target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0">
                      <div className="relative overflow-hidden h-48">
                        <img 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                          src={project.image} 
                          alt={project.title} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                          <p className="text-white text-sm font-medium flex items-center">
                            View Project
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className={`px-3 py-1 text-xs rounded-full ${
                            theme === 'dark' 
                              ? 'bg-blue-500/10 text-blue-400' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                          {project.title}
                        </h3>
                        
                        <p className={`text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow`}>
                          {project.description}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                          <div className="flex space-x-3">
                            {project.githubLink && (
                              <a 
                                href={project.githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className={`p-1.5 rounded-full ${
                                  theme === 'dark' 
                                    ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700' 
                                    : 'text-gray-500 hover:text-blue-600 hover:bg-gray-100'
                                } transition-colors`}
                                aria-label="GitHub"
                              >
                                <FaGithub className="w-4 h-4" />
                              </a>
                            )}
                            {project.demoLink && (
                              <a 
                                href={project.demoLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className={`p-1.5 rounded-full ${
                                  theme === 'dark' 
                                    ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-700' 
                                    : 'text-gray-500 hover:text-blue-600 hover:bg-gray-100'
                                } transition-colors`}
                                aria-label="Live Demo"
                              >
                                <FaExternalLinkAlt className="w-4 h-4" />
                              </a>
                            )}
                          </div>
                          
                          <span className={`text-sm font-medium ${
                            theme === 'dark' 
                              ? 'text-blue-400 group-hover:text-blue-300' 
                              : 'text-blue-600 group-hover:text-blue-500'
                          } transition-colors`}>
                            View Details
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;