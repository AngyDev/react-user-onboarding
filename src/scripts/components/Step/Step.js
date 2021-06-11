import React, { useContext } from "react";
import { StepContext } from "../../context/StepContext";
import steps from "../../data/steps.json";

export default function Step({children}) {

    const [step, setStep] = useContext(StepContext);

    return (
        <div data-testid="step" name="step" className="flex flex-col">
            <div className="step">
                <div className="step__title">{steps.stepPage[step].title}</div>
                <div className="step__caption">{steps.stepPage[step].caption}</div>
            </div>
            {children}
        </div>
    )
}