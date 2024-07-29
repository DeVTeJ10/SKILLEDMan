// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-items">
        <a href="#how-it-works">How it Works</a>
        <a href="#about">FAQs</a>
        <a href="#faq">About</a>
      </div>
    </div>
  );
}

export default Navbar;
