import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar1 from '../../components/staff-manager/Sidebar1';

function StaffProfile({ employeeId }) {
  const [employeeDetails, setEmployeeDetails] = useState({});
  const [salaryDetails, setSalaryDetails] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch employee details
        const employeeResponse = await axios.get(`http://localhost:8080/get/${employeeId}`);
        setEmployeeDetails(employeeResponse.data);

        // Fetch salary details
        const salaryResponse = await axios.get(`http://localhost:8080/getsalary/${employeeId}`);
        setSalaryDetails(salaryResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    }
    fetchData();
  }, [employeeId]);

  return (
   
    <div>
    <Sidebar1 /> 
    <div>
      <h2>Employee Profile</h2>
      <h3>Employee Details</h3>
      <p>Employee ID: {employeeDetails.employeeID}</p>
      <p>Name: {employeeDetails.firstname} {employeeDetails.lastname}</p>
      <p>Email: {employeeDetails.email}</p>
      {/* Add other employee details as needed */}

      <h3>Salary Details</h3>
      <p>Month: {salaryDetails.month}</p>
      <p>Amount: {salaryDetails.amount}</p>
      {/* Add other salary details as needed */}
    </div>
  </div>
);
}

export default StaffProfile;
