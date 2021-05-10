import React, { useContext } from "react";

import Button from "../button/Button";
import steps from "../../data/steps.json";
import useForm from "../../useForm";
import validate from "../../validateForm";

import { StepContext } from "../../context/StepContext";


export default function ContactDetails() {

    const { handleChange, values, handleSubmit, errors } = useForm(validate);

    return (
        <div data-testid="contact">
            <form id="form-id" data-testid="contact-form" className="contact__form flex flex-col" onSubmit={handleSubmit}>
                <div className="form__item flex flex-row justify-between">
                    <div className="form__name col-2">
                        <label htmlFor="name" className="form__label flex flex-col"> Full name
                            <input
                                className="form__element form__input"
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                        </label>
                        {errors.name && <span className="form__error">{errors.name}</span>}
                    </div>
                    <div className="col-2">
                        <label htmlFor="phone" className="form__label flex flex-col">Phone
                            <input
                                className="form__element form__input"
                                type="tel"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                                maxLength="10"
                            />
                        </label>
                        {errors.phone && <span className="form__error">{errors.phone}</span>}
                    </div>
                </div>
                <div className="form__item">
                    <label htmlFor="email" className="form__label flex flex-col">Email address
                        <input
                            className="form__element form__input"
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.email && <span className="form__error">{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="country" className="form__label flex flex-col">Country</label>
                    <select
                        className="form__element"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                    >
                        <option value=""></option>
                        <option value="Italy">Italy</option>
                        <option value="England">England</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Spanish">Spanish</option>
                    </select>
                    {errors.country && <span className="form__error">{errors.country}</span>}
                </div>
            </form>

            <div className="contact__privacy flex flex-col">
                <div className="privacy__title">{steps.stepPage[1].privacyTitle}</div>
                <div className="privacy__caption">{steps.stepPage[1].privacyCaption}</div>
                <Button typeClass="link" text="Expand Privacy Policy" arrow="left" />
            </div>
        </div>
    )
}