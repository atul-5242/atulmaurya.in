import React from 'react';
import Atul from "../assets/atul-b5ad09f1.jpg";

const About = () => {
    return (
        <section className="bg-black relative" id="about">
            <div className="relative lg:w-11/12 lg:max-w-[1080px] pt-6 w-[85%] mx-auto lg:pt-4">
                <h2 
                    className="lg:leading-[1.2] text-center text-5xl font-bold text-white z-100" 
                    style={{ fontFamily: 'Borel, cursive' }}
                >
                    About Me
                </h2>
                <div className="lg:w-6 w-10 h-1 bg-green-600 mx-6 lg:mx-auto lg:mt-4 mb-4"></div>
                
                <div className="border border-gray-200 w-full bg-slate-200 shadow-2xl shadow-white flex lg:flex-row flex-col rounded-md relative p-10 py-12 lg:min-h-[520px] h-full">
                    
                    <div className="flex flex-col justify-between items-center lg:w-full">
                        <h3 className="font-mullish font-semibold text-3xl text-center lg:text-left">
                            {"My Journey So Far:"}
                            <span className="text-pink-700"> {" Learning, Building & Growing in Tech"}</span>
                        </h3>

                        <ul className="flex flex-col gap-2 w-fit mx-auto mt-6">
                            <li className="font-mullish flex">
                                {">"} <span className="ml-2">I have completed my <b>B.Tech in CSE</b> from <b>Graphic Era Hill University</b> with <b>8.38 CGPA</b>.</span>
                            </li>
                            <li className="font-mullish flex">
                                {">"} <span className="ml-2">I specialize in <b>MERN Stack Development</b> and love building scalable products for web and mobile.</span>
                            </li>
                            <li className="font-mullish flex">
                                {">"} <span className="ml-2">Some of my projects include <b>RideEasy</b> (vehicle rental platform), <b>Code-X</b> (interest-based networking), <b>UptimeMatrix</b> (BetterStack-style SaaS), and <b>Skin Cancer Detection</b> (MERN + Deep Learning).</span>
                            </li>
                            <li className="font-mullish flex">
                                {">"} <span className="ml-2">Currently exploring <b>DevOps</b> (Docker, Kubernetes, AWS, Cloud) and diving deeper into <b>AI & Vector Databases</b>.</span>
                            </li>
                            <li className="font-mullish flex">
                                {">"} <span className="ml-2">Actively improving my <b>spoken English & communication skills</b> to become more confident in interviews and public speaking.</span>
                            </li>
                            <li className="font-mullish flex">
                                {">"} <span className="ml-2">Passionate about <b>open source, freelancing, and building impactful products</b> for real-world problems.</span>
                            </li>
                        </ul>

                        <div className="flex lg:flex-row flex-col-reverse gap-4 lg:mr-64 mt-6">
                            <a href="https://www.linkedin.com/in/atulmaurya5242/" target="_blank" rel="noopener noreferrer">
                                <button className="bg-sky-700 relative hover:bg-lightBlue500 transition-all duration-300 p-3 text-white font-bold rounded-md w-[200px] py-[14px] px-[18px] pr-[90px] lg:mb-0 mb-5 lg:mr-0">
                                    Follow Me
                                    <div className="w-12 h-[60px] bg-teal-600 absolute right-6 skew-x-[20deg] flex justify-center items-center -top-[3px] z-0">
                                        <span className="z-10 -skew-x-[20deg]">&rarr;</span>
                                    </div>
                                </button>
                            </a>
                            <div className="invisible text-pink-800 mr-20 text-lg font-semibold">
                                <a href="">My Photos</a>
                            </div>
                        </div>
                    </div>

                    <img src={Atul} alt="Atul Maurya" className="rounded-md lg:w-[380px] w-60 mx-auto" />
                </div>
            </div>
        </section>
    );
};

export default About;
