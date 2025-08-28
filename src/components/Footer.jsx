
import { FaFacebook, FaInstagram, FaTwitter, FaTripadvisor } from 'react-icons/fa';
import logo from '../assets/images/hero-bg.jpg'; // Placeholder logo, replace with actual logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={logo} alt="Sanga Tours Logo" />
              <span>Sanga Tours</span>
            </div>
            <p>
              A healthy and wealthy travel network.⛱️
              Discover beautiful beaches, marine life, and rich culture with us.
            </p>
            <div className="social-links">
              <a href="#facebook"><FaFacebook /></a>
              <a href="https://www.instagram.com/sanga_tours/"><FaInstagram /></a>
              <a href="#Twitter"><FaTwitter /></a>
              <a href="#Trip"><FaTripadvisor /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>Contact Info</h3>
            <ul>
              <li>Coast Province, Kenya</li>
              <li>Phone: +254 769119350</li>
              <li>Email: sangaofficial42@gmail.com</li>
              <li>
                <a href="https://wa.me/254769119350" className="whatsapp-link">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sanga Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;