import React from 'react'
import staffmember from '../../assets/staff-images/staffmember.jpg' 


function staffmemberimg() {
  return (
    <div>
       <div style={{ display: "flex", alignItems: "center",justifyContent:"center",flexWrap:"wrap" }}>
            <div style={{marginLeft:"200px",marginTop:"100px"}}>
                <img src={staffmember} alt="Genius" width="800px" height="500px"/>
            </div>
            
            <div style={{ marginLeft: "100px" }}>
                <h2 style={{color:"grey"}}>Welcome to<br></br>
                    Genius<br></br>
                    Restuatent
                </h2>
            </div>
           
          
        </div>
    </div>
  )
}

export default staffmemberimg
