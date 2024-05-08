import { useEffect, useState } from 'react';
import axios from 'axios';
import image from "../../assets/order-images/woodbg.png";
import Navbarnew from "../../components/order/orderCusNavbar.jsx";
import Footer from '../../components/Footer.jsx';


const OrderCartDisplay = () => {
  const [orderCarts, setOrderCarts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5050/api/ordercart/getOrderCart')
      .then((res) => {
        const reversedOrderCarts = res.data.reverse();
        setOrderCarts(reversedOrderCarts);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteOrderCart = (id) => {
    axios
      .delete(`http://localhost:5050/api/orderCart/deleteOrderCart/${id}`)
      .then((res) => {
        console.log(res.data); // Log response after successful deletion
        // Update orderCarts state by filtering out the deleted item
        const updatedOrderCarts = orderCarts.filter((cart) => cart._id !== id);
        setOrderCarts(updatedOrderCarts);
      })
      .catch((err) => {
        console.log(err);
        // Handle error if deletion fails
      });
  };
  

  return (
    <>
      <Navbarnew />
      <div style={{ backgroundImage: `url(${image})` }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>My orders</h1>
          {orderCarts.map((cart) => (
            <div key={cart._id} style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '20px',
              backgroundColor: 'lightyellow',
              width: '80%',
              maxWidth: '600px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              textAlign: 'left'
            }}>
              <p>Created At: {new Date(cart.createdAt).toLocaleString()}</p>
              <p style={{ fontWeight: 'bold' }}>Net Total: {cart.netTotal}</p>
              <ul>
                {cart.items.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.amount} x {item.price} = {item.totalPrice}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => deleteOrderCart(cart._id)}
                style={{
                  marginTop: '10px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease',
                }}
              >
                Delete Order
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default OrderCartDisplay;
