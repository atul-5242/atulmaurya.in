import React from 'react';

const HeroSection = () => {
  const handleButtonClick = () => {
    // Replace with your resume link
    const resumeLink = 'https://drive.google.com/file/d/1OXpBT8WXDcRRwVKkygrL1rp2_VowMDVi/view';
    window.open(resumeLink, '_blank'); // Opens the link in a new tab
  };

  return (
    <section className="flex flex-col justify-center items-center relative mt-20 md:mt-10 top-10 mb-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-9/12 mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl shadow-gray-300 dark:shadow-stone-500 p-5 md:p-10 transition-colors duration-300">
        {/* Text Section */}
        <div className="text-gray-800 dark:text-white w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col gap-8">
            <div className="text-4xl md:text-6xl lg:text-7xl drop-shadow-2xl">
              <span className="block font-medium text-gray-600 dark:text-gray-300 mt-2">Yes I am a</span>
              <span className="font-bold text-gray-900 dark:text-white mr-1">S</span>
              <span className="font-semibold text-blue-600 dark:text-blue-400">oftware Engineer</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              <span className="font-bold">“</span> Hi, I'm Atul Maurya — a passionate Full-Stack Web Developer skilled in building dynamic, user-friendly web applications. With expertise in the MERN stack and a commitment to responsive design,<br /><br />I create experiences that bring ideas to life and captivate users. Let’s craft something amazing together! ✨<span className="font-bold">”</span>
            </p>

            <div className="mt-4">
              <button 
                onClick={handleButtonClick} 
                className="p-3 md:p-5 md:px-10 shadow-xl shadow-blue-200 dark:shadow-slate-600 hover:scale-95 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 font-semibold text-white duration-400 transition-all rounded-md"
              >
                Take a Look Inside!
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="https://img.freepik.com/free-photo/anime-character-traveling_23-2151278753.jpg" 
            alt="My photo" 
            className="w-72 sm:w-96 md:w-full rounded-xl shadow-2xl shadow-blue-200 dark:shadow-blue-500 object-cover transition-all duration-300" 
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
