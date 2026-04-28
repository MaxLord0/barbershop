import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Corte fade"
    },
    {
      src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Barba cuidada"
    },
    {
      src: "https://images.unsplash.com/photo-1512496015851-a1fbbfc69a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Silla de barbería"
    },
    {
      src: "https://images.unsplash.com/photo-1532710093739-9470acff878b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Herramientas premium"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Interior oscuro elegante"
    },
    {
      src: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Cliente con corte moderno"
    }
  ];

  return (
    <section id="galleria" className="py-24 bg-wood-dark border-t-8 border-b-8 border-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-vintage-100 uppercase tracking-widest text-shadow-vintage">
              Photos
            </h3>
            <div className="w-full flex items-center justify-center mt-2 space-x-2 text-gold">
              <div className="h-px bg-gold flex-1"></div>
              <span className="text-xs">◆</span>
              <div className="h-px bg-gold flex-1"></div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
          {images.map((img, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index} 
              className="relative group overflow-hidden bg-vintage-900 aspect-square border-2 border-vintage-800 shadow-xl"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover sepia-[.4] transition-all duration-700 group-hover:scale-110 group-hover:sepia-0"
              />
              <div className="absolute inset-0 border-[8px] border-black/20 pointer-events-none mix-blend-overlay"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
