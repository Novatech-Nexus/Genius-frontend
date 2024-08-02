import React from "react";
import Navbar from "../../components/Menu Management/menuNavbar"
import MenuOnOrder from "../../components/Menu Management/menuOrders2";
import Footer from '../../components/Footer'

function OnOrderMenu() {
    return (
      <div>
        <Navbar/>
        <MenuOnOrder/>
        <Footer/>
      </div>
    );
  }
  export default OnOrderMenu;