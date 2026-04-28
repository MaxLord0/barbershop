import React from 'react';

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
    <section id="prezzi" className="py-24 bg-charcoal-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gold uppercase mb-4">Listino</h2>
          <h3 className="text-4xl font-heading font-bold text-white">
            Prezzi e Trattamenti
          </h3>
        </div>

        <div className="bg-charcoal p-8 md:p-12 border border-charcoal-light shadow-xl">
          <ul className="space-y-6">
            {prices.map((item, index) => (
              <li key={index} className="flex items-center justify-between group cursor-default">
                <span className="text-lg font-heading text-white group-hover:text-gold transition-colors">{item.name}</span>
                <div className="flex-1 mx-4 border-b border-dashed border-steel/30 group-hover:border-gold/50 transition-colors"></div>
                <span className="text-xl font-bold text-gold">{item.price}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-10 pt-6 border-t border-charcoal-light text-center">
            <p className="text-steel text-sm font-light italic">
              * I prezzi possono variare in base alla consulenza e al servizio richiesto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
