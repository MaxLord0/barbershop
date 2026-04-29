import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-shaver-black border-t border-shaver-gray pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4">
              <span className="font-heading text-4xl text-shaver-white tracking-[0.1em] text-shadow-shaver block">VANTO</span>
            </div>
            <p className="text-shaver-lightgray font-sans text-sm leading-relaxed max-w-xs mb-8">
              Barber Shop & Salon. Traditional grooming and shaving for the modern gentleman.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-shaver-gray flex items-center justify-center text-shaver-lightgray hover:text-shaver-gold hover:border-shaver-gold transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-shaver-gray flex items-center justify-center text-shaver-lightgray hover:text-shaver-gold hover:border-shaver-gold transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-shaver-gray flex items-center justify-center text-shaver-lightgray hover:text-shaver-gold hover:border-shaver-gold transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.16-3.44-3.37-3.46-5.7-.02-1.29.26-2.58.85-3.71.94-1.74 2.83-2.92 4.81-3.04 1.2-.06 2.4.24 3.44.81v4.12c-.52-.3-1.12-.46-1.72-.45-1.1.02-2.18.66-2.61 1.67-.32.74-.29 1.6.09 2.32.48.91 1.49 1.46 2.53 1.41 1.05-.04 2.05-.62 2.52-1.56.24-.52.33-1.09.33-1.66V0h3.8z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-heading font-bold text-shaver-white uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4 text-center md:text-left">
              <li><a href="#home" className="text-shaver-lightgray hover:text-shaver-gold transition-colors font-sans text-sm uppercase tracking-wider">Home</a></li>
              <li><a href="#servizi" className="text-shaver-lightgray hover:text-shaver-gold transition-colors font-sans text-sm uppercase tracking-wider">Services</a></li>
              <li><a href="#galleria" className="text-shaver-lightgray hover:text-shaver-gold transition-colors font-sans text-sm uppercase tracking-wider">Gallery</a></li>
              <li><a href="#contatti" className="text-shaver-lightgray hover:text-shaver-gold transition-colors font-sans text-sm uppercase tracking-wider">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-heading font-bold text-shaver-white uppercase tracking-widest mb-6">Newsletter</h4>
            <p className="text-shaver-lightgray font-sans text-sm mb-6">
              Subscribe to get special offers and updates.
            </p>
            <form className="w-full max-w-xs" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full bg-transparent border-b border-shaver-gray py-3 px-2 text-shaver-white focus:outline-none focus:border-shaver-gold transition-colors font-sans text-sm"
                />
                <button type="submit" className="absolute right-0 bottom-3 text-shaver-gold font-heading uppercase text-xs tracking-wider font-bold hover:text-shaver-white transition-colors">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-shaver-gray pt-8 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-shaver-lightgray font-sans text-xs uppercase tracking-widest mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vanto Barber Studio. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-shaver-lightgray hover:text-shaver-gold font-sans text-xs uppercase tracking-widest transition-colors">Privacy Policy</a>
            <a href="#" className="text-shaver-lightgray hover:text-shaver-gold font-sans text-xs uppercase tracking-widest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
