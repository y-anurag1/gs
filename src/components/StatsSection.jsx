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
    <section ref={sectionRef} className="bg-white py-10 md:py-16 text-gray-800">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8">
          Strategic Solutions for MICE Travel
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="bg-white p-4 rounded-2xl shadow-lg flex flex-col items-center border border-gray-100"> {/* Reduced padding from p-6 to p-4 */}
            <p className="text-blue-600 text-4xl md:text-5xl lg:text-6xl font-bold mb-1"> {/* Reduced number font size */}
              {yearsExperience}+
            </p>
            <p className="text-base md:text-lg text-gray-700">Years Experience</p> {/* Reduced description font size */}
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg flex flex-col items-center border border-gray-100"> {/* Reduced padding */}
            <p className="text-blue-600 text-4xl md:text-5xl lg:text-6xl font-bold mb-1"> {/* Reduced number font size */}
              {happyTravelers}+
            </p>
            <p className="text-base md:text-lg text-gray-700">Happy Travelers</p> {/* Reduced description font size */}
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-lg flex flex-col items-center border border-gray-100"> {/* Reduced padding */}
            <p className="text-blue-600 text-4xl md:text-5xl lg:text-6xl font-bold mb-1"> {/* Reduced number font size */}
              {iconicDestinations}+
            </p>
            <p className="text-base md:text-lg text-gray-700">Iconic Destinations</p> {/* Reduced description font size */}
          </div>
        </div>
      </div>
    </section>
  );
};