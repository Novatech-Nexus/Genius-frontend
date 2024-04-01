import React from "react";
import logo from '../../assets/inventory-images/geniuslogo.png'

function Header(){
    return(
        <div>
            <nav class="navbar bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand d-flex align-items-center" href="#">
                        <div style={{marginLeft:"50px"}}>
                            <img src={logo} alt="Logo" width="75" height="75" class="d-inline-block align-text-top"/>
                        </div>
                        
                        <div class="ms-4" style={{fontSize:"30px",color:"white",fontFamily:"inherit",fontWeight:"bold"}}>GENIUS RESTUARANT</div>
                    </a>
                </div>
            </nav>
        </div>
    )
}
export default Header;