import React from 'react';
import './style.scss';

import FrontDeskUIIMG from './assets/fdui.png';
import MangerUIIMG from './assets/maui.png';
import HousekeeperUIIMG from './assets/hkui.png';
import { Link } from 'react-router-dom';

function Section({ className, heading, count, desc, imgSrc, left = true }) {
  return (
    <div className="ap-root-bg">
      <div className={"chev-" + className}>
        <section className={className + " info_container info_container" + (left ? "_l" : "_r")}>
          <div className={className + "_info app_pg_info ap-flx-bx app_pg_info" + (left ? "_l" : "_r")}>
            <div className="count_int">{count}</div>
            <h1>{heading}</h1>
            <p>{desc}</p>
          </div>
          <div className={className + "_img ap-flx-bx img_cont"}>
            <img id={className + "_img"} className="ap-img" alt="phone" src={imgSrc} />
          </div>
        </section>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app-pg">
      <section className="app-pg_landing">
        <h1 className="app-pg_landing_title">How Our App Works</h1>
        <p className="app-pg_landing_sum">The app calculates the amount to be paid to each housekeeper based on the number of rooms cleaned, with a scaling factor from the customer cleanliness rating. The rate per room and scaling factor is customized by each individual hotel.</p>
        <div className="app-pg_landing_button">
          <Link to='/demo'><button>Sign Up</button></Link>
        </div>
      </section>
      <Section
        className="app-pg_hkui"
        count="1"
        desc="The housekeeper interface allows housekeepers to select rooms to clean, indicate problems with rooms, and access a complete record of their housekeeping history, including guest feedback."
        heading="Housekeeper UI"
        imgSrc={HousekeeperUIIMG}
      />
      <Section
        className="app-pg_maui"
        count="2"
        desc="The Manager interface allows managers to view virtually in real-time all the rooms in the hotel, their cleaning status, and resolve problems flagged by housekeepers and the front desk.  Managers can also view analytics on housekeeper performance and historic data."
        heading="Manager UI"
        imgSrc={MangerUIIMG}
        left={false}
      />
      <Section
        className="app-pg_fdui"
        count="3"
        desc="The Front Desk interface allows the front desk to input customer satisfaction ratings by room and flag room problems."
        heading="Front Desk UI"
        imgSrc={FrontDeskUIIMG}
      />
      <div className="end" />
    </div>
  );
}

export default App;
