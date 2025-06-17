import React, { useRef, useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ImageSection } from './components/ImageSection';
import { StatsSection } from './components/StatsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { PackagesSection } from './components/PackagesSection';
import { FAQSection } from './components/FAQSection';
import { ContactUsSection } from './components/ContactUsSection';
import { TeamSection } from './components/TeamSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';

export const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('hero-section'); // Default to home section

  // Define all section IDs that correspond to your Navbar links
  // IMPORTANT: These IDs MUST match the 'id' attributes of your section components
  const sectionIds = [
    'hero-section',
    'stats-section',
    'services-section',
    'why-choose-us-section',
    'packages-section',
    'reviews-section', // Corresponds to 'Guests' or 'Reviews' in Navbar
    'faq-section',
    'contact-us-section',
    'team-section',
    // Add any other sections you have or will have here
  ];

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: '-50% 0px -50% 0px', // When the center of the section crosses the center of the viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe each section by its ID
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    // Clean up observer on component unmount
    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="min-h-screen relative bg-white text-gray-800">
      <Navbar currentActiveSection={activeSection} /> {/* Pass the active section state */}

      {/* Hero Section - Ensure it has an ID */}
      <section id="hero-section" className="container mx-auto px-4 py-8 md:py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
          <HeroSection />
          <ImageSection /> {/* Assuming ImageSection is part of Hero or its sibling */}
        </div>
      </section>

      {/* Other Sections - Ensure each has a unique ID */}
      <section id="stats-section">
        <StatsSection />
      </section>

      <section id="services-section">
        <ServicesSection />
      </section>

      <section id="why-choose-us-section">
        <WhyChooseUsSection />
      </section>

      <section id="packages-section">
        <PackagesSection />
      </section>

      <section id="reviews-section">
        <ReviewsSection />
      </section>


      <section id="faq-section">
        <FAQSection />
      </section>

      <section id="contact-us-section">
        <ContactUsSection />
      </section>

      <section id="team-section">
        <TeamSection />
      </section>

      
      {/* Footer - Give it an ID if you want it to be part of the active section logic */}
      <section id="footer-section">
        <Footer />
      </section>
    </div>
  );
};