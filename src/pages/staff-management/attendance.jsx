import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Sidebar1 from '../../components/staff-manager/Sidebar1';
import Footer from '../../components/Footer';

const AttendanceQRCode = () => {
  const [attendanceData, setAttendanceData] = useState('https://docs.google.com/forms/d/e/1FAIpQLSfE4TuPehLVtaB3bXubv_NBmREg17NMf68ENWZ-5Oo1R98fsQ/viewform?usp=sf_link');

  const handleInputChange = (event) => {
    setAttendanceData(event.target.value);
  };

  return (
    <div>
      <Sidebar1/>

      <h4 style={{ textAlign: 'center',marginTop: "40px" }}>Certainly! scan the code and mark your attendance? Thank you!</h4>
     
      {attendanceData && (
        <QRCode value={attendanceData} style={{ marginLeft:"620px",width:"300px",height:"300px",marginTop:"20px",marginBottom:"80px"}} />
      )}
      <Footer/>
    </div>
  );
};

export default AttendanceQRCode;
