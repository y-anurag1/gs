import React, { useState, useEffect } from 'react';
import hero from '../assets/hero.png'; // This is the image to be used
import { Headset, MapPin } from 'lucide-react'; // Import icons: Headset for 24/7 support, MapPin for location

export const ImageSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`relative lg:w-1/2 flex justify-center items-center /* Keep this container for layout and animation */
        transform transition-all duration-1000 ease-out
        ${isMounted ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
      `}
    >
      {/*
        This div now acts as a transparent container for positioning the image and bubbles.
        It has responsive dimensions to make the image smaller on mobile.
      */}
      <div className="relative w-full
                  h-[320px] max-w-xs      /* Default (mobile) */
                  sm:h-[380px] sm:max-w-sm /* Small screens */
                  lg:h-[480px] lg:max-w-md /* Large screens */
                  ">
        {/* Actual hero image - It will appear as the main "card" visually */}
        <img
          src={hero}
          alt="Hero Traveler"
          className="w-full h-full object-contain object-center rounded-2xl shadow-xl"
        />

        {/* 24/7 Customer Support bubble - positioned top-left, now responsive with smaller size on mobile */}
        <div className="absolute bg-white rounded-full shadow-lg border border-gray-200 z-10
                    p-1 flex items-center justify-center    /* Smaller padding on mobile */
                    -left-4 top-8      /* Default (mobile) positioning */
                    sm:px-4 sm:py-2     /* Medium padding on small screens */
                    sm:-left-8 sm:top-12 /* Small screens positioning */
                    lg:-left-12 lg:top-16 /* Large screens positioning */
                    ">
          <Headset className="w-3.5 h-3.5 text-blue-600 mr-0.5 sm:mr-2" /> {/* Smaller icon on mobile */}
          <span className="text-xs font-bold text-gray-800 mr-0.5 sm:text-sm sm:mr-1">24/7</span> {/* Text size for "24/7" */}
          <span className="text-[0.65rem] text-gray-600 sm:text-xs">Customer Support</span> {/* Even smaller text on mobile */}
        </div>

        {/* Location tag (New York, USA) - positioned top-right, now responsive with smaller size on mobile */}
        <div className="absolute bg-white rounded-full shadow-lg border border-gray-200 z-10
                    p-1 flex items-center space-x-0.5    /* Smaller padding and spacing on mobile */
                    -right-4 top-8      /* Default (mobile) positioning */
                    sm:px-4 sm:py-2     /* Medium padding on small screens */
                    sm:space-x-2        /* Medium spacing on small screens */
                    sm:-right-8 sm:top-12 /* Small screens positioning */
                    lg:-right-12 lg:top-16 /* Large screens positioning */
                    ">
          <MapPin className="w-3.5 h-3.5 text-gray-500 sm:w-4 sm:h-4" /> {/* Smaller icon on mobile */}
          <span className="text-[0.7rem] text-gray-700 sm:text-sm">New York, USA</span> {/* Smaller text on mobile */}
        </div>
      </div>
    </div>
  );
};
