import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import OccasionDropdown from './OccasionDropdown';
import './Header.css';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };
  return <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <span className="logo-text">WishIn Bloom</span>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} role="navigation" aria-label="Main navigation">
            <div className="nav-links">
              <Link to="/" className={`nav-link ${isActiveLink('/') ? 'active' : ''}`} onClick={closeMenu}>
                Home
              </Link>
              <Link to="/about" className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`} onClick={closeMenu}>
                About
              </Link>
              <Link to="/contact" className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`} onClick={closeMenu}>
                Contact
              </Link>
              <OccasionDropdown onSelect={closeMenu} />
            </div>
          </nav>

          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
            <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </div>
    </header>;
};
export default Header;