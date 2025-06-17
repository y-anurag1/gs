import React, { useRef, useState } from 'react'; // FIXED: Removed '=>' here
import logo from '../assets/logo.png';

export const Navbar = ({ currentActiveSection }) => {
  const navbarRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const handleScroll = (id) => {
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
    setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
  };

  // Define your navigation links and their corresponding section IDs
  // IMPORTANT: Ensure these IDs match the actual 'id' attributes of your sections in LandingPage.jsx
  const navLinks = [
    { name: 'Home', id: 'hero-section' },
    { name: 'About', id: 'about-section' },
    { name: 'Services', id: 'services-section' },
    { name: 'Why Choose Us', id: 'why-choose-us-section' },
    { name: 'Packages', id: 'packages-section' },
    { name: 'Reviews', id: 'reviews-section' },
    { name: 'FAQs', id: 'faq-section' },
    { name: 'Contact', id: 'contact-us-section' }, // Moved here: after FAQs
    { name: 'Our Team', id: 'team-section' },     // Moved here: last
  ];


  return (
    <nav ref={navbarRef} className="sticky top-0 z-50 w-full bg-white shadow-sm py-4 md:py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={logo}
            alt="GEO HOLIDAYS Logo"
            className="h-14"
          />
        </div>

        {/* Desktop Navigation - Links have more space (space-x-6) */}
        <div className="hidden md:flex flex-grow justify-center space-x-6">
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

        {/* Book Now Button (Desktop) */}
        <div className="hidden md:flex ml-8">
          <button className="px-8 py-2 rounded-lg bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200">
            Book Now
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
          {/* Mobile Book Now Button */}
          <div className="px-4 py-2">
            <button className="w-full px-8 py-2 rounded-lg bg-blue-800 text-white font-semibold shadow-md hover:bg-blue-700 transition-colors duration-200">
              Book Now
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
    className={`relative text-gray-700 font-medium transform transition-all duration-200 group
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