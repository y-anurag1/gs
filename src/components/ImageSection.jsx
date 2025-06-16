import React, { useState, useEffect } from 'react';

export const ImageSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set isMounted to true after a small delay to trigger the animation
    // A slight delay (e.g., 100ms) ensures the component is fully mounted
    // before the transition starts, making the animation visible.
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100); // Adjust delay as needed

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      className={`relative lg:w-1/2 flex justify-center items-center p-4
        transform transition-all duration-1000 ease-out {/* Animation properties */}
        ${isMounted ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} {/* Initial and final states */}
      `}
    >
      {/* Main image card */}
      <div className="relative bg-blue-50 rounded-2xl shadow-xl p-6 w-full max-w-md h-96 flex flex-col justify-center items-center">
        {/* Placeholder for traveler image */}
        <div className="text-gray-400 text-xl font-semibold mb-4">Your Traveler Image Here</div>
        <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 22V12h6v10"></path>
        </svg>

        {/* 24/7 Customer Support bubble */}
        <div className="absolute -left-12 top-1/4 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-3 flex items-center justify-center border border-gray-200">
            <svg className="w-6 h-6 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <span className="text-sm font-semibold text-gray-700">24/7</span>
            <span className="text-xs text-gray-500 ml-1">Customer Support</span>
        </div>

        {/* Location tags */}
        <div className="absolute top-8 right-8 bg-white rounded-full shadow-md px-4 py-2 flex items-center space-x-2">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span className="text-sm text-gray-700">New York, USA</span>
        </div>
        <div className="absolute -bottom-8 left-1/4 transform -translate-x-1/2 bg-white rounded-full shadow-md px-4 py-2 flex items-center space-x-2">
          <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <span className="text-sm text-gray-700">Toronto, Canada</span>
        </div>
      </div>
    </div>
  );
};