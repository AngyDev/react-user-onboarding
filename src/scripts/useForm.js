import { useState, useContext } from 'react';
import { StepContext } from "./context/StepContext";
import Validation from "./validationForm";
import { UserContext } from "./context/UserContext";

const useForm = () => {
    const [step, setStep] = useContext(StepContext);
    const [values, setValues] = useContext(UserContext);

    /*const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        country: "",
        from: 10000,
        to: 200000,
        radio: ""
    });*/

    const [errors, setErrors] = useState({});

    const validation = new Validation();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (step === 1) {
            const validateContact = validation.validateContact(values);
            setErrors(validateContact);
            
            // Checks if there aren't errors and goes to the next step
            if(Object.keys(validateContact).length === 0) {
                setStep(step + 1);
            }
        } else if (step == 2) {
            const validatePlans = validation.validateInvestmentPlans(values);
            setErrors(validatePlans);
            
            // Checks if there aren't errors and goes to the next step
            if(Object.keys(validatePlans).length === 0) {
                setStep(step + 1);
            }
        }
        
        console.log("name " + values.name + " from " + values.from);
        console.log(values);
    }

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;