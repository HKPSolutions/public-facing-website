import React from 'react';
import './Footer.scss';

import Branding from './assets/branding.png'

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__branding">
        <a href="!#"><img src={Branding} alt="brand icon" /></a>
      </div>
      <div className="footer__info">
        Improving hotel housekeeping by paying housekeepers by the quantity and quality of rooms cleaned
      </div>
      <div className="footer__nav">
        <h2>Menu</h2>
        <ul>
          <li><a href="!#">Home</a></li>
          <li><a href="!#">App</a></li>
          <li><a href="!#">Demo</a></li>
          <li><a href="!#">Contact</a></li>
        </ul>
      </div>
      <div className="foooter__contact-info">
        <h2>Contact</h2>
        <ul>
          <li>Email: <a href="mailto:hkpsolutions@gmail.com">hkpsolutions@gmail.com</a></li>
        </ul>
      </div>
      <div className="footer__social">
        <h2>follow</h2>
        <ul>
          <li><a href="!#">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
