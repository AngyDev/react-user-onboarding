import { useState, useContext } from 'react';
import { StepContext } from "./context/StepContext";
import Validation from "./validation/validationForm";
import { UserContext } from "./context/UserContext";

const useForm = () => {
    const [step, setStep] = useContext(StepContext);
    const [values, setValues] = useContext(UserContext);

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
            const contactErrors = validation.validateContact(values);
            setErrors(contactErrors);
            
            checksErrors(contactErrors);

        } else if (step === 2) {
            const plansErrors = validation.validateInvestmentPlans(values);
            setErrors(plansErrors);
            
            checksErrors(plansErrors);
        }

    }

    /**
     * Checks if there aren?t errors and goes to the next step
     * @param {Object} errors 
     */
    const checksErrors = (errors) => {
        if(Object.keys(errors).length === 0) {
            setStep(step + 1);
        }
    }

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;