import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>TREND-TO-THRIFT</h3>
            <p>Sustainable fashion for everyone. Find your style while making a positive impact on the planet.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li>FAQ</li>
              <li>Shipping Info</li>
              <li>Returns</li>
              <li>Size Guide</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul>
              <li>Instagram</li>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Trend-to-Thrift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;