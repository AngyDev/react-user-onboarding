import React, { useContext } from "react";
import Button from "../Button/Button";
import { StepContext } from "../../context/StepContext";
import { UserContext } from "../../context/UserContext";
import { Link, useHistory } from "react-router-dom";

export default function Navbar() {

    const [step, setStep] = useContext(StepContext);
    const [user, setUser] = useContext(UserContext);
    let history = useHistory();

    /**
     * Skips the step without any checks on the inputs
     */
    const skipStep = () => {
        if (step < 3) {
            setStep(step + 1);
            // go to the next page
            history.push('/step' + (step + 1))
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
            <Link to="/">
                <Button typeClass="link" text="Back to the homepage" arrow="right" handleClick={backToHome} />
            </Link>
            <div className="flex">
                <Button typeClass="btn btn__skip pad" text="Skip for now" handleClick={skipStep} />
                <Button typeClass="btn btn__next" text={step === 3 ? "Finish" : "Next Step"} arrow={ step!==3 && "left"} form="form-id" />
            </div>
        </div>
    )
}