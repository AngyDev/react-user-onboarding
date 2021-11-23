import React, { useContext } from "react";
import { StepContext } from "../../context/StepContext";
import { TranslationContext } from "../../context/TranslationContext";

export default function Step({children}) {

    const [step, setStep] = useContext(StepContext);
    const [translation] = useContext(TranslationContext);

    return (
        <div data-testid="step" name="step" className="flex flex-col">
            <div className="step">
                <div className="step__title">{translation.[step].title}</div>
                <div className="step__caption">{translation.[step].caption}</div>
            </div>
            {children}
        </div>
    )
}