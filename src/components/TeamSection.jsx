import React, { useRef, useState, useEffect } from 'react';
// Import Lucide React icons for social media
import { Instagram, Facebook, Linkedin } from 'lucide-react';

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
      social: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
      // Removed bgColor property as it's no longer used for styling
    },
    {
      id: 2,
      image: founder2Image,
      name: 'Mr.Saurav Shukla',
      title: 'Director Sales & Finance',
      description: 'An industry leader with 15+ years in global hospitality, envisioned a brand where luxury meets personalization: the brain behind our seamless service model.',
      social: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
      // Removed bgColor property
    },
    {
      id: 3,
      image: founder3Image,
      name: 'Mr.Akash Shukla',
      title: 'Director Operations',
      description: 'Tech-savvy and innovation-driven, ensures our digital journey is seamless and secure: the architect of our smart booking and support system.',
      social: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
      // Removed bgColor property
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
      className={`bg-gray-100 py-16 md:py-24 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
              {/* Image container: Reverted to a simple white background or no background, and adjusted height for visibility */}
              {/* Removed dynamic bgColor, flex, justify-center, items-center. Changed h-48 to h-60 for more space if needed */}
              <div className="w-full h-60 bg-white overflow-hidden flex justify-center items-center"> {/* Set to bg-white to blend with image background */}
                <img
                  src={member.image}
                  alt={member.name}
                  // Reverted to rectangular image sizing and removed circular styling
                  // object-contain used to ensure entire image is visible, rather than cropping
                  className="w-full h-full object-contain object-center"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium text-xs mb-3">{member.title}</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-6">{member.description}</p>

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