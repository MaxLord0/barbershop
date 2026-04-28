import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const prices = [
    { name: "Taglio Uomo", price: "€25" },
    { name: "Fade / Sfumatura", price: "€28" },
    { name: "Barba Premium", price: "€18" },
    { name: "Taglio + Barba", price: "€40" },
    { name: "Grooming Deluxe", price: "€55" },
    { name: "Styling Evento", price: "€30" }
  ];

  return (
    <section id="prezzi" className="py-24 bg-wood-dark border-t-8 border-b-8 border-black/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Mustache_icon.svg/1024px-Mustache_icon.svg.png" className="w-12 h-auto mx-auto mb-4 invert opacity-50" alt="Mustache" />
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-vintage-100 uppercase tracking-widest text-shadow-vintage">
            Prezzi
          </h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-vintage-900/90 p-8 md:p-12 border-2 border-gold/40 shadow-2xl relative backdrop-blur-sm"
        >
          <div className="absolute inset-2 border border-dashed border-gold/20 pointer-events-none"></div>
          
          <ul className="space-y-6 relative z-10">
            {prices.map((item, index) => (
              <li key={index} className="flex items-end justify-between group cursor-default">
                <span className="text-xl md:text-2xl font-heading text-vintage-100 uppercase tracking-wide group-hover:text-gold transition-colors">{item.name}</span>
                <div className="flex-1 mx-4 border-b-2 border-dotted border-gold/30 mb-2 group-hover:border-gold/60 transition-colors"></div>
                <span className="text-2xl font-bold font-heading text-gold">{item.price}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 pt-6 border-t border-gold/20 text-center relative z-10">
            <p className="text-vintage-200 text-sm font-subheading italic">
              * I prezzi possono variare in base alla consulenza e al servizio richiesto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
