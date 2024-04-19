import React from "react";
const TableRNavBar = () => {

    const linkStyle = {
        color: 'black',  // Set text color to black
        textDecoration: 'none'  // Remove underline from link
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary sticky-top" style={{ zIndex: 1000 }}>
            <div className="container-fluid justify-content-end">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">

                        
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/booking">Booking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Change</a>
                        </li>

                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TableRNavBar;
