import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import img5 from '../../assets/catering/img5.jpeg';

function OrderDet() {
    const [data, setData] = useState({}); // Declare data state variable
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Fetching data...");
        axios.get("http://localhost:8099/CatOrdering") // Modify the endpoint to fetch all orders
            .then(res => {
                console.log("Data fetched:", res.data);
                // Find the latest order by sorting orders based on date or any other criteria
                const latestOrder = res.data[res.data.length - 1]; // Assuming the last order is the latest
                if (latestOrder) {
                    console.log("Latest order:", latestOrder);
                    setData(latestOrder);
                } else {
                    console.log("No orders found");
                }
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []); // Empty dependency array to fetch data only once when the component mounts

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Would You Like to Delete the Order?");
        if (confirmDelete) {
            axios.delete(`http://localhost:8099/CatOrdering/delete/`+id)
                .then(() => {
                    alert('Order Deleted Succesfully');
                    navigate('/orderplace');
                })
                .catch(err => console.log(err));
        }
    }

    const backgroundStyle = {
      backgroundImage: `url(${img5})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
   //   marginTop: '20px', // Adjust the margin-top as needed
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
    .custom-button {
      background-color: #760203; 
      border: none;
      color: white;
      font-weight: bold;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 15px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 8px;
      width: 250px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    `;
    return (
        <div style={backgroundStyle}>
          <style>{inlineCSS}</style>
            <form>
                <table border={0} style={{ background: 'white' }}>
                    <tbody>
                        <tr>
                            <th colSpan="2"><h2>Order Details</h2></th>
                        </tr>
                        <tr>
                            <td colSpan="2">Menu Types:<input type="text" value={data.menuType} readOnly /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                Number Of Persons: <input type="number"  value={data.noOfPer} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">Customer Details</th>
                        </tr>
                        <tr>
                            <td>First Name:<input type="text" value={data.fName} readOnly /></td>
                            <td>Last Name:<input type="text" value={data.lName } readOnly /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Email Address:<input type="email" value={data.email } readOnly /></td>
                        </tr>
                        <tr>
                            <td>Contact Number 1:<input type="tel" value={data.conNum1 } readOnly /></td>
                            <td>Contact Number 2:<input type="tel" value={data.conNum2 } readOnly /></td>
                        </tr>
                        <tr>
                            <td>Date Of Event:<input type="shortdate" value={data.date} readOnly /></td>
                            <td>Time Of Event:<input type="time" value={data.time } readOnly /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Address Of the Event:<input type="text" value={data.address} readOnly /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <table style={{ marginTop: '20px' }}>
                <tbody>
                    <tr>
                        <td><Link to="/updateCat"><button type="button" className="custom-button">Update Order</button></Link></td>
                        <td><button type="button" className="custom-button" onClick={() => handleDelete(data._id)}>Delete Order</button></td>
                        <td><Link to="/wedmenu/#evening"><button type="button" className="custom-button">Confirm Order</button></Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
   
}

export default OrderDet;