import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black border-t-[1px] border-gray-500 text-white py-4 flex justify-between items-center px-8'>
      {/* Left side - Name */}
      <div className='text-lg font-semibold'>
        Atul Maurya
      </div>

      {/* Center - Social Media Icons */}
      <div className='flex space-x-4'>
        <a href='https://www.linkedin.com/in/atulmaurya5242/' target='_blank' rel='noopener noreferrer'>
          <img src='https://img.icons8.com/color/48/000000/linkedin.png' alt='LinkedIn' className='h-8 w-8' />
        </a>
        
        <a href='https://github.com/atul-5242' target='_blank' rel='noopener noreferrer'>
          <img src='https://img.icons8.com/ios-glyphs/48/ffffff/github.png' alt='GitHub' className='h-8 w-8' />
        </a>
      </div>

      {/* Right side - Heart icon */}
      
    </footer>
  );
};

export default Footer;
