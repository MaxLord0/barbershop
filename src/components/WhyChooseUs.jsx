import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lock, Beaker, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Precisione",
      desc: "Ogni sfumatura e linea è curata con la massima attenzione per un risultato impeccabile.",
      icon: <Target className="text-vintage-900 mb-6 mx-auto" size={40} strokeWidth={1.5} />
    },
    {
      title: "Riservatezza",
      desc: "Un'atmosfera elegante dove rilassarsi e godersi il proprio momento di cura personale.",
      icon: <Lock className="text-vintage-900 mb-6 mx-auto" size={40} strokeWidth={1.5} />
    },
    {
      title: "Qualità",
      desc: "Utilizziamo solo i migliori marchi di grooming maschile per proteggere pelle e capelli.",
      icon: <Beaker className="text-vintage-900 mb-6 mx-auto" size={40} strokeWidth={1.5} />
    },
    {
      title: "Puntualità",
      desc: "Sistema flessibile tramite WhatsApp per organizzare il tuo appuntamento in pochi secondi.",
      icon: <Clock className="text-vintage-900 mb-6 mx-auto" size={40} strokeWidth={1.5} />
    }
  ];

  return (
    <section className="py-24 bg-paper-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-vintage-900 uppercase tracking-widest">
            I Nostri Valori
          </h3>
          <div className="w-24 h-1 bg-gold mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index} 
              className="text-center p-6 group"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-vintage-900/20 group-hover:border-gold group-hover:scale-110 transition-all duration-300 mb-6">
                {reason.icon}
              </div>
              <h4 className="text-2xl font-heading font-bold text-vintage-900 mb-4 uppercase tracking-wide group-hover:text-gold transition-colors">
                {reason.title}
              </h4>
              <p className="text-vintage-800 font-sans text-sm leading-relaxed italic">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
