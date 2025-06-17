import React, { useRef, useState, useEffect } from 'react';
import { Phone, Mail, MessageSquare, Briefcase, Globe } from 'lucide-react'; // Example icons for contact details/services

export const ContactUsSection = () => {
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
      id="contact-section" // ID for navbar scrolling
      ref={sectionRef}
      className={`bg-blue-50 py-16 md:py-24 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column: Contact Information and Sub-sections */}
          <div className="lg:w-1/2 text-gray-800">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Email, call, or complete the form to learn how GeoHolidays can solve your travel needs.
            </p>

            <div className="mb-8">
              <p className="text-xl font-semibold flex items-center mb-2">
                <Mail className="w-5 h-5 text-blue-600 mr-2" /> info@geoholidays.in {/* Updated Email */}
              </p>
              <p className="text-xl font-semibold flex items-center mb-2">
                <Phone className="w-5 h-5 text-blue-600 mr-2" /> +91 78801 70012 {/* Updated Phone */}
              </p>
              <a href="#" className="text-blue-600 hover:underline font-medium text-sm mt-1 inline-block">Customer Support</a>
            </div>

            {/* Three Sub-sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our support team is available around the clock to address any concerns or queries you may have.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Feedback and Suggestions</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We value your feedback and are continually working to improve GeoHolidays. Your input is crucial in shaping the future of travel.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Media Inquiries</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  For media-related questions or press inquiries, please contact us at media@geoholidays.com.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:w-1/2 bg-white p-8 md:p-10 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Get in Touch</h3>
            <p className="text-gray-600 mb-6">You can reach us anytime</p>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                />
              </div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="+91"
                  className="w-20 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 text-center"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                />
              </div>

              {/* Custom Select Service Dropdown */}
              <div>
                <select
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    backgroundSize: '1rem',
                  }}
                >
                  <option value="" disabled selected>Select Service</option>
                  <option value="personal-travel">Personal Travel</option>
                  <option value="business-tours">Business Tours</option>
                  <option value="business-events">Business Events</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 rounded-lg bg-blue-800 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Submit
              </button>
            </form>

            <p className="text-gray-500 text-xs mt-6 text-center">
              By contacting us, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};