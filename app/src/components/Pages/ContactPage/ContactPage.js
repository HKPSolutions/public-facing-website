import React from 'react';
import './ContactPage.scss';

import linkedin from './assets/icons/LinkedIn.svg';
import Email from './assets/icons/Email.svg';
import { Input, TextArea, Button } from "../../Form";

/**
 *  Contact page component with mobile version
 */
function ContactPage() {
  return (
    <div className="contact-us__page">
      <form className="container">
        <div className="contact-us__message box ">
          <h1 className="contact-us__message__title">Contact Us!</h1>
          <p className="contact-us__message__decription">Our team is happy to answer any questions you may have. Feel free to reach out!</p>
          <div className="social-icons">
            <a href="!#"><img className="linkedin-icon" src={linkedin} alt="linkedin-icon"/></a>
            <a href="!#"><img className="email-icon" src={Email} alt="email-icon"/></a>
          </div>
        </div>

        <div className="form-card__info box form-card">
          <Input label="full name" type="text" id="full_name" name="fullName" />
          <Input label="email" type="email" id="email" name="email" placeholder="you@example.com" />
          <Input label="phone number" type="tel" id="phone_number" name="phoneNumber" pattern="[0-9]{10}" placeholder="+(000) 000-0000" />
          <Input label="name of hotel" type="text" id="hotel_name" name="hotelName" />
          <Input label="hotel position" type="text" id="hotel_position" name="hotelPosition" />
        </div>

        <div className="form-card__message box form-card">
          <TextArea label="message" id="message" name="message" />
          <Button id="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
