import React, { useContext } from "react";
import { StepContext } from "../../context/StepContext";
import steps from "../../data/steps.json";
import ContactDetails from "../../components/contactDetails/ContactDetails";

export default function Step() {

    const [step, setStep] = useContext(StepContext);

    return (
        <div data-testid="step" name="step" className="flex flex-col">
            <div className="step">
                <div className="step__title">{steps.stepPage[step].title}</div>
                <div className="step__caption">{steps.stepPage[step].caption}</div>
            </div>
            <ContactDetails />
        </div>
    )
}