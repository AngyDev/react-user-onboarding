import { useState, useContext } from 'react';
import { StepContext } from "./context/StepContext";

const useForm = validate => {
    const [step, setStep] = useContext(StepContext);

    const [values, setValues] = useState({
        name: "",
        phone: "",
        email: "",
        country: "",
        from: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validation = validate(values);
        setErrors(validation);
        
        // Checks if there aren't errors and goes to the next step
        if(Object.keys(validation).length === 0) {
            setStep(step + 1);
        }
        
        console.log("name " + values.name + " from " + values.from);
    }

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;