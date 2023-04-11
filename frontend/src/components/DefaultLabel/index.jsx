import React from 'react';
import './style.css'

const DefaultLabel = ({description, name, value, className, disabled}) => {
    return (
        <div className={"default-input " + className}>
            <label htmlFor={name}>{description}</label>
            <input
                type="text"
                id={name}
                name={name}
                value={value}
                inputMode="numeric"
                disabled={disabled}
            />
        </div>
    )
}

export default DefaultLabel