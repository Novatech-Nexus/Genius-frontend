/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../../styles/order/DummyPaymentGateway.css'; // Import CSS for styling
import image from "../../assets/order-images/form_bg.png";

const DummyPaymentGateway = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [errors, setErrors] = useState({});

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

  return (
    <div style={{height: "100vh", backgroundImage: `url(${image})`, backgroundSize: "cover", display: "flex",justifyContent: "center",alignItems: "center", }}>
    <div className="payment-container" style={{ boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2)", transition: "0.3s", padding: "20px",marginTop: "3rem"}} >
      <h2 className="payment-title">Payment</h2>
      <form onSubmit={handlePayment} className="payment-form">
        <div className="payment-form-group">
          <label className="payment-form-label">Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Enter card number"
            className="payment-form-input"
          />
          {errors.cardNumber && <p className="error-message" >{errors.cardNumber}</p>}
        </div>
        <div className="payment-form-group">
          <label className="payment-form-label">Cardholder Name:</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="Enter cardholder name"
            className="payment-form-input"
          />
          {errors.cardName && <p className="error-message" style={{color:'red'}}>{errors.cardName}</p>}
        </div>
        <div className="payment-form-row">
          <div className="payment-form-group">
            <label className="payment-form-label">Expiry Date:</label>
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              placeholder="MM/YY"
              className="payment-form-input expiry-input"
            />
            {errors.expiry && <p className="error-message" style={{color:'red'}}>{errors.expiry}</p>}
          </div>
          <div className="payment-form-group">
            <label className="payment-form-label">CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              placeholder="Enter CVV"
              className="payment-form-input cvv-input"
            />
            {errors.cvv && <p className="error-message" style={{color:'red'}}>{errors.cvv}</p>}
          </div>
        </div>
        <button type="submit" className="pay-btn">Pay</button>
      </form>
      {paymentStatus === 'success' && <p className="payment-success">Payment successful!</p>}
      {/* {paymentStatus === 'failure' && <p className="payment-failure">Payment failed. Please try again.</p>} */}
    </div>
    </div>
  );
};

export default DummyPaymentGateway;