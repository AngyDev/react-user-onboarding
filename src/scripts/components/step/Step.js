import React, { useContext } from "react";
import steps from "../../data/steps.json";
import { StepContext } from "../../context/StepContext";

export default function Step() {

    const [step, setStep] = useContext(StepContext);

    return(
        <div name="step" className="flex flex-col">
            <div className="step__title">{steps.stepPage[step].title}</div>
            <div className="step__caption">{steps.stepPage[step].caption}</div>
        </div>
    )
}