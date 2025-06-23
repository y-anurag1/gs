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
        {/* Left Content Area - Left aligned, updated heading style */}
        <div className="lg:w-5/12 text-left"> {/* Changed to text-left, removed mx-auto */}
          {/* Main Heading for About Us - Centered within its own column, with underline */}
          <div className="flex flex-col items-start mb-6"> {/* Changed to items-start for left alignment */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2"> {/* Match FAQ/Team heading size */}
              About Us
            </h2>
            <div className="w-24 h-1 bg-orange-300 rounded-full"></div> {/* Orange underline */}
          </div>

          <p className="text-gray-600 mb-4 max-w-md"> {/* Adjusted mb */}
At Geo Holidays, we specialize in delivering seamless MICE (Meetings, Incentives, Conferences, and Exhibitions) travel experiences tailored to the unique needs of corporate and group travelers. With services that span across hotel reservations, flight bookings, and curated travel logistics, we ensure every journey is as efficient as it is memorable. Our team is dedicated to managing every detail — from airport transfers to venue coordination — making business travel smooth, reliable, and stress-free.          </p>
          {/* New placeholder paragraph */}
          <p className="text-gray-600 mb-8 max-w-md">
Our commitment goes beyond logistics. At Geo Holidays, we strive to create travel experiences that leave a lasting impression. Whether it’s a corporate incentive trip, a global conference, or a carefully planned exhibition, we focus on fostering meaningful connections and delivering exceptional service. Every itinerary we design is guided by a passion for excellence, trust, and a deep understanding of what makes travel truly rewarding.

          </p>

          {/* Removed EXPLORE MORE button */}
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