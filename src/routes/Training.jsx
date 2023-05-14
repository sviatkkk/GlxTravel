import React from 'react';
import HeroImg from '../components/HeroImg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TrainingSection from '../components/Training';

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImg heading="TRAINING" text="Pre-flight & In-Flight Training" />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;
