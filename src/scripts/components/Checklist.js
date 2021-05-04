import React from "react";
import ChecklistItem from "./ChecklistItem";

export default function Checklist() {
    const stepTitles = ["Contact details", "Investment preferences", "Investment plans"];
    return (
        <div>
            <ul className="checklist">
                { stepTitles.map((title, i) => <ChecklistItem key={i} stepTitle={title} lastTitle = {stepTitles.length === i+1}/>) }
            </ul>
            <hr className="spacing spacing--sm"></hr>
        </div>
    )
}
