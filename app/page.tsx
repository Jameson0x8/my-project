import React from 'react';
import type { Metadata } from 'next';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: 'Communa - Invest in Digital Assets',
  description: 'Communa lets you buy and sell shares of unique digital assets. Diversify your portfolio, support creators, and profit from the digital economy.',
};

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Communa World</h1>
        <p>This is the landing page for communa.world</p>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
