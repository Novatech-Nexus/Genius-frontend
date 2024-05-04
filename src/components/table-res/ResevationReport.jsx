// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Modal } from 'react-bootstrap';
// import reserve1 from '../../assets/table-manage/reserve1.jpg';


// const ReservationDetails = () => {
//     const [allReservations, setAllReservations] = useState([]);
//     const [modelState, setModelState] = useState(false);
//     const [searchTerm, setSearchTerm] = useState("");
//     const [filteredReservations, setFilteredReservations] = useState([]);
//     const [selectedReservationId, setSelectedReservationId] = useState(null);
//     const [updateUserName, setUpdateUserName] = useState("");
//     const [updateContactNo, setUpdateContactNo] = useState("");
//     const [updateDate, setUpdateDate] = useState("");
//     const [updateTime, setUpdateTime] = useState("");
//     const [updateCategory, setUpdateCategory] = useState("");
//     const [updateTableNumber, setUpdateTableNumber] = useState("");
//     const [updateNGuest, setUpdateNGuest] = useState("");

//     useEffect(() => {
//         const fetchReservations = async () => {
//             try {
//                 const response = await axios.get("http://localhost:5050/Reservation");
                
//                     setAllReservations(response.data);
//                     setFilteredReservations(response.data);
        
//             } catch (error) {
//                 console.error("Error fetching reservations:", error.message);
//             }
//         };
//         fetchReservations();
//     }, []);

//             const handleSearch = (term) =>
//             {
//                 setSearchTerm(term);
//                 const filtered = allReservations.filter((reservation) =>
//                     reservation.userName.toLowerCase().includes(term.toLowerCase()) ,
//                     reservation.contactNo.toLowerCase().includes(term.toLowerCase()) 

//                 );
//                 setFilteredReservations(filtered)

//             }
//     const handleClick = async (id) => {
//         console.log("Delete button clicked for reservation ID :", id);
//         try {
//             const response = await axios.delete(`http://localhost:5050/Reservation/delete/${id}`);
//             const updatedReservations = allReservations.filter(reservation => reservation._id !== id);
//             setAllReservations(updatedReservations);
//             setFilteredReservations(updatedReservations);
//             alert("Reservation deleted successfully");
//         } catch (error) {
//             console.error("Error deleting reservation:", error.message);
//             alert("Failed to delete reservation");
//         }
//     };

//     const loadModel = async (id) => {
//         try {
//             const response = await axios.get(`http://localhost:5050/Reservation/get/${id}`);
//             console.log("Item retrieved successfully:", response.data);
//             setModelState(true);
//             setSelectedReservationId(id);
//             setUpdateUserName(response.data.userName);
//             setUpdateContactNo(response.data.contactNo);
//             setUpdateDate(response.data.date);
//             setUpdateTime(response.data.time);
//             setUpdateCategory(response.data.category);
//             setUpdateTableNumber(response.data.tNumber);
//             setUpdateNGuest(response.data.nGuest);
//         } catch (error) {
//             console.error("Error retrieving reservation:", error.message);
//         }
//     };
    

//     const updateReservation = async (selectedReservationId) => {
//         try {
//             const response = await axios.put(`http://localhost:5050/Reservation/update/${selectedReservationId}`, {
//                 userName: updateUserName,
//                 contactNo: updateContactNo,
//                 date: updateDate,
//                 time: updateTime,
//                 category: updateCategory,
//                 tNumber: updateTableNumber,
//                 nGuest: updateNGuest
//             });
    
//             console.log("Reservation updated successfully:", response.data);
    
//             const updatedReservations = allReservations.map(reservation => {
//                 if (reservation._id === selectedReservationId) {
//                     return {
//                         ...reservation,
//                         userName: updateUserName,
//                         contactNo: updateContactNo,
//                         date: updateDate,
//                         time: updateTime,
//                         category: updateCategory,
//                         tNumber: updateTableNumber,
//                         nGuest: updateNGuest
//                     };
//                 } else {
//                     return reservation;
//                 }
//             });
    
