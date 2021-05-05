import React from "react";

export default function Quote(props) {
    return (
        <div className="quote">
            <div className="quote__container">
                <div className="quote__marks flex align-center justify-center">
                    <img src="./images/sidebar/quotation-marks.svg" alt="Quotation marks"/>
                </div>
                <div className="quote__content">
                    <div className="quote__text">{props.text}</div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className="author__name">{props.authorName}</span>
                            <span className="author__role">{props.authorRole}</span>
                        </div>
                        <img src="./images/sidebar/logo-UP.svg" alt="Logo UP" />
                    </div>
                </div>
            </div>
        </div>
    )
}