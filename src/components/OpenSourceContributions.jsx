import React from 'react';
import { FaGithub, FaTwitter,  } from 'react-icons/fa';

const OpenSourceContributions = () => {
  const contributions = [
    {
      id: 1,
      title: 'Contribution to React',
      description: 'Fixed a bug related to state updates in concurrent mode',
      type: 'Bug Fix',
      repo: 'facebook/react',
      prLink: 'https://github.com/facebook/react/pull/12345',
      twitterProof: 'https://twitter.com/yourusername/status/1234567890',
      date: 'October 2024'
    },
    {
      id: 2,
      title: 'Documentation Update - Next.js',
      description: 'Improved API route documentation with better examples',
      type: 'Documentation',
      repo: 'vercel/next.js',
      prLink: 'https://github.com/vercel/next.js/pull/12345',
      twitterProof: 'https://twitter.com/yourusername/status/1234567890',
      date: 'September 2024'
    },
    {
      id: 3,
      title: 'Feature Enhancement - Tailwind CSS',
      description: 'Added new utility classes for better dark mode support',
      type: 'Feature',
      repo: 'tailwindlabs/tailwindcss',
      prLink: 'https://github.com/tailwindlabs/tailwindcss/pull/12345',
      twitterProof: 'https://twitter.com/yourusername/status/1234567890',
      date: 'August 2024'
    }
  ];

  return (
    <section id="open-source" className="py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Open Source</span>
            <span className="block text-blue-600 dark:text-blue-400">Contributions</span>
          </h2>
          <div className="mt-2 w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 mx-auto">
            I actively contribute to open source projects to give back to the community and improve my skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contributions.map((contribution) => (
            <div 
              key={contribution.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{contribution.title}</h3>
                    <span className="inline-block mt-1 px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      {contribution.type}
                    </span>
                  </div>
                  <a 
                    href={contribution.prLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    aria-label="View Pull Request"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                </div>
                
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {contribution.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {contribution.repo}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {contribution.date}
                  </span>
                </div>
                
                <div className="mt-4">
                  <a
                    href={contribution.twitterProof}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <FaTwitter className="mr-1.5 h-4 w-4" />
                    View Proof
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900 transition-colors"
          >
            <FaGithub className="mr-2 h-5 w-5" />
            View All Contributions on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceContributions;
