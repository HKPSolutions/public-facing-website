import React from 'react'
import { Link } from 'react-router-dom';

function IntroSection(props) {
    return (
        <div className="intro-container">
            <div className="intro vertical-center">
                <div className="intro-header">
                    Revolutionizing the Way Your Housekeepers are Paid.
                </div>
                <div className="intro-desc">
                    Improving hotel housekeeping by paying housekeepers by the quantity and quality of rooms cleaned
                </div>
                <div className="intro-buttons">
                    <a href="/demo">
                        <button className="intro-button"><Link to='/demo'>Sign Up</Link></button>
                    </a>
                    <a href="/app">
                        <button className="intro-button">Learn More</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default IntroSection;