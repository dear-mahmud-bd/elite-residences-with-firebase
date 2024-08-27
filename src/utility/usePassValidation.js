import { useState } from 'react';

const usePasswordValidation = () => {
    const message1 = '- Must have an uppercase letter in the password';
    const message2 = '- Must have a lowercase letter in the password';
    const message3 = '- Length must be at least 6 characters';

    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([message1, message2, message3]);
    const [isTouched, setIsTouched] = useState(false);
    // validate the password
    const handleValidatePassword = (value) => {
        setPassword(value);
        const newErrors = [];
        if (!/[A-Z]/.test(value)) newErrors.push(message1);
        if (!/[a-z]/.test(value)) newErrors.push(message2);
        if (value.length < 6) newErrors.push(message3);
        setErrors(newErrors);
    };
    const handlePasswordFocus = () => {
        setIsTouched(true);
    };



    const mismatchMessage = "Passwords don't match. Or, rewrite full confirm password again";
    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmErrors, setConfirmErrors] = useState([]);
    const [confirmIsTouched, setConfirmIsTouched] = useState(false);
    // validate the confirm password
    const handleValidateConfirmPass = (value) => {
        setConfirmPassword(value);
        const newErrors = [];
        if (value !== password) newErrors.push(mismatchMessage);
        setConfirmErrors(newErrors);
    };
    const handleConfirmFocus = () => {
        setConfirmIsTouched(true);
    };



    // function to check if form can be submitted or not ...
    const canSubmit = () => {
        return (errors.length === 0 && confirmErrors.length === 0 && password === confirmPassword);
    };

    return {
        password,
        errors,
        isTouched,
        handleValidatePassword,
        handlePasswordFocus,
        confirmPassword,
        confirmErrors,
        confirmIsTouched,
        handleValidateConfirmPass,
        handleConfirmFocus,
        canSubmit
    };
};

export default usePasswordValidation;