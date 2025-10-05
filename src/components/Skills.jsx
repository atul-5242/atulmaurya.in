import React from 'react';

const skillsData = [
  {
    title: 'Frontend',
    technologies: [
      { name: 'HTML', logo: 'https://img.icons8.com/color/96/000000/html-5--v1.png' },
      { name: 'CSS', logo: 'https://img.icons8.com/color/96/000000/css3.png' },
      { name: 'JavaScript', logo: 'https://img.icons8.com/color/96/000000/javascript--v1.png' },
      { name: 'React', logo: 'https://img.icons8.com/color/96/000000/react-native.png' },
      { name: 'Bootstrap', logo: 'https://img.icons8.com/color/96/000000/bootstrap.png' },
      { name: 'Tailwind CSS', logo: 'https://img.icons8.com/color/96/000000/tailwindcss.png' },
    ],
    logo: 'https://img.icons8.com/color/96/ffffff/react-native.png',
  },
  {
    title: 'Backend',
    technologies: [
      { name: 'Node.js', logo: 'https://img.icons8.com/color/96/000000/nodejs.png' },
      { name: 'Express', logo: 'https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png' },
      { name: 'MongoDB', logo: 'https://img.icons8.com/color/96/000000/mongodb.png' },
      { name: 'SQLite', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0cR9lXPHjye6tpHRwenr-7NKUR5s7r-ovrA&s' },
      { name: 'SQL', logo: 'https://www.shutterstock.com/image-vector/sql-icon-major-database-format-260nw-1904337712.jpg' },
      { name: 'PostgreSQL', logo: 'https://img.icons8.com/color/96/000000/postgreesql.png' },
    ],
    logo: 'https://img.icons8.com/color/96/ffffff/nodejs.png',
  },
  {
    title: 'DevOps',
    technologies: [
      { name: 'Docker', logo: 'https://img.icons8.com/color/96/000000/docker.png' },
      { name: 'Kubernetes', logo: 'https://img.icons8.com/color/96/000000/kubernetes.png' },
      { name: 'Git', logo: 'https://img.icons8.com/color/96/000000/git.png' },
      { name: 'GitHub', logo: 'https://img.icons8.com/color/96/000000/github.png' },
    ],
    logo: 'https://img.icons8.com/color/96/ffffff/docker.png',
  },
];

const Skills = () => {
  return (
    <div className='bg-white dark:bg-gray-900 py-10 transition-colors duration-300'>
      <div className='text-7xl text-gray-900 dark:text-white text-center font-bold mb-10 transition-colors duration-300'>
        <h1>Skills</h1>
      </div>
      <div className='flex flex-wrap justify-center gap-16'>
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className='max-w-sm bg-white dark:bg-gray-800 rounded-lg shadow-xl shadow-gray-200 dark:shadow-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl p-6 flex flex-col items-center'
          >
            <img src={skill.logo} alt={skill.title} className='h-24 w-24 mb-4' />
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300'>{skill.title}</h2>
            <div className='grid grid-cols-2 gap-4 w-full'>
              {skill.technologies.map((tech, techIndex) => (
                <div key={techIndex} className='flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300'>
                  <img src={tech.logo} alt={tech.name} className='w-8 h-8 object-contain' />
                  <span className='text-gray-800 dark:text-gray-200 transition-colors duration-300'>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
