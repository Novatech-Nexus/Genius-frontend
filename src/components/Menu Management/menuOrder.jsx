import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Modal } from 'react-bootstrap';
import item3 from "../../assets/MenuM/item3.jpg";
import searchMenu from '../../assets/MenuM/searchMenu.png';
import "../../styles/menu/menuTable.css";
import pdfBG from '../../assets/MenuM/pdfBG.jpg';
import { jsPDF } from "jspdf";
import "jspdf-autotable";


function MenOrder() {
    const [orders, setOrders] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [modelState, setModelState] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const [updateFunctionType, setUpdateFunctionType] = useState("");
    const [updateNoOfPer, setUpdateNoOfPer] = useState("");
    const [updateFName, setUpdateFName] = useState("");
    const [updateConNum1, setUpdateConNum1] = useState("");
    const [updateDate, setUpdateDate] = useState("");
    const [updateTotalPrice, setUpdateTotalPrice] = useState("");

    const today = new Date();
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5050/CatOrdering/");
            //date ek future to past
            const sortedOrders = response.data.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateB - dateA;
            });
            setOrders(sortedOrders);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    //search
    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    //date format day,month+date,year
    const formatDate = (dateString) => {
        const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const handleDelete = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel",
            reverseButtons: true
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(`http://localhost:5050/CatOrdering/delete/${id}`);
                    if (response.status === 200) {
                        setOrders(orders.filter(order => order._id !== id));
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your order has been deleted.",
                            icon: "success"
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: `Error deleting order: ${error.message}`,
                        icon: "error"
                    });
                }
            }
        });
    };

    //modal ekt data pass krnw
    const loadModel = (id) => {
        setSelectedItemId(id);
        setModelState(true);
        const selectedOrder = orders.find(order => order._id === id);
        if (selectedOrder) {
            //kalin data form ekata pass karan eka
            setUpdateFunctionType(selectedOrder.functionType);
            setUpdateNoOfPer(selectedOrder.noOfPer);
            setUpdateFName(selectedOrder.fName);
            setUpdateConNum1(selectedOrder.conNum1);
            
            // Convert date to YYYY-MM-DD format for input[type="date"]
            const formattedDate = new Date(selectedOrder.date).toISOString().split('T')[0];
            setUpdateDate(formattedDate);
            
            setUpdateTotalPrice(selectedOrder.totalPrice.toFixed(2));
        }
    };
    
    //update function
    const updateItem = async () => {
        try {
            const response = await axios.put(`http://localhost:5050/CatOrdering/update/${selectedItemId}`, {
                functionType: updateFunctionType,
                noOfPer: updateNoOfPer,
                fName: updateFName,
                conNum1: updateConNum1,
                date: updateDate,
                totalPrice: parseFloat(updateTotalPrice) 
            });
            setModelState(false);
            fetchData(); // Refetch data after update
            Swal.fire({
                title: "Updated!",
                text: "Order details updated successfully.",
                icon: "success"
            });
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: `Error updating order: ${error.message}`,
                icon: "error"
            });
        }
    };

    //pdf download
    const generatePDF = () => {
        const doc = new jsPDF();
    
        try {
            // Add image at the top
            const imgWidth = 220;
            const imgHeight = 50;
            const imgX = (doc.internal.pageSize.getWidth() - imgWidth) / 2;
            const imgY = 0;
            doc.addImage(pdfBG, 'JPEG', imgX, imgY, imgWidth, imgHeight);
    
            // Set up the PDF content
            doc.setFontSize(20);
            doc.setFont("helvetica", "bold");
            doc.setTextColor("black");
    
            // Add title text
            const titleText = "Catering Orders";
            const titleTextWidth = doc.getStringUnitWidth(titleText) * doc.internal.getFontSize();
            const titleTextX = (doc.internal.pageSize.getWidth() - titleTextWidth) / 2;
            const titleTextY = imgY + imgHeight + 10;
            doc.text(titleText, titleTextX, titleTextY);
    
            // Add table content with index numbers
            const tableData = orders.map((order, index) => [
                index + 1, // Index number
                order.functionType,
                order.noOfPer,
                order.fName,
                order.conNum1,
                formatDate(order.date),
                order.totalPrice
            ]);
    
            const startY = titleTextY + 10;

            const tableColumns = [
                'Index', // Index column
                'Function Type',
                'Quantity',
                'Name of Customer',
                'Contact Number',
                'Date',
                'Total Price (Rs.)'
            ];

            doc.autoTable({
                head: [tableColumns],
                body: tableData,
                startY: startY
            });

            doc.save('Catering Orders.pdf');
        } catch (error) {
            console.error("Error generating PDF:", error);

            Swal.fire({
                title: "Error!",
                text: `Error generating PDF: ${error.message}`,
                icon: "error"
            });
        }
    };

    return (
        <div style={{
            backgroundImage: `url(${item3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            backgroundRepeat: 'no-repeat',
        }}>
            <h1 style={{
                color: 'red',
                fontWeight: 'bold',
                fontSize: '50px',
                marginBottom: '20px',
                textAlign: 'center',
                paddingTop: '20px',
                fontFamily: 'Poppins, sans-serif'
            }}>CATERING ORDERS</h1>

            <div className="Msearch-container">
                <input
                    type="text"
                    placeholder="Search by Menu ID, Quantity"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{
                        backgroundImage: `url(${searchMenu})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'calc(100% - 10px) center',
                        backgroundSize: '30px',
                        paddingLeft: '40px',
                        height: '50px',
                        border: '1px solid #ccc',
                        borderRadius: '40px',
                    }}
                />
            </div>

            <div className="Mmen-table2-container">
                <table className="Mmen-table2">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>Order ID</th>
                            <th style={{ textAlign: "center" }}>Function Type</th>
                            <th style={{ textAlign: "center" }}>Quantity</th>
                            <th style={{ textAlign: "center" }}>Name of Customer</th>
                            <th style={{ textAlign: "center" }}>Contact Number</th>
                            <th style={{ textAlign: "center" }}>Date</th>
                            <th style={{ textAlign: "center" }}>Total Price(Rs.)</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* search ekt data filter krnw */}
                        {orders
                            .filter(order => {
                                return order.fName.toLowerCase().includes(searchTerm.toLowerCase());
                            })
                            .map((order, index) => (
                                // dawasa check karala ada dwsa highlight karanwa
                                <tr key={index} style={{ backgroundColor: new Date(order.date).toDateString() === today.toDateString() ? 'lightgray' : 'transparent' }}>

                                    <td style={{ textAlign: "center", color: new Date(order.date).toDateString() === today.toDateString() ? '#009900' : 'inherit', fontWeight: new Date(order.date).toDateString() === today.toDateString() ? 'bold' : 'normal' }}>{index + 1}</td>

                                    <td style={{ textAlign: "center", color: new Date(order.date).toDateString() === today.toDateString() ? '#009900' : 'inherit', fontWeight: new Date(order.date).toDateString() === today.toDateString() ? 'bold' : 'normal' }}>{order.functionType}</td>

                                    <td style={{ textAlign: "center", color: new Date(order.date).toDateString() === today.toDateString() ? '#009900' : 'inherit', fontWeight: new Date(order.date).toDateString() === today.toDateString() ? 'bold' : 'normal' }}>{order.noOfPer}</td>

                                    <td style={{ textAlign: "center", color: new Date(order.date).toDateString() === today.toDateString() ? '#009900' : 'inherit', fontWeight: new Date(order.date).toDateString() === today.toDateString() ? 'bold' : 'normal' }}>{order.fName}</td>

                                    <td style={{ textAlign: "center", color: new Date(order.date).toDateString() === today.toDateString() ? '#009900' : 'inherit', fontWeight: new Date(order.date).toDateString() === today.toDateString() ? 'bold' : 'normal' }}>{order.conNum1}</td>

                                    <td style={{ textAlign: "center", color: new Date(order.date).toDateString() === today.toDateString() ? '#009900' : 'inherit', fontWeight: new Date(order.date).toDateString() === today.toDateString() ? 'bold' : 'normal' }}>{formatDate(order.date)}</td>

                                    <td style={{ textAlign: "center", color: new Date(order.date).toDateString() === today.toDateString() ? '#009900' : 'inherit', fontWeight: new Date(order.date).toDateString() === today.toDateString() ? 'bold' : 'normal' }}>{order.totalPrice}</td>
                                    
                                    <td style={{textAlign: "center"}} className="Mtd-status">
                                        {new Date(order.date) > today ? (
                                            <div className="Mbutton-container">
                                                <button className="Mbtn2 update-btn" onClick={() => loadModel(order._id)}>Update</button>
                                                <button className="Mbtn1 delete-btn" onClick={() => handleDelete(order._id)}>Delete</button>
                                            </div>
                                        ) : (
                                            <span style={{ fontWeight: new Date(order.date).toDateString() === today.toDateString() ? 'bold' : 'normal', color: new Date(order.date).toDateString() === today.toDateString() ? '#009900' : 'black' }}>
                                                {new Date(order.date).toDateString() === today.toDateString() ? "Today's Order" : "Order is Placed Successfully"}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                    </tbody>

                </table>
                <div>
                <button className="Mbtn3 delete-btn" onClick={generatePDF}>Generate Report</button>
                </div>
            </div>


            {/* update Modal */}
            <Modal show={modelState} onHide={() => setModelState(false)}>
                <Modal.Body style={{ backgroundColor: '#cccccc', borderRadius: '15px' }}>
                    <div className="p-4">
                        <h2 style={{ textAlign: 'center',fontWeight:'bold' }}>Update Order Details</h2>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="menuType" className="form-label">Item Name</label>
                                <input type="text" className="form-control" id="menuType" value={updateFunctionType} style={{ width: '420px' }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="noOfPer" className="form-label">Quantity</label>
                                <input type="number" className="form-control" id="noOfPer" value={updateNoOfPer}  style={{ width: '420px' }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="fName" className="form-label">Name of Customer</label>
                                <input type="text" className="form-control" id="fName" value={updateFName} onChange={(e) => setUpdateFName(e.target.value)} style={{ width: '420px' }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="conNum1" className="form-label">Contact Number</label>
                                <input type="number" className="form-control" id="conNum1" value={updateConNum1} onChange={(e) => setUpdateConNum1(e.target.value)} style={{ width: '420px' }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input type="date" className="form-control" id="date" value={updateDate} onChange={(e) => setUpdateDate(e.target.value)} style={{ width: '420px' }} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Total Price</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="price"
                                    value={updateTotalPrice}
                                    step="0.01" // Ensure decimal step
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button type="button" className="Mbtn2 update-btn" style={{ marginRight: '10px' }} onClick={updateItem}>Save</button>
                                <button className="Mbtn1 delete-btn" onClick={() => setModelState(false)}>Close</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default MenOrder;
