import React from 'react';
import Feature from './Feature';

function FeaturesPitch(props) {
    return (
        <div className="feature-pitch">
            <div className="pitch-container pitch-padding">
                <div className="pitch-titles">
                    Improve housekeeping performance through increased responsibility and ownership
                </div>
                <div className="features">
                    <Feature number="1" desc="Housekeepers see a direct effect on their pay based on the number of rooms they clean and how well they clean rooms"/>
                    <Feature number="2" desc="Housekeepers receive feedback from guest remarks on what guests enjoyed about their stay and how to improve their rating"/>
                    <Feature number="3" desc="Closely tying pay and performance will decrease room turnover time while increasing the average room cleanliness"/>
                </div>
            </div>
        </div>
    )
}

export default FeaturesPitch;