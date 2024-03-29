import { useState } from 'react';
import Validation from '../../helper/validation';
import styles from '../../styles/Username.module.css';
import avatar from '../../assets/avatar.png';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation using the Validation component
    const validationErrors = Validation.validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('Form Submitted successfully');
    }
  };

  return (
    <div className='container mx-auto'>
      <div className='d-flex h-screen justify-content-center align-items-center'>
        <div className={styles.glassbox}>

          <div className='d-flex flex-column align-items-center'>
            <h4 className='fs-1 display-100 fw-bold'>Create an account</h4>
            
            <div>
                <label htmlFor='profile'>
                  <img src={avatar} className={styles.avatar} alt='avatar'/>
                </label>

                <input type='file'id='profile'name='profile'/>
              </div>
    <form onSubmit={handleSubmit}>
      <div>
                  <input 
                    type='text' 
                    name='firstname' 
                    className={styles.textbox} 
                    placeholder='First name' 
                    onClick={handleChange}
                  />
                  {errors.firstname && <span>{errors.firstname}</span>}
                </div>

                <div>
                  <input 
                    type='text'  
                    name='lastname' 
                    className={styles.textbox} 
                    placeholder='Lastname'
                    onClick={handleChange} 
                  />
                  {errors.lastname && <span>{errors.lastname}</span>}
                </div>

                <div>
                  <input 
                    type='text' 
                    name='email' 
                    className={styles.textbox} 
                    placeholder='Email'
                    onClick={handleChange} 
                  />
                  {errors.email && <span>{errors.email}</span>}
                </div>

                <div>
                  <input 
                    type='text' 
                    name='phoneNumber' 
                    className={styles.textbox} 
                    placeholder='Phone number'
                    onClick={handleChange} 
                  />
                  {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
                </div>

                <div>
                  <input 
                    type='text' 
                    name='password' 
                    className={styles.textbox} 
                    placeholder='Password'
                    onClick={handleChange} 
                  />
                  {errors.password && <span>{errors.password}</span>}
                </div>

                <div>
                  <input 
                    type='text' 
                    name='confirmPassword' 
                    className={styles.textbox} 
                    placeholder='Confirm password'
                    onClick={handleChange} 
                  />
                  {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                
                <button type='submit' className={styles.btn2}>Register</button>
      
    </form>
    <div>
    <span>Already registered? </span>
    <Link to='/username'>
      Login
    </Link>
  </div>
</div>

</div>
</div>
</div>
  );
};

export default Register;
