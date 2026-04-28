import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/80 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <div className="mb-6 inline-block border border-gold/30 px-4 py-1 bg-charcoal/50 backdrop-blur-sm">
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-medium">
            Dal 2021 · Barberia moderna italiana
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Stile preciso. <br className="hidden md:block"/> Esperienza premium.
        </h1>
        
        <p className="text-lg md:text-xl text-offwhite/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
          Tagli professionali, cura della barba e grooming maschile in un ambiente elegante e riservato.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="https://wa.me/393339876543?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento%20da%20Vanto%20Barber%20Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gold hover:bg-gold-light text-charcoal px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
          >
            Prenota su WhatsApp
          </a>
          <a 
            href="#servizi"
            className="w-full sm:w-auto border border-white hover:border-gold hover:text-gold text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
          >
            Scopri i Servizi
          </a>
        </div>
        
        <div className="text-sm text-offwhite/70 font-light tracking-wide">
          Aperto dal martedì alla domenica · 09:00 - 20:00
        </div>
      </div>
    </section>
  );
};

export default Hero;
