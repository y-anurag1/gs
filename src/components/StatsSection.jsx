import React, { useRef, useState, useEffect } from 'react';

// Custom hook for the counting animation
const useCountingAnimation = (targetNumber, shouldAnimate, duration = 2000) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const animationFrameRef = useRef(null);
  const startTimeRef = useRef(null);

  useEffect(() => {
    if (!shouldAnimate || typeof targetNumber !== 'number' || targetNumber < 0) {
      setCurrentNumber(0);
      return;
    }

    const animate = (timestamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const animatedValue = Math.floor(progress * targetNumber);

      setCurrentNumber(animatedValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentNumber(targetNumber);
      }
    };

    startTimeRef.current = null;
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [targetNumber, duration, shouldAnimate]);

  return currentNumber.toLocaleString();
};


export const StatsSection = () => {
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
        threshold: 0.5,
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

  const yearsExperience = useCountingAnimation(10, hasAnimated);
  const happyTravelers = useCountingAnimation(80000, hasAnimated);
  const iconicDestinations = useCountingAnimation(500, hasAnimated);


  return (
    // Changed section background to bg-blue-50 for consistent UI
    <section id="stats-section" ref={sectionRef} className="bg-blue-50 py-12 md:py-20 text-gray-800"> {/* Reduced vertical padding */}
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* Heading size reduced from text-3xl/4xl/5xl to text-2xl/3xl/4xl and mb-8 to mb-6 */}
        <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6">
          Strategic Solutions for<span className="text-orange-500"> MICE</span>  Travel
        </h2>

        {/* Gap reduced from gap-8/16 to gap-6/8 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white p-3 rounded-xl shadow-lg flex flex-col items-center border border-gray-100"> {/* Padding reduced, border-radius slightly less */}
            {/* Number font size reduced further */}
            <p className="text-blue-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-0.5">
              {yearsExperience}+
            </p>
            {/* Description font size reduced further */}
            <p className="text-sm md:text-base text-gray-700">Years Experience</p>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-lg flex flex-col items-center border border-gray-100">
            <p className="text-blue-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-0.5">
              {happyTravelers}+
            </p>
            <p className="text-sm md:text-base text-gray-700">Happy Travelers</p>
          </div>

          <div className="bg-white p-3 rounded-xl shadow-lg flex flex-col items-center border border-gray-100">
            <p className="text-blue-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-0.5">
              {iconicDestinations}+
            </p>
            <p className="text-sm md:text-base text-gray-700">Iconic Destinations</p>
          </div>
        </div>
      </div>
    </section>
  );
};