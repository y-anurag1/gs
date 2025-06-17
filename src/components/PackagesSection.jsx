import React, { useRef, useState, useEffect } from 'react';

// IMPORTANT: Ensure these paths are CORRECT based on where your images are located.
import goaPackageImg from '../assets/GoaPackage.png';
import jaipurPackageImg from '../assets/JaipurPackage.png';
import agraPackageImg from '../assets/AgraPackage.png';

export const PackagesSection = () => {
  const packages = [
    {
      id: 1,
      title: "Goa Package", // Title for alt text
      image: goaPackageImg,
    },
    {
      id: 2,
      title: "Agra Package", // Title for alt text
      image: agraPackageImg,
    },
    {
      id: 3,
      title: "Jaipur Package", // Title for alt text
      image: jaipurPackageImg,
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
      id="packages-section"
      ref={sectionRef}
      // Increased top padding (pt-32, md:pt-48) for larger screens to prevent overlap
      // from the elevated middle image.
        className={`bg-gray-100 py-8 md:py-12 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* PACKAGES Tag */}
        {/* mb-12 remains, but the section's top padding now creates the main buffer */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center lg:mb-32">
        Packages
       </h2>

        {/* Grid for packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 justify-items-center items-center">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative w-full max-w-[300px] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300
                         hover:scale-[1.03] hover:shadow-2xl cursor-pointer
                        ${index === 1 ? 'lg:-translate-y-16' : ''}`}
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-auto rounded-xl block"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};