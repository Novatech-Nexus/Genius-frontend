import React from 'react';

function EmployeeList({ user }) {
  const { employeeID, firstname, lastname, gender, nic, email, jobtype, mobile, address, city } = user;

  return (
    <div>
      <h1>User Display</h1>
      <br />
      <h1>ID: {employeeID}</h1>
      <h1>First Name: {firstname}</h1>
      <h1>Last Name: {lastname}</h1>
      <h1>Gender: {gender}</h1>
      <h1>NIC: {nic}</h1>
      <h1>Email: {email}</h1>
      <h1>Job Type: {jobtype}</h1>
      <h1>Mobile: {mobile}</h1>
      <h1>Address: {address}</h1>
      <h1>City: {city}</h1>
      <button>Update</button>
      <button>Delete</button>
    </div>
  );
};

export default EmployeeList;
