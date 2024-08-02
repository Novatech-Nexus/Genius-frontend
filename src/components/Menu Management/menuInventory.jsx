import React, { useState, useEffect,useRef } from "react";
import axios from "axios";
import item3 from "../../assets/MenuM/item3.jpg";
import searchMenu from '../../assets/MenuM/searchMenu.png';
import "../../styles/menu/menuTable.css";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // Import SweetAlert

function MenuInv() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_rr135xi', 'template_fh1hxp5', form.current, {
        publicKey: 'WtlTqr50uxJ8VHsWZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Show Toast notification
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
  
          Toast.fire({
            icon: "success",
            title: "Email sent successfully"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };
  

  useEffect(() => {
    function getItems() {
      axios.get("http://localhost:5050/inventoryItem/getinventory")
        .then((res) => {
          console.log(res.data);
          setItems(res.data);
        })
        .catch((err) => {
          console.error("Error fetching items:", err);
          // Handle errors more gracefully, e.g., set an error state
        });
    }

    getItems();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${item3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
      }}>

      <h1 className="Mtopic-text">AVAILABLE INVENTORY ITEMS</h1>

      <div className="Mmen-table2-container">

        <input type="text"
            placeholder="Search by Item Name"
            value={searchTerm}
            onChange={handleSearch}
            style={{
              width: '300px',
              backgroundImage: `url(${searchMenu})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'calc(100% - 10px) center',
              backgroundSize: '30px',
              paddingLeft: '40px',
              height: '50px',
              border: '1px solid #ccc',
              borderRadius: '40px',
              marginBottom: '20px',
          }}/>

        <table className="Mmen-table2">
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Item code</th>
              <th style={{ textAlign: "center" }}>Name</th>
              <th style={{ textAlign: "center" }}>Item Group</th>
              <th style={{ textAlign: "center" }}>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id}>
                <td style={{ textAlign: "center" }}>{item.code}</td>
                <td style={{ textAlign: "center" }}>{item.name}</td>
                <td style={{ textAlign: "center" }}>{item.igroup}</td>
                <td style={{ textAlign: "center" }}>{item.quantity} {item.kg}</td>
              </tr>
            ))}
          </tbody>

        </table>

            <form ref={form} onSubmit={sendEmail} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '20px',backgroundColor:'#fafafa',marginBottom:"20px" }}>
                 <label htmlFor="message" style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>
                  Send Mail to Inventory Manager
                 </label>
                  <textarea name="message" style={{ width: '100%', height: '100px', padding: '10px', fontSize: '14px', border: '1px solid #ccc', borderRadius: '5px', resize: 'vertical',backgroundColor:'#ececec' }} />
                  <input
                      type="submit"
                      value="Send"
                      className="Mbtn1 delete-btn"
                      style={{ display: 'block', margin: '0 auto', width: '100px', textAlign: 'center' }}
                  />
        </form>

      </div>
    </div>
  );
}

export default MenuInv;
