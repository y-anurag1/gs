import React, { useRef, useState, useEffect } from 'react'; // Import hooks for animation
// Import necessary Lucide React icons
import { Building, Hotel, MapPin, Car, Book, Headset, CheckCircle, Plane, Train, Bus, Bed } from 'lucide-react'; 

export const ServicesSection = () => {
  const sectionRef = useRef(null); // Ref to observe the section
  const [hasAnimated, setHasAnimated] = useState(false); // State to control animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the section is intersecting and hasn't animated yet, trigger animation
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
  }, [hasAnimated]); // Dependency array includes hasAnimated

  // New data for the 6 service cards
  const services = [
    {
      // Using Lucide Plane icon as requested
      icon: <Plane className="w-8 h-8 text-blue-600" />,
      title: 'Plane Trip Ticket',
      description: 'Comprehensive travel and event management for meetings, incentives, conferences, and exhibitions – tailored for corporate excellence.',
      features: [
        'End-to-End Event Planning',
        'Group Travel Management',
        'Venue & Accommodation Booking',
        'On-site Coordination & Support',
      ],
    },
    {
      // Using Lucide Train icon as requested
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
      // Using Lucide Bus icon as requested
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
      icon: <Car className="w-8 h-8 text-blue-600" />, // Lucide Car for Transportation
      title: 'Transportation',
      description: 'Convenient transport options including car rentals, airport transfers, and more.',
      features: [
        'Chauffeur Services',
        'City Sightseeing',
        'Airport Pick & Drop',
      ],
    },
    {
      icon: <Book className="w-8 h-8 text-blue-600" />, // Lucide Book for Visa Assistance
      title: 'Visa Assistance',
      description: 'Expert support for hassle-free visa applications and travel documentation.',
      features: [
        'Tourist Visas',
        'Business Visas',
        'Document Guidance',
      ],
    },
    {
      icon: <Headset className="w-8 h-8 text-blue-600" />, // Lucide Headset for 24/7 Support
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
    // Ensure this section has the ID for scrolling
    // Added ref, transition, transform, and opacity for animation
    <section
      id="services-section"
      ref={sectionRef} // Attach the ref here
      className={`bg-gray-100 py-16 md:py-24 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-extrabold mb-12 text-left">
          Services We Provided
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col justify-start border border-gray-100 min-h-[300px] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="flex items-start w-full mb-4">
                {/* Icon wrapper with hover background and padding */}
                <div className="p-3 rounded-lg transition-colors duration-300 group-hover:bg-blue-600 flex items-center justify-center">
                  {/* React.cloneElement is used to add group-hover:text-white to the icon component itself */}
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