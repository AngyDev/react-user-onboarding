import React from "react";

export default function Radiobox(props) {

    return (
        <div className="radiobox">
            <label htmlFor={props.labelFor} className="flex align-center justify-center">
                <input
                    className="radiobox__input"
                    type="radio"
                    name={props.name}
                    value={props.value}
                    checked={props.checked}
                    onChange={props.handleChange}
                />
                {props.label}
            </label>
        </div>
    )
}