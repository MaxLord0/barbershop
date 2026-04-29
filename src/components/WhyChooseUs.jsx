import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lock, Beaker, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Precision",
      desc: "Ogni sfumatura e linea è curata con la massima attenzione per un risultato impeccabile.",
      icon: <Target className="text-shaver-gold mb-6 mx-auto" size={48} strokeWidth={1} />
    },
    {
      title: "Privacy",
      desc: "Un'atmosfera elegante dove rilassarsi e godersi il proprio momento di cura personale.",
      icon: <Lock className="text-shaver-gold mb-6 mx-auto" size={48} strokeWidth={1} />
    },
    {
      title: "Quality",
      desc: "Utilizziamo solo i migliori marchi di grooming maschile per proteggere pelle e capelli.",
      icon: <Beaker className="text-shaver-gold mb-6 mx-auto" size={48} strokeWidth={1} />
    },
    {
      title: "Punctuality",
      desc: "Sistema flessibile tramite WhatsApp per organizzare il tuo appuntamento in pochi secondi.",
      icon: <Clock className="text-shaver-gold mb-6 mx-auto" size={48} strokeWidth={1} />
    }
  ];

  return (
    <section className="py-32 bg-grunge-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-shaver-gold uppercase mb-4 font-sans">
            Core Values
          </h2>
          <h3 className="text-5xl md:text-6xl font-heading font-bold text-shaver-white uppercase text-shadow-shaver">
            Why Choose Us
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {reasons.map((reason, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index} 
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-28 h-28 border border-shaver-gray group-hover:border-shaver-gold transition-all duration-300 mb-6 bg-shaver-black">
                {reason.icon}
              </div>
              <h4 className="text-2xl font-heading font-bold text-shaver-white mb-4 uppercase tracking-widest group-hover:text-shaver-gold transition-colors">
                {reason.title}
              </h4>
              <p className="text-shaver-lightgray font-sans text-sm leading-relaxed">
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
