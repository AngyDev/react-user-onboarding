import React, { useContext } from "react";
import Logo from "../Logo/Logo";
import Checklist from "../Checklist/Checklist";
import Quote from "../Quote/Quote";
import { StepContext } from "../../context/StepContext";
import { TranslationContext } from "../../context/TranslationContext";

/**
 * Sidebar component
 * @returns The sidebar of the app with logo, checklist of step title and the quote box
 */
export default function Sidebar() {
    const [step] = useContext(StepContext);
    const [translation] = useContext(TranslationContext);
    
    return (
        <div data-testid="sidebar" className="sidebar sidebar__container flex flex-col justify-between">
            <Logo />
            <Checklist />
            <Quote text={translation.quotes[step].text} authorName={translation.quotes[step].authorName} authorRole={translation.quotes[step].authorRole}/>
        </div>
    )
}