import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/inventory-images/geniuslogo.png';
import { NavLink } from "react-router-dom";

function TableRNavBar(){
    return(
        <div className="bg-body-tertiary" style={{ zIndex: 1000 }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src={logo} className="d-inline-block align-text-top" alt="Logo" style={{ height: "75px",width:"75px", marginRight: "10px" }} />
                        <div className="ms-4" style={{fontSize:"30px",color:"white",fontFamily:"inherit",fontWeight:"bold"}}>GENIUS RESTAURANT</div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink exact to="/reservation" className="nav-link" activeStyle={{ fontWeight: 'bold', color: 'white',fontFamily: 'CustomFont' }}>Home</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink exact to="/arch" className="nav-link" activeStyle={{ fontWeight: 'bold', color: 'white' ,fontFamily: 'CustomFont' }}>Booking</NavLink>
                        </li>
                        <li className="nav-item">
                             <NavLink exact to="/booking" className="nav-link" activeStyle={{ fontWeight: 'bold', color: 'white' ,fontFamily: 'CustomFont'}}>Reservations</NavLink>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TableRNavBar;



// import React from "react";
// import { NavLink } from "react-router-dom";
// const TableRNavBar = () => {

//     const linkStyle = {
//         color: 'black',  // Set text color to black
//         textDecoration: 'none'  // Remove underline from link
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary sticky-top" style={{ zIndex: 1000 }}>
//             <div className="container-fluid justify-content-end">
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//                     <ul className="navbar-nav" style={{fontWeight: 'bold' , fontFamily: 'CustomFont' , color: 'darkblack' , fontSize: '20px'}}>

//                         <li className="nav-item">
//                             <NavLink exact to="/reservation" className="nav-link" activeStyle={{ fontWeight: 'bold', color: 'black' }}>Home</NavLink>
//                         </li>
                        
//                         <li className="nav-item">
//                             <NavLink exact to="/arch" className="nav-link" activeStyle={{ fontWeight: 'bold', color: 'black' }}>Booking</NavLink>
//                         </li>
//                         <li className="nav-item">
//                         <NavLink exact to="/booking" className="nav-link" activeStyle={{ fontWeight: 'bold', color: 'black' }}>Reservations</NavLink>
//                         </li>
                        

                        
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default TableRNavBar;
