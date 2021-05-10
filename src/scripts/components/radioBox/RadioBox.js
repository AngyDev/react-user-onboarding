import React from "react";

export default function RadioBox(props) {

    const onBoxClick = () => {
        document.getElementById(id).click()
    };

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