import React from 'react';
import './style.scss';

import Base from "./Base";

/**
 * Represents the [input]
 * 
 * @param {*} props - [label] represents the label of the form
 */
function Input({label, ...props}) {
    return (
        <Base label={label}>
            <input {...props} />
        </Base>
    );
}

export default Input;
