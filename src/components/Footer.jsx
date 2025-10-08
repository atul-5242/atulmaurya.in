import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaInstagram, FaYoutube, FaCodepen } from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiCodechef } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      url: 'https://www.linkedin.com/in/atulmaurya5242/',
      label: 'LinkedIn Profile',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      url: 'https://github.com/atul-5242',
      label: 'GitHub Profile',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      url: 'https://twitter.com/atulmaurya5242',
      label: 'Twitter Profile',
      color: 'hover:text-blue-400 dark:hover:text-blue-400'
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      url: 'mailto:atulfzdlko2001@gmail.com',
      label: 'Send Email',
      color: 'hover:text-red-500 dark:hover:text-red-400'
    },
    {
      icon: <SiLeetcode className="w-5 h-5" />,
      url: 'https://leetcode.com/atulmaurya5242/',
      label: 'LeetCode Profile',
      color: 'hover:text-yellow-600 dark:hover:text-yellow-400'
    }
  ];

  return (
    <footer className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4 transition-colors duration-300'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col items-center justify-between md:flex-row'>
          {/* Left side - Name */}
          <div className='text-xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0 transition-colors duration-300'>
            Atul Maurya
          </div>

          {/* Center - Social Media Icons */}
          <div className='flex flex-wrap justify-center gap-4 mb-4 md:mb-0'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 ${social.color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Right side - Copyright */}
          <div className='text-sm text-gray-600 dark:text-gray-400 text-center md:text-right transition-colors duration-300'>
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>

        {/* Bottom - Copyright for mobile */}
        <div className='mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-500 md:hidden'>
          Designed & Built by Atul Maurya
        </div>
      </div>
    </footer>
  );
};

export default Footer;
