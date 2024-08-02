import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import reserve1 from '../../assets/table-manage/reserve1.jpg';
import { NavLink } from 'react-router-dom';
import search1 from '../../assets/table-manage/search1.jpg'
import { useReactToPrint } from 'react-to-print';
import Swal from 'sweetalert2';



const ReservationDetails = () => {
    const [allReservations, setAllReservations] = useState([]);
    const [modelState, setModelState] = useState(false);
    const [filteredReservations, setFilteredReservations] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedReservationId, setSelectedReservationId] = useState(null);
    const [updateUserName, setUpdateUserName] = useState("");
    const [updateContactNo, setUpdateContactNo] = useState("");
    const [updateEmail, setUpdateEmail] = useState("");
    const [updateDate, setUpdateDate] = useState("");
    const [updateTime, setUpdateTime] = useState("");
    const [updateCategory, setUpdateCategory] = useState("");
    const [updateTableNumber, setUpdateTableNumber] = useState("");
    const [updateNGuest, setUpdateNGuest] = useState("");

    const timeOptions = [
        { value: '6.30am - 10.30am', label: '6.30am - 10.30am' },
        { value: '12.00pm - 3.30pm', label: '12.00pm - 3.30pm' },
        { value: '4.00pm - 6.30pm', label: '4.00pm - 6.30pm' },
        { value: '7.30pm - 11.30pm', label: '7.30pm - 11.30pm' }
    ];

    const categoryOptions = [
        { value: 'Couple', label: 'Couple' },
        { value: 'Family/Friends', label: 'Family/Friends' },
        { value: 'Business Meeting', label: 'Business Meeting' }
    ];

    const tableNumberOptions = {
        'Couple': ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8','C9' ,'C10'],
        'Family/Friends': ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8','F9' , 'F10'],
        'Business Meeting': ['B1', 'B2', 'B3', 'B4', 'B5']
    };

    const handleExpiredReservations = async () => {
        const twoHoursAgo = new Date();
        twoHoursAgo.setHours(twoHoursAgo.getHours() - 2); // Calculate date 2 hours ago

        try {
            const updatedReservations = allReservations.filter(reservation => {
                const reservationDateTime = new Date(`${reservation.date}T${reservation.time}`);
                return reservationDateTime > twoHoursAgo;
            });

            // Delete expired reservations from the server
            const expiredReservations = allReservations.filter(reservation => {
                const reservationDateTime = new Date(`${reservation.date}T${reservation.time}`);
                return reservationDateTime <= twoHoursAgo;
            });

            if (expiredReservations.length > 0) {
                await Promise.all(expiredReservations.map(async reservation => {
                    await axios.delete(`http://localhost:5050/Reservation/deletetr/${reservation._id}`);
                }));
            }

            setAllReservations(updatedReservations);
            setFilteredReservations(updatedReservations);
        } catch (error) {
            console.error("Error handling expired reservations:", error.message);
        }
    };

    //category changed
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setUpdateCategory(selectedCategory);
        // Reset tNumber when category changes
        setUpdateTableNumber('');
    };


    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get("http://localhost:5050/Reservation/tr");
                    setAllReservations(response.data);
                    setFilteredReservations(response.data);
        
                    const cleanupInterval = setInterval(() => {
                        handleExpiredReservations();
                    }, 600000); // 10 minutes interval
    
                    // Cleanup interval when component unmounts
                    return () => clearInterval(cleanupInterval);
                    
            } catch (error) {
                console.error("Error fetching reservations:", error.message);
            }
        };
        fetchReservations();
    }, []);

    //Search function

    const handleSearch = (term) => {
        setSearchTerm(term);
        const filtered = allReservations.filter((reservation) =>
            (typeof reservation.contactNo === 'string' && reservation.contactNo.toLowerCase().includes(term.toLowerCase())) ||
            (typeof reservation.userName === 'string' && reservation.userName.toLowerCase().includes(term.toLowerCase()))
        );
        setFilteredReservations(filtered);
    };


    //Report download
    const componentsRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle:"Table Reservation Report",
        onAfterPrint: () => {
            // setReportDownloaded(true); // Set report downloaded to true after printing
            Swal.fire({
                icon: 'success',
                title: 'Report Downloaded',
                text: 'Your report has been downloaded successfully!',
                });
            },
        })

        
    //Delete        
    const handleClick = async (id) => {
        console.log("Delete button clicked for reservation ID :", id);
        // Show confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to delete this reservation? You will get an email when you delete the reservation ',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`http://localhost:5050/Reservation/deletetr/${id}`);
                    const updatedReservations = allReservations.filter(reservation => reservation._id !== id);
                    setAllReservations(updatedReservations);
                    setFilteredReservations(updatedReservations);
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Reservation deleted successfully',
                    });
                }catch (error) {
                    console.error("Error deleting reservation:", error.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to delete reservation',
                    });
                }
            }
        });
    };
    

    const loadModel = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5050/Reservation/gettr/${id}`);
            console.log("Item retrieved successfully:", response.data);
            setModelState(true);
            setSelectedReservationId(id);
            setUpdateUserName(response.data.userName);
            setUpdateContactNo(response.data.contactNo);
            setUpdateEmail(response.data.email);
            setUpdateDate(response.data.date);
            setUpdateTime(response.data.time);
            setUpdateCategory(response.data.category);
            setUpdateTableNumber(response.data.tNumber);
            setUpdateNGuest(response.data.nGuest);
        } catch (error) {
            console.error("Error retrieving reservation:", error.message);
        }
    };
    

    //update
    const updateReservation = async (selectedReservationId) => {
        // Show confirmation dialog before updating
        Swal.fire({
            title: 'Do you want to update this reservation?',
            text: 'Are you sure you want to proceed with the update? You will get an email when you update the reservation',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!',
            cancelButtonText: 'No',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.put(`http://localhost:5050/Reservation/updatetr/${selectedReservationId}`, {
                        userName: updateUserName,
                        contactNo: updateContactNo,
                        email: updateEmail,
                        date: updateDate,
                        time: updateTime,
                        category: updateCategory,
                        tNumber: updateTableNumber,
                        nGuest: updateNGuest
                    });

                    console.log("Reservation updated successfully:", response.data);

                    const updatedReservations = allReservations.map(reservation => {
                        if (reservation._id === selectedReservationId) {
                            return {
                                ...reservation,
                                userName: updateUserName,
                                contactNo: updateContactNo,
                                email: updateEmail,
                                date: updateDate,
                                time: updateTime,
                                category: updateCategory,
                                tNumber: updateTableNumber,
                                nGuest: updateNGuest
                            };
                        } else {
                            return reservation;
                        }
                    });

                    setAllReservations(updatedReservations);
                    setFilteredReservations(updatedReservations);
                    setModelState(false);
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Reservation updated successfully',
                    });
                } catch (error) {
                    console.error("Error updating reservation:", error.message);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to update reservation',
                    });
                }
            }
        });
    };
    
    return (

        
        <div className="reservation-details"  style={{ 
            // backgroundImage: `url(${reserve1})`,
            backgroundImage: `url(${reserve1})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            minHeight: '100vh', // Ensure the background covers the full page height
            padding: '20px' // Add some padding to the content
        }}>

            <div className="Msearch-container">
                <input
                    type="text"
                    placeholder="Search .."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{
                        backgroundImage: `url(${search1})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'calc(100% - 10px) center', // Adjusted position
                        backgroundSize: '30px', // Adjusted size
                        paddingLeft: '40px',
                        height: '50px',
                        border: '1px solid #ccc', // Add border
                        borderRadius: '40px',// Add border radius
                    }}

                    
                />
            </div>

            <div ref={componentsRef}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'black' , fontWeight: 'bold', backgroundColor: 'rgba(255, 255, 255, 0.8)', fontSize: '40px',fontFamily: 'CustomFont'}}>Reservation Details</h3>
            <div className='reservation-details-container'>
                <table className="reservation-details-table" ref={componentsRef} style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
                    borderRadius: '10px',
                    overflow: 'hidden'
                }}>

                

                    <thead>
                        <tr style={{ backgroundColor: 'darkblue', color: '#fff' , textAlign: 'center' ,fontFamily: 'CustomFont'}}>
                            <th>User Name</th>
                            <th>Contact No</th>
                            <th>Date</th>
                            <th>Email</th>
                            <th>Time</th>
                            <th>Category</th>
                            <th>Table Number</th>
                            <th>No Of Guests</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredReservations.map(reservation => (
                            <tr key={reservation._id} style={{textAlign: 'center'}}>
                                <td>{reservation.userName}</td>
                                <td>{reservation.contactNo}</td>
                                <td>{reservation.date}</td>
                                <td>{reservation.email}</td>
                                <td>{reservation.time}</td>
                                <td>{reservation.category}</td>
                                <td>{reservation.tNumber}</td>
                                <td>{reservation.nGuest}</td>
                                <td>
                                    
                                    <div className="button-container">
                                        <button
                                            className="btn update-btn"
                                            onClick={() => loadModel(reservation._id)}
                                            style={{ backgroundColor: 'yellow', color: 'black', marginRight: '5px' ,fontFamily: 'CustomFont' ,fontWeight: 'bold' }} // Green update button
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn delete-btn"
                                            onClick={() => handleClick(reservation._id)}
                                            style={{ backgroundColor: 'red', color: 'black' , fontFamily: 'CustomFont' , fontWeight: 'bold'}} // Red delete button
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
                
            </div>
            
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button
                        onClick={handlePrint}
                        style={{
                        backgroundColor: 'darkblue',
                        color:'white',
                        fontSize:'20px',
                        border: 'none',
                        padding: '15px 25px',
                        marginTop: '30px'
                        }}
                    >
                        Download
                    </button>
                    </div>
        
        

            <Modal show={modelState} onHide={() => setModelState(false)}>
                    <Modal.Body>
                        <h2>Update Reservation Details</h2>
                        <form>
                            <div className="form-group">
                                <label>User Name:</label>
                                <input type="text" className="form-control" value={updateUserName} onChange={e => setUpdateUserName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Contact No:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={updateContactNo}
                                    onChange={(e) => {
                                        const inputContactNo = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                                        if (inputContactNo.length <= 10) {
                                            setUpdateContactNo(inputContactNo); // Update state if within limit
                                        }
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text" className="form-control" value={updateEmail} onChange={e => setUpdateEmail(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Date:</label>
                                <input type="date" className="form-control" value={updateDate} onChange={e => setUpdateDate(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Time:</label>
                                <select 
                                    className="form-control" 
                                    value={updateTime} 
                                    onChange={e => setUpdateTime(e.target.value)}
                                >
                                    {timeOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Category:</label>
                                <select 
                                    className="form-control" 
                                    value={updateCategory} 
                                    onChange={e => setUpdateCategory(e.target.value)}
                                >
                                    {categoryOptions.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Table Number:</label>
                                <select 
                                    className="form-control" 
                                    value={updateTableNumber} 
                                    onChange={e => setUpdateTableNumber(e.target.value)}
                                >
                                    {tableNumberOptions[updateCategory]?.map(number => (
                                        <option key={number} value={number}>{number}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>No Of Guest:</label>
                                <input type="text" className="form-control" value={updateNGuest} onChange={e => setUpdateNGuest(e.target.value)} />
                                
                            </div>
                            
                            <div className="button-container">
                                <button type="button" className="btn btn-primary" onClick={() => updateReservation(selectedReservationId)}>Save</button>
                                <button type="button" className="btn btn-secondary" onClick={() => setModelState(false)}>Cancel</button>
                            </div>
                        </form>
                    </Modal.Body>
                </Modal>

                <style jsx>{`
                    .button-container {
                        display: flex;
                        justify-content: center;
                        margin-top: 20px;
                    }

                    .btn-primary {
                        background-color: #F9E897;
                        color: black;
                        border: none;
                        padding: 10px 20px;
                        margin-right: 10px;
                        cursor: pointer;
                    }

                    .btn-secondary {
                        background-color: #FA7070;
                        color: black;
                        border: none;
                        padding: 10px 20px;
                        cursor: pointer;
                    }

                    .btn-primary:hover,
                    .btn-secondary:hover {
                        opacity: 0.8;
                    }

                    .Msearch-container {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 20px;
                    }
                    
                    .Msearch-container input {
                        padding: 10px 40px;
                        border-radius: 50px;
                        border: 1px solid #ccc;
                        width: 350px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                    }
                    
                    .Msearch-container i {
                        position: absolute;
                        top: 50%;
                        right: 10px;
                        transform: translateY(-50%);
                        color: #aaa;
                    }
                `}</style>

        </div>
        
    );
};

export default ReservationDetails;