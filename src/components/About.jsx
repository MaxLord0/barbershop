import React from 'react';
import { Scissors, CheckCircle, Gem } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gold translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Barber at work" 
              className="relative z-10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-gold uppercase mb-4">Chi Siamo</h2>
            <h3 className="text-4xl font-heading font-bold text-white mb-6">
              L'arte del grooming <br /> elevata alla perfezione.
            </h3>
            <p className="text-offwhite/80 text-lg font-light leading-relaxed mb-8">
              Vanto Barber Studio nasce per offrire un’esperienza di grooming maschile curata in ogni dettaglio. Dalla consulenza iniziale al taglio finale, ogni servizio è pensato per valorizzare lo stile personale del cliente con precisione, eleganza e professionalità.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <CheckCircle className="text-gold mr-4" size={24} />
                <span className="text-white font-medium">Consulenza personalizzata</span>
              </div>
              <div className="flex items-center">
                <Scissors className="text-gold mr-4" size={24} />
                <span className="text-white font-medium">Tecniche moderne</span>
              </div>
              <div className="flex items-center">
                <Gem className="text-gold mr-4" size={24} />
                <span className="text-white font-medium">Ambiente premium</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
