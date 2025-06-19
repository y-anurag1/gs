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
        Removed:
        - rounded-2xl
        - shadow-xl
        - bg-white
        - overflow-hidden (CRITICAL: allows bubbles to extend outside its bounds)

        This div now acts as a transparent, fixed-size container for positioning the image and bubbles.
        It maintains the `w-full max-w-md h-[480px]` dimensions.
      */}
      <div className="relative w-full max-w-md h-[480px]">
        {/* Actual hero image - It will appear as the main "card" visually */}
        <img
          src={hero}
          alt="Hero Traveler"
          // Added `rounded-2xl` and `shadow-xl` directly to the image
          className="w-full h-full object-contain object-center rounded-2xl shadow-xl"
        />

        {/* 24/7 Customer Support bubble - positioned top-left, now truly outside the image's "card" bounds */}
        {/* Adjusted left/top positions more relative to the outer container and image itself */}
        <div className="absolute -left-12 top-16 bg-white rounded-full shadow-lg px-4 py-2 flex items-center justify-center border border-gray-200 z-10">
          <Headset className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-sm font-bold text-gray-800 mr-1">24/7</span>
          <span className="text-xs text-gray-600">Customer Support</span>
        </div>

        {/* Location tag (New York, USA) - positioned top-right, now truly outside the image's "card" bounds */}
        {/* Adjusted right/top positions */}
        <div className="absolute -right-12 top-16 bg-white rounded-full shadow-lg px-4 py-2 flex items-center space-x-2 z-10">
          <MapPin className="w-4 h-4 text-gray-500" />
          <span className="text-sm text-gray-700">New York, USA</span>
        </div>
      </div>
    </div>
  );
};