import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CTA from './components/CTA';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TornPaper from './components/TornPaper';

function App() {
  return (
    <div className="font-sans text-vintage-100 bg-wood-dark min-h-screen selection:bg-gold selection:text-vintage-900">
      <Navbar />
      <main>
        <Hero />
        <TornPaper position="bottom" color="bg-vintage-100" />
        <About />
        <Services />
        <TornPaper position="top" color="bg-vintage-100" />
        <CTA />
        <Gallery />
        <Pricing />
        <TornPaper position="bottom" color="bg-vintage-100" />
        <WhyChooseUs />
        <TornPaper position="top" color="bg-vintage-100" />
        <Testimonials />
        <TornPaper position="bottom" color="bg-vintage-100" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
