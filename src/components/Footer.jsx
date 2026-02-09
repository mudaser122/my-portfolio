import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-container">
        <div className="footer-top">
          <h2 className="footer-title">Lets work together</h2>
          <button className="footer-button">Get In Touch</button>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2024 Mudasir Azeem. All rights reserved.
          </div>
          <div className="footer-socials">
            {['Twitter', 'Instagram', 'LinkedIn', 'Dribbble'].map(social => (
                <a key={social} href="#" className="footer-link">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
