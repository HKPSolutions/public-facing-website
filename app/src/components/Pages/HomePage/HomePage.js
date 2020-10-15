import React, { Component } from 'react';
import IntroSection from "./components/IntroSection";
import FeaturesPitch from "./components/FeaturesPitch";
import AnalyticsPitch from "./components/AnalyticsPitch";
import PaymentPitch from "./components/PaymentPitch";

class HomeView extends Component {
    render() {
        return (
            <div>
                <IntroSection />
                <FeaturesPitch />
                <AnalyticsPitch />
                <PaymentPitch />
            </div>
        )
    }
}

export default HomeView;
