import React from 'react';
import Navbar from './Components/layouts/Navbar';
import Footer from './Components/layouts/Footer';
import HeroSection from './Components/views/home/HeroSection';
import Features from './Components/views/home/Features';
import Testimonials from './Components/views/home/Testimonials';
import CallToAction from './Components/views/home/CallToAction';
import InfoSection from './Components/views/home/InfoSection';
import MenuSection from './Components/views/home/MenuSection';

function App() {
  return (
    <div
   className="bg-[url('')] bg-cover bg-center bg-fixed font-sans"
    >
      <Navbar />
      <HeroSection />
      <Features />
      <MenuSection />
      <Testimonials />
      <CallToAction />
      <InfoSection />
      <Footer />
    </div>
  );
}

export default App;
