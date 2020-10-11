import React, { useState } from 'react';
import './ContactPage.scss';

import linkedin from './assets/icons/LinkedIn.svg';
import Email from './assets/icons/Email.svg';


function ContactPage() {
  const [focus, setFocus] = useState("");

  // sets the current focused input
  function focusEvent(id) {
    return () => setFocus(id);
  }

  // add "focused" class to the focused div
  function className(id) {
    return "form-input-item " + (id === focus ? "focused" : "");
  }

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
          <div className={className("full_name")}><label htmlFor="fname">full name</label><br />
            <input onFocus={focusEvent("full_name")} type="text" id="full_name" name="fullName" /></div>
          <div className={className("email")}><label htmlFor="lname">email</label><br />
            <input onFocus={focusEvent("email")} type="email" id="email" name="email" placeholder="you@example.com" /><br /></div>
          <div className={className("phone_number")}><label htmlFor="phone">phone number</label><br />
            <input onFocus={focusEvent("phone_number")} type="tel" id="phone_number" name="phoneNumber" pattern="[0-9]{10}" placeholder="+(000) 000-0000"></input><br /></div>
          <div className={className("hotel_name")}><label htmlFor="lname">name of hotel</label><br />
            <input onFocus={focusEvent("hotel_name")} type="text" id="hotel_name" name="hotelName" /><br /></div>
          <div className={className("hotel_position")}><label htmlFor="lname">hotel position</label><br />
            <input onFocus={focusEvent("hotel_position")} type="text" id="hotel_position" name="hotelPosition" /><br /></div>
        </div>

        <div className="form-card__message box form-card">
          <div className={className("message")}><label htmlFor="lname">message</label><br />
            <textarea onFocus={focusEvent("message")} id="message" name="message" /><br /></div>
          <input onFocus={focusEvent("submit")} id="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
