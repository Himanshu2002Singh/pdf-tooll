import React from 'react';
import HomeTools from './HomeTools'; // Adjust the path as per your file structure
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="main">
      {/* Background Pattern */}
      <div className="pattern-bg"></div>

      {/* Home Title */}
      <div className="home-title">
        <h1 className="home-title__title">Comprehensive PDF tools all in one convenient site</h1>
        <h2 className="home-title__subtitle">
        Every PDF tool you need is here, 100% free and easy to use! Quickly merge, split, compress, convert with minimal effort.
        </h2>
      </div>
      
      {/* Tools Section */}
      <div className='twj'>
      <HomeTools />
      </div>

    </div>
  );
};

export default HomePage;
