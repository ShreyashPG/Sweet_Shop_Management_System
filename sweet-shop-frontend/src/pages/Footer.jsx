import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="dashboard-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>🍬 Sweet Delights</h4>
          <p>Bringing you the finest collection of traditional and modern sweets since 2024.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#terms">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li>🍫 Chocolate</li>
            <li>🍬 Candy</li>
            <li>🍡 Ladoo</li>
            <li>🍥 Barfi</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="WhatsApp">💬</a>
          </div>
          <p>📞 +91 8888888888</p>
          <p>📧 orders@sweetdelights.com</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-info">
          <p>&copy; 2024 Sweet Delights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;