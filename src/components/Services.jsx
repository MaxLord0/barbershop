import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Zap, Droplet, Star, Crown, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Taglio Uomo",
      price: "€25",
      desc: "Taglio personalizzato con consulenza e styling finale.",
      duration: "30 min",
      icon: <Scissors className="text-gold mb-4 mx-auto" size={32} />
    },
    {
      title: "Fade / Sfumatura",
      price: "€28",
      desc: "Sfumatura precisa con finitura professionale.",
      duration: "35 min",
      icon: <Zap className="text-gold mb-4 mx-auto" size={32} />
    },
    {
      title: "Barba Premium",
      price: "€18",
      desc: "Modellatura barba con panno caldo e prodotti specifici.",
      duration: "25 min",
      icon: <Droplet className="text-gold mb-4 mx-auto" size={32} />
    },
    {
      title: "Taglio + Barba",
      price: "€40",
      desc: "Servizio completo per un look curato e definito.",
      duration: "60 min",
      icon: <Star className="text-gold mb-4 mx-auto" size={32} />
    },
    {
      title: "Grooming Deluxe",
      price: "€55",
      desc: "Taglio, barba, trattamento viso rapido e styling.",
      duration: "75 min",
      icon: <Crown className="text-gold mb-4 mx-auto" size={32} />
    },
    {
      title: "Styling Evento",
      price: "€30",
      desc: "Preparazione capelli e barba per eventi o occasioni speciali.",
      duration: "40 min",
      icon: <Sparkles className="text-gold mb-4 mx-auto" size={32} />
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
    <section id="servizi" className="py-24 bg-paper-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gold/30 -z-10"></div>
          <span className="bg-vintage-100 px-6 inline-block">
            <h2 className="text-3xl font-heading text-vintage-900 uppercase">
              Servizi & Prezzi
            </h2>
          </span>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              variants={itemVariants}
              key={index} 
              className="bg-vintage-900 bg-wood-pattern bg-blend-multiply p-8 border-2 border-gold/30 hover:border-gold transition-all duration-300 text-center shadow-lg group relative overflow-hidden"
            >
              <div className="absolute inset-2 border border-dashed border-gold/20 pointer-events-none"></div>
              {service.icon}
              <h4 className="text-xl font-heading font-bold text-vintage-100 mb-2 uppercase tracking-wide">
                {service.title}
              </h4>
              <div className="w-12 h-px bg-gold mx-auto mb-4"></div>
              <p className="text-vintage-200 font-sans text-sm mb-6 min-h-[40px] italic">
                {service.desc}
              </p>
              <div className="flex justify-center items-center space-x-4">
                <span className="text-xl font-bold font-heading text-gold">{service.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
