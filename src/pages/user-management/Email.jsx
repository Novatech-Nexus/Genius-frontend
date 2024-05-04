// import { useEffect } from "react";
// import avatar from "../../assets/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { emailValidate } from '../../helper/validate';
import { passwordValidate } from '../../helper/validate';
import { useAuthStore } from '../../store/store';
import { verifyPassword } from '../../helper/helper';

import styles from "../../styles/Username.module.css";
import Footer from "../../components/Footer";
import UMnavbar2 from "../../components/user-management/UMnavbar2";


export default function Email() {

  const navigate = useNavigate();

  const setEmail = useAuthStore(state => state.setEmail);
  // const setPassword = useAuthStore(state => state.setPassword);
  const email = useAuthStore(state => state.auth.email);

  // useEffect(() => {
  //   console.log(email);
  // })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: async (values) => {
      const emailErrors = emailValidate(values);
      const passwordErrors = passwordValidate(values);

      return { ...emailErrors, ...passwordErrors };
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      setEmail(values.email);

      let loginPromise = verifyPassword({ email, password: values.password })
      toast.promise(loginPromise, {
        loading: 'Checking credentials...',
        success: 'Login successful',
        error: 'Password doesn\'t match',
      });

      loginPromise.then(async res => {
        let data = await res.data;
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.email);
        localStorage.setItem('id', data.id);
        navigate('/homepage');
      })
    }
  })

  return (
    <div>
      <UMnavbar2/>
      <div className={styles.background}>
        

        <Toaster position="top-center" reverseOrder={false}></Toaster>

        <div className="d-flex h-screen justify-content-center align-items-center">
          <div className={styles.glassbox}>
            <div className="d-flex flex-column align-items-center">
              <h4 className="fs-1 display-100 fw-bold">Hello Again!</h4>

              <form className='py-1' onSubmit={formik.handleSubmit}>

                <div className="textbox d-flex flex-column align-items-center gap-6">
                  <input {...formik.getFieldProps('email')} className={styles.textbox} type="text" placeholder='Email' />
                  <input
                    {...formik.getFieldProps('password')}
                    className={styles.textbox}
                    type="password"
                    placeholder="Password"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className={styles.error}>{formik.errors.password}</div>
                  ) : null}
                  <button className={styles.btn1} type='submit'>Let&apos;s go</button>
                </div>

              </form>

              <div className="text-center py-4 d-flex flex-column">
                <span className=''>Forgot Password? <Link className='text-danger text-decoration-none' to="/recoveryemail">Reset Password</Link></span>
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