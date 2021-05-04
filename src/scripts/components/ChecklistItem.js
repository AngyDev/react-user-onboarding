import React from "react";

/**
 * Checklist item
 * @param {Array} props - The title of the step, a boolean that indicates if it is the last title
 * @returns 
 */
export default function ChecklistItem(props) {
    return (
        <div>
            <li>
                <div className="flex align-center">
                    <span className="checkbox__container">
                        <span className="checkbox__border">
                            <span className="checkbox__box"></span>
                        </span>
                    </span>
                    <span>{props.stepTitle}</span>
                </div>
                {
                    // if it is the last title doesn't show the lines
                    !props.lastTitle &&
                    <div>
                        <span className="checklist__line"></span>
                        <span className="checklist__line"></span>
                    </div>
                }
            </li>
        </div>)
}