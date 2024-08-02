/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
/* eslint-enable no-unused-vars */
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import styles from "../../styles/Username.module.css";
import Footer from "../../components/Footer";
import UMnavbar2 from "../../components/user-management/UMnavbar2";
import Swal from 'sweetalert2';


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

  const handleClick = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5050/api/deleteAnUser/${id}`);

    if (response.status === 200) {
      
      //update the states after user is deleted
      users.filter((user) => user._id !== id);
      setUsers(users.filter((user) => user._id !== id));
      Swal.fire({
        icon: 'success',
        title: 'User deleted successfully',
        showConfirmButton: false,
        timer: 1500
      });
    }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error occured!',
        text: 'Something went wrong!',
      });
    }
    
  }
  
  return (
    <div className={styles.background}>
      <UMnavbar2 />
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
        <div className="table-container d-flex justify-content-center align-items-center" style={{ padding: '1rem' }}>
          <div>
            <table className="table table-striped" style={{ textAlign: 'center', borderCollapse: 'collapse', width: '100%' }}>
              <thead style={{ backgroundColor: '#f2f2f2' }}>
                <tr>
                  <th style={{ padding: '8px', border: '1px solid #ddd' }}>First Name</th>
                  <th style={{ padding: '8px', border: '1px solid #ddd' }}>Last Name</th>
                  <th style={{ padding: '8px', border: '1px solid #ddd' }}>Email</th>
                  <th style={{ padding: '8px', border: '1px solid #ddd' }}>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user._id} style={{ backgroundColor: '#fff' }}>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{user.firstname}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{user.lastname}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{user.email}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{user.phoneNumber || '-'}</td>
                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><button className={styles.btn2} onClick={() => handleClick(user._id)}>Delete</button></td>
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
      <Footer />
    </div>
  );
}