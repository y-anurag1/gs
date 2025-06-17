import React from 'react';
// Import Lucide React icons for the footer content
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
// Assuming you have your logo accessible for the footer if needed, otherwise it's just text
// import logo from '../assets/logo.png'; // Uncomment if you want to use the logo here

export const Footer = () => {
  return (
    // Changed bg-gray-100 to bg-blue-50 to match Contact Us section
    <footer className="bg-blue-50 py-12 md:py-16 text-gray-700">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 md:gap-12 mb-10">
          {/* Column 1: Placeholder/Logo Area (if needed) */}
          <div className="flex flex-col items-start">
            {/* If you want to put your logo here, uncomment and use it */}
            {/* <img src={logo} alt="GEO HOLIDAYS Logo" className="h-10 mb-4" /> */}
            <p className="text-gray-800 text-lg font-bold">GeoHolidays</p>
            <p className="text-sm text-gray-600 mt-2">Your journey, our expertise.</p>
          </div>

          {/* Column 2: Address */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" /> Address
            </h3>
            <address className="not-italic text-sm leading-relaxed text-gray-600">
              Office No 34, Maple High Street, <br />
              Narmadapuram Rd, in front of Aashima Mall, <br />
              Danish Nagar, Bagmugaliya, Bhopal, <br />
              Madhya Pradesh 462042
            </address>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Phone className="w-5 h-5 text-blue-600 mr-2" /> Contact
            </h3>
            <p className="text-sm flex items-center text-gray-600 mb-2">
              <Phone className="w-4 h-4 text-gray-500 mr-2" /> Phone: +91 78801 70012
            </p>
            <p className="text-sm flex items-center text-gray-600">
              <Mail className="w-4 h-4 text-gray-500 mr-2" /> Email: info@geoholidays.in
            </p>
          </div>

          {/* Column 4: Opening Hours */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Clock className="w-5 h-5 text-blue-600 mr-2" /> Opening Hours
            </h3>
            <p className="text-sm text-gray-600">Mon-Sat: 10AM - 6PM</p>
            <p className="text-sm text-gray-600">Sunday: Closed</p>
          </div>

          {/* Column 5: Follow Us */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} GeoHolidays. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};