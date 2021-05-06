import React from "react";

/**
 * The button Component
 * @param {Props} props - The class type of the button, the text of the button, the arrow and onclick function
 * @returns The button render
 */
export default function Button(props) {

    let leftArrow = "";
    let rightArrow = "";

    if(props.arrow === "left") {
        leftArrow = <i className="icon-arrow-left"></i>;
    } else if (props.arrow === "right") {
        rightArrow = <i className="icon-arrow-right"></i>;
    }

    return(
        <button data-testid="button" className={`button ${props.typeClass} flex align-center`} onClick={props.handleClick}>{rightArrow}{props.text}{leftArrow}</button>
    )
}
