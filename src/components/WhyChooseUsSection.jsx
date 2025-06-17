import React, { useRef, useState, useEffect } from 'react';
// Import original Lucide React icons for the features
import { ShieldCheck, Map, Clock, UserCheck } from 'lucide-react';

export const WhyChooseUsSection = () => {
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
        root: null, // observe against the viewport
        rootMargin: '0px',
        threshold: 0.3, // Trigger when 30% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const reasons = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />,
      title: 'Trusted Expertise',
      description: 'With years of industry experience, our travel experts ensure every trip is smooth, safe, and memorable.',
    },
    {
      icon: <Map className="w-6 h-6 text-blue-600 flex-shrink-0" />,
      title: 'Tailored Itineraries',
      description: 'We craft travel plans based on your interests, preferences, and travel goals—nothing generic, just personal.',
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600 flex-shrink-0" />,
      title: 'On-Time Coordination',
      description: 'Every flight, hotel, and activity is scheduled with precision, ensuring timely experiences and zero hassle.',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-blue-600 flex-shrink-0" />,
      title: 'Customer-Centric Service',
      description: 'We prioritize your comfort, safety, and satisfaction at every step of your journey.',
    },
  ];

  return (
    <section
      id="why-choose-us-section"
      ref={sectionRef}
      className={`bg-white py-16 md:py-24 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* The 'WHY CHOOSE US' tag div remains removed */}

        {/* Main layout: Image on Left, Content on Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* Left Image Section */}
          <div className="relative lg:w-1/2 flex justify-center lg:justify-start items-center">
            <img
              src="https://placehold.co/600x400/CCCCCC/FFFFFF?text=Team+Image" // Placeholder for your team image
              alt="GeoHolidays Team"
              className="rounded-2xl shadow-xl w-full max-w-lg object-cover"
            />
            {/* 10+ Years of Excellence Badge */}
            <div className="absolute bottom-4 right-4 bg-blue-800 text-white font-bold px-6 py-3 rounded-xl shadow-lg text-lg text-center">
              10+ <br /> Years of Excellence
            </div>
          </div>

          {/* Right Content Area (Heading, Intro, Reasons List) */}
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Restored original heading text and size */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              Why Travel With <span className="text-orange-500">Geo</span><span className="text-blue-800">Holidays</span>
            </h2>
            {/* Restored introductory paragraphs */}
            <p className="text-base text-gray-600 mb-3 leading-relaxed">
              We turn your travel dreams into real-world adventures with expertly planned itineraries and personalized experiences.
            </p>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              From serene getaways to thrilling explorations, we provide seamless travel solutions tailored for individuals, families, and corporate groups.
            </p>

            {/* New layout for the 4 reasons: 2x2 grid with a visual vertical divider */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-8 relative">
                {/* Left Column of Reasons */}
                <div className="space-y-8">
                    {reasons.slice(0, 2).map((reason, index) => (
                        <div key={index} className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-full flex items-center justify-center mr-4">
                                {reason.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-0.5">{reason.title}</h4>
                                <p className="text-sm text-gray-600">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vertical Divider - positioned absolutely within the 'reasons' grid container */}
                <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-300 transform -translate-x-1/2"></div>

                {/* Right Column of Reasons */}
                <div className="space-y-8 md:pl-8">
                    {reasons.slice(2, 4).map((reason, index) => (
                        <div key={index + 2} className="flex items-start">
                            <div className="bg-blue-100 p-2 rounded-full flex items-center justify-center mr-4">
                                {reason.icon}
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800 mb-0.5">{reason.title}</h4>
                                <p className="text-sm text-gray-600">{reason.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};