import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import img5 from '../../assets/catering/img6.jpeg';
import bill from '../../assets/catering/bill.jpg';
import Swal from 'sweetalert2';

function OrderDet() {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Fetching data...");
        axios.get("http://localhost:5050/CatOrdering")
            .then(res => {
                console.log("Data fetched:", res.data);
                const latestOrder = res.data[res.data.length - 1];
                if (latestOrder) {
                    console.log("Latest order:", latestOrder);
                    setData(latestOrder);
                } else {
                    console.log("No orders found");
                }
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'Would you like to delete the order?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5050/CatOrdering/delete/` + id)
                    .then(() => {
                        Swal.fire({
                            title: 'Order Deleted Successfully!',
                            icon: 'success'
                        });
                        navigate('/catMain');
                    })
                    .catch(err => console.log(err));
            }
        });
    }
    

    
    const downloadPDF = () => {
        const doc = new jsPDF('portrait');

        doc.addImage(bill, 'JPEG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

        const title = "              ";
        const titleFontSize = 24;
        const lineHeight = 18;
        const leftMargin = 20;
        const topMargin = 20;
        let currentY = topMargin;

        doc.setFontSize(titleFontSize);
        doc.setFont("helvetica", "bold");
        doc.setTextColor("black");
        const titleWidth = doc.getStringUnitWidth(title) * titleFontSize;
        const titleX = (doc.internal.pageSize.getWidth() - titleWidth) / 2;
        doc.text(title, titleX, currentY);
        currentY += lineHeight * 2;

        const formData = {
            "Function Type": data.functionType,
            "Menu Type": data.menuType,
            "Number Of Persons": data.noOfPer,
            "First Name": data.fName,
            "Last Name": data.lName,
            "Email Address": data.email,
            "Contact Number 1": data.conNum1,
            "Contact Number 2": data.conNum2,
            "Date Of Event": data.date,
            "Time Of Event": data.time,
            "Address Of the Event": data.address,
            "Charge Per Person(Rs)": data.perPersonPrice.toFixed(2),
            "Total Price(Rs)": data.totalPrice.toFixed(2) 
        };

        Object.entries(formData).forEach(([label, value]) => {
            doc.setFontSize(11);
            doc.setFont("helvetica", "bold");
            doc.text(label + ":", leftMargin, currentY);

            doc.setFontSize(10);
            doc.setFont("helvetica", "normal");
            const textValue = value !== null && value !== undefined ? value.toString() : 'N/A';
            doc.text(textValue, leftMargin + 60, currentY);

            currentY += lineHeight;
        });

        doc.save('Order Detail.pdf');
    };

    const backgroundStyle = {
        backgroundImage: `url(${img5})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
    };

    

    const inlineCSS = `
    .Jcheckbox-container {
        display: flex; 
        align-items: center; 
        gap: 30px;
    }
    div {
        max-width: auto; 
        margin: 0 auto; 
        padding: 5px; 
    }

    .Jcheckbox-container input[type="checkbox"] {
        margin-right: 5px; 
    }

    .Jcheckbox-container input[type="checkbox"] + span {
        margin-left: 3px; 
    }

    input[type="number"],
    input[type="text"],
    input[type="email"],
    input[type="tel"],
    input[type="date"],
    input[type="time"],
    input[type="shortDate"],
    button[type="submit"] {
        width: calc(100% - 20px);
        padding: 8px;
        margin: 5px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    
    /* Add your additional CSS styles here */
    button[type="submit"] {
        background-color: #6B4423;
        color: white;
        cursor: pointer;
    }

    button[type="submit"]:hover {
        background-color: #6B4423;
    }

    /* Responsive styles */
    @media only screen and (max-width: 600px) {
        .form-container {
            padding: 10px;
        }
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    /* Body styles */
    body {
        background-color: #f8f8f8;
    }

    /* Form container styles */
    .form-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }


    /* Table styles */
    table {
        width: 40%;
        border-collapse: collapse;
        margin-bottom: 20px;
        margin: 0 auto;
    }

    th, td {
        padding: 10px;
        text-align: left;
    }

    th {
        background-color: #CC9966;
        border-bottom: 2px solid #CC9966;
    }
    
    h2{
        text-align: center;
    }
    .custom-button {
        background-color: #ac7339; 
        border: none;
        color: white;
        font-weight: bold;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 15px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 8px;
        width: 250px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    `;

    return (
        <div style={backgroundStyle}>
            <style>{inlineCSS}</style>
            <form>
                <table border={0} style={{ background: 'white' }}>
                    <tbody>
                        <tr>
                            <th colSpan="2"><h2>Order Details</h2></th>
                        </tr>
                        <tr>
                            <td colspan="2">Function Type: <input type="text" value={data.functionType || ""} readOnly /></td>
                        </tr>

                        <tr>
                            <td colSpan="2">Menu Types:<input type="text" value={data.menuType || ""} readOnly /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                Number Of Persons: <input type="number" value={data.noOfPer || ""} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <th colSpan="2">Customer Details</th>
                        </tr>
                        <tr>
                            <td>First Name:<input type="text" value={data.fName || ""} readOnly /></td>
                            <td>Last Name:<input type="text" value={data.lName || ""} readOnly /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Email Address:<input type="email" value={data.email || ""} readOnly /></td>
                        </tr>
                        <tr>
                            <td>Contact Number 1:<input type="tel" value={data.conNum1 || ""} readOnly /></td>
                            <td>Contact Number 2:<input type="tel" value={data.conNum2 || ""} readOnly /></td>
                        </tr>
                        <tr>
                            <td>Date Of Event:<input type="shortdate" value={data.date || ""} readOnly /></td>
                            <td>Time Of Event:<input type="time" value={data.time || ""} readOnly /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">Address Of the Event:<input type="text" value={data.address || ""} readOnly /></td>
                        </tr>
                        <tr>
                            <td>Price per Person : Rs.<input type="text" value={data.perPersonPrice || ""} readOnly /></td>
                            <td>Total Price: Rs.<input type="text" value={data.totalPrice || ""}  readOnly /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <table style={{ marginTop: '20px' }}>
                <tbody>
                    <tr>
                        <td><Link to="/updateCat"><button type="button" className="custom-button">Update Order</button></Link></td>
                        <td><button type="button" className="custom-button" onClick={() => handleDelete(data._id)}>Delete Order</button></td>
                        <td><button className="custom-button" onClick={downloadPDF}>Download Bill</button></td>
                        <td><Link to="/orderMenuHome/create/posts/payment"><button type="button" className="custom-button">Confirm Order</button></Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default OrderDet;
