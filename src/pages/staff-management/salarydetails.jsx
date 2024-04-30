import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import Swal from 'sweetalert2';
import '../../styles/staff/staffmanager.css';
import Sidebar from '../../components/staff-manager/Sidebar';

function salarydetails() {
  const [salaries, setSalaries] = useState([]);
  const [modelState, setModelState] = useState(false);
  const [selectedSalary, setSelectedSalary] = useState({});

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSalaries, setFilteredSalaries] = useState([]);

  useEffect(() => {
    async function fetchSalaries() {
      try {
        const response = await axios.get('http://localhost:8080/salary/getsal/');
        setSalaries(response.data);
        setFilteredSalaries(response.data);
      } catch (error) {
        console.error('Error fetching salaries:', error.message);
      }
    }
    fetchSalaries();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = salaries.filter(salary => salary.name.toLowerCase().includes(term.toLowerCase()));
    setFilteredSalaries(filtered);
  };

  const handleModelOpen = (salary) => {
    setSelectedSalary(salary);
    setModelState(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedSalary({ ...selectedSalary, [name]: value });
  };

  const updateHandler = async () => {
    try {
      await axios.put(`http://localhost:8080/salary/updatesal/${selectedSalary._id}`, selectedSalary);
      const updatedSalaries = salaries.map(salary => salary._id === selectedSalary._id ? selectedSalary : salary);
      setSalaries(updatedSalaries);
      setFilteredSalaries(updatedSalaries);
      setModelState(false);
      Swal.fire("Updated!", "Salary details have been updated.", "success");
    } catch (error) {
      console.error("Error updating salary details:", error.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/salary/deletesalary/${id}`);
      const updatedSalaries = salaries.filter(salary => salary._id !== id);
      setSalaries(updatedSalaries);
      setFilteredSalaries(updatedSalaries);
      Swal.fire("Deleted!", "Salary details have been deleted.", "success");
    } catch (error) {
      console.error("Error deleting salary details:", error.message);
    }
  };

  return (
    <div className='background-staff-image'>
      <Sidebar />
      <div style={{ marginLeft: "600px", marginTop: "20px" }}>
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
        {filteredSalaries.map(salary => (
          <SalaryDetailsCard key={salary._id} salary={salary} handleModelOpen={handleModelOpen} deleteHandler={deleteHandler} />
        ))}
      </div>
      <Modal show={modelState} onHide={() => setModelState(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Salary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            {Object.entries(selectedSalary).map(([key, value]) => (
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
    </div>
  );
}

function SalaryDetailsCard({ salary, handleModelOpen, deleteHandler }) {
  return (
    <div className="col-md-3 mb-3" style={{ marginTop: "30px", marginLeft: "100px" }}>
      <div className="card border" style={{ backgroundColor: "#f0f0f0" }}>
        <div className="card-header" style={{ backgroundColor: "lightblue" }}>
          <h5 className="card-title">{salary.name}</h5>
        </div>
        <div className="card-body">
          {Object.entries(salary).map(([key, value]) => (
            !['_id', '__v'].includes(key) && <p className="card-text" key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}</p>
          ))}
        </div>
        <div className="card-footer d-flex justify-content-between">
          <button className="btn btn-success" onClick={() => handleModelOpen(salary)}>Update</button>
          <button className="btn btn-danger" onClick={() => deleteHandler(salary._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default salarydetails;
