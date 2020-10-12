import React from 'react';
import './style.scss';

import Base from "./Base";

/**
 * Represents the [textarea]
 * 
 * @param {*} props - [label] represents the label of the form
 */
function TextArea({label, ...props}) {
    return (
        <Base label={label}>
            <textarea {...props} />
        </Base>
    );
}

export default TextArea;
