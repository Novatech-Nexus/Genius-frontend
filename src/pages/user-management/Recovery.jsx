// import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/store';
import { generateOTP } from '../../helper/helper';
import { verifyOTP } from '../../helper/helper';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import UMnavbar from '../../components/user-management/um-navbar';

import styles from '../../styles/Username.module.css'
import { useState } from 'react';

import Footer from '../../components/Footer';

export default function Recovery() {

  const { email } = useAuthStore(state => state.auth);
  const [OTP, setOTP] = useState();
  const navigate = useNavigate();


  useEffect(() => {
    generateOTP(email).then((OTP) => {
      console.log(OTP);
      if (OTP) return toast.success('OTP has been sent to your email.');
      return toast.error('Problem while generating OTP')
    })
  }, [email]);

  async function onSubmit(e) {
    e.preventDefault();

    try {
      let { status } = await verifyOTP({ email, code: OTP });
    if (status == 201) {
      toast.success('OTP verified successfully');
      return navigate('/reset');
    }
    } catch (error) {
      toast.error('OTP verification failed. Check email again');
    }
 
  }

  // handler of resend OTP
  function resendOTP() {
    let sendPromise = generateOTP(email);

    toast.promise(sendPromise, {
      loading: 'Sending OTP...',
      success: 'OTP has been sent to your email successfully.',
      error: 'Couldn\'t send OTP. Try again.'
    });

    // sendPromise.then(OTP => {
    //   console.log(OTP);
    // })
  }

  return (
    <div>
      <UMnavbar />
      <div className='container mx-auto'>
      <div className='d-flex h-screen justify-content-center align-items-center'>
        <div className={styles.glassbox}>

          <form onSubmit={onSubmit}>
            <div className='d-flex flex-column align-items-center'>
              <h4 className='fs-1 display-100 fw-bold'>Password Recovery</h4>
              <span className='text-secondary'>Enter OTP to recover password</span>

              <div>
                <input onChange={(e) => setOTP(e.target.value)} type='text' className={styles.textbox} placeholder='OTP' />
              </div>
              <button onClick={resendOTP} type='submit' className={styles.btn2}>Recover</button>

              <div className='center'>
                <span>Can&apos;t get OTP? </span>
                <Link>Resend OTP</Link>
              </div>

            </div>
          </form>

        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  )
}
