import React, { useRef, useState } from 'react';
import logo from '../assets/logo.png';

export const Navbar = ({ currentActiveSection, navigateTo }) => { // Receive navigateTo prop
  const navbarRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Modified handleScroll to work with page navigation
  const handleScroll = (id) => {
    // If the ID is 'contact-us-section', navigate to the contact page
    if (id === 'contact-us-section') {
      navigateTo('contact');
    } else {
      // Otherwise, ensure we are on the home page and then scroll to the section
      navigateTo('home');
      // A small delay ensures the home page renders before attempting to scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0;
        if (id === 'hero-section') {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else if (element) {
          const offsetTop = element.offsetTop - navbarHeight;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        } else {
          console.warn(`Could not find element with ID: ${id}.`);
        }
      }, 100); // Short delay
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  const navLinks = [
    { name: 'Home', id: 'hero-section' },
    { name: 'About', id: 'about-section' },
    { name: 'Services', id: 'services-section' },
    { name: 'Our Team', id: 'team-section' },
  ];

  return (
    <nav ref={navbarRef} className="sticky top-0 z-50 w-full bg-white shadow-sm py-0"> {/* Reduced padding to py-0 */}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 lg:px-24">
        {/* Logo - clicking logo should go to home page (hero section) */}
        <div className="flex items-center mb-4 md:mb-0 flex-shrink-0 cursor-pointer" onClick={() => handleScroll('hero-section')}>
          <img
            src={logo}
            alt="GEO HOLIDAYS Logo"
            className="h-28" // Logo size remains h-28
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleScroll(link.id)}
              isActive={currentActiveSection === link.id}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Contact Us Button (Desktop) - Now triggers page navigation */}
        <div className="hidden md:flex flex-shrink-0">
          <button
            onClick={() => navigateTo('contact')} // Directly call navigateTo for the contact page
            className="px-8 py-2 rounded-lg bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-2 shadow-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleScroll(link.id)}
              isActive={currentActiveSection === link.id}
              className="block px-4 py-2"
            >
              {link.name}
            </NavLink>
          ))}
          {/* Mobile Contact Us Button - Now triggers page navigation */}
          <div className="px-4 py-2">
            <button
              onClick={() => navigateTo('contact')} // Directly call navigateTo for the contact page
              className="w-full px-8 py-2 rounded-lg bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Helper component for navigation links
const NavLink = ({ href, children, onClick, isActive, className = "" }) => (
  <a
    href={href}
    onClick={(e) => { e.preventDefault(); onClick(); }}
    className={`relative text-base text-gray-800 font-medium transform transition-all duration-200 group
      ${isActive ? 'text-blue-600' : 'hover:text-blue-600'}
      ${className}
    `}
  >
    {children}
    <span
      className={`absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform transition-transform duration-300 origin-left
        ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
      `}
    ></span>
  </a>
);