import React from "react";
import Button from "../button/Button";

import steps from "../../data/steps.json";

export default function ContactDetails() {

    return (
        <div data-testid="contact">
            <form id="form-id" data-testid="contact-form" action="" className="contact__form flex flex-col" onSubmit={alert('Form submitted!')}>
                <div className="form__item flex flex-row justify-between">
                    <div className="form__name col-2">
                        <label htmlFor="name" className="form__label flex flex-col"> Full name
                            <input className="form__element form__input" type="text" name="name" required />
                        </label>
                    </div>
                    <div className="col-2">
                        <label htmlFor="phone" className="form__label flex flex-col">Phone
                    <input className="form__element form__input" type="tel" name="phone" maxLength="10" required/>
                        </label>
                    </div>
                </div>
                <div className="form__item">
                    <label htmlFor="email" className="form__label flex flex-col">Email address
                    <input className="form__element form__input" type="email" name="phone" required/>
                    </label>
                </div>
                <div>
                    <label htmlFor="country" className="form__label flex flex-col">Country</label>
                    <select className="form__element" name="country" id="" required>
                        <option value=""></option>
                        <option value="Italy">Italy</option>
                        <option value="England">England</option>
                        <option value="France">France</option>
                        <option value="Germany">Germany</option>
                        <option value="Spanish">Spanish</option>
                    </select>
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