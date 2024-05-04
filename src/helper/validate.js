import toast from 'react-hot-toast';
import { authenticate } from './helper';

/** Validate login page email */
export async function emailValidate(values){
    const errors = emailVerify({}, values);

    if(values.email){

        //check for the user existance
        const { status } = await authenticate(values.email);

        if(status !== 200){
            errors.exist = toast.error("Email doesn't exist");
        }
    }

    return errors;
}


/** Validate login page password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}


/** Validate Reset password */
export async function resetPasswordValidate(values){
    const errors = resetPasswordVerify({}, values);

    if(values.newPassword !== values.repeatPassword){
        errors.repeatPassword = toast.error("Passwords do not match");
    }

    return errors;
}


/** Validate register page */
export async function registerValidate(values){
    const errors = emailVerify( {}, values );
    passwordVerify(errors, values);
    firstnameVerify(errors, values);
    lastnameVerify(errors, values);
    phoneNumberVerify(errors, values);
    confirmPassword(errors, values);

    return errors;
}


/** Validate Profile page */
export async function profileValidate(values){
    const errors = emailVerify( {}, values );

    return errors;
}


/** Validate employee login page employeeID */
export async function employeeIDvalidate(values){
    const errors = employeeIDVerify({}, values);

    if(values.employeeID){

        //check for the user existance
        const { status } = await authenticate(values.employeeID);

        if(status !== 200){
            errors.exist = toast.error("Employee ID doesn't exist");
        }
    }

    return errors;
}


/** ********************************************************** */

/** Validate email */
function emailVerify(error = {}, values){
    if(!values.email){
        error.email = toast.error('Email is required');
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        error.email = toast.error('Invalid email');
    }

    return error;
}


/** Validate password */
function passwordVerify(errors = {}, values){
    if(!values.password){
        errors.password = toast.error("Password is required");
    }
    else if(values.password.includes(" ")){
        errors.password = toast.error("Password cannot contain spaces");
    }
    else if(values.password.length < 8){
        errors.password = toast.error("Password must be at least 8 characters");
    }
    
    return errors;
}


/** Validate repeatPassword  */
function resetPasswordVerify(errors = {}, values){
    if(!values.newPassword || !values.repeatPassword){
        errors.password = toast.error("Password is required");
    }
    else if(values.newPassword.includes(" ") || values.repeatPassword.includes(" ")){
        errors.password = toast.error("Password cannot contain spaces");
    }
    else if(values.newPassword.length < 8){
        errors.password = toast.error("Password must be at least 8 characters");
    }
    
    
    return errors;
}

/** Validate firstname */
function firstnameVerify(error = {}, values){
    if (!values.firstname.trim()) {
    error.firstname = toast.error('Firstname is required');
    }

    return error;
}

/** Validate lastname */
function lastnameVerify(error = {}, values){
      if (!values.lastname.trim()) {
    error.lastname = toast.error('Lastname is required');
  }

    return error;
}

/** Validate phoneNumber */
function phoneNumberVerify(error = {}, values){
      if (!values.phoneNumber.trim()) {
    error.phoneNumber = toast.error('Phone number is required');
  }

    return error;
}

/** Validate confirmPassword */
function confirmPassword(error = {}, values){
    if (!values.confirmPassword.trim()) {
    error.confirmPassword = toast.error('password is required');
  } else if (values.confirmPassword !== values.password) {
    error.confirmPassword = toast.error('password not matched');
  }

  return error;
}

//   if (!values.email.trim()) {
//     error.email = toast.error('email is required');
//   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//     error.email = toast.error('email is not valid');
//   }



//   if (!values.password.trim()) {
//     error.password = toast.error('password is required');
//   } else if (values.password.length < 8) {
//     error.password = toast.error('password should be at least 8 characters');
//   }



//validate employeeID
/** Validate email */
function employeeIDVerify(error = {}, values){
    if(!values.employeeID){
        error.employeeID = toast.error('Employee ID is required');
    }

    return error;
}
