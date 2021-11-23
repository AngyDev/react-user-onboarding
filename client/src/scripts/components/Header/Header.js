import React, { useContext, useState } from "react";
import { StepContext } from "../../context/StepContext";
import { TranslationContext } from "../../context/TranslationContext";
import Button from "../Button/Button";
import GetHelp from "../GetHelp/GetHelp";
import Modal from "../Modal/Modal";
import translations from "../../translations/translations.json";

/**
 * Header Component
 * @returns The header render
 */
export default function Header() {
    const [step] = useContext(StepContext);
    const [translation, setTranslation] = useContext(TranslationContext);

    const [isOpen, setIsOpen] = useState(false);

    const openCloseModal = () => {
        setIsOpen(!isOpen);
    }

    const handleTranslation = (e) => {
        const { value } = e.target;

        localStorage.setItem("language", value);

        setTranslation(translations[localStorage.language]);

    }

    //console.log(localStorage);

    return (
        <div data-testid="header" name="header" className="header flex justify-between align-center">
            <div>{translation.header.page[0]} {step} {translation.header.page[1]}</div>
            {
                step === 1 &&
                <div>
                    <select className="select" value={localStorage.language} onChange={handleTranslation}>
                        <option value="english">English</option>
                        <option value="italian">Italiano</option>
                    </select>
                </div>
            }
            <div className="flex align-center">
                <div style={{ paddingRight: "6px" }}>{translation.header.text}</div>
                <Button typeClass="link" text={translation.header.helpBtn} arrow="left" handleClick={openCloseModal} />
                <Modal open={isOpen} onClose={openCloseModal}>
                    <GetHelp />
                </Modal>
            </div>
        </div>
    )
}