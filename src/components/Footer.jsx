import React from 'react';
// Import Lucide React icons for the footer content
import { Instagram, Facebook } from 'lucide-react';
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

  const webseederLink = "https://www.webseeder.in/"; // Re-added the link for the clickable text

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
        {/* Main Footer Content Grid - Adjusted for 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_0.8fr_0.8fr] gap-4 md:gap-8 mb-10">

          {/* Column 1: Logo & Social Media */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <img src={logo} alt="GEO HOLIDAYS Logo" className="h-20 mb-4" />
            <p className="text-sm text-gray-600 mt-2 max-w-[200px] mx-auto sm:mx-0">Your journey, our expertise.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Column 3: Quick Links - Now visually the second column */}
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

          {/* Column 4: Other Links - Now visually the third column */}
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
        {/* Adjusted flex direction and text alignment for the bottom bar */}
        <div className="border-t border-gray-200 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          {/* Combined copyright and "Designed & Developed by" text */}
          <p className="text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GeoHolidays. All Rights Reserved.
            <br /> {/* Explicit line break added here */}
            <span className="text-gray-600">Designed & Developed by{' '}</span>
            <a
              href={webseederLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:underline"
            >
              WebSeeder Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};