import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidate } from '../../helper/validate';
import { resetPassword } from '../../helper/helper';
import { useAuthStore } from '../../store/store';
import { useNavigate } from 'react-router-dom';
// import useFetch from '../../hooks/fetch.hook'
import UMnavbar from '../../components/user-management/um-navbar';

import styles from '../../styles/Username.module.css'
// import { useEffect } from 'react';


export default function Reset() {

  const { email } = useAuthStore(state => state.auth.email)
  const navigate = useNavigate();
  // const [{ isLoading, apiData, serverError }] = useFetch('createResetSession')

  // useEffect(() =>)

  const formik = useFormik({
    initialValues : {
      newPassword : '',
      repeatPassword: '',
    },
    validate: resetPasswordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      
      let resetPromise = resetPassword({ email, password: values.password })

      toast.promise(resetPromise, {
        loading: 'Updating password...',
        success: 'Password updated successfully.',
        error: 'Couldn\'t update password.'
      });

      resetPromise.then(function(){ navigate('/password') })
    }
  })

  // if(isLoading)

  return (
    <div>
      <UMnavbar />
      <div className={styles.background}>
      
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className='d-flex h-screen justify-content-center align-items-center'>
        <div className={styles.glassbox}>

          <div className='d-flex flex-column align-items-center'>
            <h4 className='fs-1 display-100 fw-bold'>Reset Password</h4>
            <span className='text-secondary'>Enter new password</span>

            <form onSubmit={formik.handleSubmit}>
              <div className='textbox d-flex flex-column align-items-center gap-6'>
                <input {...formik.getFieldProps('newPassword')} type='text' className={styles.textbox} placeholder='new password' />
                <input {...formik.getFieldProps('repeatPassword')} type='text' className={styles.textbox} placeholder='repeat password' />
              </div>
              <button type='submit' className={styles.btn2}>Reset password</button>
            </form>
          </div>

        </div>
      </div>
    </div>
    </div>
    
  )
}
