import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {  // Simplified toggle function
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="Ecommerce" />
        </Link>
      </div>
      
      {/* Desktop Navigation */}
      <div className="desktop-nav">
        <Link to="/" onClick={handleLinkClick}>Home</Link>
        <Link to="/earbuds" onClick={handleLinkClick}>Earbuds</Link>
        <Link to="/cart" onClick={handleLinkClick}>Cart</Link>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-menu">
        <button 
          className="menu-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isOpen ? 'active' : ''}`}></span>
        </button>
        <div className={`mobile-nav-items ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/earbuds" onClick={handleLinkClick}>Earbuds</Link>
          <Link to="/cart" onClick={handleLinkClick}>Cart</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 