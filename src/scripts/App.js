import React, { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import {StepContext} from "./context/StepContext";

export default function App() {

    const [step, setStep] = useState(1);

    return (
        <StepContext.Provider value={[step, setStep]}>
            <div className="app-container">
                <Sidebar />
                <Main />
            </div>
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