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
    <div className="font-sans text-shaver-white bg-shaver-black min-h-screen selection:bg-shaver-gold selection:text-shaver-black">
      <Navbar />
      <main>
        <Hero />
        <TornPaper position="bottom" theme="light" />
        <About />
        <TornPaper position="bottom" theme="dark" />
        <Services />
        <TornPaper position="bottom" theme="dark" />
        <CTA />
        <Gallery />
        <TornPaper position="bottom" theme="light" />
        <Pricing />
        <TornPaper position="bottom" theme="dark" />
        <WhyChooseUs />
        <TornPaper position="bottom" theme="light" />
        <Testimonials />
        <TornPaper position="bottom" theme="dark" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
