import React from 'react';
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
    <section id="recensioni" className="py-24 bg-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gold uppercase mb-4">Recensioni</h2>
          <h3 className="text-4xl font-heading font-bold text-white">
            Cosa dicono di noi
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-charcoal p-8 border border-charcoal-light relative">
              <div className="flex text-gold mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-offwhite/80 font-light italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <span className="font-heading font-bold text-white tracking-wide">
                  {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
