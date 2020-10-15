import React from 'react';
import Feature from './Feature';

function AnalyticsPitch(props) {
    return (
        <div className="analytics-container">
            <div className="analytics-padding">
                <div className="pitch-titles">
                View metrics and analytics on housekeepers                
                </div>
                <div className="features">
                    <Feature number="1" desc="Monitor average room clean time and average guest cleanliness rating" /> 
                    <Feature number="2" desc="View historic data on room problems to minimize room downtime" />
                    <Feature number="3" desc="Enable housekeepers to view their own historic performance" />
                </div>
            </div>
        </div>
    )
}

export default AnalyticsPitch;