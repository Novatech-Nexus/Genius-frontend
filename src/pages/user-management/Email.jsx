import styles from "../../styles/Username.module.css";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { emailValidate } from '../../helper/validate';
import { passwordValidate } from '../../helper/validate';

export default function Email() {

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
      console.log(values);
    }
  })

  return (
    <div className="container mx-auto">

      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="d-flex h-screen justify-content-center align-items-center">
        <div className={styles.glassbox}>
          <div className="d-flex flex-column align-items-center">
            <h4 className="fs-1 display-100 fw-bold">Hello Again!</h4>

            <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile d-flex justify-content-center py-4'>
                <img src={avatar} alt="avatar" className={styles.avatar} />
              </div>

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
              <span className=''>Forgot Password? <Link className='text-danger text-decoration-none' to="/recovery">Reset Password</Link></span>
              <span className=''>Not a member? <Link className='text-danger text-decoration-none' to="/register">Register Now</Link></span>
            </div>

          </div>
        </div>
      </div>
    </div>)
}