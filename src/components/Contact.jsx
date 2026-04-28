import React, { useState } from 'react';
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
    // Simulate form submission
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
    <section id="contatti" className="py-24 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gold uppercase mb-4">Contatti</h2>
          <h3 className="text-4xl font-heading font-bold text-white">
            Prenota il tuo momento
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h4 className="text-2xl font-heading font-bold text-white mb-6">Informazioni</h4>
              <p className="text-offwhite/70 font-light mb-8">
                Vieni a trovarci o contattaci per prenotare il tuo appuntamento. Il nostro team è pronto ad accoglierti.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-white mb-1">Indirizzo</h5>
                  <p className="text-offwhite/70 font-light">Via Garibaldi 18, Cagliari, Italia</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-white mb-1">Orari</h5>
                  <p className="text-offwhite/70 font-light">Martedì - Domenica: 09:00 - 20:00<br />Lunedì: Chiuso</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-white mb-1">Telefono</h5>
                  <p className="text-offwhite/70 font-light">+39 333 987 6543</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-gold mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h5 className="font-bold text-white mb-1">Email</h5>
                  <p className="text-offwhite/70 font-light">info@vantobarber.it</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a 
                href="https://wa.me/393339876543?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento%20da%20Vanto%20Barber%20Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
              >
                Contattaci su WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal-light p-8 md:p-10 border border-charcoal">
            <h4 className="text-2xl font-heading font-bold text-white mb-6">Richiedi Appuntamento</h4>
            
            {submitted ? (
              <div className="bg-green-900/30 border border-green-500/50 p-4 text-green-400 text-center font-medium">
                Richiesta inviata con successo. Ti contatteremo presto per confermare.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome e Cognome" 
                    className="w-full bg-charcoal border border-steel/30 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors font-light placeholder:text-steel"
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
                    className="w-full bg-charcoal border border-steel/30 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors font-light placeholder:text-steel"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select 
                    name="servizio"
                    required
                    value={formData.servizio}
                    onChange={handleChange}
                    className="w-full bg-charcoal border border-steel/30 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors font-light appearance-none"
                  >
                    <option value="" disabled>Seleziona Servizio</option>
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
                    className="w-full bg-charcoal border border-steel/30 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors font-light"
                  />
                </div>
                <div>
                  <textarea 
                    name="messaggio"
                    rows="4"
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Messaggio opzionale..." 
                    className="w-full bg-charcoal border border-steel/30 text-white px-4 py-3 focus:outline-none focus:border-gold transition-colors font-light placeholder:text-steel resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-transparent border border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-4 font-bold text-sm uppercase tracking-wide transition-colors"
                >
                  Richiedi Appuntamento
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
