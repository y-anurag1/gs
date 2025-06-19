import React, { useRef, useState, useEffect } from 'react';
import { Plane, Train, Bus, Car, Book, Headset, CheckCircle } from 'lucide-react';

export const ServicesSection = () => {
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

  const services = [
    {
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      title: 'Plane Trip Ticket',
      description: 'Comprehensive travel and event management for meetings, incentives, conferences, and exhibitions – tailored for corporate excellence.',
      features: [
        'End-to-End Event Planning',
        'Group Travel Management',
        'Venue & Accommodation Booking'
      ],
    },
    {
      icon: <Train className="w-8 h-8 text-blue-600" />,
      title: 'Train Trip Ticket',
      description: 'Enjoy seamless travel planning with access to a global network of hotels and flights – tailored for both leisure and business needs.',
      features: [
        'Luxury & Budget Accommodation',
        'Competitive Airfare Deals',
        'Flexible Booking & Cancellations',
      ],
    },
    {
      icon: <Bus className="w-8 h-8 text-blue-600" />,
      title: 'Bus Trip Ticket',
      description: 'Tailor-made tour packages designed to fit your travel needs and preferences.',
      features: [
        'Family & Honeymoon Tours',
        'Adventure & Cultural Trips',
        'Group & Solo Packages',
      ],
    },
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: 'Transportation',
      description: 'Convenient transport options including car rentals, airport transfers, and more.',
      features: [
        'Chauffeur Services',
        'City Sightseeing',
        'Airport Pick & Drop',
      ],
    },
    {
      icon: <Book className="w-8 h-8 text-blue-600" />,
      title: 'Visa Assistance',
      description: 'Expert support for hassle-free visa applications and travel documentation.',
      features: [
        'Tourist Visas',
        'Business Visas',
        'Document Guidance',
      ],
    },
    {
      icon: <Headset className="w-8 h-8 text-blue-600" />,
      title: '24/7 Support',
      description: 'Reliable customer support throughout your travel journey—before, during, and after.',
      features: [
        'Emergency Travel Help',
        'Multilingual Agents',
        'Real-Time Updates',
      ],
    },
  ];

  return (
    <section
      id="services-section"
      ref={sectionRef}
      className={`bg-gray-100 py-16 md:py-24 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* NEW HEADING DESIGN */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Services We Provide
          </h2>
          <div className="w-24 h-1 bg-orange-300 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-start border border-gray-100 min-h-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="flex items-start w-full mb-4">
                <div className="p-3 rounded-lg transition-colors duration-300 group-hover:bg-blue-600 flex items-center justify-center">
                  {React.cloneElement(service.icon, {
                    className: `${service.icon.props.className} group-hover:text-white`
                  })}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 ml-3">{service.title}</h3>
              </div>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};