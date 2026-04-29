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
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav-shaver py-4' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center">
            <a href="#home" className="font-heading text-4xl text-shaver-white tracking-[0.1em] text-shadow-shaver">
              VANTO
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[13px] font-sans font-semibold tracking-widest uppercase text-shaver-white hover:text-shaver-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/393339876543"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-sans font-semibold tracking-widest uppercase text-shaver-gold border border-shaver-gold px-6 py-2 hover:bg-shaver-gold hover:text-shaver-black transition-all"
            >
              Prenota
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-shaver-white hover:text-shaver-gold focus:outline-none"
            >
              {isOpen ? <X size={32} strokeWidth={1.5} /> : <Menu size={32} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-shaver-black absolute w-full left-0 top-full border-t border-shaver-gray">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-center text-sm font-sans font-semibold tracking-widest uppercase text-shaver-white hover:text-shaver-gold hover:bg-shaver-gray transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/393339876543"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 w-full text-center text-sm font-sans font-semibold tracking-widest uppercase text-shaver-gold border border-shaver-gold px-6 py-4 hover:bg-shaver-gold hover:text-shaver-black transition-all"
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
