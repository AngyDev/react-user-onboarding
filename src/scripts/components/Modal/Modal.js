import React from "react";
import Button from "../Button/Button";

export default function Modal({ open, children, onClose }) {
    if (!open) return null;
    return (
        <div className="modal__overlay">
            <div className="modal">
                {children}
                <hr className="spacing spacing--2"></hr>
                <Button typeClass="btn" handleClick={onClose} text="Close Modal" />
            </div>
        </div>
    )
}