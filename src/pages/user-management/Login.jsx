import { Link } from "react-router-dom";
// import avatar from '../assets/avatar.png';
import styles from "../../styles/Username.module.css";

export default function Username() {
  return (
    <div className="container mx-auto border ">
      <div className="d-flex h-screen justify-content-center align-items-center">
        <div className={styles.glassbox}>
          <div className="d-flex flex-column align-items-center">
            <h4 className="fs-1 display-100 fw-bold">Hello again!</h4>

            <form className="container py-1">
              {/* <div>
                <img src={avatar} className={styles.avatar} alt='avatar'/>
              </div> */}

              <div>
                <input
                  type="text"
                  className={styles.textbox}
                  placeholder="Email"
                />
                <input
                  type="text"
                  className={styles.textbox}
                  placeholder="Password"
                />
                <button type="submit" className={styles.btn1}>
                  Login
                </button>
              </div>
              <div>
                <span>Trouble Sign in? </span>
                <Link to="/register">Forgot Password</Link>
              </div>
              <div>
                <span>New to us? Create an account</span>
                <Link to="/register">
                  <button className={styles.btn2}>Register</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
