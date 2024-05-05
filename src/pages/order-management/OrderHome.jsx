import React, { useState } from "react";
import Amazon from "../../pages/order-management/HomepageOrder.jsx";
import Navbar from "../../components/order/Navbar.jsx";
import Cart from "../../components/order/cart.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/order/Homepage.css";
import Navbarnew from "../../components/order/orderCusNavbar.jsx";
import Footer from '../../components/Footer.jsx';

const OrderHome = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <Navbarnew/>
      <Navbar setShow={setShow} size={cart.length} />
      
      {show ? (
        <Amazon handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      <Footer/>
    </React.Fragment>
  );
};

export default OrderHome;
