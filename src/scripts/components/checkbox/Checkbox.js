import React from "react";

export default function Checkbox(props) {
    return (
        <div className="checkbox flex flex-col justify-between">
            <input 
                className="checkbox__input"
                type="checkbox" 
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