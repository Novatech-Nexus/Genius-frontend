import React, { useState, useEffect } from "react";
import axios from "axios";
import item3 from "../../assets/MenuM/item3.jpg";

function MenuInv() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

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
      }}
    >
      <h1
        style={{
          color: 'red',
          fontWeight: 'bold',
          fontSize: '50px',
          marginBottom: '20px',
          textAlign: 'center',
          paddingTop: '20px',
          fontFamily: 'Poppins, sans-serif'
        }}
      >
        Available Inventory Records
      </h1>
      <div className="Mmen-table2-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by item name"
          style={{ marginBottom: '10px', padding: '5px' }}
        />
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
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.igroup}</td>
                <td>{item.quantity}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MenuInv;
