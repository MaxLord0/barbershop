import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 flex items-center justify-center bg-wood-dark">
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Mustache_icon.svg/1024px-Mustache_icon.svg.png" className="w-16 h-auto mx-auto mb-4 invert opacity-70" alt="Mustache" />
          <h1 className="text-6xl md:text-8xl font-bold text-vintage-100 mb-2 leading-none text-shadow-vintage uppercase tracking-widest">
            Haircut <span className="text-gold">&</span> Beard
          </h1>
          <p className="font-subheading text-2xl md:text-4xl text-gold italic mb-8 opacity-90">
            Il vero stile non passa mai di moda
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
        >
          <a 
            href="https://wa.me/393339876543"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gold hover:bg-gold-light text-vintage-900 px-8 py-4 font-bold text-sm uppercase tracking-widest transition-colors border-2 border-gold hover:border-gold-light"
          >
            Prenota Ora
          </a>
          <a 
            href="#servizi"
            className="w-full sm:w-auto border-2 border-vintage-100/50 hover:border-gold hover:text-gold text-vintage-100 px-8 py-4 font-bold text-sm uppercase tracking-widest transition-colors"
          >
            I Nostri Servizi
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
