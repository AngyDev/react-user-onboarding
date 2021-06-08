import React, { useContext } from "react";
import Radiobox from "../Radiobox/Radiobox";
import PriceInput from "../PriceInput/PriceInput";
import PriceSlider from "../PriceSlider/PriceSlider";
import useForm from "../../hooks/useForm/useForm";
import ValidationForm from "../../validation/validationForm";
import { StepContext } from "../../context/StepContext";
import { UserContext } from "../../context/UserContext";
import { useHistory } from "react-router";

export default function InvestmentPlans() {

    const { handleChange, values, handleSubmit, errors } = useForm();

    const [step, setStep] = useContext(StepContext);
    const [user, setUser] = useContext(UserContext);

    const validation = new ValidationForm();

    let history = useHistory();

    const nextStep = () => {
        setStep(step + 1);
        history.push("/step3");
    }

    return (
        <div data-testid="investment-plans" className="flex flex-col">
            <div className="investment__question">How much are you planning to invest in this year?</div>
            <form id="form-id" onSubmit={(e) => handleSubmit(e, validation.validateInvestmentPlans(user), nextStep)}>

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