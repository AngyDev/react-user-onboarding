import React from "react";
import Header from "../Header/Header";
import Step from "../Step/Step";
import Navbar from "../Navbar/Navbar";

export default function Main({ children }) {
    return (
        <div data-testid="main" className="main flex flex-col">
            <hr className="spacing spacing--2" />
            <div className="main__container flex flex-col justify-between">
                <Header />
                <Step >{children}</Step>
                <Navbar />
            </div>
            <hr className="spacing spacing--3" />
        </div>
    )
}