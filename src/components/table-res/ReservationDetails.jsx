import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import reserve1 from '../../assets/table-manage/reserve1.jpg';
import { NavLink } from 'react-router-dom';
import search1 from '../../assets/table-manage/search1.jpg'
import { useReactToPrint } from 'react-to-print';



const ReservationDetails = () => {
    const [allReservations, setAllReservations] = useState([]);
    const [modelState, setModelState] = useState(false);
    const [filteredReservations, setFilteredReservations] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedReservationId, setSelectedReservationId] = useState(null);
    const [updateUserName, setUpdateUserName] = useState("");
    const [updateContactNo, setUpdateContactNo] = useState("");
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
        'Couple': ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'],
        'Family/Friends': ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'],
        'Business Meeting': ['B1', 'B2', 'B3', 'B4', 'B5']
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        setUpdateCategory(selectedCategory);
        // Reset tNumber when category changes
        setUpdateTableNumber('');
    };


    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const response = await axios.get("http://localhost:5050/Reservation");
                
                    setAllReservations(response.data);
                    setFilteredReservations(response.data);
        
            } catch (error) {
                console.error("Error fetching reservations:", error.message);
            }
        };
        fetchReservations();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
        const filtered = allReservations.filter((reservation) =>
            (typeof reservation.contactNo === 'string' && reservation.contactNo.toLowerCase().includes(term.toLowerCase())) ||
            (typeof reservation.userName === 'string' && reservation.userName.toLowerCase().includes(term.toLowerCase()))
        );
        setFilteredReservations(filtered);
    };
    

        const componentsRef = useRef();
        const handlePrint = useReactToPrint({
            content: () => componentsRef.current,
            documentTitle:"Table Reservation Report",
            onAfterPrint:() => alert ("User report successfully Download"),
        })

           
    const handleClick = async (id) => {
        console.log("Delete button clicked for reservation ID :", id);
        try {
            const response = await axios.delete(`http://localhost:5050/Reservation/delete/${id}`);
            const updatedReservations = allReservations.filter(reservation => reservation._id !== id);
            setAllReservations(updatedReservations);
            setFilteredReservations(updatedReservations);
            alert("Reservation deleted successfully");
        } catch (error) {
            console.error("Error deleting reservation:", error.message);
            alert("Failed to delete reservation");
        }
    };

    const loadModel = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5050/Reservation/get/${id}`);
            console.log("Item retrieved successfully:", response.data);
            setModelState(true);
            setSelectedReservationId(id);
            setUpdateUserName(response.data.userName);
            setUpdateContactNo(response.data.contactNo);
            setUpdateDate(response.data.date);
            setUpdateTime(response.data.time);
            setUpdateCategory(response.data.category);
            setUpdateTableNumber(response.data.tNumber);
            setUpdateNGuest(response.data.nGuest);
        } catch (error) {
            console.error("Error retrieving reservation:", error.message);
        }
    };
    

    const updateReservation = async (selectedReservationId) => {
        try {
            const response = await axios.put(`http://localhost:5050/Reservation/update/${selectedReservationId}`, {
                userName: updateUserName,
                contactNo: updateContactNo,
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
            alert("Reservation updated successfully");
        } catch (error) {
            console.error("Error updating reservation:", error.message);
            alert("Failed to update reservation");
        }
    };
    
    return (

        
        <div className="reservation-details"  style={{ 
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
            <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'black' , fontWeight: 'bold', backgroundColor: 'rgba(255, 255, 255, 0.8)', fontSize: '30px'}}>Reservation Details</h3>
            <div className='reservation-details-container'>
                <table className="reservation-details-table" style={{ 
                    width: '100%', 
                    borderCollapse: 'collapse',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
                    borderRadius: '10px',
                    overflow: 'hidden'
                }}>

                

                    <thead>
                        <tr style={{ backgroundColor: 'darkblue', color: '#fff' , textAlign: 'center'}}>
                            <th>User Name</th>
                            <th>Contact No</th>
                            <th>Date</th>
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
                                <td>{reservation.time}</td>
                                <td>{reservation.category}</td>
                                <td>{reservation.tNumber}</td>
                                <td>{reservation.nGuest}</td>
                                <td>
                                    <div className="button-container">
                                        <button
                                            className="btn update-btn"
                                            onClick={() => loadModel(reservation._id)}
                                            style={{ backgroundColor: 'yellow', color: 'black', marginRight: '5px' }} // Green update button
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn delete-btn"
                                            onClick={() => handleClick(reservation._id)}
                                            style={{ backgroundColor: 'red', color: 'black' }} // Red delete button
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        <button onClick={handlePrint} style={{backgroundColor:'orange',border: 'none',padding: '10px 20px',
                            marginBottom: '8px', marginLeft:'20px'}}> Download </button>
                    </tbody>
                </table>
            </div>
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
                                <input type="text" className="form-control" value={updateContactNo} onChange={e => setUpdateContactNo(e.target.value)} />
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
