import React, { useState } from 'react';
import axios from 'axios';
import img9 from '../../assets/catering/img9.jpeg';



function PlaceOrder() {
  const [menuType, setMenuType] = useState([]); 
  const [noOfPer, setnoOfPer] = useState('');
  const [fName, setfName] = useState('');
  const [lName, setlName] = useState('');
  const [email, setemail] = useState('');
  const [conNum1, setconNum1] = useState('');
  const [conNum2, setconNum2] = useState('');
  const [date, setdate] = useState('');
  const [time, settime] = useState('');
  const [address, setaddress] = useState('');

  function sendData(e) {
    e.preventDefault();

    const newCatOrder = {
        menuType,
        noOfPer,
        fName,
        lName,
        email,
        conNum1,
        conNum2,
        date,
        time,
        address
    }

    axios.post("http://localhost:8099/CatOrdering/add", newCatOrder)
      .then(response => {
        alert("Order Added Successfully");
        window.location.replace('/orderDetail');
      })
      .catch(err => {
        console.error(err);
        alert("An error occurred while placing the order. Please try again later.");
      });
      
  }

  function handleCheckboxChange(e) {
    const value = e.target.value;
    if (e.target.checked) {
      setMenuType([...menuType, value]); // Add value to array
    } else {
      setMenuType(menuType.filter(item => item !== value)); // Remove value from array
    }
  }

  const backgroundStyle = {
    backgroundImage: `url(${img9})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };
 // Inline CSS
    const inlineCSS = `
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
    
    /* Add your additional CSS styles here */
    button[type="submit"] {
      background-color: #6B4423;
      color: white;
      cursor: pointer;
    }

    button[type="submit"]:hover {
      background-color: #6B4423;
    }

    /* Responsive styles */
    @media only screen and (max-width: 600px) {
      .form-container {
        padding: 10px;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    /* Body styles */
    body {
      font-family: Arial, sans-serif;
      background-color: #f8f8f8;
    }

    /* Form container styles */
    .form-container {
      max-width: 600px;
      margin: 0 auto; /* This centers the container horizontally */
      padding: 20px;
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }


    /* Table styles */
    table {
      width: 40%;
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
    
    h2{
      text-align: center;
      background-color: #CC9966;
    }
    div {
      max-width: auto; 
      margin: 0 auto; 
      padding: 5px; 
    }
    `;
  return (
    <div style={backgroundStyle}>
      <style>{inlineCSS}</style>
      <form onSubmit={sendData}>
        <table border={0} style={{ background: 'white' }}>
          <tbody>
            <tr>
              <th colSpan="2"><h2>Place Order</h2></th>
            </tr>
            <tr>
              <td colSpan="2">
                Menu Types:
                <div className="Jcheckbox-container">
                  <input type="checkbox" onChange={handleCheckboxChange} value="Morning" /> Morning
                  <input type="checkbox" onChange={handleCheckboxChange} value="Afternoon" /> Afternoon
                  <input type="checkbox" onChange={handleCheckboxChange} value="Evening" /> Evening
                  <input type="checkbox" onChange={handleCheckboxChange} value="Night" /> Night
                </div>
              </td>
            </tr>
            <tr>
            <td colSpan="2"> Number Of Persons:<input  type="number"  id="noOfPer"  value={noOfPer} onChange={(e) => setnoOfPer(Math.min(Math.max(parseInt(e.target.value), 25), 1000))} min="25" max="1000" required /></td>
            </tr>
            <tr>
              <th colSpan="2">Customer Details</th>
            </tr>
            <tr>
              <td>First Name:<input type="text" id="fName" value={fName} onChange={(e) => setfName(e.target.value.replace(/[^A-Za-z]/ig, ''))} required /></td>
              <td>Last Name:<input type="text" id="lName" value={lName} onChange={(e) => setlName(e.target.value.replace(/[^A-Za-z]/ig, ''))} required /></td>
            </tr>
            <tr>
              <td colSpan="2">Email Address:<input type="email" id="email" value={email} onChange={(e) => setemail(e.target.value)} required /></td>
            </tr>
            <tr>
              <td>Contact Number 1:<input type="tel" id="conNum1" maxLength={10} value={conNum1} onChange={(e) => setconNum1(e.target.value.replace(/\D/, ''))} required /></td>
              <td>Contact Number 2:<input type="tel" id="conNum2" maxLength={10} value={conNum2} onChange={(e) => setconNum2(e.target.value.replace(/\D/, ''))} required /></td>
            </tr>
            <tr>
              <td>Date Of Event:<input type="date" id="date" value={date} onChange={(e) => setdate(e.target.value)} required /></td>
              <td>Time Of Event:<input type="time" id="settime" value={time} onChange={(e) => settime(e.target.value)} required /></td>
            </tr>
            <tr>
              <td colSpan="2">Address Of the Event:<input type="text" id="address" value={address} onChange={(e) => setaddress(e.target.value)} required /></td>
            </tr>
            <tr>
              <td colSpan="2"><button type="submit">Place Order</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default PlaceOrder;



