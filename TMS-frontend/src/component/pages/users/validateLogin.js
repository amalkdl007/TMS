function validateLogin(formValues) {

    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formValues.username) {
        errors.username = "Username is required";
    }
    else if (!regex.test(formValues.username)) {
        errors.username = "Email is invalid";
    }
    if (!formValues.password) {
        errors.password = "Password is required";
    }
    else if (formValues.password.length < 5) {
        errors.password = "Password is too short";
    }

    return errors;
}

export default validateLogin;