//             setAllReservations(updatedReservations);
//             setFilteredReservations(updatedReservations);
//             setModelState(false);
//             alert("Reservation updated successfully");
//         } catch (error) {
//             console.error("Error updating reservation:", error.message);
//             alert("Failed to update reservation");
//         }
//     };
    
//     return (

        
//         <div className="reservation-details" style={{ 
//             backgroundImage: `url(${reserve1})`,
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             minHeight: '100vh', // Ensure the background covers the full page height
//             padding: '20px' // Add some padding to the content
//         }}>
//             <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'black' , fontWeight: 'bold', backgroundColor: 'rgba(255, 255, 255, 0.8)', fontSize: '30px'}}>Reservation Details</h3>
//             <div className='reservation-details-container'>
//                 <table className="reservation-details-table" style={{ 
//                     width: '100%', 
//                     borderCollapse: 'collapse',
//                     backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
//                     borderRadius: '10px',
//                     overflow: 'hidden'
//                 }}>
//                     <thead>
//                         <tr style={{ backgroundColor: 'darkblue', color: '#fff' , textAlign: 'center'}}>
//                             <th>User Name</th>
//                             <th>Contact No</th>
//                             <th>Date</th>
//                             <th>Time</th>
//                             <th>Category</th>
//                             <th>Table Number</th>
//                             <th>No Of Guests</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {filteredReservations.map(reservation => (
//                             <tr key={reservation._id} style={{textAlign: 'center'}}>
//                                 <td>{reservation.userName}</td>
//                                 <td>{reservation.contactNo}</td>
//                                 <td>{reservation.date}</td>
//                                 <td>{reservation.time}</td>
//                                 <td>{reservation.category}</td>
//                                 <td>{reservation.tNumber}</td>
//                                 <td>{reservation.nGuest}</td>
//                                 <td>
//                                     <div className="button-container">
//                                         <button
//                                             className="btn update-btn"
//                                             onClick={() => loadModel(reservation._id)}
//                                             style={{ backgroundColor: 'yellow', color: 'black', marginRight: '5px' }} // Green update button
//                                         >
//                                             Update
//                                         </button>
//                                         <button
//                                             className="btn delete-btn"
//                                             onClick={() => handleClick(reservation._id)}
//                                             style={{ backgroundColor: 'red', color: 'black' }} // Red delete button
//                                         >
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
        
        

//             <Modal show={modelState} onHide={() => setModelState(false)}>
//                     <Modal.Body>
//                         <h2>Update Reservation Details</h2>
//                         <form>
//                             <div className="form-group">
//                                 <label>User Name:</label>
//                                 <input type="text" className="form-control" value={updateUserName} onChange={e => setUpdateUserName(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label>Contact No:</label>
//                                 <input type="text" className="form-control" value={updateContactNo} onChange={e => setUpdateContactNo(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label>Date:</label>
//                                 <input type="date" className="form-control" value={updateDate} onChange={e => setUpdateDate(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label>Time:</label>
//                                 <input type="time" className="form-control" value={updateTime} onChange={e => setUpdateTime(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label>Category:</label>
//                                 <input type="text" className="form-control" value={updateCategory} onChange={e => setUpdateCategory(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label>Table Number:</label>
//                                 <input type="text" className="form-control" value={updateTableNumber} onChange={e => setUpdateTableNumber(e.target.value)} />
//                             </div>
//                             <div className="form-group">
//                                 <label>No Of Guest:</label>
//                                 <input type="text" className="form-control" value={updateNGuest} onChange={e => setUpdateNGuest(e.target.value)} />
//                             </div>
                            
//                             <div className="button-container">
//                                 <button type="button" className="btn btn-primary" onClick={() => updateReservation(selectedReservationId)}>Save</button>
//                                 <button type="button" className="btn btn-secondary" onClick={() => setModelState(false)}>Cancel</button>
//                             </div>
//                         </form>
//                     </Modal.Body>
//                 </Modal>

