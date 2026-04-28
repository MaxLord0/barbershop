import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    servizio: '',
    data: '',
    messaggio: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nome: '', email: '', servizio: '', data: '', messaggio: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contatti" className="py-24 bg-paper-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-0 right-0 h-px bg-vintage-900/20 -z-10"></div>
          <span className="bg-vintage-100 px-6 inline-block">
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-vintage-900 uppercase tracking-widest">
              Contatti
            </h3>
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <h4 className="text-2xl font-heading font-bold text-vintage-900 mb-6 uppercase tracking-wider">Informazioni</h4>
              <p className="text-vintage-800 font-sans text-sm italic mb-8">
                Vieni a trovarci o contattaci per prenotare il tuo appuntamento. Il nostro team è pronto ad accoglierti nell'atmosfera di un tempo.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-vintage-900 font-heading tracking-wide mb-1">Indirizzo</h5>
                  <p className="text-vintage-800 font-sans text-sm">Via Garibaldi 18, Cagliari, Italia</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-vintage-900 font-heading tracking-wide mb-1">Orari</h5>
                  <p className="text-vintage-800 font-sans text-sm">Martedì - Domenica: 09:00 - 20:00<br />Lunedì: Chiuso</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-vintage-900 font-heading tracking-wide mb-1">Telefono</h5>
                  <p className="text-vintage-800 font-sans text-sm">+39 333 987 6543</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-vintage-900 font-heading tracking-wide mb-1">Email</h5>
                  <p className="text-vintage-800 font-sans text-sm">info@vantobarber.it</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="https://wa.me/393339876543"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-vintage-900 hover:bg-gold text-vintage-100 hover:text-vintage-900 px-8 py-4 font-bold text-sm uppercase tracking-widest transition-colors border-2 border-vintage-900 hover:border-gold"
              >
                Contattaci su WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-wood-dark p-8 md:p-10 border-4 border-vintage-900/50 shadow-xl relative"
          >
            <div className="absolute inset-2 border border-gold/30 pointer-events-none"></div>
            <h4 className="text-2xl font-heading font-bold text-vintage-100 mb-6 uppercase tracking-wider relative z-10 text-center">Richiedi Appuntamento</h4>
            
            {submitted ? (
              <div className="bg-green-900/30 border border-green-500/50 p-4 text-green-400 text-center font-sans font-medium relative z-10">
                Richiesta inviata con successo. Ti contatteremo presto per confermare.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <input 
                    type="text" 
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome e Cognome" 
                    className="w-full bg-transparent border-b-2 border-vintage-100/30 text-vintage-100 px-0 py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm placeholder:text-vintage-100/50"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    className="w-full bg-transparent border-b-2 border-vintage-100/30 text-vintage-100 px-0 py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm placeholder:text-vintage-100/50"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <select 
                    name="servizio"
                    required
                    value={formData.servizio}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-vintage-100/30 text-vintage-100 px-0 py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm appearance-none [&>option]:text-vintage-900"
                  >
                    <option value="" disabled className="text-vintage-900">Seleziona Servizio</option>
                    <option value="taglio">Taglio Uomo</option>
                    <option value="fade">Fade / Sfumatura</option>
                    <option value="barba">Barba Premium</option>
                    <option value="completo">Taglio + Barba</option>
                    <option value="deluxe">Grooming Deluxe</option>
                  </select>
                  <input 
                    type="date" 
                    name="data"
                    required
                    value={formData.data}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-vintage-100/30 text-vintage-100 px-0 py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm [&::-webkit-calendar-picker-indicator]:invert-[.8]"
                  />
                </div>
                <div>
                  <textarea 
                    name="messaggio"
                    rows="3"
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Messaggio opzionale..." 
                    className="w-full bg-transparent border-b-2 border-vintage-100/30 text-vintage-100 px-0 py-2 focus:outline-none focus:border-gold transition-colors font-sans text-sm placeholder:text-vintage-100/50 resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-vintage-900 px-8 py-4 font-bold text-sm uppercase tracking-widest transition-colors border-2 border-gold"
                >
                  Richiedi Appuntamento
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
