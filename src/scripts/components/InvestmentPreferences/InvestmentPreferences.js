import React, { useContext, useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Validation from "../../validation/validationForm";
import { UserContext } from "../../context/UserContext";
import ValidationUser from "../../validation/validationUser";
import useForm from "../../hooks/useForm/useForm";
import { preferences } from "../../data/preferences";

export default function InvestmentPreferences() {

    const { handleChange, handleSubmit, errors } = useForm();

    const validation = new Validation();
    const validationUser = new ValidationUser();

    const [userErrors, setUserErrors] = useState({});

    const [user, setUser] = useContext(UserContext);

    const initialState = [
        {
            value: "Single Family",
            isChecked: false
        },
        {
            value: "Residential multifamily",
            isChecked: false
        },
        {
            value: "Commercial retail",
            isChecked: false
        },
        {
            value: "Commercial industrial",
            isChecked: false
        },
        {
            value: "Commercial hospitality",
            isChecked: false
        },
        {
            value: "Commercial warehousing",
            isChecked: false
        },
        {
            value: "Commercial office",
            isChecked: false
        },
        {
            value: "Other",
            isChecked: false
        }
    ];
    const [pref, setPref] = useState(preferences);

    /**
     * Checks if the preferences are selected and change the value in the chekboxes
     */
    /*useEffect(() => {
        user.preferences && user.preferences.forEach(element => {
            setPref(pref.map(item => {
                if (item.value === element) {
                    item.isChecked = true;
                }
                return item;
            }));
        });
    }, []);*/

    const handleClick = (e) => {
        const { value, checked } = e.target;

        setPref(pref.map(item => {
            if (item.value === value) {
                item.isChecked = checked;
            }
            return item;
        }));
    }

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
            setUserErrors({ user: "Some inputs are missed, back to the homepage" });
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
        setPref(pref.map(item => {
            item.isChecked = false;
            return item;
        }));
    }

    return (
        <div data-testid="investment-preferences">
            <form id="form-id" onSubmit={(e) => handleSubmit(e, validation.validateInvestmentPreferences(user.preferences), validateAndSubmit)}>
                <div className="pref__row flex flex-row justify-between">
                    {
                        pref.map((item, i) => {
                            if (i <= 3) {
                                return <Checkbox key={i} label={item.value} value={item.value} name="preferences" onChange={(e) => handleChange(e, "array")} onClick={handleClick} checked={item.isChecked} />
                            }
                        })
                    }
                </div>
                <div className="pref__row flex flex-row justify-between">
                    {
                        pref.map((item, i) => {
                            if (i > 3) {
                                return <Checkbox key={i} label={item.value} value={item.value} name="preferences" onChange={(e) => handleChange(e, "array")} onClick={handleClick} checked={item.isChecked} />
                            }
                        })
                    }
                </div>
                {errors.check && <span className="form__error">{errors.check}</span>}
            </form>
            <div id="loading" className="loading">Loading...</div>
            {userErrors.user && <span className="form__error">{userErrors.user}</span>}
        </div>
    )
}
