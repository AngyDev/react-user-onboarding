import React, { useContext } from "react";
import Button from "../button/Button";
import { StepContext } from "../../context/StepContext";

export default function Navbar() {

    const [step, setStep] = useContext(StepContext);

    const skipStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    }

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    }

    return (
        <div data-testid="navbar" name="navbar" className="flex justify-between align-center">
            <Button typeClass="link" text="Back to the homepage" arrow="right" handleClick={prevStep}/>
            <div className="flex">
                <Button typeClass="btn btn__skip pad" text="Skip for now" handleClick={skipStep}/>
                {
                    step === 3 ? <Button typeClass="btn btn__next" text="Finish" form="form-id"/> 
                    : <Button typeClass="btn btn__next" text="Next Step" arrow="left" form="form-id"/>
                }
            </div>
        </div>
    )
}