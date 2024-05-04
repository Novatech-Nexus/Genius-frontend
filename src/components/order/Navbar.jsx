/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Navbar = ({ setShow, size }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)} // Toggle isOpen state
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
          
          <li className="nav-item">
              <a className="nav-link" style={{ color: 'black'}} href="/orderDetails">
                MyOrders
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" style={{ color: 'black'}} onClick={() => setShow(false)}>
                Cart
                <span style={{ backgroundColor: 'red', borderRadius: '50%', color: 'white', padding: '2px 6px', marginLeft: '5px' }}>
                  {size}
                </span>
              </a>
              <span>
                <i className="fas fa-cart-plus"></i>
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
