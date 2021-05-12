import React, { useState } from "react";
import Checkbox from "../checkbox/Checkbox";
import preferences from "../../data/preferences.json";
import Validation from "../../validationForm";

export default function InvestmentPlans() {

    const validation = new Validation();

    let array = [];
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const target = e.target;
        const checked = target.type === 'checkbox' ? target.checked : target.value;
        const value = target.value;

        console.log(checked + " value " + value);

        if (checked) {
            array.push(value);
        } else {
            array = array.filter(el => el !== value);
        }

        console.log(array);

    }

    const handleSubmit = async e => {
        e.preventDefault();

        const validateForm = validation.validateInvestmentPreferences(array);
        setErrors(validateForm);

        if (Object.keys(validateForm).length === 0) {

            const loading = document.getElementById("loading");
            loading.classList.add("display");

            await postData();

            loading.innerHTML = "The user has been saved";
        }

        console.log("Submit of the form");
    }

    const postData = async () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "message": "Hello World" })
        };

        const response = await fetch('https://e3c711b4-41bb-4b0b-b1b5-944550274dc9.mock.pstmn.io/v1/user', requestOptions);
        const data = await response.json();

        return data;
    }

    return (
        <div data-testid="investment-preferences">
            <form id="form-id" onSubmit={handleSubmit}>
                <div className="pref__row flex flex-row flex-wrap justify-between">
                    {
                        preferences.preferences.map((preference, i) => {
                            if (i <= 3) {
                                return <Checkbox key={i} label={preference} value={preference} name="preferences" onChange={handleChange} />
                            }
                        })
                    }
                </div>
                <div className="pref__row flex flex-row flex-wrap justify-between">
                    {
                        preferences.preferences.map((preference, i) => {
                            if (i > 3) {
                                return <Checkbox key={i} label={preference} value={preference} name="preferences" onChange={handleChange} />
                            }
                        })
                    }
                </div>
                {errors.check && <span className="form__error">{errors.check}</span>}
            </form>
            <div id="loading" className="loading">Loading...</div>
        </div>
    )
}