/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Cards = ({ item, handleClick }) => {
  const { name, prices, imageUrl } = item;

  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
        <div onClick={handleShow} style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '20px' }}>{item.name}</h1>
          <img
            className="img-fluid"
            src={item.imageUrl}
            alt={item.name}
            style={{ height: '300px', width: '300px', margin: 'auto' }}
          />
        </div>


        <div className="order-flex-container">
          <div className='m-1 w-50'>
            <h1 className='mt-1' style={{ fontSize: '20px' }}>Price: {item.prices} Rs/-</h1>
          </div>

          <div className='m-1 w-50 text-center'>
            <button className="btn" style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleClick(item)}>ADD TO CART</button>
          </div>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{item.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={item.imageUrl} alt={item.name} className="img-fluid" style={{ height: '400px', margin: 'auto' }} />
            <p>{item.description}</p>
          </Modal.Body>

          <Modal.Footer>
            <button className="btn" onClick={handleClose}>CLOSE</button>
          </Modal.Footer>
        </Modal>
      </div>

      
  </div>
  );
};

export default Cards;


