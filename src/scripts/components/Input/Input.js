import React from "react";

export default function Input(props) {
    return (
        <label data-testid="input" htmlFor={props.inputName} className={`form__label flex flex-col ${props.labelClass}`}>{props.label}
            <input 
                data-testid="input-input"
                className={`form__element form__input ${props.inputClass}`} 
                type={props.inputType} 
                name={props.inputName} 
                value={props.value}
                onChange={props.onChange}
                />
        </label>
    )
}