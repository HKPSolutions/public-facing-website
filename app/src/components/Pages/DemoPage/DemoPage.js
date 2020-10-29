import React from 'react';
import './DemoPage.scss';

import { Input, Button } from "../../Form";
import { Link } from 'react-router-dom';

/**
 *  Demo page component with mobile version
 */
function DemoPage() {
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
        <form>
          <h2>Demo Signup</h2>
          <hr />
          <Input label="full name" type="text" id="full_name" name="fullName" />
          <Input label="email" type="email" id="email" name="email" placeholder="you@example.com" />
          <Input label="phone number" type="tel" id="phone_number" name="phoneNumber" pattern="[0-9]{10}" placeholder="+(000) 000-0000" />
          <Input label="name of hotel" type="text" id="hotel_name" name="hotelName" />
          <Input label="hotel position" type="text" id="hotel_position" name="hotelPosition" />
          <Button id="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default DemoPage;
