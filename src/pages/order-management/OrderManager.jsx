/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap'; // Import Button component from react-bootstrap
import { useNavigate } from 'react-router-dom';
import reportImage from '../../assets/order-images/orderRep.png';
import cusDetailsImage from '../../assets/order-images/cusDetails.png';
import image from '../../assets/order-images/bg.png';
import NavbarManager from '../../components/order/orderManagerNavbar.jsx';
import Footer from '../../components/Footer.jsx';

export default function OrderManager() {
  const navigate = useNavigate();

  return (
    <><NavbarManager />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '30px' }}>Welcome to Order Management</h1>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '80%' }}>
              <ImageButton image={reportImage} label="Reports" onClick={() => navigate('reports')} />
              <ImageButton image={cusDetailsImage} label="Customer Details" onClick={() => navigate('orderUserDetails')} />
          </div>
          <div style={{ marginTop: '50px', width: '80%', textAlign: 'center', marginBottom: '50px' }}>
              <Button variant="outline-dark" onClick={() => navigate(-1)} style={{ width: '120px', fontSize: '16px' }}>
                  BACK
              </Button>
          </div>
      </div>
      <Footer/>
      </>
  );
}

function ImageButton({ image, label, onClick }) {
    return (
      <div
        style={{
          width: '300px',
          height: '300px',
          border: '1px solid lightgray',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <img src={image} alt={label} style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }} onClick={onClick} />
        <h5 style={{ marginTop: '10px', fontSize: '16px', fontWeight: 'bold', maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</h5>
      </div>
    );
  }



  
  
