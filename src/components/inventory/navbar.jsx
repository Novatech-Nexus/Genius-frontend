import React from "react";


function Navbar(){
    return(

        <div className="sticky-top bg-body-tertiary" style={{ zIndex: 1000 }}>
    
            <div className="d-flex justify-content-center"  style={{marginTop:"10px"}}>


                    <nav className="navbar navbar-expand-lg bg-body-tertiary ml-3" >
                        <div className="container-fluid" >
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav" >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Inventory</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Suppliers</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

    )
}

export default Navbar;