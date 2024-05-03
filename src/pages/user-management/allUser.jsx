/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
/* eslint-enable no-unused-vars */
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import styles from "../../styles/Username.module.css";
import Footer from "../../components/Footer";
import UMnavbar1 from "../../components/user-management/um-navbar1";

// import { Modal } from 'bootstrap';

export default function Profile() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstname} ${user.lastname}`.toLowerCase();
    const email = user.email.toLowerCase();
    const searchTermLower = searchTerm.toLowerCase();

    return fullName.includes(searchTermLower) || email.includes(searchTermLower);
  });

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('User Profiles', 14, 20);

    const tableData = filteredUsers.map((user) => [user.firstname, user.lastname, user.email, user.phoneNumber || '-']);
    doc.autoTable({
      head: [['First Name', 'Last Name', 'Email', 'Phone Number']],
      body: tableData,
      startY: 30,
    });

    doc.save('user_profiles.pdf');
  };
  
  return (
    <div>
      <UMnavbar1/>
      <div className="container mx-auto" style={{ maxWidth: '600px' }}>
      <div className="my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleSearch}
          style={{ marginBottom: '1rem' }}
        />
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{ padding: '1rem' }}>
        <div>
          <table className="table table-striped" style={{ textAlign: 'center' }}>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber || '-'}</td>
                  <td><button className={styles.btn1}>Update</button></td>
                  <td><button className={styles.btn2}>Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={generatePDF} style={{ marginTop: '1rem' }}>
            Generate PDF
          </button>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
}