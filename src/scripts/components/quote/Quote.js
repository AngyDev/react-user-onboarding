import React from "react";

/**
 * Quote component
 * @param {*} props The text, the author name and the author role
 * @returns The quote box with text, author name and author role
 */
export default function Quote(props) {
    return (
        <div className="quote">
            <div className="quote__container">
                <div className="quote__marks flex align-center justify-center">
                    <img src="./images/sidebar/quotation-marks.svg" alt="Quotation marks"/>
                </div>
                <div className="quote__content">
                    <div className="quote__text" data-testid="quote-text">{props.text}</div>
                    <div className="flex flex-row flex-wrap justify-between">
                        <div className="flex flex-col">
                            <span className="author__name" data-testid="quote-author">{props.authorName}</span>
                            <span className="author__role" data-testid="quote-author-role">{props.authorRole}</span>
                        </div>
                        <img src="./images/sidebar/logo-UP.svg" alt="Logo UP" />
                    </div>
                </div>
            </div>
        </div>
    )
}