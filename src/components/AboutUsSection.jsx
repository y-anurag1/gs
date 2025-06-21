import React, { useRef, useState, useEffect } from 'react';
// Import your image assets
import about1 from '../assets/about1.png';
import about2 from '../assets/about2.png';
import about3 from '../assets/about3.png';

export const AboutUsSection = () => {
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
        threshold: 0.2, // A bit more of the element should be visible
      }
    );

    const currentSectionRef = sectionRef.current;
    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [hasAnimated]);

  return (
    // The main wrapper with a white background
    <div className="bg-white py-16 md:py-24">
      <div
        id="about-section"
        ref={sectionRef}
        className={`max-w-7xl mx-auto px-4
          flex flex-col lg:flex-row items-center justify-center gap-16
          transition-all duration-1000 ease-out
          ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      >
        {/* Left Content Area - Centered */}
        <div className="lg:w-5/12 text-center mx-auto">
          <p className="text-sm font-bold text-rose-500 uppercase mb-2">A BIT</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About Us</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            From they fine john he give at rich he. They age and draw mrs like. Improving and distrusts may instantly was household applauded incommode. Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not.
          </p>
          {/* --- Button color remains blue-800 --- */}
          <button className="px-8 py-3 rounded-lg bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-300">
            EXPLORE MORE
          </button>
        </div>

        {/* SECTION 2: IMAGE COLLAGE - Non-overlapping Grid Layout */}
        <div className="lg:w-6/12 grid grid-cols-2 grid-rows-3 gap-4 h-[500px] md:h-[550px] lg:h-[450px]">
          {/* Top image (about3.png) - Spans two columns */}
          <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={about3}
              alt="Mountain view"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Middle/background image (about2.png) - Spans two columns, goes below top image */}
          <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={about2}
              alt="Colorful coastal town"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom-left image (about1.png) - Occupies bottom-left cell */}
          <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={about1}
              alt="Two people hiking on a coastal path"
              className="w-full h-full object-cover"
            />
          </div>

          {/* "10+ Places" overlay box - Changed to gradient background */}
          {/* Used the same gradient as CTASection and set text to a darker shade for visibility */}
          <div className="col-span-1 row-span-1 bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl flex items-center justify-center p-4 text-gray-800 shadow-2xl">
            <span className="text-3xl md:text-4xl font-bold text-center leading-tight">
              10+ <br/> Places
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};