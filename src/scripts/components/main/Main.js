import React from "react";
import Header from "../header/Header";

export default function Main() {
    return (
        <div className="main">
            <hr className="spacing spacing--2"/>
            <div className="main__container flex flex-col">
                <Header />
            </div>
            <hr className="spacing spacing--3"/>
        </div>
    )
}