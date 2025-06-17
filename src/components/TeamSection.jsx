import React, { useRef, useState, useEffect } from 'react';
// Import Lucide React icons for social media
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: "https://placehold.co/300x200/ADD8E6/000000?text=Abhitesh", // Placeholder with light blue background
      name: 'Mr.Abhitesh Shukla',
      title: 'Managing Director',
      description: 'With a love for cultures and continents, transformed his backpacking dreams into a travel empire. His vision? Making every traveler feel at home – anywhere on Earth.',
      social: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
    },
    {
      id: 2,
      image: "https://placehold.co/300x200/FFDAB9/000000?text=Saurav", // Placeholder with peach background
      name: 'Mr.Saurav Shukla',
      title: 'Director Sales & Finance',
      description: 'An industry leader with 15+ years in global hospitality, envisioned a brand where luxury meets personalization: the brain behind our seamless service model.',
      social: {
        instagram: '#',
        facebook: '#',
        linkedin: '#',
      },
    },
    {
      id: 3,
      image: "https://placehold.co/300x200/E0BBE4/000000?text=Akash", // Placeholder with lavender background
      name: 'Mr.Akash Shukla',
      title: 'Director Operations',
      description: 'Tech-savvy and innovation-driven, ensures our digital journey is seamless and secure: the architect of our smart booking and support system.',
      social: {
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
      className={`bg-gray-100 py-16 md:py-24 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Meet Our Team
        </h2>

        {/* Increased gap from gap-6 to gap-12 for more spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center"> {/* Added justify-items-center */}
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm"> {/* Added max-w-sm for explicit width reduction */}
              {/* Image container height increased from h-40 to h-48 */}
              <div className="w-full h-48 bg-gray-200 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Content area padding adjusted for more length */}
              <div className="p-6 text-center"> {/* Increased padding from p-4 to p-6 */}
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3> {/* Adjusted mb */}
                <p className="text-blue-600 font-medium text-xs mb-3">{member.title}</p> {/* Adjusted mb */}
                <p className="text-gray-600 text-xs leading-relaxed mb-6">{member.description}</p> {/* Adjusted mb */}

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