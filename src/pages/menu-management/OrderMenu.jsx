import React from "react";
import Navbar from "../../components/Menu Management/menuNavbar";
import MenOrder from "../../components/Menu Management/menuOrder";
import Footer from '../../components/Footer'

function OrderMenu() {
    return (
      <div>
        <Navbar />
       <MenOrder/>
       <Footer/>
      </div>
    );
  }
  export default OrderMenu;