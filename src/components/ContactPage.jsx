import React, { useState, useEffect } from 'react';
import { Phone, Mail, Printer, Send } from 'lucide-react';
import logo from '../assets/logo.png';

export const ContactPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Slide‑up animation on mount
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    howDidYouFindUs: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phoneNumber: '', howDidYouFindUs: '' });
  };

  const googleMapsEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.6474132184276!2d77.45265502477494!3d23.183065310321002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43e35217c821%3A0xb864d1694c6e3b8c!2sGeo%20Holidays%2C%20MICE%20and%20corporate%20group%20trave!5e0!3m2!1sen!2sin!4v1750397982685!5m2!1sen!2sin";
  const googleMapsDirectionUrl = "https://www.google.com/maps/dir/?api=1&destination=Geo+Holidays,+MICE+and+corporate+group+trave";

  return (
    <div
      className={`
        min-h-screen
        bg-gradient-to-br from-blue-50 to-orange-50
        font-sans flex flex-col items-center pt-32 pb-32

        transform
        transition-all duration-700 ease-out
        ${isMounted
          ? 'translate-y-0 opacity-100'
          : 'translate-y-full opacity-0'}
      `}
    >
      {/* Header */}
      <div className="container mx-auto px-4 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600">
          Any question or remarks? Just write us a message!
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-lg max-w-5xl w-full mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Form Column */}
          <div className="lg:w-[55%] p-6 md:p-8 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
              Get in <span className="text-orange-500">Touch</span>
            </h2>
            <p className="text-gray-600 mb-8 text-sm">
              We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Reach out to us using the form below or through our contact details.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone number *"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>

              <div>
                <select
                  name="howDidYouFindUs"
                  value={formData.howDidYouFindUs}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  <option value="">Select an option</option>
                  <option value="search_engine">Search Engine</option>
                  <option value="social_media">Social Media</option>
                  <option value="referral">Referral</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex justify-start pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-8 py-3 rounded-lg border border-transparent text-lg font-medium shadow-sm text-white bg-blue-800 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  SEND
                  <Send className="ml-2 -mr-1 w-5 h-5" />
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-12 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center text-gray-700">
                <Phone className="w-6 h-6 mr-3 text-gray-900" />
                <div className="flex flex-col text-sm">
                  <span className="font-semibold uppercase">PHONE</span>
                  <span className="text-gray-500">03 5432 1234</span>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Printer className="w-6 h-6 mr-3 text-gray-900" />
                <div className="flex flex-col text-sm">
                  <span className="font-semibold uppercase">FAX</span>
                  <span className="text-gray-500">03 5432 1234</span>
                </div>
              </div>
              <div className="flex items-center text-gray-700">
                <Mail className="w-6 h-6 mr-3 text-gray-900" />
                <div className="flex flex-col text-sm">
                  <span className="font-semibold uppercase">EMAIL</span>
                  <span className="text-gray-500">info@marcc.com.au</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map Column */}
          <div className="lg:w-[45%] relative flex-shrink-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#121B2F] rounded-tr-3xl rounded-br-3xl z-0"></div>
            <a
              href={googleMapsDirectionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute z-10 w-[70%] h-[80%] top-1/2 -translate-y-1/2 left-[calc(10%)] rounded-lg overflow-hidden cursor-pointer"
            >
              <iframe
                src={googleMapsEmbedSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="flex items-center justify-center mt-16">
        <img src={logo} alt="GEO HOLIDAYS Logo" className="h-16 w-auto" />
      </div>
    </div>
  );
};
