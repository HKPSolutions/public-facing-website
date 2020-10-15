import React, { useState, useEffect, Component } from 'react';

const cirStyle = {
    margin: "0 auto",
    position: "relative",
    background: "#689AFA",
    borderRadius: "50%",
    width: "80px",
    height: "80px"
}


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