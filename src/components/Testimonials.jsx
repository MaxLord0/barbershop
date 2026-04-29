import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Taglio perfetto, ambiente elegante e servizio molto professionale.",
      author: "Luca R."
    },
    {
      text: "Finalmente una barberia curata nei dettagli. Ottima sfumatura e barba impeccabile.",
      author: "Matteo G."
    },
    {
      text: "Personale gentile, puntuale e molto preciso. Consigliatissimo.",
      author: "Andrea P."
    }
  ];

  return (
    <section id="recensioni" className="py-32 bg-grunge-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-shaver-gold uppercase mb-4 font-sans">
            Testimonials
          </h2>
          <h3 className="text-5xl md:text-6xl font-heading font-bold text-shaver-black uppercase">
            What They Say
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              key={index} 
              className="text-center group"
            >
              <Quote className="text-shaver-gold mx-auto mb-6 opacity-30" size={48} strokeWidth={1} />
              <p className="text-shaver-gray font-subheading italic text-lg leading-relaxed mb-8 px-4">
                "{review.text}"
              </p>
              <div className="w-12 h-px bg-shaver-black mx-auto mb-6"></div>
              <h4 className="text-xl font-heading font-bold text-shaver-black uppercase tracking-widest">
                {review.author}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
