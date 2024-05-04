// import { useEffect } from "react";
// import avatar from "../../assets/avatar.png";
import { Link} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { emailValidate } from '../../helper/validate';
import { getUser } from '../../helper/helper.js';
// import { useAuthStore } from '../../store/store';
import {getPassword} from '../../helper/helper.js';
import CryptoJS from "crypto-js";
import {sendResetEmail} from "../../helper/helper";

import styles from "../../styles/Username.module.css";
import Footer from "../../components/Footer";
import UMnavbar from "../../components/user-management/um-navbar";


export default function Email() {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: async (values) => {
      const emailErrors = emailValidate(values);

      return { ...emailErrors};
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
        const user = await getUser(values.email);

      if(user){
        const passData = await getPassword(values.email);
        const hashedPassword = passData.data.password;

        const object = {
            email: values.email,
            password: hashedPassword
        }

        const objectString = JSON.stringify(object);

        const encryptionKey = "123456$#@$^@1ERF";
        
        const encryptedObject = CryptoJS.AES.encrypt(objectString, encryptionKey).toString();

        const encodedEncryptedObject = encodeURIComponent(encryptedObject);

        const link = `http://localhost:5173/newpassword/${encodedEncryptedObject}`
        const response = sendResetEmail(values.email, link, "Reset Password");
        
        toast.promise(response, {
            loading: 'Sending email...',
            success: 'Check your email for password reset link',
            error: 'Error occured while sending email',
          });
      }
    }
  })

  return (
    <div>
      <UMnavbar/>
      <div className={styles.background}>
        

        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="d-flex h-screen justify-content-center align-items-center">
          <div className={styles.glassbox}>
            <div className="d-flex flex-column align-items-center">
              <h4 className="fs-1 display-100 fw-bold">Hello Again!</h4>

            <form className='py-1' onSubmit={formik.handleSubmit}>
                <div className="textbox d-flex flex-column align-items-center gap-6">
                    <input {...formik.getFieldProps('email')} className={styles.textbox} type="email" placeholder='Email' />
                    <button className={styles.btn1} type='submit'>Let&apos;s go</button>
                </div>
            </form>

              <div className="text-center py-4 d-flex flex-column">
                <span className=''>Forgot Password? <Link className='text-danger text-decoration-none' to="/recovery">Reset Password</Link></span>
                <span className=''>Not a member? <Link className='text-danger text-decoration-none' to="/register">Register Now</Link></span>
                <span className=''>Employee Sign in <Link className='text-danger text-decoration-none' to="/employeelogin">Sign in</Link></span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}