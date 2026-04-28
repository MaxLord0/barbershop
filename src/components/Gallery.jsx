import React from 'react';

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
    <section id="galleria" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gold uppercase mb-4">Galleria</h2>
          <h3 className="text-4xl font-heading font-bold text-white">
            Il nostro lavoro in immagini
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative group overflow-hidden bg-charcoal-light aspect-[4/5]">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-heading text-lg font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
