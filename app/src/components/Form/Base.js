import React, { useState } from 'react';
import './style.scss';

/**
 * Creates the outline and label for a form element
 * 
 * @param {*} props - [label] represents the label of the form
 */
function Base({ label, children }) {
    const [isFocused, setFocus] = useState(false);

    // adds [onFocus] and [onBlur] in the child
    var inputReactObject = React.Children.only(children);
    var clonedChild = React.cloneElement(inputReactObject, {
        onFocus: (e) => {
            setFocus(true);

            // calls the existing [onFocus] if exists
            if (inputReactObject.props.onFocus)
                inputReactObject.props.onFocus(e);
        },
        onBlur: (e) => {
            setFocus(false);

            // calls the existing [onBlur] if exists
            if (inputReactObject.props.onBlur)
                inputReactObject.props.onBlur(e);
        }
    });

    // returns [className] of the element
    var className = () => "form-input-item" + (isFocused ? " focused" : "");

    return (
        <div className={className()}>
            <label htmlFor={inputReactObject.props.id || ""}>{label}</label><br />
            {clonedChild}<br />
        </div>
    );
}

export default Base;
