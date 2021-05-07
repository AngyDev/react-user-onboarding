import React from "react";

export default function InvestmentPlans() {
    return (
        <div data-testid="investment-plans" className="flex flex-col">
            <div className="investment__question">How much are you planning to invest in this year?</div>
            <form action="">

            <div className="form__item flex flex-row justify-between">
                    <div className="form__name col-2">
                        <label htmlFor="from" className="form__label flex flex-col">From
                            <input className="form__element form__input" type="text" name="from" required />
                        </label>
                    </div>
                    <div className="col-2">
                        <label htmlFor="to" className="form__label flex flex-col">To
                    <input className="form__element form__input" type="text" name="to" maxLength="10"/>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}