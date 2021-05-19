import React, { useContext, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import preferencesList from "../../data/preferences.json";
import Validation from "../../validation/validationForm";
import { UserContext } from "../../context/UserContext";
import ValidationUser from "../../validation/validationUser";
import useForm from "../../hooks/useForm/useForm";

export default function InvestmentPreferences() {

    const { handleChange, handleSubmit } = useForm();

    const validation = new Validation();
    const validationUser = new ValidationUser();

    const [errors, setErrors] = useState({});

    const [user, setUser] = useContext(UserContext);

    const validateAndSubmit = async () => {
        if (validationUser.validateUser(user)) {

            const loading = document.getElementById("loading");
            loading.classList.add("display");

            try {
                const response = await postData();

                resetUser();

            } catch (error) {
                return Promise.reject(error);
                loading.innerHTML = error;
            }
            //loading.innerHTML = "The user has been saved";

            loading.innerHTML = "The user has been saved " + JSON.stringify(user);
        } else {
            setErrors({ user: "Some inputs are missed, back to the homepage" });
        }
    }

    const postData = async () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        try {
            const response = await fetch('https://e3c711b4-41bb-4b0b-b1b5-944550274dc9.mock.pstmn.io/v1/user', requestOptions);
            const data = await response.json();

            return Promise.resolve(data);
        } catch (error) {
            console.log(error);
            return Promise.reject(error);
        }
    }

    const resetUser = () => {
        setUser({
            name: "",
            phone: "",
            email: "",
            country: "",
            from: 10000,
            to: 200000,
            radio: "",
            preferences: []
        });
    }

    return (
        <div data-testid="investment-preferences">
            <form id="form-id" onSubmit={(e) => handleSubmit(e, validation.validateInvestmentPreferences(user.preferences), validateAndSubmit)}>
                <div className="pref__row flex flex-row justify-between">
                    {
                        preferencesList.preferences.map((preference, i) => {
                            if (i <= 3) {
                                return <Checkbox key={i} label={preference} value={preference} name="preferences" onChange={(e) => handleChange(e, "array")} />
                            }
                        })
                    }
                </div>
                <div className="pref__row flex flex-row justify-between">
                    {
                        preferencesList.preferences.map((preference, i) => {
                            if (i > 3) {
                                return <Checkbox key={i} label={preference} value={preference} name="preferences" onChange={(e) => handleChange(e, "array")} />
                            }
                        })
                    }
                </div>
                {errors.check && <span className="form__error">{errors.check}</span>}
            </form>
            <div id="loading" className="loading">Loading...</div>
            {errors.user && <span className="form__error">{errors.user}</span>}
        </div>
    )
}
