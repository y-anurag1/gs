import React, { useRef, useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export const Navbar = ({ currentActiveSection, navigateTo }) => {
  const navbarRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click occurred outside the navbar entirely
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleScroll = (id) => {
    if (id === 'contact-us-section') {
      navigateTo('contact');
    } else {
      navigateTo('home');
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
      }, 100);
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click on a link
  };

  const navLinks = [
    { name: 'Home', id: 'hero-section' },
    { name: 'About', id: 'about-section' },
    { name: 'Services', id: 'services-section' },
    { name: 'Our Team', id: 'team-section' },
  ];

  return (
    <nav ref={navbarRef} className="sticky top-0 z-50 w-full bg-white shadow-sm py-0">
      {/* Main container for the header content (Logo, Desktop Nav, Mobile Toggle) */}
      <div className="flex items-center justify-between px-8 lg:px-24 w-full">

        {/* Mobile Header Section - visible only on mobile */}
        <div className="flex md:hidden w-full items-center justify-between py-2">
          {/* Mobile Logo */}
          <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => handleScroll('hero-section')}>
            <img
              src={logo}
              alt="GEO HOLIDAYS Logo"
              className="h-20" // Reduced logo size for mobile
            />
          </div>
          {/* Mobile Menu Button (Hamburger) */}
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

        {/* Desktop Layout Section - visible only on desktop */}
        <div className="hidden md:flex flex-row items-center justify-between w-full">
          {/* Desktop Logo */}
          <div className="flex items-center flex-shrink-0 cursor-pointer" onClick={() => handleScroll('hero-section')}>
            <img
              src={logo}
              alt="GEO HOLIDAYS Logo"
              className="h-28" // Logo size for desktop
            />
          </div>
          {/* Desktop Navigation Links */}
          <div className="flex-grow flex justify-center space-x-10">
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
          {/* Desktop Contact Us Button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigateTo('contact')}
              className="px-8 py-2 rounded-lg bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu Dropdown - visible only on mobile when open */}
      <div className={`md:hidden bg-white py-2 shadow-inner w-full
        transition-all duration-300 ease-in-out overflow-hidden
        ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
      `}>
        {/* Inner div to apply horizontal padding to the dropdown content */}
        <div className="px-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.id}
              href={`#${link.id}`}
              onClick={() => handleScroll(link.id)}
              isActive={currentActiveSection === link.id}
              className="block py-2 text-lg" // Increased text size to text-lg for mobile links
            >
              {link.name}
            </NavLink>
          ))}
          {/* Mobile Contact Us Button in dropdown */}
          <div className="py-2">
            <button
              onClick={() => navigateTo('contact')}
              className="w-full px-8 py-2 rounded-lg bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Helper component for navigation links
const NavLink = ({ href, children, onClick, isActive, className = "" }) => (
  <a
    href={href}
    onClick={(e) => { e.preventDefault(); onClick(); }}
    className={`relative text-lg text-gray-800 font-medium transform transition-all duration-200 group
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