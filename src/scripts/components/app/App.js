import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import { StepContext } from "../../context/StepContext";
import { UserProvider } from "../../context/UserContext";

export default function App() {

    const [step, setStep] = useState(1);

    return (
        <StepContext.Provider value={[step, setStep]}>
            <UserProvider >
                <div className="app-container">
                    <Sidebar />
                    <Main />
                </div>
            </UserProvider>
        </StepContext.Provider>
    )

    /*return (
        <StepProvider>
            <div className="app-container">
                <Sidebar />
                <Main />
            </div>
        </StepProvider>
    )*/
}