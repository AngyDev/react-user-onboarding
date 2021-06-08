import React, { useContext } from "react";
import Button from "../Button/Button";
import { StepContext } from "../../context/StepContext";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

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
            <Link to="/">
                <Button typeClass="link" text="Back to the homepage" arrow="right" handleClick={backToHome} />
            </Link>
            <div className="flex">
                {(step === 1) &&
                    <Link to="/step2">
                        <Button typeClass="btn btn__skip pad" text="Skip for now" handleClick={skipStep} />
                    </Link>
                }
                {(step === 2) &&
                    <Link to="/step3">
                        <Button typeClass="btn btn__skip pad" text="Skip for now" handleClick={skipStep} />
                    </Link>
                }
                {(step === 3) &&
                    <Link to="/step3">
                        <Button typeClass="btn btn__skip pad" text="Skip for now" handleClick={skipStep} />
                    </Link>
                }
                {
                    step === 3 ? <Button typeClass="btn btn__next" text="Finish" form="form-id" />
                        : <Button typeClass="btn btn__next" text="Next Step" arrow="left" form="form-id" />
                }
            </div>
        </div>
    )
}