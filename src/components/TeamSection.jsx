import React, { useRef, useState, useEffect } from 'react';
// Import Lucide React icons for the hover state icon AND social media
import { User, Instagram, Facebook, Linkedin } from 'lucide-react'; // Re-added social media icons

// Import your local images here
import founder1Image from '../assets/founder1.png';
import founder2Image from '../assets/founder2.png';
import founder3Image from '../assets/founder3.png';

export const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: founder1Image,
      name: 'Mr.Abhitesh Shukla',
      title: 'Managing Director',
      description: 'With a love for cultures and continents, transformed his backpacking dreams into a travel empire. His vision? Making every traveler feel at home – anywhere on Earth.',
      social: { // Re-added social links
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
    },
    {
      id: 2,
      image: founder2Image,
      name: 'Mr.Saurav Shukla',
      title: 'Director Sales & Finance',
      description: 'An industry leader with 15+ years in global hospitality, envisioned a brand where luxury meets personalization: the brain behind our seamless service model.',
      social: { // Re-added social links
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
    },
    {
      id: 3,
      image: founder3Image,
      name: 'Mr.Akash Shukla',
      title: 'Director Operations',
      description: 'Tech-savvy and innovation-driven, ensures our digital journey is seamless and secure: the architect of our smart booking and support system.',
      social: { // Re-added social links
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
    },
  ];

  // Scroll animation state and ref for the whole section
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
    <section
      id="team-section"
      ref={sectionRef}
      className={`bg-white py-12 md:py-20 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Heading and Subtitle - UPDATED TO NEW DESIGN */}
        {/* Line 50: Replaced existing h2 and p with the new heading structure */}
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-orange-300 rounded-full"></div> {/* Orange underline */}
        </div>
        {/* The descriptive paragraph below the main heading is removed to match the new style */}

        {/* Team Member Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {teamMembers.map((member) => (
            // Card container: `relative` for absolute children, `group` for hover effects
            <div key={member.id} className="relative w-full max-w-xs h-80 rounded-lg overflow-hidden shadow-lg group">
              {/* Image Layer - always present, fades on hover */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 group-hover:opacity-20"
              />

              {/* Initial Content Layer - Name & Title Overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black via-black/60 to-transparent text-white text-center transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="text-base font-bold mb-0.5">{member.name}</h3>
                <p className="text-xs uppercase opacity-80">{member.title}</p>
              </div>

              {/* Hover Content Layer - Icon, Name, Description, and Social Icons on white background */}
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-4 text-center opacity-0 invisible transition-opacity duration-300 group-hover:opacity-100 group-hover:visible">
                {/* Blue Icon */}
                <User className="w-8 h-8 text-blue-600 mb-3" />
                {/* Name - Reappears, styled like a heading */}
                <h3 className="text-base font-semibold text-gray-900 mb-1">{member.name}</h3>
                {/* Description Text */}
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {member.description}
                </p>
                {/* Social Icons - Re-added here */}
                <div className="flex justify-center space-x-3">
                  <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};