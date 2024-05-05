import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img6 from "../../assets/catering/img6.jpeg";
import Swal from 'sweetalert2';

function PlaceOrder() {
  const [functionType, setFunctionType] = useState('');
  const [menuTypes] = useState([
    { type: "Morning", price: 4500},
    { type: "Afternoon", price: 6000 },
    { type: "Evening", price: 4500 },
    { type: "Night", price: 6000 }
  ]);
  const [selectedMenuTypes, setSelectedMenuTypes] = useState([]);
  const [noOfPer, setNoOfPer] = useState('');
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [conNum1, setConNum1] = useState('');
  const [conNum2, setConNum2] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [perPersonPrice, setPerPersonPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const price = selectedMenuTypes.reduce((total, selectedType) => {
      const type = menuTypes.find(type => type.type === selectedType);
      if (type) {
        return total + type.price;
      }
      return total;
    }, 0);
    setPerPersonPrice(price);
  }, [selectedMenuTypes, menuTypes]);

  useEffect(() => {
    const total = perPersonPrice * parseInt(noOfPer) || 0;
    setTotalPrice(total);
  }, [perPersonPrice, noOfPer]);

  function sendData(e) {
    e.preventDefault();

    const newCatOrder = {
      functionType,
      menuType: selectedMenuTypes,
      noOfPer,
      fName,
      lName,
      email,
      conNum1,
      conNum2,
      date,
      time,
      address,
      perPersonPrice,
      totalPrice
    };

    axios.post("http://localhost:5050/CatOrdering/add", newCatOrder)
      .then(response => {
        Swal.fire({
          title: "Order Added Successfully!",
          icon: "success"
        });
        window.location.replace('orderDetail');
      })
      .catch(err => {
        console.error(err);
        Swal.fire({
          title: "Error!",
          text: "Failed to add order. Please try again later.",
          icon: "error"
        });
      });
  }

  function handleCheckboxChange(e) {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedMenuTypes([...selectedMenuTypes, value]);
    } else {
      setSelectedMenuTypes(selectedMenuTypes.filter(item => item !== value));
    }
  }

  function handleSelectChange(e) {
    const value = e.target.value;
    setFunctionType(value);
  }

  function getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    return yyyy + '-' + mm + '-' + dd;
  }

  return (
    <div style={{backgroundImage: `url(${img6})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh'}}>
      <style>{`
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

        button[type="submit"] {
          background-color: #6B4423;
          color: white;
          cursor: pointer;
        }

        button[type="submit"]:hover {
          background-color: #6B4423;
        }

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

        h2 {
          text-align: center;
        }

        div {
          max-width: auto;
          margin: 0 auto;
          padding: 5px;
        }
      `}</style>
      <form onSubmit={sendData}>
        <table border={0} style={{ background: 'white' }}>
          <tbody>
            <tr>
              <th colSpan="2"><h2>Place Order</h2></th>
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
                  {menuTypes.map((type) => (
                    <label key={type.type}>
                      <input type="checkbox" onChange={handleCheckboxChange} value={type.type} checked={selectedMenuTypes.includes(type.type)} /> {type.type}
                    </label>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="2"> Number Of Persons:<input type="number" id="noOfPer" value={noOfPer} onChange={(e) => setNoOfPer(Math.min(Math.max(parseInt(e.target.value), 25), 1000))} min="25" max="1000" required /></td>
            </tr>
            <tr>
              <th colSpan="2">Customer Details</th>
            </tr>
            <tr>
              <td>First Name:<input type="text" id="fName" value={fName} onChange={(e) => setFName(e.target.value.replace(/[^A-Za-z]/ig, ''))} required /></td>
              <td>Last Name:<input type="text" id="lName" value={lName} onChange={(e) => setLName(e.target.value.replace(/[^A-Za-z]/ig, ''))} required /></td>
            </tr>
            <tr>
              <td colSpan="2">Email Address:<input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
            </tr>
            <tr>
              <td>Contact Number 1:<input type="tel" id="conNum1" maxLength={10} value={conNum1} onChange={(e) => setConNum1(e.target.value.replace(/\D/, ''))} required /></td>
              <td>Contact Number 2:<input type="tel" id="conNum2" maxLength={10} value={conNum2} onChange={(e) => setConNum2(e.target.value.replace(/\D/, ''))} required /></td>
            </tr>
            <tr>
                <td>Date Of Event:<input type="date" id="date" value={date} min={getCurrentDate()} onChange={(e) => setDate(e.target.value)} required /></td>
                <td>Time Of Event:<input type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} required /></td>
            </tr>
            <tr>
              <td colSpan="2">Address Of the Event:<input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required /></td>
            </tr>
            <tr>
              <td>Price per Person : Rs.<input type="text" value={perPersonPrice.toFixed(2)} required readOnly/></td>
              <td>Total Price: Rs.<input type="text" value={totalPrice.toFixed(2)} required readOnly/></td>
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
