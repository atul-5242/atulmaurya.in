import React from 'react';

const Stars = () => {
  return (
    <>
      <div className="star" style={{ top: '10%', left: '10%', animationDuration: '5s' }}></div>
      <div className="star" style={{ top: '10%', right: '10%', animationDuration: '6s', animationDelay: '1s' }}></div>
      <div className="star" style={{ bottom: '10%', left: '10%', animationDuration: '4.5s', animationDelay: '0.5s' }}></div>
      <div className="star" style={{ bottom: '10%', right: '10%', animationDuration: '5.5s', animationDelay: '0.2s' }}></div>
      <div className="star" style={{ top: '15%', left: '15%', animationDuration: '6.5s', animationDelay: '1.2s' }}></div>
    </>
  );
};

export default Stars;
