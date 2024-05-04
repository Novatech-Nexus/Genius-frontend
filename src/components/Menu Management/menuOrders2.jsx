import React, { useEffect, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import item3 from "../../assets/MenuM/item3.jpg";

function MenuOnOrder() {
  const [orderCarts, setOrderCarts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [originalOrderCarts, setOriginalOrderCarts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/ordercart/getOrderCart")
      .then((res) => {
        const reversedOrderCarts = res.data.reverse();
        setOriginalOrderCarts(reversedOrderCarts); // Store original data
        setOrderCarts(reversedOrderCarts);
        calculateTotalAmount(reversedOrderCarts);
      })
      .catch((err) => console.log(err));
  }, []);

  const calculateTotalAmount = (orderList) => {
    const amountSum = orderList.reduce((total, cart) => total + cart.netTotal, 0);
    setTotalAmount(amountSum);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);

    const filteredOrders = originalOrderCarts.filter((cart) => {
      const cartDate = new Date(cart.createdAt).toLocaleDateString();
      const selectedDateFormatted = date.toLocaleDateString();
      return cartDate === selectedDateFormatted;
    });

    setOrderCarts(filteredOrders);
    calculateTotalAmount(filteredOrders); // Recalculate total amount for the selected date
  };

  return (
    <div
      style={{
        backgroundImage: `url(${item3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundRepeat: "no-repeat",
        gap: "20px",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "red",
          fontWeight: "bold",
          padding: "10px",
          fontSize: "50px",
          marginBottom: "20px",
          textAlign: "center",
          fontFamily: "Poppins, sans-serif",
          width: "100%",
        }}
      >
        ONLINE ORDERS
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          borderRadius: "40px",
        }}
      >
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          placeholderText="Select a Date"
          dateFormat="MM/dd/yyyy"
          className="Mcustom-datepicker"
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#f9f9f9",
          width: "20%",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
          textAlign: "center",
          alignItems: "center",
          margin: "0 auto",
          padding: "10px",
        }}
      >
        <h5>Total Amount from Orders</h5>
        <h5>Rs: {totalAmount}.00</h5>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "20px",
        }}
      >
        {orderCarts.map((cart) => (
          <div
            key={cart._id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              backgroundColor: "#f9f9f9",
              width: "calc(50% - 20px)",
              maxWidth: "400px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
            }}
          >
            <h6 style={{ fontWeight: "bold" }}>Net Total: {cart.netTotal}</h6>
            <h6 style={{ fontWeight: "" }}>
              Date: {new Date(cart.createdAt).toLocaleDateString()}
            </h6>
            <h6 style={{ fontWeight: "" }}>
              Time: {new Date(cart.createdAt).toLocaleTimeString()}
            </h6>
            <ul>
              {cart.items.map((item, index) => (
                <li key={index}>
                  {item.name} - {item.amount} x {item.price} = {item.totalPrice}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuOnOrder;
