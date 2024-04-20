import React from 'react';
import staffdashboard from '../../assets/staff-images/staffdashboard.jpg';

function Employeecard() {
  return (
    <>
      <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", width: "100%", height: "100%" }}>
        <div style={{ position: "relative" }}>
          <img src={staffdashboard} alt="Genius" width="1530px" height="800px" />
          <div style={{ position: "absolute", top: "200px", left: "340px", textAlign: "left" }}>
            <h1 style={{ color: "white", fontSize: "3em", lineHeight: "1.2" }}>Welcome to<br />Staff<br />management </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employeecard;
