import React from 'react';
import { Scissors, Zap, Droplet, Star, Crown, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Taglio Uomo",
      price: "€25",
      desc: "Taglio personalizzato con consulenza e styling finale.",
      duration: "30 min",
      icon: <Scissors className="text-gold mb-4" size={32} />
    },
    {
      title: "Fade / Sfumatura",
      price: "€28",
      desc: "Sfumatura precisa con finitura professionale.",
      duration: "35 min",
      icon: <Zap className="text-gold mb-4" size={32} />
    },
    {
      title: "Barba Premium",
      price: "€18",
      desc: "Modellatura barba con panno caldo e prodotti specifici.",
      duration: "25 min",
      icon: <Droplet className="text-gold mb-4" size={32} />
    },
    {
      title: "Taglio + Barba",
      price: "€40",
      desc: "Servizio completo per un look curato e definito.",
      duration: "60 min",
      icon: <Star className="text-gold mb-4" size={32} />
    },
    {
      title: "Grooming Deluxe",
      price: "€55",
      desc: "Taglio, barba, trattamento viso rapido e styling.",
      duration: "75 min",
      icon: <Crown className="text-gold mb-4" size={32} />
    },
    {
      title: "Styling Evento",
      price: "€30",
      desc: "Preparazione capelli e barba per eventi o occasioni speciali.",
      duration: "40 min",
      icon: <Sparkles className="text-gold mb-4" size={32} />
    }
  ];

  return (
    <section id="servizi" className="py-24 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gold uppercase mb-4">I Nostri Servizi</h2>
          <h3 className="text-4xl font-heading font-bold text-white">
            Eccellenza in ogni dettaglio
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-charcoal p-8 border border-charcoal-light hover:border-gold/50 transition-all duration-300 group"
            >
              {service.icon}
              <div className="flex justify-between items-end mb-4">
                <h4 className="text-xl font-heading font-bold text-white group-hover:text-gold transition-colors">
                  {service.title}
                </h4>
                <span className="text-xl font-bold text-gold">{service.price}</span>
              </div>
              <p className="text-offwhite/70 font-light text-sm mb-6 min-h-[40px]">
                {service.desc}
              </p>
              <div className="text-xs uppercase tracking-wider text-steel font-medium">
                Durata: {service.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
