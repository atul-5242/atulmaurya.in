import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub, FiPlay, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import { getProjectById } from '../utils/projectsData';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const { theme, toggleTheme } = useTheme();
  const project = getProjectById(id);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar scrollToSection={() => {}} refs={{}} activeSection="" />
      
      <div className="pt-20">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Back Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link 
              to="/" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              <FiArrowLeft className="mr-2" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Project Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <FiExternalLink className="mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FiGithub className="mr-2" />
                      View Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <FiPlay className="mr-2" />
                      Demo Video
                    </a>
                  )}
                </div>
              </div>
              
              {/* Project Image */}
              <div className="lg:w-1/3">
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technologies Used */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Project Overview */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </motion.div>

          {/* Features */}
          {project.features && (
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Challenges Overcome</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <FiAlertCircle className="text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <motion.div variants={itemVariants} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Project Gallery</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in this project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Check out the live demo or explore the source code to see how it was built.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FiExternalLink className="mr-2" />
                  View Live Project
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <FiGithub className="mr-2" />
                  View Source Code
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetailPage;