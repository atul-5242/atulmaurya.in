import React from 'react';
import Atul from "../assets/atul-b5ad09f1.jpg";

const About = () => {
    return (
        <section className="bg-white dark:bg-gray-900 relative transition-colors duration-300 py-16" id="about">
            <div className="relative lg:w-11/12 lg:max-w-[1080px] pt-6 w-[85%] mx-auto lg:pt-4">
                <h2 
                    className="lg:leading-[1.2] text-center text-5xl font-bold text-gray-900 dark:text-white z-100 transition-colors duration-300" 
                    style={{ fontFamily: 'Borel, cursive' }}
                >
                    About Me
                </h2>
                <div className="lg:w-6 w-10 h-1 bg-blue-600 dark:bg-green-600 mx-6 lg:mx-auto lg:mt-4 mb-8 transition-colors duration-300"></div>
                
                <div className="border border-gray-200 dark:border-gray-700 w-full bg-white dark:bg-gray-800 shadow-xl shadow-gray-200 dark:shadow-gray-900 flex lg:flex-row flex-col rounded-lg relative p-6 md:p-10 py-12 lg:min-h-[520px] h-full transition-all duration-300">
                    <div className="flex flex-col justify-between items-center lg:w-full">
                        <h3 className="font-mullish font-semibold text-2xl md:text-3xl text-center lg:text-left text-gray-800 dark:text-gray-100 transition-colors duration-300">
                            {"My Journey So Far:"}
                            <span className="text-blue-600 dark:text-pink-600"> {" Learning, Building & Growing in Tech"}</span>
                        </h3>

                        <ul className="flex flex-col gap-3 w-full max-w-3xl mx-auto mt-8">
                            <li className="font-mullish flex items-start">
                                <span className="text-blue-600 dark:text-green-500 mr-2 mt-1">▹</span>
                                <span className="text-gray-700 dark:text-gray-300">I have completed my <b className="text-gray-900 dark:text-white">B.Tech in CSE</b> from <b className="text-gray-900 dark:text-white">Graphic Era Hill University</b> with <b className="text-gray-900 dark:text-white">8.38 CGPA</b>.</span>
                            </li>
                            <li className="font-mullish flex items-start">
                                <span className="text-blue-600 dark:text-green-500 mr-2 mt-1">▹</span>
                                <span className="text-gray-700 dark:text-gray-300">I specialize in <b className="text-gray-900 dark:text-white">MERN Stack Development</b> and love building scalable products for web and mobile.</span>
                            </li>
                            <li className="font-mullish flex items-start">
                                <span className="text-blue-600 dark:text-green-500 mr-2 mt-1">▹</span>
                                <span className="text-gray-700 dark:text-gray-300">Some of my projects include <b className="text-gray-900 dark:text-white">RideEasy</b> (vehicle rental platform), <b className="text-gray-900 dark:text-white">Code-X</b> (interest-based networking), <b className="text-gray-900 dark:text-white">UptimeMatrix</b> (BetterStack-style SaaS), and <b className="text-gray-900 dark:text-white">Skin Cancer Detection</b> (MERN + Deep Learning).</span>
                            </li>
                            <li className="font-mullish flex items-start">
                                <span className="text-blue-600 dark:text-green-500 mr-2 mt-1">▹</span>
                                <span className="text-gray-700 dark:text-gray-300">Currently exploring <b className="text-gray-900 dark:text-white">DevOps</b> (Docker, Kubernetes, AWS, Cloud) and diving deeper into <b className="text-gray-900 dark:text-white">AI & Vector Databases</b>.</span>
                            </li>
                            <li className="font-mullish flex items-start">
                                <span className="text-blue-600 dark:text-green-500 mr-2 mt-1">▹</span>
                                <span className="text-gray-700 dark:text-gray-300">Actively improving my <b className="text-gray-900 dark:text-white">spoken English & communication skills</b> to become more confident in interviews and public speaking.</span>
                            </li>
                            <li className="font-mullish flex items-start">
                                <span className="text-blue-600 dark:text-green-500 mr-2 mt-1">▹</span>
                                <span className="text-gray-700 dark:text-gray-300">Passionate about <b className="text-gray-900 dark:text-white">open source, freelancing, and building impactful products</b> for real-world problems.</span>
                            </li>
                        </ul>

                        <div className="flex lg:flex-row flex-col-reverse gap-4 lg:mr-64 mt-10">
                            <a href="https://www.linkedin.com/in/atulmaurya5242/" target="_blank" rel="noopener noreferrer" className="group">
                                <button className="bg-blue-600 hover:bg-blue-700 dark:bg-sky-700 dark:hover:bg-sky-800 relative transition-all duration-300 p-3 text-white font-bold rounded-md w-[200px] py-[14px] px-[18px] pr-[90px] lg:mb-0 mb-5 lg:mr-0 group-hover:shadow-lg group-hover:shadow-blue-200 dark:group-hover:shadow-sky-900/50">
                                    Follow Me
                                    <div className="w-12 h-[60px] bg-blue-700 dark:bg-teal-600 absolute right-6 skew-x-[20deg] flex justify-center items-center -top-[3px] z-0 group-hover:bg-blue-800 dark:group-hover:bg-teal-700 transition-colors duration-300">
                                        <span className="z-10 -skew-x-[20deg]">&rarr;</span>
                                    </div>
                                </button>
                            </a>
                        </div>
                        <div className="invisible text-pink-800 mr-20 text-lg font-semibold">
                            <a href="">My Photos</a>
                        </div>
                    </div>

                    <img src={Atul} alt="Atul Maurya" className="rounded-md lg:w-[380px] w-60 mx-auto" />
                </div>
            </div>
        </section>
    );
};

export default About;
