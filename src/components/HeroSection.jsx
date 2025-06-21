import React, { useRef, useState, useEffect } from 'react';
// Re-added useState, useEffect, useRef for the section animation
import { Compass, CalendarDays } from 'lucide-react'; // Importing Compass for Explore Trips, CalendarDays for Plan Your Trip

export const HeroSection = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // This observer will trigger the fade-in animation for the section content
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]); // Dependency array ensures effect runs once

  return (
    // Applied animation classes to the main content div that will animate in
    <div
      ref={sectionRef} // Attach ref to the div that will be observed for animation
      className={`relative flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 p-4 md:p-0
        transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      {/* Decorative circles/blobs */}
      <div className="absolute -top-10 -left-10 w-24 h-24 bg-blue-100 rounded-full opacity-50 hidden lg:block"></div>
      {/* Orange dot: static light orange, positioned behind content */}
      <div
        className="absolute -bottom-10 right-20 w-32 h-32 bg-orange-200 rounded-full hidden lg:block z-0 opacity-50"
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
       
          <button className="flex items-center justify-center px-8 py-3 rounded-lg border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-200">
            <Compass className="w-5 h-5 mr-2" /> 
            Explore Trips
          </button>
          
          <button className="flex items-center justify-center px-8 py-3 rounded-lg bg-blue-800 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200">
            <CalendarDays className="w-5 h-5 mr-2" /> 
            Plan Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};