import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/inventory/header';
import Sidebar from '../../components/staff-manager/Sidebar';
import { useNavigate } from 'react-router-dom';

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
    try {
      const response = await axios.post("http://localhost:8080/employee/add", inputs);
      console.log(response.data);
      navigate('/staffdetails');
    } catch (error) {
      console.error("Error adding employee:", error.message);
    }
  };

    return (
        <div>
            <Header />
            <Sidebar/>
            <div className="container mt-5">
                <h2 className="text-center mb-4 form-title">Update Employee Information</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
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
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <input type="text" id="gender" name="gender" onChange={handleChange} value={inputs.gender} className="form-control" required />
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
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEmployee;
