import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  const events = [
    {
      date: '15 Oct 2025',
      title: 'Lamu Cultural Festival',
      location: 'Lamu Island',
      description: 'Experience the rich Swahili culture during this annual festival'
    },
    {
      date: '21 Jun 2025',
      title: 'Summer Tides Diani',
      location: 'Diani Beach',
      description: 'Music, food and beach sports festival'
    },
    {
      date: '20 Dec 2025',
      title: 'Christmas Beach Party',
      location: 'Bamburi Beach',
      description: 'Special Christmas celebration by the beach'
    }
  ];

  return (
    <section id="events" className="events">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Upcoming Events
        </motion.h2>
        
        <div className="events-list">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="event-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="event-date">
                <span>{event.date}</span>
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <div className="event-location">
                  <span>📍 {event.location}</span>
                </div>
                <p>{event.description}</p>
                <a href="https://wa.me/254711376496" className="btn-small">
                  Join Event
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;