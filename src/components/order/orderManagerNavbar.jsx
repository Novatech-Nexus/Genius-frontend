/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import logoMe from '../../assets/MenuM/logoMe.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <NavLink className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logoMe} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
                    <h4 className="mb-0 font-weight-bold">GENIUS RESTAURANT</h4>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" exact to="/orderManager">Dashboard</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
