import React from "react";
import Radiobox from "../radiobox/Radiobox";
import PriceInput from "../priceInput/PriceInput";
import PriceSlider from "../priceSlider/PriceSlider";
import useForm from "../../useForm";

export default function InvestmentPlans() {

    const { handleChange, values, handleSubmit, errors } = useForm();

    return (
        <div data-testid="investment-plans" className="flex flex-col">
            <div className="investment__question">How much are you planning to invest in this year?</div>
            <form id="form-id" onSubmit={handleSubmit}>

                <div className="form__item flex flex-row justify-between">
                    <div className="form__name col-2">
                        <PriceInput name="from" min="10000" max="500000" label="From" value={values.from} onChange={handleChange} />
                        {errors.from && <span className="form__error">{errors.from}</span>}
                    </div>
                    <div className="col-2">
                        <PriceInput name="to" min="50000" label="To" value={values.to} onChange={handleChange} />
                        {errors.to && <span className="form__error">{errors.to}</span>}
                    </div>
                </div>
                <div className="form__item">
                    <PriceSlider start={values.from} end={values.to}/>
                </div>
                <div className="flex flex-col">
                    <div className="investment__question">Are you an accredited investor?</div>
                    <div className="flex flex-row">
                        <Radiobox labelFor="yes" label="Yes" name="radio" value={true} checked={values.radio === "true"} handleChange={handleChange} />
                        <Radiobox labelFor="no" label="No" name="radio" value={false} checked={values.radio === "false"} handleChange={handleChange} />
                    </div>
                    {errors.radio && <span className="form__error">{errors.radio}</span>}
                </div>
            </form>
        </div>
    )
}