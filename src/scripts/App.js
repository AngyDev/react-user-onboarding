import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
//import {StepProvider} from "./context/StepContext";

export const StepContext = React.createContext();

export default function App() {

    const [step, setStep] = useState(1);

    return (
        <StepContext.Provider value={step}>
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