import React, { useContext, useState } from "react";
import { StepContext } from "../../context/StepContext";
import Button from "../Button/Button";
import GetHelp from "../GetHelp/GetHelp";
import Modal from "../Modal/Modal";

/**
 * Header Component
 * @returns The header render
 */
export default function Header() {
    const [step] = useContext(StepContext);

    const [isOpen, setIsOpen] = useState(false);

    const openCloseModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div data-testid="header" name="header" className="header flex justify-between align-center">
            <div>STEP {step} OF 3</div>
            <div className="flex align-center">
                <div style={{ paddingRight: "6px" }}>Lost or have trouble?</div>
                <Button typeClass="link" text="Get help" arrow="left" handleClick={openCloseModal} />
                <Modal open={isOpen} onClose={openCloseModal}>
                    <GetHelp />
                </Modal>
            </div>
        </div>
    )
}