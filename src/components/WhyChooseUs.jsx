import React from 'react';
import { Target, Lock, Beaker, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Precisione nei dettagli",
      desc: "Ogni sfumatura e linea è curata con la massima attenzione per un risultato impeccabile.",
      icon: <Target className="text-gold mb-6" size={40} />
    },
    {
      title: "Ambiente riservato",
      desc: "Un'atmosfera elegante dove rilassarsi e godersi il proprio momento di cura personale.",
      icon: <Lock className="text-gold mb-6" size={40} />
    },
    {
      title: "Prodotti professionali",
      desc: "Utilizziamo solo i migliori marchi di grooming maschile per proteggere pelle e capelli.",
      icon: <Beaker className="text-gold mb-6" size={40} />
    },
    {
      title: "Prenotazione veloce",
      desc: "Sistema flessibile tramite WhatsApp per organizzare il tuo appuntamento in pochi secondi.",
      icon: <Clock className="text-gold mb-6" size={40} />
    }
  ];

  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gold uppercase mb-4">Vantaggi</h2>
          <h3 className="text-4xl font-heading font-bold text-white">
            Perché scegliere Vanto
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center p-6 group">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-charcoal-light border border-charcoal-light group-hover:border-gold/30 transition-all duration-300 mb-6">
                {reason.icon}
              </div>
              <h4 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-gold transition-colors">
                {reason.title}
              </h4>
              <p className="text-offwhite/70 font-light text-sm leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
