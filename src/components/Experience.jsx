import React from 'react';
import { FaGithub,  } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'Open Source Contributor',
      role: 'Open Source Developer',
      period: '2023 - Present',
      logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      description: 'Active contributor to various open source projects, focusing on improving documentation, fixing bugs, and adding new features.',
      achievements: [
        'Contributed to React.js by fixing a critical bug in concurrent rendering',
        'Improved Next.js documentation with better TypeScript examples',
        'Added new utility functions to popular UI component libraries',
        'Helped triage and reproduce issues in open source projects',
        'Mentored new contributors in open source communities'
      ],
      links: [
        {
          name: 'GitHub Profile',
          url: 'https://github.com/yourusername',
          icon: <FaGithub className="h-4 w-4" />
        },
        {
          name: 'Contributions',
          url: 'https://github.com/yourusername?tab=repositories',
          icon: <FiExternalLink className="h-4 w-4" />
        }
      ]
    },
    // Add more experiences here if needed
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Professional</span>
            <span className="block text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className="mt-2 w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            My journey in open source and professional development
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
                    <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white dark:bg-gray-700 shadow-md p-2">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="h-16 w-16 object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/150';
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                        <div className="flex items-center mt-1">
                          <span className="text-lg font-medium text-blue-600 dark:text-blue-400">{exp.company}</span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0 flex space-x-3">
                        {exp.links.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                          >
                            {link.icon}
                            <span className="ml-2">{link.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                    
                    <ul className="mt-4 space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <svg 
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M5 13l4 4L19 7" 
                            />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
