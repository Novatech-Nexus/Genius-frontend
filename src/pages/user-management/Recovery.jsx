import { Link } from 'react-router-dom'
import styles from '../../styles/Username.module.css'

export default function Recovery() {

  return (
    <div className='container mx-auto'>
      <div className='d-flex h-screen justify-content-center align-items-center'>
        <div className={styles.glassbox}>

          <div className='d-flex flex-column align-items-center'>
            <h4 className='fs-1 display-100 fw-bold'>Password Recovery</h4>
            <span className='text-secondary'>Enter OTP to recover password</span>

              <div>
                <input type='text' className={styles.textbox} placeholder='OTP' />
              </div>
              <button type='submit' className={styles.btn2}>Recover</button>
              
              <div className='center'>
                <span>Can&apos;t get OTP? </span>
                <Link>Resend OTP</Link>
              </div>

          </div>

        </div>
      </div>
    </div>
  )
}
