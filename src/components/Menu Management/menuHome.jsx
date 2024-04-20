import React from "react";
import { Link } from "react-router-dom";
import profileMenu from '../../assets/MenuM/profileMenu.png';
import '../../styles/menu/menuHome.css';

function MenHome() {
  return (
    <div className="MMhome-container">
      <div className="MMprofile-container">
        <img
          src={profileMenu} 
          alt="profile"
        />
      </div>

      <div className="MMtext-container">
        <h4>Sahan Kavishka</h4>
        <h6>Kitchen Manager</h6>
      </div>

      <div className="MMtext-section">
        <div className="MMtext1">
          <h1>Add Menu</h1>
          <p>Adding an item (Menus, Foods, Drinks, Offers) topic is about seamlessly integrating new products into a database or inventory system. It includes collecting key details like item id, name, category, pricing, and description.</p>
          <Link to="/itemMenu" className="MMbtn MMbtn-danger">Add Items</Link>
        </div>

        <div className="MMtext2">
          <h1>Orders</h1>
          <p>Viewing online orders and catering orders on a single platform streamlines operational efficiency, enabling businesses to plan effectively and provide exceptional customer service, enhancing productivity and satisfaction.</p>
          <Link to="/orders" className="MMbtn MMbtn-danger">Orders</Link>
        </div>

        <div className="MMtext3">
          <h1>Inventory Details</h1>
          <p>By providing real-time updates on inventory levels, this feature enables users to make informed decisions, optimize stock management, and ensure timely fulfillment, ultimately enhancing overall operational efficiency and customer satisfaction.</p>
          <Link to="/inventory" className="MMbtn MMbtn-danger">Inventory</Link>
        </div>
      </div>
    </div>
  );
}

export default MenHome;
