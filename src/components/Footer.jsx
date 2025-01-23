import React from 'react';
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/attractions">Attractions</Link></li>
              <li><Link to="/culture">Culture</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="section">
            <h3>Contact Information</h3>
            <p>Darbhanga</p>
            <p>Bihar, India 847407</p>
            <p>Phone: +91 9006487475</p>
            <p style={{marginLeft:"55px"}}>+91 7667363767</p>
            <p>Email: apnadarbhanga01@gmail.com</p>
          </div>
          {/* <div className="section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <Link to="" target='_blanck' ><FaWhatsapp /></Link>
              <Link to="Facebook" target='_blanck' ><FaFacebook /></Link>
              <Link to="https://www.instagram.com/s.s.zone?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blanck' ><FaInstagram /></Link>
              <Link to="https://www.youtube.com/@Groupofsszone" target='_blanck' ><FaYoutube /></Link>
            </div>
          </div> */}
        </div>
        <p className="copyright">&copy; Apna Darbhanga. All rights reserved.</p>
      </div>
    </footer>
  );
};
