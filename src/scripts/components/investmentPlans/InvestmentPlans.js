import React, { useContext, useState } from "react";

import RadioBox from "../radioBox/RadioBox";
import useForm from "../../useForm";

export default function InvestmentPlans() {

    const { handleChange, values, handleSubmit, errors } = useForm();

    return (
        <div data-testid="investment-plans" className="flex flex-col">
            <div className="investment__question">How much are you planning to invest in this year?</div>
            <form id="form-id" onSubmit={handleSubmit}>

                <div className="form__item flex flex-row justify-between">
                    <div className="form__name col-2">
                        <label htmlFor="from" className="form__label flex flex-col">From
                            <input
                                className="form__element form__input"
                                type="text"
                                name="from"
                                value={values.from}
                                onChange={handleChange}
                            />
                        </label>
                        {errors.from && <span className="form__error">{errors.from}</span>}
                    </div>
                    <div className="col-2">
                        <label htmlFor="to" className="form__label flex flex-col">To
                            <input
                                className="form__element form__input"
                                type="text"
                                name="to"
                                maxLength="10"
                                value={values.to}
                                onChange={handleChange}
                            />
                        </label>
                        {errors.to && <span className="form__error">{errors.to}</span>}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="investment__question">Are you an accredited investor?</div>
                    <div className="flex flex-row">
                        <RadioBox labelFor="yes" label="Yes" name="radio" value={true} checked={values.radio === "true"} handleChange={handleChange} />
                        <RadioBox labelFor="no" label="No" name="radio" value={false} checked={values.radio === "false"} handleChange={handleChange} />
                    </div>
                    {errors.radio && <span className="form__error">{errors.radio}</span>}
                </div>
            </form>
        </div>
    )
}