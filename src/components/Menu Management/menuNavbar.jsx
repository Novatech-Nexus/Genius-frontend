import React from "react";
import logoMe from '../../assets/MenuM/logoMe.png'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="/">
                    <img src={logoMe} alt="Logo" style={{ height: "50px", marginRight: "10px" }} />
                    <h4 className="mb-0 font-weight-bold">GENIUS RESTAURANT</h4>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/tables">Tables</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/orders">Orders</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
