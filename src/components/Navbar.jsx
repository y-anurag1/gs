import React, { useRef } from 'react';
import logo from '../assets/logo.png';

export const Navbar = () => {
  const navbarRef = useRef(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 0; // Get navbar height, default to 0 if ref not ready

    if (id === 'home-section') {
      // For the home section, scroll all the way to the top (0)
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else if (element) {
      // For other sections, scroll with an offset for the sticky navbar
      const offsetTop = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      console.warn(`Could not find element with ID: ${id}.`);
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
          {/* Home link now specifically scrolls to top: 0 */}
          <NavLink href="#home-section" onClick={() => handleScroll('home-section')}>Home</NavLink>
          <NavLink href="#about-section" onClick={() => handleScroll('about-section')}>About</NavLink>
          <NavLink href="#services-section" onClick={() => handleScroll('services-section')}>Services</NavLink>
          <NavLink href="#why-choose-us-section" onClick={() => handleScroll('why-choose-us-section')}>Why Choose Us</NavLink>
          <NavLink href="#packages-section" onClick={() => handleScroll('packages-section')}>Packages</NavLink>
          <NavLink href="#" >Guests</NavLink>
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
        {/* Home link in mobile nav also scrolls to top: 0 */}
        <NavLink href="#home-section" onClick={() => handleScroll('home-section')}>Home</NavLink>
        <NavLink href="#about-section" onClick={() => handleScroll('about-section')}>About</NavLink>
        <NavLink href="#services-section" onClick={() => handleScroll('services-section')}>Services</NavLink>
        <NavLink href="#why-choose-us-section" onClick={() => handleScroll('why-choose-us-section')}>Why Choose Us</NavLink>
        <NavLink href="#packages-section" onClick={() => handleScroll('packages-section')}>Packages</NavLink>
        <NavLink href="#" >Guests</NavLink>
        <NavLink href="#contact-section" onClick={() => handleScroll('contact-section')}>Contact</NavLink>
      </div>
    </nav>
  );
};

// Helper component for navigation links
const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={(e) => { e.preventDefault(); onClick(); }} // Prevent default hash behavior
    className="relative text-gray-700 hover:text-blue-600 font-medium transform transition-all duration-200 hover:scale-105 group"
  >
    {children}
    <span
      className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
    ></span>
  </a>
);