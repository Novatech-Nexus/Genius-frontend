import React, { useState, useRef } from 'react';
import img6 from '../../assets/catering/img6.jpeg';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

function getCurrentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
}

const backgroundStyle = {
  backgroundImage: `url(${img6})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
};

const CusOrder = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber1, setContactNumber1] = useState('');
  const [contactNumber2, setContactNumber2] = useState('');
  const [dateOfEvent, setDateOfEvent] = useState('');
  const [timeOfEvent, setTimeOfEvent] = useState('');
  const [address, setAddress] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all required fields are filled
    if (!firstName || !lastName || !email || !contactNumber1 || !contactNumber2 || !dateOfEvent || !timeOfEvent || !address) {
      Swal.fire({
        title: "Please fill in all required fields!",
        icon: "error"
      });
      return;
    }

    emailjs
      .sendForm('service_o0ewuay', 'template_iga8nd8', form.current, {
        publicKey: 's-5sGyd8lWJxphAC3',
      })
      .then(
        () => {
          // Display success message after submitting the form
          Swal.fire({
            title: "Successfully Book The Meeting!",
            text: "We will send meeting link to your Gmail as soon as possible.",
            icon: "success"
          });
          window.location.replace('/catMain');
          // Reset form fields after successful submission
          form.current.reset();
          setFirstName('');
          setLastName('');
          setEmail('');
          setContactNumber1('');
          setContactNumber2('');
          setDateOfEvent('');
          setTimeOfEvent('');
          setAddress('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
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
            width: 40%; /* Changed width to 100% */
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

          h2 {
            text-align: center;
          }

          button {
            padding: 10px 20px; /* Adjust padding as needed */
            background-color: #6B4423; /* Change to desired background color */
            color: #fff; /* Change to desired text color */
            border: none;
            border-radius: 5px; /* Adjust border radius as needed */
            cursor: pointer;
            text-decoration: none; /* Ensure no underline */
            width: 100%;
          }

          button:hover {
            background-color: #6B4423; /* Change to desired color on hover */
          }

          button:active {
            background-color: #6B4423; /* Change to desired color when button is clicked */
          }

        `}
      </style>
      <form ref={form} onSubmit={sendEmail}>
        <table border={0} style={{ background: 'white' }}>
          <tbody>
            <tr>
              <th colSpan={2}><h2>Customized Order</h2></th>
            </tr>
            <tr>
              <th colSpan={2}>Customer Details</th>
            </tr>
            <tr>
              <td>First Name:<input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value.replace(/[^A-Za-z]/ig, ''))} required /></td>
              <td>Last Name:<input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value.replace(/[^A-Za-z]/ig, ''))} required /></td>
            </tr>
            <tr>
              <td colSpan={2}>Email Address:<input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
            </tr>
            <tr>
              <td>Contact Number 1:<input type="tel" id="contactNumber1" name="contactNumber1" maxLength={10} value={contactNumber1} onChange={(e) => setContactNumber1(e.target.value.replace(/\D/, ''))} required /></td>
              <td>Contact Number 2:<input type="tel" id="contactNumber2" name="contactNumber2" maxLength={10} value={contactNumber2} onChange={(e) => setContactNumber2(e.target.value.replace(/\D/, ''))} required /></td>
            </tr>
            <tr>
              <td>Date Of Event:<input type="date" id="dateOfEvent" name="dateOfEvent" value={dateOfEvent} min={getCurrentDate()} onChange={(e) => setDateOfEvent(e.target.value)} required /></td>
              <td>Time Of Event:<input type="time" id="timeOfEvent" name="timeOfEvent" value={timeOfEvent} onChange={(e) => setTimeOfEvent(e.target.value)} required /></td>
            </tr>
            <tr>
              <td colSpan={2}>Address Of the Event:<input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} required /></td>
            </tr>
            <tr>
              <td colSpan={2}><button type="submit" >Booking the Meeting</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default CusOrder;
