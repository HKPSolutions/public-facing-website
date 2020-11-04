import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './DemoPage.scss';

import { Input, Button } from "../../Form";
import { Link } from 'react-router-dom';

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
        break;
      default:
        setClass("alert alert_h")
    }

    setMessage(message);

    if (shouldClose)
      setTimeout(() => setClass("alert alert_h"), 5000);
  };

  const alert = () => <div className={className}>{message}</div>;

  return [alert, sendAlert];
}

/**
 *  Demo page component with mobile version
 */
function DemoPage() {
  const [Alert, sendAlert] = useAlert();
  const formRef = useRef();


  function onSubmit(e) {
    e.preventDefault();
    sendAlert("Sending....", AlertTypes.Sending, false);
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, "template_eone7no", formRef.current, process.env.REACT_APP_EMAILJS_USER_ID)
      .then((result) => {
        sendAlert("Message send!!", AlertTypes.Success);
      }, (error) => {
        sendAlert("Something Went wrong!!", AlertTypes.Error);
      });
  }

  return (
    <div className="demo__page">
      <div className="demo__page__message box">
        <h1 className="demo__page__message__title">$1 per room per month</h1>
        <p className="demo__page__message__description">
          Through the end of 2020, we are running a new user promotion of $1/room/month. Contact us to get started or checkout our demo.
          </p>
        <Link to='/contact'><button>Contact Us</button></Link>
      </div>

      <div className="demo__page__form-card box form-card">
        <form onSubmit={onSubmit} ref={formRef}>
          <h2>Demo Signup</h2>
          <hr />
          <Input label="full name" type="text" id="full_name" name="fullName" />
          <Input label="email" type="email" id="email" name="email" placeholder="you@example.com" />
          <Input label="phone number" type="tel" id="phone_number" name="phoneNumber" pattern="[0-9]{10}" placeholder="+(000) 000-0000" />
          <Input label="name of hotel" type="text" id="hotel_name" name="hotelName" />
          <Input label="hotel position" type="text" id="hotel_position" name="hotelPosition" />
          <Button id="submit" value="Submit" />
          <Alert />
        </form>
      </div>
    </div>
  );
}

export default DemoPage;
