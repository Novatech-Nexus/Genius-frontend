import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

import Modal from 'react-bootstrap/Modal';

export default function Food({ food }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
        <h1>{food.name}</h1>
        <img
          className="img-fluid"
          src={food.imageUrl}
          alt={food.name}
          style={{ height: '200px', width: '200px' }}
        />
      </div>

      <div className="flex-container">
        <div className='w-100 m-1'>
          <p>Variants</p>
          <select className='form-control' value={varient} onChange={(e) => { setVarient(e.target.value) }}>
            {food.varients.map((varient, index) => (
              <option key={index} value={varient}>{varient}</option>
            ))}
          </select>
        </div>

        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value) }}>
            {[...Array(10).keys()].map((_, i) => (
              <option key={i} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div className='m-1 w-100'>
          <h1 className='mt-1'>Price: {food.prices[0][varient] * quantity} Rs/-</h1>
        </div>

        <div className='m-1 w-100'>
          <button className="btn">ADD TO CART</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{food.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={food.imageUrl} alt={food.name} className="img-fluid" style={{ height: '400px' }} />
          <p>{food.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

// Add PropTypes validation
Food.propTypes = {
  food: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    varients: PropTypes.arrayOf(PropTypes.string).isRequired,
    prices: PropTypes.array.isRequired // Adjust as needed
  }).isRequired
};
