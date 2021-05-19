import React, { useContext } from "react";
import Button from "../Button/Button";
import { StepContext } from "../../context/StepContext";
import { UserContext } from "../../context/UserContext";

export default function Navbar() {

    const [step, setStep] = useContext(StepContext);
    const [user, setUser] = useContext(UserContext);

    /**
     * Skips the step without any checks on the inputs
     */
    const skipStep = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    }

    /**
     * Back to the homepage
     */
    const backToHome = () => {
        if (step > 1) {
            setStep(1);
        }
    }

    return (
        <div data-testid="navbar" name="navbar" className="flex justify-between align-center">
            <Button typeClass="link" text="Back to the homepage" arrow="right" handleClick={backToHome} />
            <div className="flex">
                <Button typeClass="btn btn__skip pad" text="Skip for now" handleClick={skipStep} />
                {
                    step === 3 ? <Button typeClass="btn btn__next" text="Finish" form="form-id" />
                        : <Button typeClass="btn btn__next" text="Next Step" arrow="left" form="form-id" />
                }
            </div>
        </div>
    )
}