//                 <style jsx>{`
//                     .button-container {
//                         display: flex;
//                         justify-content: center;
//                         margin-top: 20px;
//                     }

//                     .btn-primary {
//                         background-color: #F9E897;
//                         color: black;
//                         border: none;
//                         padding: 10px 20px;
//                         margin-right: 10px;
//                         cursor: pointer;
//                     }

//                     .btn-secondary {
//                         background-color: #FA7070;
//                         color: black;
//                         border: none;
//                         padding: 10px 20px;
//                         cursor: pointer;
//                     }

//                     .btn-primary:hover,
//                     .btn-secondary:hover {
//                         opacity: 0.8;
//                     }
//                 `}</style>

//         </div>
        
//     );
// };

// export default ReservationDetails;

















// import "../../../src/index.css"; // Import CSS file for component styling

// const ReservationDetails = ({ account }) => {
//   return (
//     <div className="reservation-details-container">
//       <h3>Reservation Details</h3>
//       <table className="reservation-details-table">
//         <tbody>
//           <tr>
//             <td><strong>User Name:</strong></td>
//             <td>{account.userName}</td>
//           </tr>
//           <tr>
//             <td><strong>Contact Number:</strong></td>
//             <td>{account.contactNo}</td>
//           </tr>
//           <tr>
//             <td><strong>Date:</strong></td>
//             <td>{account.date}</td>
//           </tr>
//           <tr>
//             <td><strong>Time:</strong></td>
//             <td>{account.time}</td>
//           </tr>
//           <tr>
//             <td><strong>Category:</strong></td>
//             <td>{account.category}</td>
//           </tr>
//           <tr>
//             <td><strong>No of Guest:</strong></td>
//             <td>{account.nGuest}</td>
//           </tr>
//           <tr>
//             <td><strong>Created At:</strong></td>
//             <td>{account.createdAt}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ReservationDetails;
























// import React from "react";
// import { Card, CardContent, Typography, Divider, Table, TableBody, TableCell, TableContainer, TableRow, Button } from '@mui/material';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable';

// const ReservationReport = ({ reservation }) => {
//   if (!reservation) {
//     return <div>No reservation data available.</div>;
//   }

//   const currentDate = new Date().toLocaleDateString();
//   const currentTime = new Date().toLocaleTimeString();

//   const handleDownloadPdf = () => {
//     const pdf = new jsPDF();

//     const tableRows = [
//       ['User Name', reservation.userName],
//       ['Contact Number', reservation.contactNo],
//       ['Date', reservation.date],
//       ['Time', reservation.time],
//       ['Category', reservation.category],
//       ['Table Number', reservation.tableNumber],
//       ['No Of Guest', reservation.numOfGuest],
//       ['Current Date', currentDate],
//       ['Current Time', currentTime]
//     ];

//     pdf.autoTable({ body: tableRows });
//     pdf.save('reservation_report.pdf');
//   };

//   return (
//     <Card variant="outlined" style={{ border: '1px solid #ccc' }}>
//       <CardContent>
//         <Typography variant="h5" color="primary" gutterBottom>
//           Reservation Details
//         </Typography>
//         <Divider />
//         <TableContainer>
//           <Table>
//             <TableBody>
//               {reservation && Object.entries(reservation).map(([field, value]) => (
//                 <TableRow key={field}>
//                   <TableCell><strong>{field}</strong></TableCell>
//                   <TableCell>{value}</TableCell>
//                 </TableRow>
//               ))}
//               <TableRow>
//                 <TableCell><strong>Current Date</strong></TableCell>
//                 <TableCell>{currentDate}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell><strong>Current Time</strong></TableCell>
//                 <TableCell>{currentTime}</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <Button variant="contained" color="primary" onClick={handleDownloadPdf} style={{ marginTop: '20px' }}>
//           Download PDF
//         </Button>
//       </CardContent>
//     </Card>
//   );
// };

// export default ReservationReport;
