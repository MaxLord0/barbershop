import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-32 bg-grunge-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-shaver-gold translate-x-4 translate-y-4 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Barber at work" 
              className="relative z-10 w-full h-auto object-cover grayscale contrast-125 border-8 border-white shadow-2xl"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-shaver-gold uppercase mb-4 font-sans">
              Since 2021
            </h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-shaver-black mb-8 uppercase leading-tight">
              Making you look good is in our heritage.
            </h3>
            <div className="w-16 h-1 bg-shaver-black mb-8"></div>
            <p className="text-shaver-gray text-lg font-subheading italic leading-relaxed mb-8">
              "Vanto Barber Studio nasce per offrire un’esperienza di grooming maschile curata in ogni dettaglio. Dalla consulenza iniziale al taglio finale, ogni servizio è pensato per valorizzare lo stile personale del cliente con precisione, eleganza e professionalità."
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Signature_of_John_Hancock.svg/1024px-Signature_of_John_Hancock.svg.png" className="w-32 opacity-60 mb-2" alt="Signature" />
            <p className="text-shaver-black font-heading text-sm uppercase tracking-widest font-bold">
              Il Team di Vanto
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
