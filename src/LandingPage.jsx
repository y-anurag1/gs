import React, { useRef, useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ImageSection } from './components/ImageSection';
import { StatsSection } from './components/StatsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
// Removed: import { PackagesSection } from './components/PackagesSection';
import { FAQSection } from './components/FAQSection';
import { ContactUsSection } from './components/ContactUsSection';
import { TeamSection } from './components/TeamSection';
// Removed: import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { CTASection } from './components/CTASection';
import { TestimonialsSection } from './components/TestimonialsSection'; // NEW: Import TestimonialsSection

export const LandingPage = () => {
  const [activeSection, setActiveSection] = useState('hero-section');

  const sectionIds = [
    'hero-section',
    'stats-section',
    'services-section',
    'why-choose-us-section',
    'testimonials-section', // NEW: Add Testimonials section ID
    'faq-section',
    'team-section',
    'cta-section',
    'contact-us-section',
    'footer-section',
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.unobserve(el);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen relative bg-white text-gray-800">
      <Navbar currentActiveSection={activeSection} />

      <section id="hero-section" className="container mx-auto px-4 py-8 md:py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
          <HeroSection />
          <ImageSection />
        </div>
      </section>

      <section id="stats-section">
        <StatsSection />
      </section>

      <section id="services-section">
        <ServicesSection />
      </section>

      <section id="why-choose-us-section">
        <WhyChooseUsSection />
      </section>

      {/* NEW: Place TestimonialsSection here */}
      <section id="testimonials-section">
        <TestimonialsSection />
      </section>

      <section id="faq-section">
        <FAQSection />
      </section>

      <section id="team-section">
        <TeamSection />
      </section>

      <section id="cta-section">
        <CTASection />
      </section>

      <section id="contact-us-section">
        <ContactUsSection />
      </section>

      <section id="footer-section">
        <Footer />
      </section>
    </div>
  );
};