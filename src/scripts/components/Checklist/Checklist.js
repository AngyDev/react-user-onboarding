import React, {useContext} from "react";
import ChecklistItem from "../ChecklistItem/ChecklistItem";
import steps from "../../data/steps.json";
import {StepContext} from "../../context/StepContext";

/**
 * Checklist component
 * @returns The list of the step title
 */
export default function Checklist() {
    const [step] = useContext(StepContext);
    return (
        <div name="checklist">
            <ul className="checklist">
                { steps.stepTitles.map((title, i) => <ChecklistItem key={i} stepTitle={title} lastTitle={steps.stepTitles.length === i+1} active={i+1 <= step ? true : false}/>) }
            </ul>
            <hr className="spacing spacing--lg"></hr>
        </div>
    )
}
