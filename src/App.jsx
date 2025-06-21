import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './LandingPage'; // CORRECTED: Import LandingPage directly from src/
import { ContactPage } from './components/ContactPage';   // This one is still in src/components/

function App() {
  const [currentActiveSection, setCurrentActiveSection] = useState('hero-section');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'contact'

  // Ref to hold all section elements for IntersectionObserver
  const sectionRefs = useRef({});

  // Function to dynamically set refs for sections within LandingPage
  const setSectionRef = (id) => (element) => {
    sectionRefs.current[id] = element;
  };

  // Effect to observe sections for active section highlighting in Navbar (only on home page)
  useEffect(() => {
    // Only set up observer if we are on the 'home' page
    if (currentPage !== 'home') {
      // Disconnect any existing observer if we switch away from home
      if (sectionRefs.current.observer) {
        sectionRefs.current.observer.disconnect();
      }
      return;
    }

    const observerOptions = {
      root: null, // relative to the viewport
      rootMargin: '-50% 0px -50% 0px', // detects when the middle of the section is in the viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Store the observer instance for cleanup
    sectionRefs.current.observer = observer;

    // Observe all registered sections
    // Use Object.values to get array of elements from the ref object
    Object.values(sectionRefs.current).forEach((el) => {
      if (el instanceof Element) { // Ensure it's a DOM element before observing
        observer.observe(el);
      }
    });

    // Cleanup function
    return () => {
      if (sectionRefs.current.observer) {
        sectionRefs.current.observer.disconnect();
      }
    };
  }, [currentPage]); // Rerun this effect when the current page changes

  // Function to navigate between 'home' and 'contact' pages
  const navigateTo = (page) => {
    setCurrentPage(page);
    // If navigating back to home, scroll to the top of the window
    if (page === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentActiveSection('hero-section'); // Reset active section to hero when returning home
    }
  };

  return (
    <div className="App">
      {/* Navbar is always visible, it receives `navigateTo` to switch pages */}
      <Navbar currentActiveSection={currentActiveSection} navigateTo={navigateTo} />

      {/* Conditionally render LandingPage (home content) or ContactPage */}
      {currentPage === 'home' ? (
        <LandingPage setSectionRef={setSectionRef} /> // Pass setSectionRef to LandingPage
      ) : (
        <ContactPage />
      )}
    </div>
  );
}

export default App;