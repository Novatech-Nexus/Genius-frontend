import React, { useEffect, useState, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import img5 from '../../assets/catering/img6.jpeg';
import Swal from 'sweetalert2';

function CatUpdate() {
  const [formData, setFormData] = useState({
    functionType: '', 
    menuType: [], 
    noOfPer: 25, 
    fName: '', 
    lName: '', 
    email: '', 
    conNum1: '', 
    conNum2: '', 
    date: '', 
    time: '', 
    address: '', 
    perPersonPrice: 0, 
    totalPrice: 0
  });
  const [functionType, setFunctionType] = useState('');
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Fetching data...");
    axios.get("http://localhost:5050/CatOrdering")
      .then(res => {
        console.log("Data fetched:", res.data);
        const latestOrder = res.data[res.data.length - 1];
        if (latestOrder) {
          console.log("Latest order:", latestOrder);
          setData(latestOrder);
          // Update formData with fetched data
          setFormData({
            functionType: latestOrder.functionType,
            menuType: latestOrder.menuType,
            noOfPer: latestOrder.noOfPer,
            fName: latestOrder.fName,
            lName: latestOrder.lName,
            email: latestOrder.email,
            conNum1: latestOrder.conNum1,
            conNum2: latestOrder.conNum2,
            date: latestOrder.date,
            time: latestOrder.time,
            address: latestOrder.address,
            perPersonPrice: latestOrder.perPersonPrice,
            totalPrice: latestOrder.totalPrice
          });
          setFunctionType(latestOrder.functionType); // Update functionType state
        } else {
          console.log("No orders found");
        }
      })
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  // Define handleSelectChange function
  function handleSelectChange(e) {
    setFunctionType(e.target.value);
    setFormData(prevState => ({ ...prevState, functionType: e.target.value }));
  }

  // Define state update functions

  const setfName = (value) => setFormData({ ...formData, fName: value });
  const setlName = (value) => setFormData({ ...formData, lName: value });
  const setconNum1 = (value) => setFormData({ ...formData, conNum1: value });
  const setconNum2 = (value) => setFormData({ ...formData, conNum2: value });

 const menuTypes = useMemo(() => [
    { type: "Morning", price: 4500 },
    { type: "Afternoon", price: 6000 },
    { type: "Evening", price: 4500 },
    { type: "Night", price: 6000 }
  ], []);

  useEffect(() => {
    const price = formData.menuType.reduce((total, selectedType) => {
      const type = menuTypes.find(type => type.type === selectedType);
      if (type) {
        return total + type.price;
      }
      return total;
    }, 0);
    setFormData(prevState => ({ ...prevState, perPersonPrice: price }));
  }, [formData.menuType, menuTypes]);

  useEffect(() => {
    const total = formData.perPersonPrice * parseInt(formData.noOfPer) || 0;
    setFormData(prevState => ({ ...prevState, totalPrice: total }));
  }, [formData.perPersonPrice, formData.noOfPer]);

  function handleCheckboxChange(e) {
    const value = e.target.value;
    if (e.target.checked) {
      setFormData(prevState => ({ ...prevState, menuType: [...formData.menuType, value] }));
    } else {
      setFormData(prevState => ({ ...prevState, menuType: formData.menuType.filter(item => item !== value) }));
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  function handleUpdate(e) {
    e.preventDefault();

    axios.put(`http://localhost:5050/CatOrdering/update/${data._id}`, formData)
      .then(response => {
        Swal.fire({
          title: "Order Updated Successfully!",
          icon: "success"
        });
        navigate('/orderDetail');
      })
      .catch(err => {
        Swal.fire({
          title: "Error!",
          text: "Failed to add order. Please try again later.",
          icon: "error"
        });
        console.error("Error:", err);
      });
  }

  const backgroundStyle = {
    backgroundImage: `url(${img5})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  function getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
}

  const inlineCSS = `
    /* Add your additional CSS styles here */
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
    }

    .dropdown-container {
      margin-bottom: 10px;
  }
  select {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 16px;
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
                Function Type:
                <div>
                  <select onChange={handleSelectChange} value={functionType} required>
                    <option value="">Select Function Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Kids Parties">Kids Parties</option>
                    <option value="Seasonal Celebration">Seasonal Celebration</option>
                    <option value="Celebrations & Occasions">Celebrations & Occasions</option>
                  </select>
                </div>
              </td>
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
              <td colSpan="2">Number Of Persons:<input type="number" name="noOfPer" value={formData.noOfPer} onChange={handleInputChange} min="25" max="1000" required /></td>
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
                <td>Date Of Event: <input type="shortdate" name="date" value={formData.date} onChange={handleInputChange} required min={getCurrentDate()} /></td>
                <td>Time Of Event: <input type="time" name="time" value={formData.time} onChange={handleInputChange} required /></td>
            </tr>
            <tr>
              <td colSpan="2">Address Of the Event:<input type="text" name="address" value={formData.address} onChange={handleInputChange} required /></td>
            </tr>
            <tr>
              <td>Price per Person : Rs.<input type="text" value={formData.perPersonPrice.toFixed(2)} required readOnly/></td>
              <td>Total Price: Rs.<input type="text" value={formData.totalPrice.toFixed(2)} required readOnly/></td>
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
