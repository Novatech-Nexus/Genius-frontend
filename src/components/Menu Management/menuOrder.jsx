import React from "react";
import { NavLink } from "react-router-dom";
import item3 from "../../assets/MenuM/item3.jpg";

function MenOrder() {
    return (
        <div style={{ 
            backgroundImage: `url(${item3})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '100vh' 
        }}>
            <h1 style={{ 
                color: 'red', 
                fontWeight: 'bold',
                fontSize: '50px',
                marginBottom: '20px',
                textAlign: 'center',
                paddingTop: '25px',
                fontFamily: 'Poppins, sans-serif' 
            }}>ORDERS TABLE</h1>
        </div>
    );
}

export default MenOrder;
