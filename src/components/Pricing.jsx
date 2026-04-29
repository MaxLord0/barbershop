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
    <section id="prezzi" className="py-32 bg-grunge-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-shaver-gold uppercase mb-4 font-sans">
            Pricing
          </h2>
          <h3 className="text-5xl md:text-6xl font-heading font-bold text-shaver-black uppercase">
            Our Prices
          </h3>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-transparent"
        >
          <ul className="space-y-6">
            {prices.map((item, index) => (
              <li key={index} className="flex items-end justify-between group cursor-default">
                <span className="text-2xl font-heading text-shaver-black uppercase tracking-widest group-hover:text-shaver-gold transition-colors">{item.name}</span>
                <div className="flex-1 mx-6 border-b-2 border-dotted border-shaver-gray mb-2"></div>
                <span className="text-3xl font-bold font-heading text-shaver-gold">{item.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
