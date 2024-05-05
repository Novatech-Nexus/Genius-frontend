import React from "react";
import Navbar from "../../components/Menu Management/menuNavbar"
import MenuInv from "../../components/Menu Management/menuInventory";
import Footer from '../../components/Footer'

function Invmenu() {
    return (
      <div>
        <Navbar/>
       <MenuInv/>
       <Footer/>
      </div>
    );
  }
  export default Invmenu;