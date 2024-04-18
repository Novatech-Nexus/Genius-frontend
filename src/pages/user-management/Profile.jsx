import avatar from "../../assets/avatar.png";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import convertToBase64 from "../../helper/convert";
import { profileValidate } from "../../helper/validate";
import useFetch from "../../hooks/fetch.hook";
// import { useAuthStore } from "../../store/store";
import { updateUser } from "../../helper/helper";

import styles from "../../styles/Username.module.css";

export default function Profile() {
  const [file, setFile] = useState();
  const navigate = useNavigate();

  useEffect(() => {
  });

  // const email = localStorage.getItem('email');
  // const fetchData = useFetch();

  
  const [{isLoading, apiData, serverError}] = useFetch();

  const formik = useFormik({
    initialValues: {
      firstname: apiData?.firstname || '',
      lastname: apiData?.lastname || '',
      email: apiData?.email || '',
      phoneNumber: apiData?.phoneNumber || '',
    },
    enableReinitialize: true,
    validate: profileValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || apiData?.Profile || '' });
      let updatePromise = updateUser(values);

      toast.promise(updatePromise, {
        loading: "Updating...",
        success: "Updated successfully",
        error: "Failed to update", 
      })
    },
  });

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  //logout handler function
  function userLogout() {
    localStorage.removeItem('token');
    navigate('/')
  }


  if(isLoading) return <h1 className="fs-5 font-weight-bold">is Loading</h1>
  if(serverError) return <h1 className="fs-5 font-weight-bold">{serverError.message}</h1>

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="d-flex h-screen justify-content-center align-items-center">
        <div className={styles.glassbox}>
          <div className="d-flex flex-column align-items-center">
            <h4 className="fs-1 display-100 fw-bold">Profile</h4>

            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile d-flex justify-content-center py-4">
                <label htmlFor="profile">
                  <img src={apiData?.profile || file || avatar} className={styles.avatar} alt="avatar" />
                </label>

                <input onChange={onUpload} type="file" id="profile" name="profile" />
              </div>

              <div className="textbox d-flex flex-column align-items-center gap-6">

                <input {...formik.getFieldProps("firstname")} type="text*" name="firstname" className={styles.textbox} placeholder="First name"/>
                <input {...formik.getFieldProps("lastname")} type="text*" name="lastname" className={styles.textbox} placeholder="Lastname"/>
                <input {...formik.getFieldProps("email")} type="text" name="email" className={styles.textbox} placeholder="Email"/>
                <input {...formik.getFieldProps("phoneNumber")} type="text" name="phoneNumber" className={styles.textbox} placeholder="Phone number"/>

                <button className={styles.btn1} type="submit">
                  Update
                </button>
              </div>
            </form>

            <div className="text-center py-4 d-flex flex-column">
              <span className="">
                Come back later?{" "}
                <button onClick={userLogout} className="text-danger text-decoration-none" to="/email">
                  Logout
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
