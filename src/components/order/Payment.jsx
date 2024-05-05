/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/order/DummyPaymentGateway.css'; // Import CSS for styling
import image from "../../assets/order-images/form_bg.png";
import Navbarnew from "../../components/order/orderCusNavbar.jsx";
import Footer from '../../components/Footer.jsx';

const DummyPaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Use navigate from react-router-dom

  const processPayment = () => {
    // Simulating payment processing delay
    setTimeout(() => {
      // Simulating random success or failure
      const isSuccess = Math.random() < 0.5;
      if (isSuccess) {
        setPaymentStatus('success');
      } 
    }, 1000); // Simulating a 2-second delay
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Validate card details
    const errors = {};
    if (!cardNumber.trim()) {
      errors.cardNumber = 'Card number is required';
    }
    if (!cardName.trim()) {
      errors.cardName = 'Cardholder name is required';
    }
    if (!expiry.trim()) {
      errors.expiry = 'Expiry date is required';
    }
    if (!cvv.trim()) {
      errors.cvv = 'CVV is required';
    }
    setErrors(errors);

    // If there are no errors, process payment
    if (Object.keys(errors).length === 0) {
      processPayment();
    }
  };

  const handleGoBack = () => {
    navigate('/homepage'); 
  };

  return (
    <><Navbarnew />
    <div style={{ height: "100vh", backgroundImage: `url(${image})`, backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", }}>
      <div className="payment-container" style={{ boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2)", transition: "0.3s", padding: "20px", marginTop: "3rem" }}>
        <h2 className="payment-title">Payment</h2>
        <form onSubmit={handlePayment} className="payment-form">
          <div className="payment-form-group">
            <label className="payment-form-label">Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Enter card number"
              className="payment-form-input" />
            {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
          </div>
          <div className="payment-form-group">
            <label className="payment-form-label">Cardholder Name:</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Enter cardholder name"
              className="payment-form-input" />
            {errors.cardName && <p className="error-message" style={{ color: 'red' }}>{errors.cardName}</p>}
          </div>
          <div className="payment-form-row">
            <div className="payment-form-group">
              <label className="payment-form-label">Expiry Date:</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                className="payment-form-input expiry-input" />
              {errors.expiry && <p className="error-message" style={{ color: 'red' }}>{errors.expiry}</p>}
            </div>
            <div className="payment-form-group">
              <label className="payment-form-label">CVV:</label>
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                placeholder="Enter CVV"
                className="payment-form-input cvv-input" />
              {errors.cvv && <p className="error-message" style={{ color: 'red' }}>{errors.cvv}</p>}
            </div>
          </div>
          <button type="submit" className="pay-btn">Pay</button>
        </form>
        {paymentStatus === 'success' && (
            <>
              <p className="payment-success">Payment successful!</p>
              <button onClick={handleGoBack} style={continueShoppingButton}>Continue Shopping</button>
            </>
          )}
        
      </div>
    </div>
    <Footer/>
    </>
  );
};

// Inline styles for the "Continue Shopping" button
const continueShoppingButton = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  marginTop: '20px',
  transition: 'background-color 0.3s ease',
};

export default DummyPaymentGateway;