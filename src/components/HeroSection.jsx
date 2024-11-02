import React from 'react';

const HeroSection = () => {
  const handleButtonClick = () => {
    // Replace with your resume link
    const resumeLink = 'https://drive.google.com/file/d/1OXpBT8WXDcRRwVKkygrL1rp2_VowMDVi/view';
    window.open(resumeLink, '_blank'); // Opens the link in a new tab
  };

  return (
    <section className="flex flex-col justify-center items-center relative mt-20 md:mt-10 top-10 mb-20">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 w-9/12 mx-auto bg-black rounded-xl shadow-2xl shadow-stone-500 p-5 md:p-10">
        {/* Text Section */}
        <div className="text-white w-full md:w-1/2 text-center md:text-left">
          <div className="flex flex-col gap-8">
            <div className="text-4xl md:text-6xl lg:text-7xl drop-shadow-2xl">
              <span className="block font-medium text-gray-300 mt-2">Yaa I am a</span>
              <span className="font-bold text-white mr-1">S</span>
              <span className="font-semibold text-blue-400">oftware Engineer</span>
            </div>
            <p className="text-slate-300">
              <span className="font-bold">“</span> Hi, I'm Atul Maurya — a passionate Full-Stack Web Developer skilled in building dynamic, user-friendly web applications. With expertise in the MERN stack and a commitment to responsive design,<br /><br />I create experiences that bring ideas to life and captivate users. Let’s craft something amazing together! ✨<span className="font-bold">”</span>
            </p>

            <div className="mt-4">
              <button 
                onClick={handleButtonClick} 
                className="p-3 md:p-5 md:px-10 shadow-xl shadow-slate-600 hover:scale-95 bg-white font-semibold text-black hover:bg-blue-600 duration-400 transition-all hover:text-white rounded-md"
              >
                Take a Look Inside!
              </button>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src="https://images6.alphacoders.com/135/1350469.png" alt="Car" className="w-72 sm:w-96 md:w-full rounded-xl shadow-2xl shadow-blue-500 object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
