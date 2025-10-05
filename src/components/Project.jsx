import React from 'react';
import Card from './Card';
import projectsData from './../utils/projectsData';

const Project = () => {
  return (
    <div className="relative py-10 bg-white dark:bg-gray-900 bg-no-repeat bg-cover transition-colors duration-300">
      <div className='lg:w-1 lg:h-[52rem] absolute bg-blue-100 dark:bg-blue-900/20 lg:translate-y-32 lg:translate-x-20 shadow-2xl transition-colors duration-300'></div>

      <div className='text-7xl text-center text-gray-900 dark:text-white font-bold mb-10 transition-colors duration-300'>
        <h1>Projects</h1>
      </div>

      <div className='w-11/12 mx-auto flex flex-wrap justify-center'>
        {projectsData.map((project, index) => {
          // For the first project, render just the image in a full card without margin
          if (project.id === 1) {
            return (
              <div key={project.id} className="hover:scale-105 transition-all duration-200 flex lg:justify-center lg:items-center lg:translate-y-1 h-80 m-4">
                <img 
                  className="pb-36 lg:pb-0 lg:translate-y-10 shadow-lg dark:shadow-gray-700 sm:-translate-y-16 rounded-3xl h-[30rem] lg:w-[300px] object-cover transition-all duration-300" 
                  src={project.image} 
                  alt="Project" 
                />
              </div>
            );
          }

          // For other projects, render the Card component with margin
          return (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              className="mb-8 lg:mb-0" // Adding margin-bottom only to the Card components on mobile
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
