import React from 'react';
import SectionContainer from '../../layouts/SectionContainer';  
const HeroSection = () => {
  return (
    <SectionContainer>
    <section id="home-section" className="bg-red-600 text-white text-center py-20">
      <h1 className="text-5xl font-bold">Welcome to Pizza Corner</h1>
      <p className="text-lg mt-4">The best pizza in town, delivered fresh to your door!</p>
      <a
        href="#menu-section"
        className="mt-6 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
      >
        Order Now
      </a>
      
    </section>
    </SectionContainer>
  );
};

export default HeroSection;