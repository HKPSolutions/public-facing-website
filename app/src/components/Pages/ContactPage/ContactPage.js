import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactPage.scss';

import linkedin from './assets/icons/LinkedIn.svg';
import Email from './assets/icons/Email.svg';
import { Input, TextArea, Button } from "../../Form";


function useFormState() {
  const [formValue, setValue] = useState({});

  var onValueChange = (name) => {
    return (e) => {
      var { value } = e.target;

      setValue(oldForm => ({
        ...oldForm,
        [name]: value
      }));
    }
  }

  var getValue = (name) => {
    return formValue[name] || "";
  }

  return [formValue, onValueChange, getValue];
}

const AlertTypes = {
  "Error": 0,
  "Success": 1,
  "Sending": 3
}

function useAlert() {
  const [className, setClass] = useState("alert alert_h");
  const [message, setMessage] = useState("");

  var sendAlert = (message, alertType, shouldClose = true) => {
    switch (alertType) {
      case 0:
        setClass("alert alert_f");
        break;
      case 1:
        setClass("alert alert_s");
        break;
      case 3:
        setClass("alert alert_sending");
    }

    setMessage(message);

    if (shouldClose)
      setTimeout(() => setClass("alert alert_h"), 5000);
  };

  const alert = () => <div className={className}>{message}</div>;

  return [alert, sendAlert];
}

/**
 *  Contact page component with mobile version
 * 
 *  email: 
 */
function ContactPage() {
  const [formValue, onValueChange, getValue] = useFormState();
  const [Alert, sendAlert] = useAlert();

  function onSubmit(e) {
    e.preventDefault();
    if (formValue.message) {
      sendAlert("Sending....", AlertTypes.Sending, false);
      emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formValue, process.env.REACT_APP_EMAILJS_USER_ID)
        .then((result) => {
          sendAlert("Message send!!", AlertTypes.Success);
        }, (error) => {
          sendAlert("Something Went wrong!!", AlertTypes.Error);
        });
    }
  }

  return (
    <div className="contact-us__page">
      <form className="container" onSubmit={onSubmit}>
        <div className="contact-us__message box ">
          <h1 className="contact-us__message__title">Contact Us!</h1>
          <p className="contact-us__message__decription">Our team is happy to answer any questions you may have. Feel free to reach out!</p>
          <div className="social-icons">
            <a href="!#"><img className="linkedin-icon" src={linkedin} alt="linkedin-icon"/></a>
            <a href="!#"><img className="email-icon" src={Email} alt="email-icon"/></a>
          </div>
        </div>

        <div className="form-card__info box form-card">
          <Input label="full name" value={getValue("fullName")} onChange={onValueChange("fullName")} type="text" id="full_name" name="fullName" />
          <Input label="email" value={getValue("email")} onChange={onValueChange("email")} type="email" id="email" name="email" placeholder="you@example.com" />
          <Input label="phone number" value={getValue("phoneNumber")} onChange={onValueChange("phoneNumber")} type="tel" id="phone_number" name="phoneNumber" pattern="[0-9]{10}" placeholder="+(000) 000-0000" />
          <Input label="name of hotel" value={getValue("hotelName")} onChange={onValueChange("hotelName")} type="text" id="hotel_name" name="hotelName" />
          <Input label="hotel position" value={getValue("hotelPosition")} onChange={onValueChange("hotelPosition")} type="text" id="hotel_position" name="hotelPosition" />
        </div>

        <div className="form-card__message box form-card">
          <TextArea label="message" value={getValue("message")} onChange={onValueChange("message")} id="message" name="message" />
          <Button id="submit" value="Submit" />
          <Alert />
        </div>
      </form>
    </div>
  );
}

export default ContactPage;
