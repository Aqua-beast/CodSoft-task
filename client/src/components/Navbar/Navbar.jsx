import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showHamburger, setShowHamburger] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleHamburger = () => {
    setShowHamburger(!showHamburger);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className='logo' src={logo} alt="" />
      </div>
      <div className="menu">
        <ul>
          <li className="nav-link">Home</li>
          <li className='nav-link'>Booking</li>
          <li className="nav-link dropdown" onMouseEnter={toggleDropdown} >
            Pages
            <div className={`dropdown-content ${showDropdown ? 'open' : ''}`}>
                <span className='drop-items'>About</span>
                <span className='drop-items'>Services</span>
                <span className='drop-items'>Contact</span>
            </div>
          </li>
          <li className="nav-link">Blogs</li>
          <li className="nav-link">Packages</li>
        </ul>
        <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
      </div>
      <div className="hamburger" onClick={toggleHamburger}> {/* Use toggleHamburger */}
        <div className={`bar ${showHamburger ? 'open' : ''}`}></div> {/* Use showHamburger */}
        <div className={`bar ${showHamburger ? 'open' : ''}`}></div> {/* Use showHamburger */}
        <div className={`bar ${showHamburger ? 'open' : ''}`}></div> {/* Use showHamburger */}
      </div>
    </nav>
  );
};

export default Navbar;
