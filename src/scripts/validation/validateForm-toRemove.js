export default function validateForm(values) {
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
    if(!values.country) {
        errors.country = "Country is required";
    }
    
    // From
    if(!values.from) {
        errors.from = "From is required";
    }
    return errors;
}