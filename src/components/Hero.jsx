import React from 'react';
import { motion } from 'framer-motion';
import { Scissors } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-32 lg:pt-56 lg:pb-48 flex items-center justify-center bg-shaver-black">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-40 mix-blend-luminosity"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-shaver-black z-0"></div>
      <div className="absolute inset-0 bg-noise-pattern opacity-30 mix-blend-overlay z-0 pointer-events-none"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="flex justify-center items-center mb-6 text-shaver-gold opacity-80">
            <div className="w-16 h-px bg-shaver-gold/50"></div>
            <Scissors className="mx-4" size={24} strokeWidth={1} />
            <div className="w-16 h-px bg-shaver-gold/50"></div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[100px] font-heading font-bold text-shaver-white mb-6 leading-[1.1] uppercase tracking-widest text-shadow-shaver">
            Barber <span className="text-shaver-gold">&</span> Salon
          </h1>
          
          <p className="font-subheading text-xl md:text-2xl text-shaver-lightgray italic mb-12 max-w-2xl mx-auto">
            Traditional grooming and shaving for the modern gentleman. Est. 2021.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="https://wa.me/393339876543"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto btn-shaver bg-shaver-gold text-shaver-black hover:bg-transparent hover:text-shaver-gold"
          >
            Book Appointment
          </a>
          <a 
            href="#servizi"
            className="w-full sm:w-auto btn-shaver"
          >
            Our Services
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
