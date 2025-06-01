
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EpisodesSection from '../components/EpisodesSection';
import GuestsSection from '../components/GuestsSection';
import SponsorsSection from '../components/SponsorsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <HeroSection />
      <AboutSection />
      <EpisodesSection />
      <GuestsSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
