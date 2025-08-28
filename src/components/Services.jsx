import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Beach Getaways',
      description: 'Relax on the pristine beaches of Diani, Watamu, and Malindi.',
      icon: '🏖️',
    },
    {
      title: 'Dolphin Watching',
      description: 'Exciting boat trips to see dolphins at Kisite Mpunguti Marine Park.',
      icon: '🐬',
    },
    {
      title: 'Cultural Tours',
      description: 'Explore the rich Swahili culture and historical sites.',
      icon: '🏛️',
    },
    {
      title: 'Adventure Safaris',
      description: 'Thrilling safaris in Shimba Hills and other game reserves.',
      icon: '🦁',
    },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Our Services
        </motion.h2>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;