import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';
// Import images
import kisiteDolphins from '../assets/images/kisite.jpg';
import dianiBeach from '../assets/images/beaches.jpg';
import watamuBeach from '../assets/images/eid-event.jpg';
import shimbaHills from '../assets/images/shimba.jpg';

const ImageCarousel = () => {
  // These are placeholder image paths. Replace with your actual images
  const images = [
    {
      src: kisiteDolphins,
      alt: 'Dolphins at Kisite Mpunguti',
      caption: 'Swim with dolphins at Kisite Mpunguti Marine Park'
    },
    {
      src: dianiBeach,
      alt: 'Diani Beach',
      caption: 'Relax on the white sands of Diani Beach'
    },
    {
      src: watamuBeach,
      alt: 'Watamu Beach',
      caption: 'Crystal clear waters of Watamu'
    },
    {
      src: shimbaHills,
      alt: 'Shimba Hills',
      caption: 'Explore the lush Shimba Hills National Reserve'
    }
  ];

  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  adaptiveHeight: true, // Add this to adjust height based on image
};

  return (
    <section className="carousel-section">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
  
<Slider {...settings} className="image-carousel">
  {images.map((image, index) => (
    <div key={index} className="carousel-slide">
      <div className="slide-content">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="carousel-image"
        />
        <div className="slide-caption">
          <h3>{image.caption}</h3>
        </div>
      </div>
    </div>
  ))}
</Slider>
      </motion.div>
    </section>
  );
};

export default ImageCarousel;