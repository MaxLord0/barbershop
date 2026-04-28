import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 bg-paper-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gold translate-x-3 translate-y-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Barber at work" 
              className="relative z-10 w-full h-auto object-cover border-4 border-vintage-900 sepia-[.3]"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-vintage-800 uppercase mb-4 font-sans">
              Est. 2021
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-vintage-900 mb-8 uppercase leading-tight">
              Making you look good is in our heritage.
            </h3>
            <div className="w-16 h-1 bg-gold mb-8 mx-auto lg:mx-0"></div>
            <p className="text-vintage-800 text-lg font-subheading italic leading-relaxed mb-8">
              "Vanto Barber Studio nasce per offrire un’esperienza di grooming maschile curata in ogni dettaglio. Dalla consulenza iniziale al taglio finale, ogni servizio è pensato per valorizzare lo stile personale del cliente con precisione, eleganza e professionalità."
            </p>
            <p className="text-vintage-800 font-sans text-sm uppercase tracking-widest font-bold">
              — Il Team di Vanto
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
