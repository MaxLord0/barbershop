import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] pt-16 pb-8 border-t border-charcoal-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="font-heading text-2xl font-bold text-white tracking-wider block">VANTO</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold">Barber Studio</span>
            </div>
            <p className="text-offwhite/50 text-sm font-light max-w-xs leading-relaxed">
              Barberia premium per tagli moderni, barba e grooming maschile.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Links Rapidi</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-offwhite/50 hover:text-gold text-sm transition-colors">Home</a></li>
              <li><a href="#servizi" className="text-offwhite/50 hover:text-gold text-sm transition-colors">Servizi</a></li>
              <li><a href="#prezzi" className="text-offwhite/50 hover:text-gold text-sm transition-colors">Prezzi</a></li>
              <li><a href="#galleria" className="text-offwhite/50 hover:text-gold text-sm transition-colors">Galleria</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-offwhite/70 hover:text-gold hover:bg-charcoal-light transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-offwhite/70 hover:text-gold hover:bg-charcoal-light transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.16-3.44-3.37-3.46-5.7-.02-1.29.26-2.58.85-3.71.94-1.74 2.83-2.92 4.81-3.04 1.2-.06 2.4.24 3.44.81v4.12c-.52-.3-1.12-.46-1.72-.45-1.1.02-2.18.66-2.61 1.67-.32.74-.29 1.6.09 2.32.48.91 1.49 1.46 2.53 1.41 1.05-.04 2.05-.62 2.52-1.56.24-.52.33-1.09.33-1.66V0h3.8z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal flex items-center justify-center text-offwhite/70 hover:text-gold hover:bg-charcoal-light transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-charcoal text-center md:flex md:justify-between md:items-center">
          <p className="text-offwhite/40 text-xs mb-4 md:mb-0">
            &copy; 2026 Vanto Barber Studio. Tutti i diritti riservati.
          </p>
          <p className="text-offwhite/30 text-xs italic">
            Website demo realizzato per presentazione commerciale.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
