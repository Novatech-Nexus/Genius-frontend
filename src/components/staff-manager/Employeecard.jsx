import React from 'react'
import staffdashboard from '../../assets/staff-images/staffdashboard.jpg' 


function Employeecard() {
  return (
    
    
   <>
    <div style={{ display: "flex", alignItems: "center",justifyContent:"center",flexWrap:"wrap" }}>
            <div style={{marginLeft:"200px",marginTop:"100px"}}>
                <img src={staffdashboard} alt="Genius" width="500px" height="500px"/>
            </div>
            
            <div style={{ marginLeft: "100px" }}>
                <h2 style={{color:"grey"}}>Welcome to<br></br>
                    Staff<br></br>
                    management system
                </h2>
            </div>
           
          
        </div>
</>
    
  );
};

export default Employeecard;
