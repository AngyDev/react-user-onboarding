import React, { useContext } from "react";
import { StepContext } from "../../context/StepContext";
import Button from "../button/Button";

/**
 * Header Component
 * @returns The header render
 */
export default function Header() {
    const [step] = useContext(StepContext);
    return (
        <div name="header" className="header flex justify-between align-center">
            <div>STEP {step} OF 3</div>
            <div className="flex align-center">
                <div>Lost or have trouble?</div>
                <Button typeClass="link" text="Get help" arrow="left"/>
            </div>
        </div>
    )
}