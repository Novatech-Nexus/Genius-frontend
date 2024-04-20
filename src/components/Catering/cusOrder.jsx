import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img9 from '../../assets/catering/img9.jpeg';

function CusOrder() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber1, setContactNumber1] = useState('');
  const [contactNumber2, setContactNumber2] = useState('');
  const [dateOfEvent, setDateOfEvent] = useState('');
  const [timeOfEvent, setTimeOfEvent] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, like sending data to a server
  };

  const backgroundStyle = {
    backgroundImage: `url(${img9})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <style>
        {`
          /* Paste the CSS provided below this line */

          /* Add provided CSS here */
          .form-container {
            max-width: 650px; /* Increased width */
            margin: 0 auto; 
            padding: 20px;
            background-color: white;
            border-radius: 12px; /* Added border radius */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          } 

          table {
            width:40%; /* Changed width to 100% */
            border-collapse: collapse;
            margin-bottom: 20px;
            margin: 0 auto;
            
          }

          th, td {
            padding: 10px;
            text-align: left;
          }

          th {
            background-color: #CC9966;
            border-bottom: 2px solid #CC9966;
          } 

          input[type="number"],
          input[type="text"],
          input[type="email"],
          input[type="tel"],
          input[type="date"],
          input[type="time"],
          input[type="shortDate"],
          button[type="submit"] {
            width: calc(100% - 20px);
            padding: 8px;
            margin: 5px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
          } 

          button[type="submit"] {
            background-color: #6B4423;
            color: white;
            cursor: pointer;
          }

          button[type="submit"]:hover {
            background-color: #6B4423;
          } 

          @media only screen and (max-width: 600px) {
            .form-container {
              padding: 10px;
            }
          } 

          .Jcheckbox-container {
            display: flex; 
            align-items: center; 
            gap: 30px;
          }

          .Jcheckbox-container input[type="checkbox"] {
            margin-right: 5px; 
          }

          .Jcheckbox-container input[type="checkbox"] + span {
            margin-left: 3px; 
          } 

          h2{
            text-align: center;
            background-color: #CC9966;
          } 

          /* Paste the CSS provided above this line */
        `}
      </style>
      <form onSubmit={handleSubmit}>
        <table border={0} style={{ background: 'white' }}>
          <tbody>
            <tr>
              <th colSpan={2}><h2>Customized Order</h2></th>
            </tr>
            <tr>
              <th colSpan={2}>Customer Details</th>
            </tr>
            <tr>
              <td>First Name:<input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required /></td>
              <td>Last Name:<input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required /></td>
            </tr>
            <tr>
              <td colSpan={2}>Email Address:<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
            </tr>
            <tr>
              <td>Contact Number 1:<input type="tel" id="contactNumber1" value={contactNumber1} onChange={(e) => setContactNumber1(e.target.value)} required /></td>
              <td>Contact Number 2:<input type="tel" id="contactNumber2" value={contactNumber2} onChange={(e) => setContactNumber2(e.target.value)} required /></td>
            </tr>
            <tr>
              <td>Date Of Event:<input type="date" id="dateOfEvent" value={dateOfEvent} onChange={(e) => setDateOfEvent(e.target.value)} required /></td>
              <td>Time Of Event:<input type="time" id="timeOfEvent" value={timeOfEvent} onChange={(e) => setTimeOfEvent(e.target.value)} required /></td>
            </tr>
            <tr>
              <td colSpan={2}>Address Of the Event:<input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required /></td>
            </tr>
            <tr>
              <td colSpan={2}><Link to="/orderDet"><button type="submit">Schedule Meeting</button></Link></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default CusOrder;