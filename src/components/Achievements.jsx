import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaCertificate, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'Hackathon Champion',
      issuer: 'Hack the North 2024',
      date: '2024',
      description: '1st place among 5,000+ participants with an AI-powered development tool',
      icon: <FaTrophy className="h-4 w-4" />,
      color: 'bg-blue-600',
      link: '#',
      skills: ['AI/ML', 'React', 'Node.js']
    },
    {
      id: 2,
      title: 'Open Source Contributor',
      issuer: 'React Community',
      date: '2024',
      description: 'Contributed to React 18 with performance optimizations and documentation',
      icon: <FaGithub className="h-4 w-4" />,
      color: 'bg-indigo-600',
      link: '#',
      skills: ['React', 'JavaScript', 'Performance']
    },
    {
      id: 3,
      title: 'Cloud Certified',
      issuer: 'Google Cloud',
      date: '2023',
      description: 'Professional Cloud Architect certification',
      icon: <FaCertificate className="h-4 w-4" />,
      color: 'bg-emerald-600',
      link: '#',
      skills: ['GCP', 'Cloud', 'DevOps']
    },
    {
      id: 4,
      title: 'Tech Speaker',
      issuer: 'JSConf 2023',
      date: '2023',
      description: 'Spoke about "The Future of Web Development" to 1000+ attendees',
      icon: <FaAward className="h-4 w-4" />,
      color: 'bg-slate-700',
      link: '#',
      skills: ['Public Speaking', 'Web Dev']
    }
  ];

  return (
    <section id="achievements" className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Achievements
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {achievements.map((achievement) => (
            <motion.div 
              key={achievement.id}
              variants={fadeInUp}
              className="group bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-5">
                <div className="flex items-start">
                  <div className={`flex-shrink-0 p-2.5 ${achievement.color} rounded-lg text-white`}>
                    {React.cloneElement(achievement.icon, { className: "h-4 w-4" })}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {achievement.title}
                      </h3>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {achievement.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      {achievement.issuer}
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-200 text-sm">
                      {achievement.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {achievement.skills.map((skill, index) => (
                        <span 
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
