import React from 'react';
import Card from './Card';
import projectsData from './../utils/projectsData';

const Project = () => {
  // Filter out the first project
  const filteredProjects = projectsData.filter(project => project.id !== 1);

  return (
    <section className="w-full bg-white dark:bg-gray-900 transition-colors duration-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative element */}
        <div className='hidden lg:block w-1 h-[60rem] absolute left-20 bg-gradient-to-b from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 shadow-2xl transition-colors duration-300 -z-10'></div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects. Click on any project to learn more about it.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Cards */}
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
          
          {/* Explore More Card */}
          <Card 
            isExploreMore={true}
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
