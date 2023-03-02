import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <nav className="navbar">
        <a href="/" className="app-title">Short Kids Story</a> 


        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/latest" className="nav-link">Latest</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Categories</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="/contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  

  export default Navbar;
