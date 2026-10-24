/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ShowreelSection } from './components/ShowreelSection';
import { PortfolioSection } from './components/PortfolioSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  const scrollToContact = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToShowreel = () => {
    const showreelElem = document.getElementById('showreel');
    if (showreelElem) {
      showreelElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#171717] font-sans selection:bg-[#C49A55]/20 selection:text-[#171717]">
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: '2KMotion',
            description:
              'Photography, Cinematography, Video Editing, and Creative Media Production in Tamil Nadu, India.',
            telephone: '+917845005919',
            email: 'twokmotion@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressRegion: 'Tamil Nadu',
              addressCountry: 'IN'
            },
            sameAs: [
              'https://instagram.com/twokmotion',
              'https://www.youtube.com/channel/UCLRtSDneQPxy-Hcz_0bDaFw'
            ],
            priceRange: '₹₹'
          })
        }}
      />

      {/* 3-Zone Navigation Header */}
      <Header onOpenBooking={() => scrollToContact()} />

      <main>
        {/* Cinematic Hero */}
        <Hero
          onExploreWork={scrollToPortfolio}
          onBookShoot={() => scrollToContact()}
          onPlayShowreel={scrollToShowreel}
        />

        {/* 7 Core Services */}
        <ServicesSection onSelectService={(title) => scrollToContact(title)} />

        {/* Filterable Portfolio & Lightbox */}
        <PortfolioSection onSelectForBooking={(title) => scrollToContact(title)} />

        {/* Cinematic Showreel Player */}
        <ShowreelSection onBookShoot={() => scrollToContact()} />

        {/* About 2KMotion */}
        <AboutSection onBookShoot={() => scrollToContact()} />

        {/* 4-Step Creative Process */}
        <ProcessSection />

        {/* Why Choose 2KMotion */}
        <WhyChooseSection />

        {/* Contact & Booking Section */}
        <ContactSection preselectedService={preselectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
