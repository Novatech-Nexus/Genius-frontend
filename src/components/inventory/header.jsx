// import React from "react";
import logo from '../../assets/inventory-images/geniuslogo.png'
import { NavLink } from "react-router-dom";

function Header(){
    return(
        
        <div className="sticky-top bg-body-tertiary" style={{ zIndex: 1000 }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} class="d-inline-block align-text-top" alt="Logo" style={{ height: "75px",width:"75px", marginRight: "10px" }} />
                    <div class="ms-4" style={{fontSize:"30px",color:"white",fontFamily:"inherit",fontWeight:"bold"}}>GENIUS RESTUARANT</div>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/dashboard">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/dashboard/allitem">Inventory</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to="/dashboard/allsupplier">Suppliers</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </div>

    )
}
export default Header;