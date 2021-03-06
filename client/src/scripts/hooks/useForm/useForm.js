import { useState, useContext } from 'react';
import Validation from "../../validation/validationForm";
import { UserContext } from "../../context/UserContext";

const useForm = () => {
    const [values, setValues] = useContext(UserContext);

    const [errors, setErrors] = useState({});

    /**
     * A global handle change
     * @param {Event} e - The event of the page
     * @param {String} type - The type of value that the function has to add
     * @returns 
     */
    const handleChange = (e, type) => {

        const { name, value } = e.target;

        if (type === "array") {
            if (!values.preferences.includes(value)) {
                return setValues(prevUser => {
                    return { ...prevUser, [name]: [...prevUser.[name], value] }
                });
            } else {
                return setValues(prevUser => {
                    return { ...prevUser, [name]: [...prevUser.[name], value].filter(el => el !== value) }
                });
            }
        }

        setValues({
            ...values,
            [name]: value
        });

    }

    /**
     * A generic handle submit that checks if there is validation errors and then return the callback
     * @param {Event} e - The event page
     * @param {Object} validateForm - The object of the response of validation
     * @param {Function} callback - A function of callback 
     */
    const handleSubmit = (e, validateForm, callback) => {
        e.preventDefault();

        if (Object.keys(validateForm).length !== 0) {
            setErrors(validateForm);
        } else {
            setErrors({});
            callback();
        }
    }

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;