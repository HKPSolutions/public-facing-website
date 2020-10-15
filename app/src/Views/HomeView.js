import React, { Component } from 'react';
import IntroSection from "../components/Home/IntroSection";
import FeaturesPitch from "../components/Home/FeaturesPitch";
import AnalyticsPitch from "../components/Home/AnalyticsPitch";
import PaymentPitch from "../components/Home/PaymentPitch";

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
