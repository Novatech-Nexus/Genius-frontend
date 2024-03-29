import { Link } from 'react-router-dom'
import avatar from '../../assets/avatar.png';
import styles from '../../styles/Username.module.css'

export default function Password() {

  return (
    <div className='container mx-auto'>
      <div className='d-flex h-screen justify-content-center align-items-center'>
        <div className={styles.glassbox}>

          <div className='d-flex flex-column align-items-center'>
            <h4 className='fs-1 display-100 fw-bold'>Let&apos;s start your order</h4>
            
            <form className='container py-1'>
              <div>
                <img src={avatar} className={styles.avatar} alt='avatar'/>
              </div>

              <div>
                
                <button type='submit' className={styles.btn1}>Login</button>
              </div>

              <div>
                <span>Trouble Sign in? </span>
                <Link to='/register'>Forgot Password</Link>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
