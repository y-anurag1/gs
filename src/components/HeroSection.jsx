import React, { useRef, useState, useEffect } from 'react';
import { Mail, CalendarDays } from 'lucide-react';

export const HeroSection = ({ navigateTo }) => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
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
  }, [hasAnimated]);

  return (
    <div
      ref={sectionRef}
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4 flex flex-col">
          <span>Find Your</span>
          <span className="text-orange-500 flex flex-col">
            <span>Dream</span>
            <span>Destination</span>
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
          Get ready to explore the new places and enjoy your life with full of adventure, take only memories that you spent and leave your footprints.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => navigateTo('contact-us-section')} // Target ID for the Contact Us section
            className="flex items-center justify-center px-8 py-3 rounded-lg bg-blue-800 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};