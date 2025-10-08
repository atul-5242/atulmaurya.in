import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';
import projectsData from './../utils/projectsData';
import { FiFilter, FiX, FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Project = () => {
  const categories = [...new Set(projectsData.map(project => project.category).filter(Boolean))];
  const activeFilter = "All"; // Show all projects
  
  const filteredProjects = projectsData.filter(project => 
    project.id !== 7 // Only exclude the empty project with id 7
  );

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
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are my {activeFilter} projects. Click on any project to learn more about it.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="w-full">
          <AnimatePresence>
            {filteredProjects.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card
                      key={project.id}
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      link={project.link}
                      githubLink={project.githubLink}
                      demoLink={project.demoLink}
                      keyTech={project.keyTech}
                      tags={project.tags}
                      featured={project.featured}
                      badge={project.badge}
                    />
                  </motion.div>
                ))}
                
                {/* Explore More Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card isExploreMore={true} />
                </motion.div>
              </motion.div>
            ) : (
              <motion.div 
                className="text-center py-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-gray-500 dark:text-gray-400">No projects found in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Project;
