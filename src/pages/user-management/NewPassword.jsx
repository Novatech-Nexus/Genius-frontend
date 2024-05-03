import { useFormik } from 'formik';
import toast, { Toaster } from "react-hot-toast";
import { resetPassword } from '../../helper/helper';
import { useNavigate, useParams } from "react-router-dom";
import CryptoJS from 'crypto-js';

import styles from "../../styles/Username.module.css";
import Footer from "../../components/Footer";
import UMnavbar from "../../components/user-management/um-navbar";

export default function NewPassword() {

    const navigate = useNavigate();

    const { token } = useParams();
    console.log(token);

    const decodedEncryptedObject = decodeURIComponent(token);
    const decryptedBytes = CryptoJS.AES.decrypt(decodedEncryptedObject, "123456$#@$^@1ERF");
    const decryptedObjectString = decryptedBytes.toString(CryptoJS.enc.Utf8);
    const decryptedObject = JSON.parse(decryptedObjectString);

    console.log("decryptedObject");
    console.log(decryptedObject.email);
    console.log(decryptedObject.password);

    const formik = useFormik({
        initialValues: {
            password: '',
            repeatPassword: ''
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            if (values.password !== values.repeatPassword) {
                toast.error("Passwords do not match");
            }
            else {
                let resetPromise = resetPassword({ email: decryptedObject.email, password: decryptedObject.password, newPassword: values.password })
                toast.promise(resetPromise, {
                    loading: 'Resetting password...',
                    success: 'Reset successful',
                    error: 'Password reset failed',
                });

                resetPromise.then(
                    navigate('/email')
                );
            }
        }

    });


    return (
        <div>
            <UMnavbar />
            <div className={styles.background}>
                <Toaster position="top-center" reverseOrder={false}></Toaster>

                <div className="d-flex h-screen justify-content-center align-items-center">
                    <div className={styles.glassbox}>
                        <div className="d-flex flex-column align-items-center">
                            <h4 className="fs-1 display-100 fw-bold">Reset Password</h4>

                            <form className="py-1" onSubmit={formik.handleSubmit}>

                                <div className="textbox d-flex flex-column align-items-center gap-6">
                                    <input
                                        {...formik.getFieldProps("password")}
                                        className={styles.textbox}
                                        type="password"
                                        placeholder="New Password"
                                    />
                                    <input
                                        {...formik.getFieldProps("repeatPassword")}
                                        className={styles.textbox}
                                        type="password"
                                        placeholder="Confirm new Password"
                                    />
                                    <button className={styles.btn2} type="submit">
                                        Reset Password
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
