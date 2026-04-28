import React from 'react';

const CTA = () => {
  return (
    <section className="relative py-24 bg-charcoal overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-20"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      ></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
          Pronto per rinnovare il tuo stile?
        </h2>
        <p className="text-lg text-offwhite/80 mb-10 font-light max-w-2xl mx-auto">
          Prenota il tuo appuntamento su WhatsApp e scegli il servizio più adatto a te.
        </p>
        
        <a 
          href="https://wa.me/393339876543?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento%20da%20Vanto%20Barber%20Studio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold hover:bg-gold-light text-charcoal px-10 py-4 font-bold text-sm uppercase tracking-wide transition-colors shadow-lg shadow-gold/20"
        >
          Prenota su WhatsApp
        </a>
      </div>
    </section>
  );
};

export default CTA;
