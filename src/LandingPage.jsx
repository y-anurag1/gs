import React, { useRef, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ImageSection } from './components/ImageSection'; // Make sure this is imported
import { StatsSection } from './components/StatsSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { FAQSection } from './components/FAQSection';
import { ContactUsSection } from './components/ContactUsSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { CTASection } from './components/CTASection';
import { TestimonialsSection } from './components/TestimonialsSection';

export const LandingPage = ({ setSectionRef }) => {
  // Define the order of sections, excluding ImageSection from this list
  // as it will be rendered specifically within the HeroSection container.
  const sectionContentOrder = [
    { id: 'hero-section', component: HeroSection }, // HeroSection will contain ImageSection
    { id: 'stats-section', component: StatsSection },
    { id: 'services-section', component: ServicesSection },
    { id: 'why-choose-us-section', component: WhyChooseUsSection },
    { id: 'testimonials-section', component: TestimonialsSection },
    { id: 'faq-section', component: FAQSection },
    { id: 'team-section', component: TeamSection },
    { id: 'cta-section', component: CTASection },
    { id: 'contact-us-section', component: ContactUsSection },
    { id: 'footer-section', component: Footer },
  ];

  return (
    <div className="min-h-screen relative bg-white text-gray-800">
      {sectionContentOrder.map((section) => (
        <React.Fragment key={section.id}>
          {section.id === 'hero-section' ? (
            // Special rendering for hero-section to include ImageSection
            <section
              id="hero-section"
              ref={setSectionRef('hero-section')}
              className="container mx-auto px-4 py-8 md:py-16 lg:px-8"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
                <HeroSection />
                <ImageSection /> {/* Render ImageSection here */}
              </div>
            </section>
          ) : (
            // Render other sections normally
            <section id={section.id} ref={setSectionRef(section.id)}>
              {React.createElement(section.component)}
            </section>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
