import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/inventory/header';
import Sidebar from '../../components/staff-manager/Sidebar';
import { Modal } from 'react-bootstrap';

function StaffDetails() {
  const [users, setUsers] = useState([]);
  const [modelState, setModelState] = useState(false);
  const [selectedID, setSelectedID] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [updatefirstname, setUpdateFirstname] = useState('');
  const [updatelastname, setUpdateLastname] = useState('');
  const [updategender, setUpdateGender] = useState('');
  const [updatenic, setUpdateNic] = useState('');
  const [updateemail, setUpdateEmail] = useState('');
  const [updatejobtype, setUpdateJobtype] = useState('');
  const [updatemobile, setUpdateMobile] = useState('');
  const [updateaddress, setUpdateAddress] = useState('');
  const [updatecity, setUpdateCity] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:8080/employee");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching items:", error.message);
      }
    };

    fetchItems();
  }, []);

  const loadModel = async (id) => {
    try {
      const updateUser = await axios.get(`http://localhost:8080/employee/get/${id}`);
      
      setModelState(true);
      setSelectedID(updateUser.data._id);
      setUpdateId(updateUser.data.employeeID);
      setUpdateFirstname(updateUser.data.firstname);
      setUpdateLastname(updateUser.data.lastname);
      setUpdateGender(updateUser.data.gender);
      setUpdateNic(updateUser.data.nic);
      setUpdateEmail(updateUser.data.email);
      setUpdateJobtype(updateUser.data.jobtype);
      setUpdateMobile(updateUser.data.mobile);
      setUpdateAddress(updateUser.data.address);
      setUpdateCity(updateUser.data.city);
    } catch (error) {
      console.error("Error loading model:", error.message);
    }
  };
  const updateHandler = async () => {
    try {
      const updatedUser = {
        employeeID: updateId,
        firstname: updatefirstname,
        lastname: updatelastname,
        gender: updategender,
        nic: updatenic,
        email: updateemail,
        jobtype: updatejobtype,
        mobile: updatemobile,
        address: updateaddress,
        city: updatecity
      };
  
      await axios.put(`http://localhost:8080/employee/update/${selectedID}`, updatedUser);
      // After updating, fetch the updated list of users
      const response = await axios.get("http://localhost:8080/employee");
      setUsers(response.data);
      setModelState(false); // Close the modal after updating
    } catch (error) {
      console.error("Error updating employee:", error.message);
    }
  };
  

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/employee/delete/${id}`);
      // Remove the deleted user from the users state
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error("Error deleting employee:", error.message);
    }
  };
  

  return (
    <div>
      <Header />
      <Sidebar />
      {users.map(user => (
        <EmployeeDetails key={user._id} user={user} loadModel={loadModel} deleteHandler={deleteHandler} />
      ))}
      <Modal show={modelState} onHide={() => setModelState(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Render form inputs for updating employee details here */}
            <div className="mb-3">
              <label htmlFor="updateEmployeeID" className="form-label">Employee ID</label>
              <input type="text" id="updateEmployeeID" className="form-control" defaultValue={updateId}
              onChange={(e)=>setUpdateId(e.target.value)} disabled />
              </div>
              <div className="mb-3">
                <label htmlFor="updateFirstname" className="form-label">First Name</label>
                <input type="text" id="updateFirstname" className="form-control" defaultValue={updatefirstname}
                onChange={(e)=>setUpdateFirstname(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="updateLastname" className="form-label">Last Name</label>
                <input type="text" id="updateLastname" className="form-control" defaultValue={updatelastname} 
                onChange={(e)=>setUpdateLastname(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="updateGender" className="form-label">Gender</label>
                <input type="text" id="updateGender" className="form-control" defaultValue={updategender} 
                 onChange={(e)=>setUpdateGender(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="updateNic" className="form-label">NIC</label>
                <input type="text" id="updateNic" className="form-control" defaultValue={updatenic} 
                 onChange={(e)=>setUpdateNic(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="updateEmail" className="form-label">Email</label>
                <input type="email" id="updateEmail" className="form-control" defaultValue={updateemail} 
                 onChange={(e)=>setUpdateEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="updateJobType" className="form-label">Job Type</label>
                <input type="text" id="updateJobType" className="form-control" defaultValue={updatejobtype} 
                onChange={(e)=>setUpdateJobtype(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="updateMobile" className="form-label">Mobile</label>
                <input type="text" id="updateMobile" className="form-control" defaultValue={updatemobile} 
                onChange={(e)=>setUpdateMobile(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="updateAddress" className="form-label">Address</label>
                <input type="text" id="updateAddress" className="form-control" defaultValue={updateaddress} 
                onChange={(e)=>setUpdateAddress(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="updateCity" className="form-label">City</label>
                <input type="text" id="updateCity" className="form-control" defaultValue={updatecity} 
                onChange={(e)=>setUpdateCity(e.target.value)} />
              </div>
              
        </Modal.Body>
        <Modal.Footer>
  <button className="btn btn-primary" onClick={updateHandler}>Update</button>
</Modal.Footer>

      </Modal>
    </div>
  );
}

function EmployeeDetails({ user, loadModel, deleteHandler }) {
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
        <button className="btn btn-danger" onClick={() => loadModel(user._id)}>Update</button>
        <button className="btn btn-danger" onClick={() => deleteHandler(user._id)}>Delete</button>
      </div>
    </div>
  );
}

export default StaffDetails;
