import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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
    <section id="recensioni" className="py-24 bg-wood-dark border-t-8 border-b-8 border-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Mustache_icon.svg/1024px-Mustache_icon.svg.png" className="w-12 h-auto mx-auto mb-4 invert opacity-50" alt="Mustache" />
          <h3 className="text-4xl md:text-5xl font-heading font-bold text-vintage-100 uppercase tracking-widest text-shadow-vintage">
            Recensioni
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index} 
              className="bg-paper-light p-8 border border-vintage-800 relative shadow-2xl"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold w-10 h-10 flex items-center justify-center rounded-full border-2 border-vintage-900">
                <span className="text-vintage-900 font-heading font-bold">"</span>
              </div>
              <div className="flex justify-center text-gold mb-6 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-vintage-900 font-sans italic mb-6 leading-relaxed text-center text-sm">
                "{review.text}"
              </p>
              <div className="mt-auto text-center">
                <span className="font-heading font-bold text-vintage-900 tracking-wider">
                  - {review.author}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
