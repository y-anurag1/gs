import React, { useRef, useState, useEffect } from 'react';
import { Headset, MapPin } from 'lucide-react'; // Ensure these icons are imported if used elsewhere in the file

export const TestimonialsSection = () => {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Testimonial Data (Fake Data)
  const testimonials = [
    {
      id: 1,
      text: "GeoHolidays transformed my travel dreams into an unforgettable reality. Their attention to detail and personalized itinerary made my trip to Goa absolutely seamless and joyous. Highly recommended for anyone seeking a hassle-free and memorable vacation!",
      author: "Priya Sharma",
      date: "May 15, 2024",
      image: "https://placehold.co/60x60/E0F2F7/000000?text=PS",
    },
    {
      id: 2,
      text: "The Jaipur package from GeoHolidays was simply incredible. Every aspect, from the luxurious stay to the cultural excursions, was perfectly curated. My family had an amazing time, and we truly appreciate their professional and friendly service.",
      author: "Rajesh Kumar",
      date: "April 28, 2024",
      image: "https://placehold.co/60x60/E0F7E0/000000?text=RK",
    },
    {
      id: 3,
      text: "Our corporate MICE event handled by GeoHolidays in Agra was executed flawlessly. The logistics, venue management, and sight-seeing arrangements were top-notch. Their team truly understands corporate travel needs.",
      author: "Smita Singh",
      date: "March 10, 2024",
      image: "https://placehold.co/60x60/F7F2E0/000000?text=SS",
    },
    {
      id: 4,
      text: "I was looking for a custom itinerary for a solo adventure, and GeoHolidays exceeded my expectations. They listened to my preferences and designed a unique trip that perfectly matched my desires. Truly a bespoke travel experience!",
      author: "Amit Patel",
      date: "Feb 01, 2024",
      image: "https://placehold.co/60x60/F2E0F7/000000?text=AP",
    },
    {
      id: 5,
      text: "The Ladakh bike trip was an absolute thrill! GeoHolidays handled everything, from bike rentals to permits and accommodations, allowing us to just focus on the adventure. Impeccable planning!",
      author: "Rahul Varma",
      date: "Jan 20, 2024",
      image: "https://placehold.co/60x60/CCE5FF/000000?text=RV",
    },
    {
      id: 6,
      text: "My honeymoon in the Maldives was a dream come true, thanks to GeoHolidays. The overwater villa, private dinners, and seamless transfers made it truly magical. They took care of every little detail.",
      author: "Neha Reddy",
      date: "Dec 05, 2023",
      image: "https://placehold.co/60x60/FFCCE5/000000?text=NR",
    },
  ];

  // Duplicate testimonials for a seamless infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Animation for section visibility
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
      id="testimonials-section"
      ref={sectionRef}
      className={`bg-gray-100 py-12 md:py-16 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      {/* Container for heading, limited width, centered */}
      <div className="container mx-auto px-4 lg:px-8 text-center">
        {/* NEW HEADING DESIGN */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            What our clients say!
          </h2>
          {/* Custom Underline */}
          <div className="w-24 h-1 bg-orange-300 rounded-full"></div>
        </div>
      </div>

      {/* Full-width carousel track container with fade effects */}
      <div className="w-full overflow-hidden py-8 relative"> {/* Added relative for gradient positioning */}
        {/* Left Gradient Fade Overlay */}
        <div className="absolute left-0 top-0 h-full w-24 md:w-32 bg-gradient-to-r from-gray-100 to-transparent z-20 pointer-events-none"></div>
        {/* Right Gradient Fade Overlay */}
        <div className="absolute right-0 top-0 h-full w-24 md:w-32 bg-gradient-to-l from-gray-100 to-transparent z-20 pointer-events-none"></div>

        <style>
          {`
          /* Define card dimensions and margins for precise translateX calculation */
          /* Default (mobile) */
          :root {
            --card-width: 280px;
            --card-margin-x: 16px; /* mx-2 means 8px left + 8px right = 16px total */
          }
          /* Small screens */
          @media (min-width: 640px) {
            :root {
              --card-width: 300px;
            }
          }
          /* Large screens */
          @media (min-width: 1024px) {
            :root {
              --card-width: 320px;
            }
          }

          @keyframes scroll-testimonials {
            0% {
              transform: translateX(0);
            }
            100% {
              /* Scrolls exactly one full set of original testimonials */
              transform: translateX(calc(-1 * (var(--card-width) + var(--card-margin-x)) * ${testimonials.length}));
            }
          }

          .animate-scroll-infinite {
            animation: scroll-testimonials 60s linear infinite; /* Adjust duration for speed */
          }

          .animate-scroll-infinite:hover {
            animation-play-state: paused;
          }
          `}
        </style>

        <div className="flex w-max animate-scroll-infinite">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[300px] lg:w-[320px] mx-2"
            >
              <div className="relative bg-white py-8 px-6 rounded-xl shadow-lg border border-gray-200 h-full flex flex-col items-center justify-between overflow-hidden text-center">
                {/* Large background quote marks */}
                <span className="absolute top-4 left-4 text-gray-200 text-8xl font-serif opacity-70 leading-none z-0">“</span>
                <span className="absolute bottom-4 right-4 text-gray-200 text-8xl font-serif opacity-70 leading-none z-0">”</span>

                {/* Profile Image - moved to top center, adjusted margins */}
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mb-4 relative z-10 border border-blue-100"
                />

                {/* Testimonial Content */}
                <p className="text-xs text-gray-700 leading-relaxed flex-grow mb-4 relative z-10">
                  {testimonial.text}
                </p>
                {/* Moved name and date to the right */}
                {/* Changed `text-center` to `text-right` */}
                <div className="relative z-10 mt-auto w-full text-right">
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight">{testimonial.author}</h3>
                  <p className="text-xs text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};