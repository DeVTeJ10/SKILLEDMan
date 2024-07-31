import React from 'react';
import './footer.css';
import instagramLogo from   '../../assets/img/instagram.png'
import twitterLogo from   '../../assets/img/twitter.png'
import whatsappLogo from   '../../assets/img/whatsapp.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <h1>S<span>killedman</span></h1>
        </div>

        <div className="footer-section links">
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section social-media">
          <a href="#"><img src={instagramLogo} alt="Instagram" className="social-icon" /></a>
          <a href="#"><img src={twitterLogo} alt="Twitter" className="social-icon" /></a>
          <a href="#"><img src={whatsappLogo} alt="WhatsApp" className="social-icon" /></a>
        </div>

        <div className="footer-section designed-by">
          <p>Designed and developed by Arravo</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2024 Arravo.com | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
