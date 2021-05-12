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

    function handleSubmit(event) {
        event.preventDefault();

        setErrors(validation.validateInvestmentPreferences(array));

        console.log("Submit of the form");
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
        </div>
    )
}