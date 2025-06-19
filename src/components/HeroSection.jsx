import React from 'react'; // Removed useState, useEffect, useRef as they are no longer needed for animation


export const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 p-4 md:p-0">
      {/* Decorative circles/blobs */}
      <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-100 rounded-full opacity-50 hidden lg:block"></div>
      {/* Orange dot: static light orange, positioned behind content */}
      <div
        className="absolute -bottom-10 right-20 w-32 h-32 bg-orange-200 rounded-full hidden lg:block z-0 opacity-50" // Static light orange (orange-200) and opacity-50, with z-0
      ></div>

      {/* Content wrapper with higher z-index to ensure it's above the dot */}
      <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
          Find Your <br /> <span className="text-orange-500">Dream Destination</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
          Get ready to explore the new places and enjoy your life with full of adventure, take only memories that you spent and leave your footprints.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="flex items-center justify-center px-8 py-3 rounded-lg bg-blue-800 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200">
            Plan Your Trip &gt;
          </button>
          <button className="flex items-center justify-center px-8 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13.5m0-13.5c-4.142 0-6.253 1.915-7.79 3.013-1.077.77-2.096 1.77-3.003 2.981-.628.846-.927 1.928-.847 3.013.08.79.482 1.543 1.157 2.128.675.586 1.487.915 2.38.915h9.231c.893 0 1.705-.329 2.38-.915.675-.585 1.077-1.338 1.157-2.128.08-.79-.219-1.97-.847-3.013-1.427-2.204-2.483-3.204-3.567-3.204-1.084 0-2.14.996-3.567 3.204-.628.846-.927 1.928-.847 3.013.08.79.482 1.543 1.157 2.128.675.586 1.487.915 2.38.915H12"></path></svg>
            Explore Trips
          </button>
        </div>
      </div>
    </div>
  );
};