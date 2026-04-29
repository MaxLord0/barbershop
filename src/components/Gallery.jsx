import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Corte fade"
    },
    {
      src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Barba cuidada"
    },
    {
      src: "https://images.unsplash.com/photo-1512496015851-a1fbbfc6b454?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Silla de barbería"
    },
    {
      src: "https://images.unsplash.com/photo-1532710093739-9470acff878b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Herramientas premium"
    },
    {
      src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Interior oscuro elegante"
    },
    {
      src: "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Cliente con corte moderno"
    }
  ];

  return (
    <section id="galleria" className="py-32 bg-grunge-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-shaver-gold uppercase mb-4 font-sans">
            Our Work
          </h2>
          <h3 className="text-5xl md:text-6xl font-heading font-bold text-shaver-white uppercase text-shadow-shaver">
            Gallery
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {images.map((img, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              key={index} 
              className="relative aspect-square overflow-hidden group"
            >
              <div className="absolute inset-0 bg-shaver-black/60 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
