import React from "react";
import homeimg1 from '../../assets/inventory-images/addInv.png'
import {useNavigate} from "react-router-dom";


function HomeImg1 (){
    const navigate = useNavigate();
    return(

        <div style={{ display: "flex", alignItems: "center",justifyContent:"center",flexWrap:"wrap" }}>
            <div style={{marginLeft:"200px",marginTop:"100px"}}>
                <img src={homeimg1} alt="Genius" width="350px" height="350px"/>
            </div>
            
            <div style={{ marginLeft: "100px" }}>
                <h2 style={{color:"grey"}}>Add New<br></br>
                    Inventory Items &<br></br>
                    Update Details
                </h2>
            </div>
            <div style={{ marginLeft: "100px" }}>
                <button type="button" class="btn btn-success" onClick={() => navigate("/dashboard/additem")}>Add item</button>
            </div>
        </div>

    )
}

export default HomeImg1;