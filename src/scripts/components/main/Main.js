import React from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

export default function Main() {
    return (
        <div className="main flex flex-col">
            <hr className="spacing spacing--2"/>
            <div className="main__container flex flex-col justify-between">
                <Header />
                <Navbar />
            </div>
            <hr className="spacing spacing--3"/>
        </div>
    )
}