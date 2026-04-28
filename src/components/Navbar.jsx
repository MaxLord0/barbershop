import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

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
    { name: 'Contatti', href: '#contatti' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <a href="#home" className="font-heading text-3xl text-gold tracking-widest text-shadow-vintage">
              VANTO
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-bold font-sans tracking-widest uppercase text-vintage-100 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/393339876543"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-vintage-900 px-6 py-2 font-bold text-xs uppercase tracking-widest transition-colors border border-gold"
            >
              Prenota
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-vintage-100 hover:text-gold focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute w-full left-0 top-full border-t border-gold/20">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-center text-sm font-bold font-sans tracking-widest uppercase text-vintage-100 hover:text-gold hover:bg-vintage-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/393339876543"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 w-full text-center bg-gold hover:bg-gold-light text-vintage-900 px-6 py-3 font-bold text-sm uppercase tracking-widest transition-colors"
            >
              Prenota Ora
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
