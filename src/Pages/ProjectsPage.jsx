// Projects.jsx
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projectsData } from '../utils/moreProjects';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [darkMode, setDarkMode] = useState(true); // Default to dark theme

  const categories = ['all', 'frontend', 'backend', 'fullstack', 'devops'];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.type === selectedCategory);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section className={`py-12 px-4 md:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-bold text-center">My Projects :</h2>
        <button
          onClick={toggleTheme}
          className={`px-6 py-2 rounded-full ${
            darkMode ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-900'
          } hover:bg-blue-700 transition-colors`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className={`rounded-lg shadow-lg overflow-hidden ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {project.description}
              </p>

              <div className="flex justify-between items-center">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  <FaGithub className="mr-2" />
                  Code
                </a>

                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
                  }`}
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;