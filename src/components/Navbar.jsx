import React, { useRef } from 'react';
import logo from '../assets/logo.png';

export const Navbar = () => {
  const navbarRef = useRef(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element && navbarRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight;
      const offsetTop = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav ref={navbarRef} className="sticky top-0 z-50 w-full bg-white shadow-sm py-4 md:py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0 md:mr-8">
          <img
            src={logo}
            alt="GEO HOLIDAYS Logo"
            className="h-14"
          />
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex flex-grow justify-center space-x-8 lg:space-x-12 mb-4 md:mb-0">
          <NavLink href="#home-section" onClick={() => handleScroll('home-section')}>Home</NavLink>
          <NavLink href="#about-section" onClick={() => handleScroll('about-section')}>About</NavLink>
          <NavLink href="#services-section" onClick={() => handleScroll('services-section')}>Services</NavLink>
          <NavLink href="#why-choose-us-section" onClick={() => handleScroll('why-choose-us-section')}>Why Choose Us</NavLink>
          <NavLink href="#packages-section" onClick={() => handleScroll('packages-section')}>Packages</NavLink>
          <NavLink href="#guests-section" onClick={() => handleScroll('guests-section')}>Guests</NavLink>
          <NavLink href="#contact-section" onClick={() => handleScroll('contact-section')}>Contact</NavLink>
        </div>

        {/* Book Now Button */}
        <div className="flex">
          <button className="px-8 py-2 rounded-lg bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200">
            Book Now
          </button>
        </div>
      </div>
      {/* Mobile Navigation - A simple example, would typically use a responsive menu icon */}
      <div className="md:hidden flex flex-col items-center mt-4 space-y-2">
        <NavLink href="#home-section" onClick={() => handleScroll('home-section')}>Home</NavLink>
        <NavLink href="#about-section" onClick={() => handleScroll('about-section')}>About</NavLink>
        <NavLink href="#services-section" onClick={() => handleScroll('services-section')}>Services</NavLink>
        <NavLink href="#why-choose-us-section" onClick={() => handleScroll('why-choose-us-section')}>Why Choose Us</NavLink>
        <NavLink href="#packages-section" onClick={() => handleScroll('packages-section')}>Packages</NavLink>
        <NavLink href="#guests-section" onClick={() => handleScroll('guests-section')}>Guests</NavLink>
        <NavLink href="#contact-section" onClick={() => handleScroll('contact-section')}>Contact</NavLink>
      </div>
    </nav>
  );
};

// Helper component for navigation links
const NavLink = ({ href, children, onClick }) => (
  // Added relative for pseudo-element positioning
  // Added group for targeting pseudo-element on hover
  // Added transition-transform, duration-200, hover:scale-105 for pop effect
  // Adjusted text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200
  <a
    href={href}
    onClick={(e) => { e.preventDefault(); onClick(); }}
    className="relative text-gray-700 hover:text-blue-600 font-medium transform transition-all duration-200 hover:scale-105 group" // 'transition-all' covers color change, scale, and pseudo-element
  >
    {children}
    {/* Underline pseudo-element */}
    <span
      className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
    ></span>
  </a>
);