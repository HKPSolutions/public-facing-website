import React from 'react';

function CircularPoints(props) {
    return (
        <div className="cirStyle">
            <span className="circular_point_center">
                {props.number}
            </span>
        </div>
    )
}

export default CircularPoints;