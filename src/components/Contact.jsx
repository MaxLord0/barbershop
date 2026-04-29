import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const contactInfo = [
    {
      icon: <MapPin className="text-shaver-gold mb-4" size={32} strokeWidth={1} />,
      title: "Address",
      content: "Via Roma 123, 00100 Roma (RM)"
    },
    {
      icon: <Phone className="text-shaver-gold mb-4" size={32} strokeWidth={1} />,
      title: "Phone",
      content: "+39 333 987 6543"
    },
    {
      icon: <Clock className="text-shaver-gold mb-4" size={32} strokeWidth={1} />,
      title: "Hours",
      content: "Mar-Sab: 09:00 - 19:30\nDom-Lun: Chiuso"
    }
  ];

  return (
    <section id="contatti" className="py-32 bg-grunge-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-shaver-gold uppercase mb-4 font-sans">
            Get In Touch
          </h2>
          <h3 className="text-5xl md:text-6xl font-heading font-bold text-shaver-white uppercase">
            Contact Us
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="text-center sm:text-left flex flex-col items-center sm:items-start group">
                  {info.icon}
                  <h4 className="text-xl font-heading font-bold text-shaver-white uppercase mb-2 group-hover:text-shaver-gold transition-colors">{info.title}</h4>
                  <p className="text-shaver-lightgray font-sans whitespace-pre-line text-sm">{info.content}</p>
                </div>
              ))}
            </div>

            <div className="h-64 sm:h-80 w-full relative grayscale contrast-125 border-4 border-shaver-gray">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d11870.364219460027!2d12.482778!3d41.890251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f6053278340d5%3A0xf676f1e1cc0be0e0!2sColosseo!5e0!3m2!1sit!2sit!4v1650000000000!5m2!1sit!2sit" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-shaver-black border border-shaver-gray p-8 sm:p-12"
          >
            <h4 className="text-3xl font-heading font-bold text-shaver-white uppercase mb-8">Book an Appointment</h4>
            
            {submitted ? (
              <div className="bg-shaver-gold/20 border border-shaver-gold p-4 text-shaver-gold text-center font-sans font-medium relative z-10">
                Richiesta inviata con successo. Ti contatteremo presto per confermare.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <input 
                      type="text" 
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Il tuo nome *" 
                      required
                      className="w-full bg-transparent border-b-2 border-shaver-gray py-3 px-2 text-shaver-white focus:outline-none focus:border-shaver-gold transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *" 
                      required
                      className="w-full bg-transparent border-b-2 border-shaver-gray py-3 px-2 text-shaver-white focus:outline-none focus:border-shaver-gold transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <select 
                      name="servizio"
                      value={formData.servizio}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-shaver-gray py-3 px-2 text-shaver-white focus:outline-none focus:border-shaver-gold transition-colors font-sans appearance-none"
                    >
                      <option value="" className="bg-shaver-black">Seleziona Servizio *</option>
                      <option value="taglio" className="bg-shaver-black">Taglio Uomo</option>
                      <option value="barba" className="bg-shaver-black">Barba Premium</option>
                      <option value="completo" className="bg-shaver-black">Taglio + Barba</option>
                      <option value="altro" className="bg-shaver-black">Altro</option>
                    </select>
                  </div>
                  <div>
                    <input 
                      type="date" 
                      name="data"
                      value={formData.data}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-shaver-gray py-3 px-2 text-shaver-white focus:outline-none focus:border-shaver-gold transition-colors font-sans [&::-webkit-calendar-picker-indicator]:invert-[1]"
                    />
                  </div>
                </div>

                <div>
                  <textarea 
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Note aggiuntive" 
                    rows="4"
                    className="w-full bg-transparent border-b-2 border-shaver-gray py-3 px-2 text-shaver-white focus:outline-none focus:border-shaver-gold transition-colors font-sans resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-shaver w-full mt-4"
                >
                  Send Request
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
