import React from 'react';
import './Footer.scss';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__info">
        <p>Improving hotel housekeeping by paying housekeepers by the quantity and quality of rooms cleaned</p>
      </div>
      <div className="footer__nav footer__lists">
        <h2>Menu</h2>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/app'>App</Link></li>
          <li><Link to='/demo'>Demo</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
      <div className="footer__contact-info footer__lists">
        <h2>Contact</h2>
        <ul>
          <li>Email: <a href="mailto:info@hkpsolutions.com">info@hkpsolutions.com</a></li>
        </ul>
      </div>
      <div className="footer__social footer__lists">
        <h2>Follow</h2>
        <ul>
          <li><a href="https://linkedin.com/company/hkp-solutions">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
