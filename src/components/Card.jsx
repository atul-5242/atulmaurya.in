import { Link } from 'react-router-dom';
import React from 'react';

const Card = ({ title, description, image, link, githubLink, demoLink }) => {
  return (
    <div className={`max-w-sm border border-slate-700 ${title === "Explore More Projects" ? "shadow-2xl shadow-cyan-900 w-[90%]" : "bg-black"} rounded-lg shadow-lg transition-transform transform hover:scale-105 m-4 hover:bg-gray-900`}>
      {title !== "Explore More Projects" ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img className="rounded-t-lg h-48 w-full object-cover" src={image} alt={title} />
        </a>
      ) : null}
      <div className="p-5">
        {title && title !== "Explore More Projects" && (  // Adjusted this line
          <>
            <div className="flex items-center justify-between mb-3">
              <h5 className="text-2xl font-bold tracking-tight text-white hover:underline">{title}</h5>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/material-outlined/24/ffffff/link.png" alt="Website" className="h-8 w-8" />
              </a>
            </div>
            {description && <p className="mb-3 font-normal text-gray-300">{description}</p>}
          </>
        )}

        {title === "Explore More Projects" ? (
          <Link
            to="/projects"
            className="w-full justify-center mx-auto p-4 flex items-center text-lg font-medium text-center text-black bg-white rounded-lg hover:bg-black shadow-2xl lg:translate-y-28 hover:text-white transition duration-300 shadow-teal-900"
          >
            Explore More Projects   
          </Link>
        ) : (
          <div className="flex space-x-4 mt-4">
            <a
              href={githubLink}
              className="p-2 inline-flex items-center text-sm font-medium text-white bg-gray-600 rounded-lg hover:bg-black transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/material-outlined/24/ffffff/github.png" alt="GitHub" />
            </a>
            <a
              href={demoLink}
              className="p-2 inline-flex items-center text-sm font-medium text-white bg-gray-600 rounded-lg hover:bg-black transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://img.icons8.com/material-outlined/24/ffffff/video.png" alt="Demo Video" />
            </a>
            <a
              href={link}
              className="p-4 inline-flex items-center text-sm font-medium text-center text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-300"
            >
              Know More
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
