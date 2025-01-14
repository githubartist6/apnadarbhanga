import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" onClick={toggleMenu} className="logo">Apna Darbhanga</Link>
          <nav className={`nav ${isOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="about" onClick={toggleMenu}>About</Link></li>
              <li><Link to="attractions" onClick={toggleMenu}>Attractions</Link></li>
              <li><Link to="culture" onClick={toggleMenu}>Culture</Link></li>
              <li><Link to="gallery" onClick={toggleMenu}>Gallery</Link></li>
              <li><Link to="contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </nav>
          <button className="menu-button" onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};
