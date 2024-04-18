import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/inventory/header';
import Sidebar from '../../components/staff-manager/Sidebar';

function StaffDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/employee");
        setUsers(response.data); // Assuming the API returns an array of users
      } catch (error) {
        console.error("Error fetching items:", error.message);
      }
    };

    fetchItems();
  }, []); // Empty dependency array ensures this runs only once on component mount

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="container mt-4">
        <div className="row">
          {users.map(user => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={user.employeeID}>
              <EmployeeDetails user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function EmployeeDetails({ user }) {
  const { employeeID, firstname, lastname, gender, nic, email, jobtype, mobile, address, city } = user;

  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5 className="card-title">Employee Details - {firstname} {lastname}</h5>
      </div>
      <div className="card-body">
        <p className="card-text"><strong>ID:</strong> {employeeID}</p>
        <p className="card-text"><strong>First Name:</strong> {firstname}</p>
        <p className="card-text"><strong>Last Name:</strong> {lastname}</p>
        <p className="card-text"><strong>Gender:</strong> {gender}</p>
        <p className="card-text"><strong>NIC:</strong> {nic}</p>
        <p className="card-text"><strong>Email:</strong> {email}</p>
        <p className="card-text"><strong>Job Type:</strong> {jobtype}</p>
        <p className="card-text"><strong>Mobile:</strong> {mobile}</p>
        <p className="card-text"><strong>Address:</strong> {address}</p>
        <p className="card-text"><strong>City:</strong> {city}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Update</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default StaffDetails;
