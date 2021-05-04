import React from "react";

export default function Quote() {
    return (
        <div className="quote">
            <div className="quote__container">
                <div className="quote__marks flex align-center justify-center">
                    <img src="./images/sidebar/quotation-marks.svg" alt="Quotation marks"/>
                </div>
                <div className="quote__content">
                    <div className="quote__text">We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete</div>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className="author__name">William Mac</span>
                            <span className="author__role">Co-founder, investor</span>
                        </div>
                        <img src="./images/sidebar/logo-UP.svg" alt="Logo UP" />
                    </div>
                </div>
            </div>
        </div>
    )
}