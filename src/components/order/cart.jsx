/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../styles/order/cart.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios'; // Import Axios

const Cart = ({ cart, setCart, handleChange }) => {
  const [prices, setPrice] = useState(0);
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => (ans += item.amount * item.prices)); // Use forEach instead of map for iterating without creating a new array
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  const navigate = useNavigate();

  const handleCheckout = async () => {
    try {
      // Prepare data to be sent
      const orderDetails = cart.map(item => ({
        name: item.name,
        amount: item.amount,
        price: item.prices,
        totalPrice: item.amount * item.prices
      }));
  
      // Send a request to your backend to store cart data in the database
      const response = await axios.post("http://localhost:5050/api/orderCart/addOrderCart", orderDetails);
  
      console.log(response.data); // Log the response from the backend
      navigate("create");
    } catch (error) {
      console.log(error); // Log any errors that occur during the request
    }
  };
  


  return (
    <article>
       <h3 style={{ textAlign: 'center', margin: '40px 0 20px' , fontSize: '50px'}}>Order Summary</h3>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.imageUrl} alt="" />
            <p>{item.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.prices}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs : {prices}</span>
      </div>
      <Button style={{marginBottom: '50px'}} onClick={handleCheckout}>Checkout</Button>
    </article>
  );
};

export default Cart;
