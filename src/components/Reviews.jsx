import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const Reviews = () => {
  const reviews = [
    {
      name: 'Milcah Mbodze',
      rating: 5,
      comment: 'The dolphin watching tour was incredible! The crew was knowledgeable and we saw so many dolphins. Highly recommend Sanga Tours!',
      date: 'February 2025'
    },
    {
      name: 'Allan Jedi',
      rating: 4,
      comment: 'Great service and well-organized trips. The beaches were pristine and the guides were very friendly.',
      date: 'January 2025'
    },
    {
      name: 'Amina Saidi',
      rating: 5,
      comment: 'Best travel experience in Kenya! The cultural tour was eye-opening and the beach resorts were luxurious.',
      date: 'January 2025'
    },
    {
      name: 'David Wilson',
      rating: 5,
      comment: 'From booking to the actual tour, everything was seamless. Will definitely use Sanga Tours again on my next visit.',
      date: 'May 2025'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  return (
    <section id="reviews" className="reviews">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Client Reviews
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Slider {...settings} className="reviews-slider">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <h3>{review.name}</h3>
                  <div className="review-rating">
                    {renderStars(review.rating)}
                  </div>
                </div>
                <p className="review-comment">"{review.comment}"</p>
                <div className="review-date">{review.date}</div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;