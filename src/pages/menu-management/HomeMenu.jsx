import React from "react";
import Navbar from "../../components/Menu Management/menuNavbar";
import Clock from "../../components/Menu Management/clockM";
import Menhome from "../../components/Menu Management/menuHome";


function HomeMenu() {
  return (
    <div>
      <Navbar />
      <Menhome/>
      <Clock/>
    </div>
  );
}
export default HomeMenu;
