import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative py-32 bg-shaver-black overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-luminosity grayscale"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      ></div>
      <div className="absolute inset-0 bg-noise-pattern opacity-30 mix-blend-overlay z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-shaver-white mb-6 uppercase tracking-widest text-shadow-shaver">
            Ready for a real cut?
          </h2>
          <div className="w-24 h-1 bg-shaver-gold mx-auto mb-8"></div>
          <p className="text-xl text-shaver-lightgray mb-12 font-subheading italic max-w-2xl mx-auto leading-relaxed">
            A classic experience, for modern gentlemen. Book your appointment and trust our expert barbers.
          </p>
          
          <a 
            href="https://wa.me/393339876543"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shaver"
          >
            Book via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
