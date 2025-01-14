import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#attractions">Attractions</a></li>
              <li><a href="#culture">Culture</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="section">
            <h3>Contact Information</h3>
            <p>123 Main Street, Darbhanga</p>
            <p>Bihar, India 846004</p>
            <p>Phone: +91 1234567890</p>
            <p>Email: info@apnadarbhanga.com</p>
          </div>
          <div className="section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Twitter">TW</a>
              <a href="#" aria-label="Instagram">IG</a>
            </div>
          </div>
        </div>
        <p className="copyright">&copy; 2025 Apna Darbhanga. All rights reserved.</p>
      </div>
    </footer>
  );
};
