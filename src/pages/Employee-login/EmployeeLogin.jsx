import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
// import { useAuthStore } from '../../store/store';
import { employeeLogin } from '../../helper/helper';

import styles from "../../styles/Username.module.css";
import Footer from "../../components/Footer";
import UMnavbar from "../../components/user-management/UMnavbar";


export default function EmployeeLogin() {

  const navigate = useNavigate();

  // const setEmail = useAuthStore(state => state.setEmail);
  // const email = useAuthStore(state => state.auth.email);

  const formik = useFormik({
    initialValues: {
        employeeID: '',
        email: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {

      let empLoginPromise = employeeLogin({ employeeID: values.employeeID, email: values.email })
      toast.promise(empLoginPromise, {
        loading: 'Checking credentials...',
        success: 'Login successful',
        error: 'Employee login error',
      });

      empLoginPromise.then(async res => {
        let data = await res.data;
        localStorage.setItem('empToken', data.token);
        navigate('/employeedashboard');
      })
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
              <h4 className="fs-1 display-100 fw-bold">Employee login</h4>

              <form className='py-1' onSubmit={formik.handleSubmit}>

                <div className="textbox d-flex flex-column align-items-center gap-6">
                  <input {...formik.getFieldProps('employeeID')} className={styles.textbox} type="text" placeholder='Employee ID' />
                  <input
                    {...formik.getFieldProps('email')}
                    className={styles.textbox}
                    type="email"
                    placeholder="Email"
                  />
                  <button className={styles.btn1} type='submit'>Let&apos;s go</button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}