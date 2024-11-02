import React from 'react';
import Atul from "../assets/atul-b5ad09f1.jpg"
const About = () => {
    return (
        <section className="bg-black relative " id="about">
            <div className="relative lg:w-11/12 lg:max-w-[1080px] pt-6 w-[85%] mx-auto lg:pt-4">
                <h2 className="lg:leading-[1.2] text-center text-5xl font-bold text-white z-100" style={{ fontFamily: 'Borel, cursive' }}>
                    About Me
                </h2>
                <div className="lg:w-6 w-10 h-1 bg-green-600 mx-6 lg:mx-auto lg:mt-4 mb-4"></div>
                
                <div className="border border-gray-200 w-full bg-slate-200 shadow-2xl shadow-white flex lg:flex-row flex-col rounded-md relative p-10 py-12 lg:min-h-[520px] h-full">
                    <div className="flex flex-col justify-between items-center lg:w-full">
                        <h3 className="font-mullish font-semibold text-3xl">
                            {"Exploring My Journey:"}
                            <span className="text-pink-700"> {" Unveiling the Story Behind My Creative Odyssey"}</span>
                        </h3>
                        <ul className="flex flex-col gap-2 w-fit mx-auto">
                            <li className="font-mullish flex">{">"}<span className="ml-2">I am a Full Stack Web Developer [ MERN Stack]</span></li>
                            <li className="font-mullish flex">{">"}<span className="ml-2">I am a 4th year engineering student at Graphical Hill University pursuing a B.Tech in [ CSE ].</span></li>
                            <li className="font-mullish flex">{">"}<span className="ml-2">I am passionate about gaining knowledge in space and technology, aiming to build useful projects for the betterment of humanity.</span></li>
                        </ul>

                        <div className="flex lg:flex-row flex-col-reverse gap-4 lg:mr-64">
                            <a href="https://www.linkedin.com/in/atulmaurya5242/">
                                <button className="bg-sky-700 relative hover:bg-lightBlue500 transition-all duration-300 p-3 text-white font-bold rounded-md w-[200px] py-[14px] px-[18px] pr-[90px] lg:mb-0 mb-5 lg:mr-0">
                                    Follow Me
                                    <div className="w-12 h-[60px] bg-teal-600 absolute right-6 skew-x-[20deg] flex justify-center items-center -top-[3px] z-0">
                                        <span className="z-10 -skew-x-[20deg]">&rarr;</span>
                                    </div>
                                </button>
                            </a>
                            <div className="invisible text-pink-800 mr-20 text-lg font-semibold">
                                <a href="">My Photos </a>
                            </div>
                        </div>
                    </div>

                    <img src={Atul} alt="" className="rounded-md lg:w-[380px] w-60" />
                </div>
            </div>
        </section>
    );
};

export default About;
