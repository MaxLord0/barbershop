import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-wood-dark pt-16 pb-8 border-t-8 border-black/40 relative">
      <div className="absolute inset-0 bg-black/60 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <span className="font-heading text-3xl font-bold text-gold tracking-widest block text-shadow-vintage">VANTO</span>
            </div>
            <p className="text-vintage-100/70 font-sans text-sm italic max-w-xs leading-relaxed">
              Barberia premium per tagli moderni, barba e grooming maschile, con il tocco classico di un tempo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-vintage-100 font-heading font-bold mb-4 uppercase tracking-wider text-xl">Links Rapidi</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-vintage-100/70 hover:text-gold text-sm font-sans uppercase tracking-wide transition-colors">Home</a></li>
              <li><a href="#servizi" className="text-vintage-100/70 hover:text-gold text-sm font-sans uppercase tracking-wide transition-colors">Servizi</a></li>
              <li><a href="#prezzi" className="text-vintage-100/70 hover:text-gold text-sm font-sans uppercase tracking-wide transition-colors">Prezzi</a></li>
              <li><a href="#galleria" className="text-vintage-100/70 hover:text-gold text-sm font-sans uppercase tracking-wide transition-colors">Galleria</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-vintage-100 font-heading font-bold mb-4 uppercase tracking-wider text-xl">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-vintage-100/30 flex items-center justify-center text-vintage-100/70 hover:text-vintage-900 hover:bg-gold hover:border-gold transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-vintage-100/30 flex items-center justify-center text-vintage-100/70 hover:text-vintage-900 hover:bg-gold hover:border-gold transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.16-3.44-3.37-3.46-5.7-.02-1.29.26-2.58.85-3.71.94-1.74 2.83-2.92 4.81-3.04 1.2-.06 2.4.24 3.44.81v4.12c-.52-.3-1.12-.46-1.72-.45-1.1.02-2.18.66-2.61 1.67-.32.74-.29 1.6.09 2.32.48.91 1.49 1.46 2.53 1.41 1.05-.04 2.05-.62 2.52-1.56.24-.52.33-1.09.33-1.66V0h3.8z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-vintage-100/30 flex items-center justify-center text-vintage-100/70 hover:text-vintage-900 hover:bg-gold hover:border-gold transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-vintage-100/10 text-center md:flex md:justify-between md:items-center">
          <p className="text-vintage-100/40 font-sans text-xs mb-4 md:mb-0 tracking-wider">
            &copy; 2026 VANTO BARBER STUDIO. TUTTI I DIRITTI RISERVATI.
          </p>
          <p className="text-vintage-100/30 font-sans text-xs italic">
            Website demo realizzato per presentazione commerciale.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
