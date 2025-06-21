import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { LandingPage } from './LandingPage';
import { ContactPage } from './components/ContactPage';

function App() {
  const [currentActiveSection, setCurrentActiveSection] = useState('hero-section');
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'contact'

  // Ref to hold all section elements for IntersectionObserver
  const sectionRefs = useRef({});

  // Function to dynamically set refs for sections within LandingPage
  const setSectionRef = useCallback((id) => (element) => {
    if (element) {
      sectionRefs.current[id] = element;
      // console.log(`Registered ref for: ${id}`, element); // For debugging
    } else {
      delete sectionRefs.current[id]; // Clean up ref when component unmounts
      // console.log(`Unregistered ref for: ${id}`); // For debugging
    }
  }, []);

  // Effect to observe sections for active section highlighting in Navbar (only on home page)
  useEffect(() => {
    if (currentPage !== 'home') {
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

    sectionRefs.current.observer = observer;

    // Observe all registered sections
    Object.values(sectionRefs.current).forEach((el) => {
      if (el instanceof Element) {
        observer.observe(el);
      }
    });

    return () => {
      if (sectionRefs.current.observer) {
        sectionRefs.current.observer.disconnect();
      }
    };
  }, [currentPage]);

  // Function to navigate between 'home' and 'contact' pages OR to specific sections on 'home'
  const navigateTo = useCallback((targetId) => {
    if (targetId === 'contact') { // If navigating to the dedicated ContactPage
      setCurrentPage('contact');
    } else { // If navigating to a section on the home page
      setCurrentPage('home'); // Ensure we are on the home page before attempting to scroll

      // Add a small delay to ensure the DOM has rendered and refs are available
      setTimeout(() => {
        const element = sectionRefs.current[targetId];
        const navbar = document.querySelector('nav');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        if (targetId === 'hero-section') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (element) {
            const offsetTop = element.offsetTop - navbarHeight;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        } else {
            console.warn(`Could not find element with ID: ${targetId}.`);
        }
        setCurrentActiveSection(targetId); // Update active section for Navbar
      }, 50); // A small delay (e.g., 50ms)
    }
  }, []); // No dependencies that cause issues

  return (
    <div className="App">
      <Navbar currentActiveSection={currentActiveSection} navigateTo={navigateTo} />
      {currentPage === 'home' ? (
        <LandingPage setSectionRef={setSectionRef} navigateTo={navigateTo} />
      ) : (
        <ContactPage />
      )}
    </div>
  );
}

export default App;