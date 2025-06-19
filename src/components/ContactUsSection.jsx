import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const ContactUsSection = () => {
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
      id="contact-us-section"
      ref={sectionRef}
      className={`bg-blue-50 py-16 md:py-24 transition-all duration-1000 ease-out
        ${hasAnimated ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
      `}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Heading for the Contact Us section */}
        {/* NEW HEADING DESIGN - Centered in its container */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-orange-300 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-center">
            {/* The individual "Get in Touch" heading within this column is kept for local context, but without the underline */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Have questions or need assistance? Reach out to us, and our friendly team will be happy to help.
            </p>
            <div className="space-y-4">
              <div className="flex items-start text-gray-700">
                <MapPin className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Our Address</p>
                  <address className="not-italic text-sm">
                    Office No 34, Maple High Street, Narmadapuram Rd, in front of Aashima Mall, Danish Nagar, Bagmugaliya, Bhopal, Madhya Pradesh 462042
                  </address>
                </div>
              </div>
              <div className="flex items-start text-gray-700">
                <Phone className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-sm">+91 78801 70012</p>
                </div>
              </div>
              <div className="flex items-start text-gray-700">
                <Mail className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-sm">info@geoholidays.in</p>
                </div>
              </div>
              <div className="flex items-start text-gray-700">
                <Clock className="w-6 h-6 text-blue-600 mr-4 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Opening Hours</p>
                  <p className="text-sm">Mon-Sat: 10AM - 6PM</p>
                  <p className="text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
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