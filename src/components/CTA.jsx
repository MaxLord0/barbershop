import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative py-32 bg-wood-dark overflow-hidden border-t-8 border-b-8 border-black/40">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-vintage-100 mb-6 uppercase tracking-widest text-shadow-vintage">
            Pronto per un vero taglio?
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          <p className="text-xl text-vintage-100/90 mb-12 font-subheading italic max-w-2xl mx-auto leading-relaxed">
            Un'esperienza classica, per gentiluomini moderni. Prenota il tuo appuntamento e affidati ai nostri barbieri esperti.
          </p>
          
          <a 
            href="https://wa.me/393339876543"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-light text-vintage-900 px-12 py-5 font-bold text-sm uppercase tracking-widest transition-colors border-2 border-gold shadow-xl"
          >
            Prenota su WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
