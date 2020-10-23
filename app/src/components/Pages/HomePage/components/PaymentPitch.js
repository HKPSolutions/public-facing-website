import React from 'react'
import Feature from './Feature'

function PaymentPitch(props) {
    return (
        <div className="black">
            <div className="pitch-container pitch-padding">
                <div className="pitch-titles">
                Pay exactly for the number of rooms cleaned              
                </div>
                <div className="features">
                    <Feature number="1" desc="Housekeeping costs adjust automatically in line with occupancy to decrease susceptibility to sudden fluctuations
"/>
                    <Feature number="2" desc="Decrease dependency on weekly or seasonal forecasting models to determine housekeeper load
"/>
                </div>
            </div>
        </div>
    )
}

export default PaymentPitch;