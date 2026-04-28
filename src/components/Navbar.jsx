import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Servizi', href: '#servizi' },
    { name: 'Galleria', href: '#galleria' },
    { name: 'Prezzi', href: '#prezzi' },
    { name: 'Recensioni', href: '#recensioni' },
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <a href="#home" className="font-heading text-2xl font-bold text-white tracking-wider">VANTO</a>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold">Barber Studio</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-offwhite hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/393339876543?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento%20da%20Vanto%20Barber%20Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-charcoal px-6 py-2 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Prenota Ora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute w-full left-0 top-full border-t border-charcoal-light">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-white hover:text-gold hover:bg-charcoal-light transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/393339876543?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento%20da%20Vanto%20Barber%20Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 w-full text-center bg-gold hover:bg-gold-light text-charcoal px-6 py-3 font-bold text-sm uppercase tracking-wide transition-colors"
            >
              Prenota Ora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
