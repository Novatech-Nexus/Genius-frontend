import { useEffect, useState } from 'react';
import axios from 'axios';
import image from "../../assets/order-images/wood.png";

const OrderCartDisplay = () => {
  const [orderCarts, setOrderCarts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5050/api/ordercart/getOrderCart')
      .then((res) => {
        // Reverse the order of orderCarts array to display the most recent first
        const reversedOrderCarts = res.data.reverse();
        setOrderCarts(reversedOrderCarts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{backgroundImage: `url(${image})`}}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>My orders</h1>
      {orderCarts.map((cart) => (
        <div key={cart._id} style={{ 
          border: '1px solid #ccc', 
          padding: '10px', 
          marginBottom: '20px', 
          backgroundColor: 'lightbrown', 
          width: '80%', 
          maxWidth: '600px', 
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          textAlign: 'left'
        }}>
          <p>Created At: {new Date(cart.createdAt).toLocaleString()}</p> {/* Display createdAt date/time */}
          <p style={{ fontWeight: 'bold' }}>Net Total: {cart.netTotal}</p>

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
};

export default OrderCartDisplay;
