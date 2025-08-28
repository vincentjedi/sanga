import React from 'react';
import { motion } from 'framer-motion';

const Offers = () => {
  const offers = [
    {
      title: 'Family Package',
      description: 'Special rates for families of 4 or more',
      discount: '15% OFF',
      validUntil: 'Valid until December 2025'
    },
    {
      title: 'Honeymoon Special',
      description: 'Romantic beach getaway for couples',
      discount: '2 Nights Free',
      validUntil: 'Valid until November 2025'
    },
    {
      title: 'Group Discount',
      description: 'Discounts for groups of 10 or more',
      discount: '20% OFF',
      validUntil: 'Valid all year'
    }
  ];

  return (
    <section id="offers" className="offers">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Exclusive Offers
        </motion.h2>
        
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="offer-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="offer-badge">{offer.discount}</div>
              <h3>{offer.title}</h3>
              <p>{offer.description}</p>
              <div className="offer-valid">{offer.validUntil}</div>
              <a href="https://wa.me/254769119350" className="btn-small">
                Book Now
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;