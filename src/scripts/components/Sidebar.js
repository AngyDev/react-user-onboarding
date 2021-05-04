import React from "react";
import Logo from "./Logo";
import Checklist from "./Checklist";
import Quote from "./Quote";

export default function Sidebar() {
    return (
        <div className="sidebar sidebar__container flex flex-col justify-between">
            <Logo />
            <Checklist />
            <Quote />
        </div>
    )
}