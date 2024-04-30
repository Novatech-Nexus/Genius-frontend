import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import Sidebar1 from '../../components/staff-manager/Sidebar1';

const AttendanceQRCode = () => {
  const [attendanceData, setAttendanceData] = useState('https://docs.google.com/forms/d/e/1FAIpQLSfE4TuPehLVtaB3bXubv_NBmREg17NMf68ENWZ-5Oo1R98fsQ/viewform?usp=sf_link');

  const handleInputChange = (event) => {
    setAttendanceData(event.target.value);
  };

  return (
    <div>
      <Sidebar1/>

      <h2 style={{ textAlign: 'center',marginTop: "70px" }}>Scan the code and Mark your Attendance </h2>
     
      {attendanceData && (
        <QRCode value={attendanceData} style={{ marginLeft:"760px",width:"300px",height:"300px",marginTop:"120px"}} />
      )}
    </div>
  );
};

export default AttendanceQRCode;
