import styles from "../../styles/Username.module.css";
// import avatar from "../../assets/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
// import { useState } from "react";
import { useFormik } from "formik";
// import convertToBase64 from "../../helper/convert";
import { registerValidate } from "../../helper/validate";
import { registerUser } from "../../helper/helper";
import UMnavbar from "../../components/user-management/um-navbar";
import Footer from "../../components/Footer";

export default function Register() {

  const navigate = useNavigate();
  // const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      profile: "",
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      role: "customer",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let value = await Object.assign(values); //, { profile: file || '' }
      let regsterPromise =registerUser(value);

      toast.promise(regsterPromise, {
        loading: "Creating account...",
        success : "Account created successfully",
        error : "Account creation failed"
      })

      regsterPromise.then(function(){ navigate('/email') });
    },
  });

  // const onUpload = async (e) => {
  //   const base64 = await convertToBase64(e.target.files[0]);
  //   setFile(base64);
  // };

  return (
    <div>
      <UMnavbar />
      <div className={styles.background}>
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="d-flex h-screen justify-content-center align-items-center">
        <div className={styles.glassbox}>
          <div className="d-flex flex-column align-items-center">
            <h4 className="fs-1 display-100 fw-bold">Register</h4>

            <form className="py-1" onSubmit={formik.handleSubmit}>
              {/* <div className="profile d-flex justify-content-center py-4">
                <label htmlFor="profile">
                  <img src={file || avatar} className={styles.avatar} alt="avatar" />
                </label>

                <input className="d-none" onChange={onUpload} type="file" id="profile1" name="profile" />
              </div> */}

              <div className="textbox d-flex flex-column align-items-center gap-6">
                <input
                  {...formik.getFieldProps("firstname")}
                  type="text*"
                  name="firstname"
                  className={styles.textbox}
                  placeholder="First name"
                />

                <input
                  {...formik.getFieldProps("lastname")}
                  type="text*"
                  name="lastname"
                  className={styles.textbox}
                  placeholder="Lastname"
                />

                <input
                  {...formik.getFieldProps("email")}
                  type="text"
                  name="email"
                  className={styles.textbox}
                  placeholder="Email"
                />

                <input
                  {...formik.getFieldProps("phoneNumber")}
                  type="tel"
                  name="phoneNumber"
                  className={styles.textbox}
                  placeholder="Phone number"
                />

                <input
                  {...formik.getFieldProps("password")}
                  type="password"
                  name="password"
                  className={styles.textbox}
                  placeholder="Password"
                />

                <input
                  {...formik.getFieldProps("confirmPassword")}
                  type="password"
                  name="confirmPassword"
                  className={styles.textbox}
                  placeholder="Confirm password"
                />

                <button className={styles.btn1} type="submit">
                  Register
                </button>
              </div>
            </form>

            <div className="text-center py-4 d-flex flex-column">
              <span className="">
                Already a member?{" "}
                <Link className="text-danger text-decoration-none" to="/email">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}
