import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  const [showTweet, setShowTweet] = useState(false);
  const [tweetLoaded, setTweetLoaded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (showTweet) {
      if (window.twttr && window.twttr.widgets) {
        // Script already loaded, just load the widgets
        window.twttr.widgets.load();
        setTweetLoaded(true);
      } else if (!tweetLoaded) {
        // Script not loaded yet, load it
        const script = document.createElement('script');
        script.src = 'https://platform.twitter.com/widgets.js';
        script.async = true;
        script.onload = () => {
          if (window.twttr && window.twttr.widgets) {
            window.twttr.widgets.load();
          }
          setTweetLoaded(true);
        };
        document.body.appendChild(script);
      }
    }
  }, [showTweet, tweetLoaded]);

  const experiences = [
    {
      id: 1,
      company: 'Stagewise (Y Combinator S25)',
      role: 'Open Source Contributor',
      period: '2025',
      logo: 'https://media.licdn.com/dms/image/v2/D560BAQFrdunidiUkhQ/company-logo_200_200/company-logo_200_200/0/1727707409338/stagewise_io_logo?e=2147483647&v=beta&t=rSaC-zPCiBJZxwqzT4IPEs63H67TQsdYEAA2EWLXw08',
      description: 'Contributed to Stagewise, an innovative tool backed by Y Combinator that empowers developers to make local, browser-based frontend edits using AI prompts on existing codebases like React and Vue projects.',
      achievements: [
        'Identified and resolved a Windows-specific crash issue (' + 
          '<a href="https://github.com/stagewise-io/stagewise/issues/535" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-semibold underline">#535</a>) related to octal escape sequences in strict mode',
        'Fixed cross-platform compatibility issues with the npx stagewise command, enhancing tool accessibility for Windows developers using Docker/WSL',
        'Proposed and implemented documentation update (' +
          '<a href="https://github.com/stagewise-io/stagewise/issues/547" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-semibold underline">issue #547</a>) to use npx stagewise@latest in the installation guide for better user experience',
        'Submitted detailed issue reports leading to prompt fixes by the core team, including a critical fix via ' +
          '<a href="https://github.com/stagewise-io/stagewise/pull/538" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-semibold underline">GitHub Pull Request #538</a>',
        'Collaborated with the Stagewise team including ' +
          '<a href="https://x.com/goetzejulian" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-semibold underline">Founder/CTO Julian Götze</a> and ' +
          '<a href="https://x.com/glenntoews" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 font-semibold underline">Co-founder/CEO Glenn Toews</a>',
        'Recognized with €3.71 in platform credits for valuable contributions'
      ],
      links: [
        {
          name: 'Issue #535',
          title: 'Windows-specific crash – Uncaught SyntaxError: Octal escape sequences not allowed in strict mode',
          url: 'https://github.com/stagewise-io/stagewise/issues/535',
          icon: <FaGithub className="h-4 w-4" />
        },
        {
          name: 'Issue #547',
          title: 'Fix installation command in website docs (npx stagewise → npx stagewise@latest)',
          url: 'https://github.com/stagewise-io/stagewise/issues/547',
          icon: <FaGithub className="h-4 w-4" />
        },
        {
          name: 'PR #538',
          title: 'Fix Windows-specific crash with octal escape sequences',
          url: 'https://github.com/stagewise-io/stagewise/pull/538',
          icon: <FiExternalLink className="h-4 w-4" />
        }
      ]
    },
  ];

  return (
    <section id="experience" className="py-8 sm:py-12 md:py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">
            <span className="block">Professional</span>
            <span className="block text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className="mt-2 w-16 sm:w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-3 sm:mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-300 mx-auto px-4">
            My journey in open source and professional development
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg overflow-visible transition-all duration-300 hover:shadow-xl"
            >
              <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col md:flex-row md:items-start">
                  <div className="flex-shrink-0 mb-4 sm:mb-6 md:mb-0 md:mr-6 lg:mr-8 mx-auto md:mx-0">
                    <div className="flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white dark:bg-gray-700 shadow-md p-2">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`} 
                        className="h-14 w-14 sm:h-16 sm:w-16 object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://via.placeholder.com/150';
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
                      <div className="text-center md:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                        <div className="flex items-center justify-center md:justify-start mt-1 flex-wrap">
                          <span className="text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400">{exp.company}</span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">{exp.period}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center md:justify-end">
                        {exp.links.map((link, index) => (
                          <div key={index} className="relative group">
                            <a
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200"
                            >
                              {link.icon}
                              <span className="ml-1.5 sm:ml-2">{link.name}</span>
                            </a>
                            {link.title && (
                              <div className="absolute z-10 invisible group-hover:visible w-64 sm:w-72 p-2 mt-1 right-0 text-xs sm:text-sm text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg pointer-events-none">
                                {link.title}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 text-center md:text-left">
                      {exp.description}
                    </p>
                    
                    <ul className="mt-3 sm:mt-4 space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <svg 
                            className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" 
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
                          <span className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: achievement }} />
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-4 sm:mt-6 flex items-center justify-center md:justify-start">
                      <div 
                        className="relative inline-block"
                        onMouseEnter={() => {
                          setIsHovering(true);
                          setShowTweet(true);
                          setTweetLoaded(false);
                        }}
                        onMouseLeave={() => {
                          setIsHovering(false);
                          setShowTweet(false);
                        }}
                      >
                        <a
                          href="https://x.com/AtulMaurya5242/status/1955137832877465956"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sky-600 dark:text-sky-400 underline font-semibold hover:text-sky-700 dark:hover:text-sky-300 text-sm sm:text-base transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.1 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"/>
                          </svg>
                          <span>Proof of Work</span>
                        </a>
                        
                        {/* Tweet Preview Tooltip */}
                        {isHovering && (
                          <div
                            role="tooltip"
                            className="pointer-events-auto absolute z-50 w-[240px] sm:w-[280px] max-w-[90vw] bottom-full mb-2 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                          >
                            {tweetLoaded ? (
                              <div className="tweet-container min-h-[400px] h-auto">
                                <blockquote 
                                  className="twitter-tweet" 
                                  data-theme="light"
                                  data-dnt="true"
                                >
                                    {!tweetLoaded ? (
                                      <div className="p-4 text-center">
                                        <div className="inline-block animate-spin rounded-full h-6 w-6 border-2 border-gray-200 border-t-sky-500"></div>
                                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                          Loading tweet...
                                        </p>
                                      </div>
                                    ) : (
                                      <a href="https://twitter.com/AtulMaurya5242/status/1955137832877465956">
                                        View Stagewise Contribution
                                      </a>
                                    )}
                                </blockquote>
                              </div>
                            ) : (
                              <div className="p-6 sm:p-8 text-center">
                                <div className="inline-block animate-spin rounded-full h-8 w-8 sm:h-10 sm:w-10 border-4 border-gray-200 dark:border-gray-700 border-t-sky-500"></div>
                                <p className="mt-3 sm:mt-4 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">
                                  Loading Stagewise contribution tweet...
                                </p>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                  Please wait a moment
                                </p>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    
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