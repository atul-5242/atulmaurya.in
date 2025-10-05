import { Link } from 'react-router-dom';
import React from 'react';

const Card = ({ title, description, image, link, githubLink, demoLink, isExploreMore = false }) => {
  if (isExploreMore) {
    return (
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-[1.02] m-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-gray-800 h-full flex flex-col">
        <div className="p-6 flex flex-col items-center justify-center h-full">
          <div className="mb-4 text-blue-500 dark:text-cyan-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-center text-gray-800 dark:text-white mb-2">Explore More Projects</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-6">Check out my other projects and side projects</p>
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-400 rounded-md font-medium hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-200 flex items-center"
          >
            View All Projects
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl transition-all duration-300 transform hover:scale-[1.02] m-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:shadow-gray-200 dark:hover:shadow-gray-800 h-full flex flex-col">
      <a href={link} target="_blank" rel="noopener noreferrer" className="block group flex-shrink-0">
        <div className="relative overflow-hidden h-48">
          <img 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            src={image} 
            alt={title} 
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
      </a>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {title}
            </a>
          </h3>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            aria-label="View project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
            {description}
          </p>
        )}
        
        <div className="flex space-x-3 mt-auto pt-4">
          {githubLink && (
            <a
              href={githubLink}
              className="p-2 inline-flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-cyan-900/50 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          
          {demoLink && (
            <a
              href={demoLink}
              className="p-2 inline-flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-cyan-900/50 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View demo"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </a>
          )}
          
          <a
            href={link}
            className="ml-auto px-4 py-2 bg-blue-100 dark:bg-cyan-900/30 text-blue-700 dark:text-cyan-400 rounded-lg font-medium hover:bg-blue-200 dark:hover:bg-cyan-800/50 transition-colors duration-200 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
