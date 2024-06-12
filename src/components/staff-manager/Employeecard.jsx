import React from 'react';
import staffdashboard from '../../assets/staff-images/staffdashboard.jpg';

function Employeecard() {
  return (
    <>
      <div style={{
  backgroundImage: `url(${staffdashboard})`,
  backgroundSize: 'cover',
  backgroundPosition: 'top',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
}}>
  <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "flex-start", width: "100%", height: "100%" }}>
    <div style={{ position: "relative" }}>
      {/* Your content here */}
      <div style={{ position: "absolute", top: "200px", left: "340px", textAlign: "left" }}>
        <h1 style={{ color: "white", fontSize: "6em", lineHeight: "1.5" }}>Welcome to<br />Staff<br />management </h1>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Employeecard;
