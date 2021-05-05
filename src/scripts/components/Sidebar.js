import React, { useContext } from "react";
import Logo from "./Logo";
import Checklist from "./Checklist";
import Quote from "./Quote";
import quotes from "../data/quotes.json";
import { StepContext } from "../context/StepContext";

/**
 * Sidebar component
 * @returns The sidebar of the app with logo, checklist of step title and the quote box
 */
export default function Sidebar() {
    const step = useContext(StepContext);
    return (
        <div className="sidebar sidebar__container flex flex-col justify-between">
            <Logo />
            <Checklist />
            <Quote text={quotes.quotes[step].text} authorName={quotes.quotes[step].authorName} authorRole={quotes.quotes[step].authorRole}/>
        </div>
    )
}