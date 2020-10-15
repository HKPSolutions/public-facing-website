import React, { Component } from 'react';
import IntroSection from "../Components/Home/IntroSection";
import FeaturesPitch from "../Components/Home/FeaturesPitch";
import AnalyticsPitch from "../Components/Home/AnalyticsPitch";
import PaymentPitch from "../Components/Home/PaymentPitch";

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