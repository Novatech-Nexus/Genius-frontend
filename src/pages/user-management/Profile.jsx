// import { useState } from 'react';
// import Validation from '../../helper/validation';
import styles from '../../styles/Username.module.css';
import avatar from '../../assets/avatar.png';
// import { Link } from 'react-router-dom';


export default function Profile() {

    // const [formData, setFormData] = useState({
    //   firstname: '',
    //   lastname: '',
    //   email: '',
    //   phoneNumber: '',
    //   password: '',
    //   confirmPassword: '',
    // });

    // const [errors, setErrors] = useState({});

    // const handleChange = (e) => {
    //   setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value,
    //   });
    // };

    // const handleSubmit = (e) => {
    //   e.preventDefault();

    //   // Perform validation using the Validation component
    //   const validationErrors = Validation.validate(formData);
    //   setErrors(validationErrors);

    //   if (Object.keys(validationErrors).length === 0) {
    //     alert('Form Submitted successfully');
    //   }
    // };

    return (
        <div className='container mx-auto'>
            <div className='d-flex h-screen justify-content-center align-items-center'>
                <div className={styles.glassbox}>

                    <div className='d-flex flex-column align-items-center'>
                        <h4 className='fs-1 display-100 fw-bold'>Profile Details</h4>

                        <div>
                            <label htmlFor='profile'>
                                <img src={avatar} className={styles.avatar} alt='avatar' />
                            </label>
                        </div>
                        {/* <form onSubmit={handleSubmit}> */}

                        <div className="textbox flex flex-col items-center gap-6">
                            <div className="name flex w-3/4 gap-10">
                                <input
                                    type='text'
                                    name='firstname'
                                    className={styles.textbox}
                                    placeholder='First name'
                                />

                                <input
                                    type='text'
                                    name='firstname'
                                    className={styles.textbox}
                                    placeholder='Last name'
                                />
                            </div>

                            <div className="name flex w-3/4 gap-10">
                                <input
                                    type='text'
                                    name='phoneNumber'
                                    className={styles.textbox}
                                    placeholder='Phone number'
                                />

                                <input
                                    type='text'
                                    name='address'
                                    className={styles.textbox}
                                    placeholder='address'
                                />
                            </div>

                            <div>
                                <button className={styles.btn2}>Orders</button>
                                <button className={styles.btn2}>Loyalty Points</button>
                                <button className={styles.btn2}>Manage Profile</button>
                            </div>

                        </div>

                        {/* <button type='submit' className={styles.btn2}>Register</button> */}

                        {/* </form> */}
                        
                    </div>

                </div>
            </div>
        </div>
    );
}
