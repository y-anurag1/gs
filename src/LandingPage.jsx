import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ImageSection } from './components/ImageSection';
import { StatsSection } from './components/StatsSection'; // Correct: named import
import { ServicesSection } from './components/ServicesSection';

export const LandingPage = () => {
  return (
    <div className="relative bg-white text-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-16">
          <HeroSection />
          <ImageSection />
        </div>
      </div>
      <StatsSection />
      <ServicesSection />
    </div>
  );
};