import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import img5 from '../../assets/catering/img5.jpeg';

function CatUpdate() {
  const [formData, setFormData] = useState({
    menuType: [],
    noOfPer: '',
    fName: '',
    lName: '',
    email: '',
    conNum1: '',
    conNum2: '',
    date: '',
    time: '',
    address: ''
  });

  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching data...");
    axios.get("http://localhost:8099/CatOrdering")
      .then(res => {
        console.log("Data fetched:", res.data);
        const latestOrder = res.data[res.data.length - 1];
        if (latestOrder) {
          console.log("Latest order:", latestOrder);
          setData(latestOrder);
          // Update formData with fetched data
          setFormData({
            menuType: latestOrder.menuType,
            noOfPer: latestOrder.noOfPer,
            fName: latestOrder.fName,
            lName: latestOrder.lName,
            email: latestOrder.email,
            conNum1: latestOrder.conNum1,
            conNum2: latestOrder.conNum2,
            date: latestOrder.date,
            time: latestOrder.time,
            address: latestOrder.address
          });
        } else {
          console.log("No orders found");
        }
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // Define state update functions
  const setnoOfPer = (value) => setFormData({ ...formData, noOfPer: value });
  const setfName = (value) => setFormData({ ...formData, fName: value });
  const setlName = (value) => setFormData({ ...formData, lName: value });
  const setconNum1 = (value) => setFormData({ ...formData, conNum1: value });
  const setconNum2 = (value) => setFormData({ ...formData, conNum2: value });

  function handleCheckboxChange(e) {
    const value = e.target.value;
    if (e.target.checked) {
      setFormData({ ...formData, menuType: [...formData.menuType, value] });
    } else {
      setFormData({ ...formData, menuType: formData.menuType.filter(item => item !== value) });
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  }

  function handleUpdate(e) {
    e.preventDefault();

    axios.put(`http://localhost:8099/CatOrdering/update/${data._id}`, formData)
      .then(response => {
        alert("Order Updated Successfully");
        navigate('/orderDetail');
      })
      .catch(err => {
        alert("Error updating order");
        console.error("Error:", err);
      });
  }

  const backgroundStyle = {
    backgroundImage: `url(${img5})`,
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
    div {
      max-width: auto; 
      margin: 0 auto; 
      padding: 5px; 
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
      width: 30%;
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
  `;

  return (
    <div style={backgroundStyle}>
      <style>{inlineCSS}</style>
      <form onSubmit={handleUpdate}>
        <table border={0} style={{ background: 'white' }}>
          <tbody>
            <tr>
              <th colSpan="2"><h2>Update Order</h2></th>
            </tr>
            <tr>
              <td colSpan="2">
                Menu Types:
                <div className="Jcheckbox-container">
                  <input type="checkbox" onChange={handleCheckboxChange} value="Morning" checked={formData.menuType.includes('Morning')} /> Morning
                  <input type="checkbox" onChange={handleCheckboxChange} value="Afternoon" checked={formData.menuType.includes('Afternoon')} /> Afternoon
                  <input type="checkbox" onChange={handleCheckboxChange} value="Evening" checked={formData.menuType.includes('Evening')} /> Evening
                  <input type="checkbox" onChange={handleCheckboxChange} value="Night" checked={formData.menuType.includes('Night')} /> Night
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2">Number Of Persons:<input type="number" name="noOfPer" value={formData.noOfPer} onChange={(e) => setnoOfPer(Math.min(Math.max(parseInt(e.target.value), 25), 1000))} min="25" max="1000" required /></td>
            </tr>
            <tr>
              <th colSpan="2">Customer Details</th>
            </tr>
            <tr>
              <td>First Name:<input type="text" name="fName" value={formData.fName} onChange={(e) => setfName(e.target.value.replace(/[^A-Za-z]/ig, ''))} required /></td>
              <td>Last Name:<input type="text" name="lName" value={formData.lName} onChange={(e) => setlName(e.target.value.replace(/[^A-Za-z]/ig, ''))} required /></td>
            </tr>
            <tr>
              <td colSpan="2">Email Address:<input type="email" name="email" value={formData.email} onChange={handleInputChange} required /></td>
            </tr>
            <tr>
              <td>Contact Number 1:<input type="tel" name="conNum1" maxLength={10} value={formData.conNum1} onChange={(e) => setconNum1(e.target.value.replace(/\D/, ''))} required /></td>
              <td>Contact Number 2:<input type="tel" name="conNum2" maxLength={10} value={formData.conNum2} onChange={(e) => setconNum2(e.target.value.replace(/\D/, ''))} required /></td>
            </tr>
            <tr>
              <td>Date Of Event:<input type="shortdate" name="date" value={formData.date} onChange={handleInputChange} required /></td>
              <td>Time Of Event:<input type="time" name="time" value={formData.time} onChange={handleInputChange} required /></td>
            </tr>
            <tr>
              <td colSpan="2">Address Of the Event:<input type="text" name="address" value={formData.address} onChange={handleInputChange} required /></td>
            </tr>
            <tr>
              <td colSpan="2"><button type="submit">Update Order</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default CatUpdate;
