import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../../styles/staff/staffmanager.css';
import Sidebar from '../../components/staff-manager/Sidebar';
import Footer from '../../components/Footer';

function StaffDetails() {
  const [users, setUsers] = useState([]);
  const [modelState, setModelState] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('http://localhost:5050/employee/getemployee/');
        setUsers(response.data);
        setFilteredUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error.message);
      }
    }
    fetchUsers();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = users.filter(user => user.firstname.toLowerCase().includes(term.toLowerCase()));
    setFilteredUsers(filtered);
  };

  const handleModelOpen = (user) => {
    setSelectedUser(user);
    setModelState(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const updateHandler = async () => {
    try {
      if (!/^EM\d+$/.test(selectedUser.employeeID)) {
        Swal.fire("Error!", "Employee ID should start with 'EM' followed by numbers.", "error");
        return;
      }
  
      // Validation for first name
      if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(selectedUser.firstname)) {
        Swal.fire("Error!", "Please enter a valid first name.", "error");
        return;
      }
  
      // Validation for last name
      if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(selectedUser.lastname)) {
        Swal.fire("Error!", "Please enter a valid last name.", "error");
        return;
      }
      await axios.put(`http://localhost:5050/employee/updateemployee/${selectedUser._id}`, selectedUser);
      const updatedUsers = users.map(user => user._id === selectedUser._id ? selectedUser : user);
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
      setModelState(false);
      Swal.fire("Updated!", "Employee details have been updated.", "success");
    } catch (error) {
      console.error("Error updating employee:", error.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:5050/employee/deleteemployee/${id}`);
      const updatedUsers = users.filter(user => user._id !== id);
      setUsers(updatedUsers);
      setFilteredUsers(updatedUsers);
      Swal.fire("Deleted!", "Employee has been deleted.", "success");
    } catch (error) {
      console.error("Error deleting employee:", error.message);
    }
  };

  return (
    
    <div className='background-staff-image'>
      <Sidebar />
      <div style={{ marginLeft: "500px", marginTop: "20px" , marginRight: "500px"}}>
        <div className="Msearch-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            style={{
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'calc(100% - 10px) center',
              backgroundSize: '30px',
              paddingLeft: '40px',
              height: '50px',
              border: '1px solid #ccc',
              borderRadius: '40px',
            }}
          />
        </div>
      </div>
      <div className="row row-cols-2">
        {filteredUsers.map(user => (
          <EmployeeDetails key={user._id} user={user} handleModelOpen={handleModelOpen} deleteHandler={deleteHandler} />
        ))}
      </div>
      <Modal show={modelState} onHide={() => setModelState(false)}>
    <Modal.Header closeButton>
        <Modal.Title>Update Employee</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <form>
            {Object.entries(selectedUser).map(([key, value]) => (
                (key !== '_id' && key !== '__v') && (
                    <div className="mb-3" key={key}>
                        <label htmlFor={`update${key}`} className="form-label">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </label>
                        <input
                            type="text"
                            id={`update${key}`}
                            className="form-control"
                            name={key}
                            value={value}
                            onChange={handleInputChange}
                        />
                    </div>
                )
            ))}
        </form>
    </Modal.Body>
    <Modal.Footer>
        <button className="btn btn-primary" onClick={updateHandler}>Update</button>
    </Modal.Footer>
</Modal>
<Footer/>
    </div>
  );
}

function EmployeeDetails({ user, handleModelOpen, deleteHandler }) {
  return (
    <div className="col-md-3 mb-3" style={{marginTop:"30px",marginLeft:"100px"}}>
      <div className="card border" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="card-header" style={{ backgroundColor: "#B0CBA6" }}>
          <h5 className="card-title">{user.firstname} {user.lastname}</h5>
        </div>
        <div className="card-body">
          {Object.entries(user).map(([key, value]) => (
            !['_id', '__v'].includes(key) && <p className="card-text" key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
          ))}
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-success" onClick={() => handleModelOpen(user)}>Update</button>
          <button className="btn btn-danger" onClick={() => deleteHandler(user._id)}>Delete</button>
        </div>
      </div>
     
    </div>
    
    
  );
}

export default StaffDetails;
