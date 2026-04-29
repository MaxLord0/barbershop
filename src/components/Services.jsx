import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Taglio Uomo",
      price: "€25",
      desc: "Taglio personalizzato con consulenza e styling finale.",
    },
    {
      title: "Fade / Sfumatura",
      price: "€28",
      desc: "Sfumatura precisa con finitura professionale.",
    },
    {
      title: "Barba Premium",
      price: "€18",
      desc: "Modellatura barba con panno caldo e prodotti specifici.",
    },
    {
      title: "Taglio + Barba",
      price: "€40",
      desc: "Servizio completo per un look curato e definito.",
    },
    {
      title: "Grooming Deluxe",
      price: "€55",
      desc: "Taglio, barba, trattamento viso rapido e styling.",
    },
    {
      title: "Styling Evento",
      price: "€30",
      desc: "Preparazione capelli e barba per eventi o occasioni speciali.",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="servizi" className="py-32 bg-grunge-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-shaver-gold uppercase mb-4 font-sans">
            What We Do
          </h2>
          <h3 className="text-5xl md:text-6xl font-heading font-bold text-shaver-white uppercase text-shadow-shaver">
            Our Services
          </h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12"
        >
          {services.map((service, index) => (
            <motion.div 
              variants={itemVariants}
              key={index} 
              className="group"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-2xl font-heading font-bold text-shaver-white uppercase tracking-widest group-hover:text-shaver-gold transition-colors">
                  {service.title}
                </h4>
                <div className="flex-grow mx-4 border-b-2 border-dotted border-shaver-gray"></div>
                <span className="text-3xl font-heading font-bold text-shaver-gold">{service.price}</span>
              </div>
              <p className="text-shaver-lightgray font-sans text-sm italic pr-16">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-20">
          <a 
            href="#prezzi"
            className="btn-shaver"
          >
            View Full Price List
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
