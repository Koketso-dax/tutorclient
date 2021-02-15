const yup = require('yup');

const Validation = yup.object().shape(
    {
        email: yup.string().email("Invalid Email").required("Required"),
        password: yup.string().min(8, "Not enough characters").max(16, "Too many characters").required("You Need a password"),
        passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
    });