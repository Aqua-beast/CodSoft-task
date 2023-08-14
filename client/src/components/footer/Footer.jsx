import React from 'react';
import './footer.css'; // You can create your own CSS file for this component
import logo from '../../images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <p>Turning Dreams Into Destination</p>
        </div>
        <div className="footer-links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2023 YourCompany. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
