import React from 'react'
import CircularPoints from "./CircularPoints"

function Feature(props){
    return (
        <div className="feature">
            <CircularPoints number={props.number}/>
            <div className="feature-description">
                {props.desc}
            </div>
        </div>
    )
}

export default Feature;