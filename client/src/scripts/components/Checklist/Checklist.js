import React, { useContext } from "react";
import ChecklistItem from "../ChecklistItem/ChecklistItem";
import { StepContext } from "../../context/StepContext";
import { TranslationContext } from "../../context/TranslationContext";

/**
 * Checklist component
 * @returns The list of the step title
 */
export default function Checklist() {

    const [step] = useContext(StepContext);
    const [translation] = useContext(TranslationContext);

    return (
        <div name="checklist">
            <ul className="checklist">
                {translation.stepTitles.map((title, i) => <ChecklistItem key={i} stepTitle={title} lastTitle={translation.stepTitles.length === i + 1} active={i + 1 <= step ? true : false} />)}
            </ul>
            <hr className="spacing spacing--lg"></hr>
        </div>
    )
}
