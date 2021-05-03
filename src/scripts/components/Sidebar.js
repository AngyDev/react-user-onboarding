import React from "react";
import Logo from "./Logo";
import Checklist from "./Checklist";

export default function Sidebar() {
    return (
        <div className="sidebar sidebar__container flex flex-col">
            <Logo />
            <Checklist />
        </div>
    )
}