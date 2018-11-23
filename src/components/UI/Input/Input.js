import React from 'react';
import './Input.css'


function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched;
}


const Input = (props) => {

    const inputType = props.type || 'text';
    const cls = [];
    const htmlFor = `${inputType}-${Math.floor(Math.random() * 100)}`;

    if (isInvalid(props)) {
        cls.push('invalid')
    }

    return (
        <div className={'Input ' + cls}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input type={inputType}
                   id={htmlFor}
                   value={props.value}
                   onChange={props.onChange}

            />

            {isInvalid(props) ? <span>{props.errorMessage}</span> : null}

        </div>
    )
};


export default Input;