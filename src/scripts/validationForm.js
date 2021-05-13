export default class ValidationForm {

    /**
     * Validates the form of investment preferences
     * @param {Object} values 
     * @returns An Object of errors
     */
    validateContact(values) {
        let errors = {};

        if (!values.name.trim()) {
            errors.name = "Name is required";
        }

        // Phone
        if (!values.phone.trim()) {
            errors.phone = "Phone is required";
        } else if (!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*/.test(values.phone)) {
            errors.phone = "Enter a valid phone";
        }

        // Email
        if (!values.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = "Enter a valid email";
        }

        // Country
        if (!values.country) {
            errors.country = "Country is required";
        }

        return errors;
    }

    /**
     * Validates the form of investment preferences
     * @param {Object} values 
     * @returns An Object of errors
     */
    validateInvestmentPlans(values) {
        let errors = {};

        // From 
        if (!values.from) {
            errors.from = "From is required";
        }

        // To
        if (!values.to) {
            errors.to = "To is required";
        }

        // Radiobox
        if(!values.radio) {
            errors.radio = "Answer is required";
        }

        return errors;
    }

    /**
     * Validates the form of investment preferences
     * @param {Object} values 
     * @returns An Object of errors
     */
    validateInvestmentPreferences(values) {
        let errors = {};

        // Checkbox
        if (values.length === 0) {
            errors.check = "Answer is required";
        }

        return errors;
    }
}