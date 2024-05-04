import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';

import Sidebar from '../../components/staff-manager/Sidebar';

function AddEmployee() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    employeeID: "",
    firstname: "",
    lastname: "",
    gender: "",
    nic: "",
    email: "",
    jobtype: "",
    mobile: "",
    address: "",
    city: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputs.employeeID || !inputs.firstname || !inputs.lastname || !inputs.gender || !inputs.nic || !inputs.email || !inputs.jobtype || !inputs.mobile || !inputs.address || !inputs.city) {
        alert('Please fill in all fields.');
        return;
      }
  
     
      if (!/^EM\d+$/.test(inputs.employeeID)) {
        alert('Employee ID should start with "EM" followed by numbers.');
        return;
      }
      if (!/^\d{10}$/.test(inputs.mobile)) {
        alert('Mobile number must be 10 digits.');
        return;
      }
      if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(inputs.firstname)) {
        alert('Please enter a valid first name.');
        return;
      }
      if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(inputs.lastname)) {
        alert('Please enter a valid last name.');
        return;
      }
  
      try {
        const response = await axios.post("http://localhost:5050/employee/addemployee", inputs);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully added employee",
          showConfirmButton: false,
          timer: 1500
        });
        console.log(response.data);
        navigate('/staffdetails');
      } catch (error) {
        console.error("Error adding employee:", error.message);
      }
    };

    return (
        <div className="background-add-staff1">
            
            <Sidebar/>
            <div className="container mt-5" style={{marginBottom:"50px"}}>
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <div className="container form-container" style={{ backgroundColor: "white", paddingTop: "30px",paddingRight:"1px",paddingBottom:"50px", borderRadius: "10px",marginTop:"30px",marginBottom:"100px" }}>
                      <h2 className="text-center mb-4 form-title">Add Employee Information</h2>
                      <div className="row justify-content-center">
                          <div className="col-md-9">
                              <form onSubmit={handleSubmit} action="#" method="POST" id="employeeForm">
                                  <div className="mb-3">
                                      <label htmlFor="employeeID" className="form-label">Employee ID</label>
                                      <input type="text" id="employeeID" name="employeeID" onChange={handleChange} value={inputs.employeeID} className="form-control" required />
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="firstName" className="form-label">First Name</label>
                                      <input type="text" id="firstName" name="firstname" onChange={handleChange} value={inputs.firstname} className="form-control" required />
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="lastName" className="form-label">Last Name</label>
                                      <input type="text" id="lastName" name="lastname" onChange={handleChange} value={inputs.lastname} className="form-control" required />
                                  </div>
                                  <div className="mb-3">
                                    <label className="form-label">Gender</label>
                                    <div className="form-check">
                                      <input type="radio" id="male" name="gender" value="male" checked={inputs.gender === "male"} onChange={handleChange} className="form-check-input" required />
                                      <label htmlFor="male" className="form-check-label">Male</label>
                                    </div>
                                    <div className="form-check">
                                      <input type="radio" id="female" name="gender" value="female" checked={inputs.gender === "female"} onChange={handleChange} className="form-check-input" required />
                                      <label htmlFor="female" className="form-check-label">Female</label>
                                    </div>
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="nic" className="form-label">NIC</label>
                                      <input type="text" id="nic" name="nic" onChange={handleChange} value={inputs.nic} className="form-control" required />
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="email" className="form-label">Email</label>
                                      <input type="email" id="email" name="email" onChange={handleChange} value={inputs.email} className="form-control" required />
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="jobType" className="form-label">Job Type</label>
                                      <select id="jobType" name="jobtype" onChange={handleChange} value={inputs.jobtype} className="form-select" required>
                                          <option value="">Select Job Type</option>
                                          <option value="manager">Manager</option>
                                          <option value="chef">Chef</option>
                                          <option value="cashier">Cashier</option>
                                      </select>
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="mobile" className="form-label">Mobile</label>
                                      <input type="text" id="mobile" name="mobile" onChange={handleChange} value={inputs.mobile} className="form-control" required />
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="address" className="form-label">Address</label>
                                      <input type="text" id="address" name="address" onChange={handleChange} value={inputs.address} className="form-control" required />
                                  </div>
                                  <div className="mb-3">
                                      <label htmlFor="city" className="form-label">City</label>
                                      <input type="text" id="city" name="city" onChange={handleChange} value={inputs.city} className="form-control" required />
                                  </div>
                                  <div className="d-grid gap-2">
                                      <button type="submit" className="btn btn-primary">Add</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
              </div>
              </div>
              <Footer/>
              </div>
             
    );
}

export default AddEmployee;
