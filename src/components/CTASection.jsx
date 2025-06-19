import React, { useRef, useState, useEffect } from 'react';
import { Dot } from 'lucide-react'; // Using Dot icon for the button
import logo from '../assets/logo.png'; // Import the logo image

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
      // Line 23: Reduced vertical padding even further to make the section smaller
      className={`bg-white py-8 md:py-12 px-4 md:px-8 lg:px-12 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div
        // Line 30: Reduced inner padding: p-8 md:p-12 lg:p-16 changed to p-6 md:p-10 lg:p-12
        className="relative bg-gradient-to-br from-blue-100 to-orange-100 p-6 md:p-10 lg:p-12 rounded-xl shadow-lg
                   max-w-6xl mx-auto overflow-hidden"
      >
        <div className="relative z-10 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-32">
            {/* Left Column: Image - Keeping the same size, as "smaller section" mostly implies text/padding */}
            <div className="flex-shrink-0 mb-8 lg:mb-0 lg:mt-6">
              <img src={logo} alt="Company Logo" className="h-24 w-auto" />
            </div>

            {/* Right Column: Heading, Description, Button */}
            <div className="text-left max-w-2xl">
              <h2
                // Line 44: Reduced heading font size: text-3xl sm:text-4xl md:text-5xl changed to text-2xl sm:text-3xl md:text-4xl
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight" // Reduced mb-6 to mb-4
              >
                Wanna accelerate your business through travel?
              </h2>
              <p
                // Line 48: Reduced paragraph font size: text-base md:text-lg changed to text-sm md:text-base
                className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed" // Reduced mb-8 to mb-6
              >
                Let's have a virtual coffee and chat about your goals &gt; and how our processes can help achieve them.
              </p>
              {/* Let's Connect Button - Keeping the same size for impact */}
              <button
                onClick={handleScrollToContact}
                className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-800 text-white font-medium text-base shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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