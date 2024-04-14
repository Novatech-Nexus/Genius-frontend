const Validation = {
  validate: (data) => {
    const validationErrors = {};

    if (!data.firstname.trim()) {
      validationErrors.firstname = 'Firstname is required';
    }

    if (!data.lastname.trim()) {
      validationErrors.lastname = 'Lastname is required';
    }

    if (!data.email.trim()) {
      validationErrors.email = 'email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = 'email is not valid';
    }

    if (!data.phoneNumber.trim()) {
      validationErrors.phoneNumber = 'Phone number is required';
    }

    if (!data.password.trim()) {
      validationErrors.password = 'password is required';
    } else if (data.password.length < 8) {
      validationErrors.password = 'password should be at least 8 characters';
    }

    if (!data.confirmPassword.trim()) {
      validationErrors.confirmPassword = 'password is required';
    } else if (data.confirmPassword !== data.password) {
      validationErrors.confirmPassword = 'password not matched';
    }

    return validationErrors;
  },
};

export default Validation;
