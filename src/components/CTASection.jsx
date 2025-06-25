import React, { useRef, useState, useEffect } from 'react';
import { Dot } from 'lucide-react'; // Using Dot icon for the button

export const CTASection = () => {
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

  // Function to handle scrolling to the Contact Us section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact-us-section');
    const navbar = document.querySelector('nav');

    if (contactSection && navbar) {
      const navbarHeight = navbar.offsetHeight;
      const offsetTop = contactSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.warn("Could not find 'contact-us-section' or the navbar for scrolling.");
    }
  };

  return (
    <section
      id="cta-section"
      ref={sectionRef}
      // Changed the main section background back to white
      className={`bg-white py-8 md:py-12 px-4 md:px-8 lg:px-12 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div
        // Background of the inner card remains a light gray (bg-gray-200)
        className="relative bg-gray-100 p-6 md:p-10 lg:p-12 rounded-xl shadow-lg
                   max-w-7xl mx-auto overflow-hidden"
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-32">
            {/* Left Column: SVG Vector */}
            <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mt-6">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-900">
                  <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
                  <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" transform="rotate(45 12 12) scale(0.6)"/>
                  <path d="M12 2L2 12L12 22L22 12L12 2Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" transform="rotate(90 12 12) scale(0.3)"/>
              </svg>
            </div>

            {/* Right Column: Heading, Description, Button */}
            <div className="text-left max-w-2xl flex flex-col">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight"
              >
                Wanna accelerate your business through travel?
              </h2>
              <p
                className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed flex-grow"
              >
                Let's have a virtual coffee and chat about your goals &gt; and how our processes can help achieve them.
              </p>
              <button
                onClick={handleScrollToContact}
                className="inline-flex items-center px-8 py-2 rounded-lg bg-blue-800 text-white font-semibold text-base shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ml-auto"
              >
                <Dot className="w-6 h-6 mr-2 fill-current" />
                Let's Connect
              </button>
            </div>
        </div>
      </div>
    </section>
  );
};