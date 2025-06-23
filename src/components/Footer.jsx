import React from 'react';
// Import Lucide React icons for the footer content
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react'; // Removed MessageCircle as we're using a custom SVG
import logo from '../assets/logo.png'; // Import your main logo

export const Footer = () => {
  // Define navigation links for Quick Links section, filtered as requested
  const quickLinks = [
    { name: 'Home', id: 'hero-section' },
    { name: 'About', id: 'about-section' },
    { name: 'Services', id: 'services-section' },
    { name: 'Our Team', id: 'team-section' },
  ];

  // Helper function for smooth scrolling to sections within the same page
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      const offsetTop = element.getBoundingClientRect().top + scrollPosition;
      window.scrollTo({
        top: offsetTop - 80, // Adjust 80px offset if you have a sticky header of that height
        behavior: 'smooth'
      });
    } else {
      console.warn(`Could not find element with ID: ${id}.`);
    }
  };

  const webseederLink = "https://www.webseeder.in/";

  // Helper component for footer links with blue hover underline
  const FooterLink = ({ href, children, onClick }) => (
    <a
      href={href}
      onClick={onClick}
      className="relative text-xs text-gray-600 hover:text-blue-600 transition-colors duration-200 group flex items-center justify-center sm:justify-start"
    >
      {children}
      <span
        className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
      ></span>
    </a>
  );

  return (
    <footer className="bg-white py-12 md:py-16 text-gray-700">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content Grid - Adjusted for 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_0.8fr_0.8fr] gap-4 md:gap-8 mb-10">

          {/* Column 1: Logo & Social Media */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <img src={logo} alt="GEO HOLIDAYS Logo" className="h-28 mb-4" /> {/* Increased logo size to h-28 */}
            <p className="text-sm text-gray-600 mt-2 max-w-[200px] mx-auto sm:mx-0">Your journey, our expertise.</p>
            <div className="flex space-x-4 mt-4">
              {/* Instagram Icon with updated link */}
              <a href="https://www.instagram.com/geoholidays_?igsh=MTE1MXluNzV3aHF6Zw==" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              {/* Facebook Icon with updated link */}
              <a href="https://www.facebook.com/share/1AB33Ktwmi/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              {/* WhatsApp Icon - Replaced with Bootstrap SVG */}
              <a href="https://wa.me/917880170012" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 transition-colors duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
              </a>
            </div>
          </div>

          {/* NEW Column 2: Contact Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 mb-3 text-base relative inline-block group">Contact Us
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h3>
            <div className="space-y-2">
              <p className="flex items-center text-xs text-gray-600">
                <Phone className="w-3.5 h-3.5 text-blue-600 mr-2 flex-shrink-0" /> +91 78801 70012
              </p>
              <p className="flex items-center text-xs text-gray-600">
                <Mail className="w-3.5 h-3.5 text-blue-600 mr-2 flex-shrink-0" /> info@geoholidays.in
              </p>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 mb-3 text-base relative inline-block group">Quick Links
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <FooterLink
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); handleScroll(link.id); }}
                  >
                    {link.name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Other Links */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold text-gray-900 mb-3 text-base relative inline-block group">Other Links
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </h3>
            <ul className="space-y-2">
              <li><FooterLink href="#">Privacy Policy</FooterLink></li>
              <li><FooterLink href="#">Terms & Conditions</FooterLink></li>
              <li><FooterLink href="#">Refund Policy</FooterLink></li>
              <li><FooterLink href="#">Careers</FooterLink></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar for Copyright and "Designed by Webseeder" */}
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          {/* Copyright - Aligned left */}
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GeoHolidays. All Rights Reserved.
          </p>

          {/* Designed & Developed by WebSeeder Technologies - Aligned right */}
          <div className="text-center md:text-right">
            <span className="text-gray-600">Designed & Developed by{' '}</span>
            <a
              href={webseederLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:underline"
            >
              WebSeeder Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
