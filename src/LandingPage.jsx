// src/LandingPage.jsx
import React from 'react';
import { HeroSection } from './components/HeroSection';
import { ImageSection } from './components/ImageSection';
import { StatsSection } from './components/StatsSection';
import { AboutUsSection } from './components/AboutUsSection'; // Import the new AboutUsSection
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { FAQSection } from './components/FAQSection';
import { ContactUsSection } from './components/ContactUsSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { CTASection } from './components/CTASection';
import { TestimonialsSection } from './components/TestimonialsSection';

export const LandingPage = ({ setSectionRef, navigateTo }) => {
  const sectionContentOrder = [
    { id: 'hero-section', component: HeroSection },
    { id: 'stats-section', component: StatsSection },
    { id: 'about-section', component: AboutUsSection }, // Add AboutUsSection here
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
            <section
              id="hero-section"
              ref={setSectionRef('hero-section')}
              className="container mx-auto px-4 py-8 md:py-16 lg:px-8"
            >
              <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
                <HeroSection navigateTo={navigateTo} />
                <ImageSection />
              </div>
            </section>
          ) : (
            // Pass setSectionRef for other sections (like AboutUsSection)
            <section id={section.id} ref={setSectionRef(section.id)}>
              {/* Ensure other sections also receive setSectionRef if they need to register sub-elements */}
              {/* For components like AboutUsSection, StatsSection etc., they are passed directly. */}
              {/* If a component like ContactUsSection or others internally use setSectionRef for its own sub-sections,
                  you might need to pass it down. For now, assuming they don't or it's handled. */}
              {React.createElement(section.component, { navigateTo: navigateTo })}
            </section>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};