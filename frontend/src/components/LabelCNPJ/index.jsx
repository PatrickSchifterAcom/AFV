import React from 'react';
import InputMask from 'react-input-mask';

import './style.css';

const LabelCNPJ = ({description, name, value, className, disabled}) => {
    return (
        <div className={"default-input " + className}>
            <label htmlFor={name}>{description}</label>
            <InputMask 
                mask="99.999.999/9999-99"
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

export default LabelCNPJ