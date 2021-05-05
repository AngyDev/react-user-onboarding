import React, {useContext} from "react";
import ChecklistItem from "./ChecklistItem";
import steps from "../data/steps.json";
import {StepContext} from "../App";

export default function Checklist() {
    const step = useContext(StepContext);
    return (
        <div>
            <ul className="checklist">
                { steps.stepTitles.map((title, i) => <ChecklistItem key={i} stepTitle={title} lastTitle = {steps.stepTitles.length === i+1} active={i+1 <= step ? true : false}/>) }
            </ul>
            <hr className="spacing spacing--sm"></hr>
        </div>
    )
}
