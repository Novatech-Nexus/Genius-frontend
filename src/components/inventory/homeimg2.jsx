import React from "react";
import homeimg2 from '../../assets/inventory-images/addsup.png'

function HomeImg2(){
    return(
        <div style={{ display: "flex", alignItems: "center", justifyContent:"center",flexWrap:"wrap" }}>

            <div style={{ marginLeft: "200px" ,marginTop:"75px"}}>
                <button type="button" class="btn btn-danger">+ Add supplier</button>
            </div>

            <div style={{ marginLeft: "150px",marginTop:"10px" }}>
                <h2 style={{color:"grey"}}>Add Suppliers &<br></br>
                    Maintain Suppliers<br></br>
                    Details<br></br>
                </h2>
            </div>
            <div style={{marginLeft:"200px",marginTop:"100px"}}>
                <img src={homeimg2} alt="Genius" width="450px" height="300px"/>
            </div>

        </div>
    )
}
export default HomeImg2;