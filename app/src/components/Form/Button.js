import React from 'react';
import './style.scss';

/**
 * Represents [submit] 
 * 
 * @param {*} props 
 */
function Button(props) {
    return (
        <input type="submit" {...props} />
    );
}

export default Button;
