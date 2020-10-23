import React, { Component } from 'react';
import IntroSection from "./components/IntroSection";
import FeaturesPitch from "./components/FeaturesPitch";
import AnalyticsPitch from "./components/AnalyticsPitch";
import PaymentPitch from "./components/PaymentPitch";
import "./HomePage.scss";

class HomeView extends Component {
    render() {
        return (
            <div className="home">
                <IntroSection />
                <FeaturesPitch />
                <AnalyticsPitch />
                <PaymentPitch />
            </div>
        )
    }
}

export default HomeView;
