/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Menu Management/menuNavbar";
import Itemme from "../../components/Menu Management/menuItem";
import Footer from '../../components/Footer'

function ItemMenu() {
    return (
      <div>
        <Navbar />
        <Itemme/>
        <Footer/>
      </div>
    );
  }
  export default ItemMenu;