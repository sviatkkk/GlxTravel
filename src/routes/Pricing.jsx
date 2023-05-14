import React from 'react';
import Footer from '../components/Footer';
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';
import PricingCards from '../components/Pricing';

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="PRICING" text="Choose your trip" />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;
