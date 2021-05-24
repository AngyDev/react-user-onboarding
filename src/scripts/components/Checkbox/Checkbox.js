import React from "react";

export default function Checkbox(props) {
    return (
        <div data-testid="checkbox" className="checkbox flex flex-col justify-between">
            <input 
                data-testid="checkbox-input"
                className="checkbox__input"
                type="checkbox" 
                aria-label={props.value}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                />
            <label htmlFor="" className="checkbox__label">
                {props.label}
            </label>
        </div>
    )
}