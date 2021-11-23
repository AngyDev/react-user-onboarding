import React, { useContext, useEffect, useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import Validation from "../../validation/validationForm";
import { UserContext } from "../../context/UserContext";
import ValidationUser from "../../validation/validationUser";
import useForm from "../../hooks/useForm/useForm";
import { TranslationContext } from "../../context/TranslationContext";
import { saveUser } from "../../utils/api";

export default function InvestmentPreferences() {

    const { handleChange, handleSubmit, errors } = useForm();

    const validation = new Validation();
    const validationUser = new ValidationUser();

    const [userErrors, setUserErrors] = useState({});

    const [user, setUser] = useContext(UserContext);
    const [translation] = useContext(TranslationContext);

    const [prefChecked, setPrefChecked] = useState([]);

    useEffect(() => {
        user.preferences && setPrefChecked(user.preferences);
    }, []);

    const handleClick = (e) => {
        const { value, checked } = e.target;

        if (checked) {
            setPrefChecked([...prefChecked, value]);
        } else {
            setPrefChecked(prefChecked.filter(item => item !== value));
        }
    }

    const validateAndSubmit = async () => {
        if (validationUser.validateUser(user)) {

            const loading = document.getElementById("loading");
            loading.classList.add("display");

            try {
                // const response = await postData();

                const response = await saveUser(user);

                resetUser();

            } catch (error) {
                return Promise.reject(error);
                loading.innerHTML = error;
            }
            //loading.innerHTML = "The user has been saved";

            loading.innerHTML = "The user has been saved " + JSON.stringify(user);
        } else {
            setUserErrors({ user: translation.errors.user });
        }
    }
    /**
     * Old version without server implementation
     */
    // const postData = async () => {

    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(user)
    //     };

    //     try {
    //         const response = await fetch('https://e3c711b4-41bb-4b0b-b1b5-944550274dc9.mock.pstmn.io/v1/user', requestOptions);
    //         const data = await response.json();

    //         return Promise.resolve(data);
    //     } catch (error) {
    //         console.log(error);
    //         return Promise.reject(error);
    //     }
    // }

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
                        translation.checkboxes.map((item, i) => {
                            const checkedC = prefChecked.includes(item);

                            if (i <= 3) {
                                return <Checkbox key={i} label={item} value={item} name="preferences" onChange={(e) => handleChange(e, "array")} onClick={handleClick} checked={checkedC} />
                            }
                        })
                    }
                </div>
                <div className="pref__row flex flex-row justify-between">
                    {
                        translation.checkboxes.map((item, i) => {
                            const checkedC = prefChecked.includes(item);

                            if (i > 3) {
                                return <Checkbox key={i} label={item} value={item} name="preferences" onChange={(e) => handleChange(e, "array")} onClick={handleClick} checked={checkedC} />
                            }
                        })
                    }
                </div>
                {errors.check && <span className="form__error">{translation.errors.check}</span>}
            </form>
            <div id="loading" className="loading">Loading...</div>
            {userErrors.user && <span className="form__error">{userErrors.user}</span>}
        </div>
    )
}
