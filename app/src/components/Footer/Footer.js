import React from 'react';
import './Footer.scss';

import Branding from './assets/branding.png'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__branding">
        <a href="/"><img src={Branding} alt="brand icon" /></a>
      </div>
      <div className="footer__info">
        <p>**DEBUG 4** Improving hotel housekeeping by paying housekeepers by the quantity and quality of rooms cleaned</p>
      </div>
      <div className="footer__nav footer__lists">
        <h2>Menu</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/app">App</a></li>
          <li><a href="/demo">Demo</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div className="footer__contact-info footer__lists">
        <h2>Contact</h2>
        <ul>
          <li>Email: <a href="mailto:hkpsolutions@gmail.com">hkpsolutions@gmail.com</a></li>
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
