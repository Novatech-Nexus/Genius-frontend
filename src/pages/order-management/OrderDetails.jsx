/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import image from "../../assets/order-images/bg.png";
import NavbarManager from '../../components/order/orderManagerNavbar.jsx';
import Footer from '../../components/Footer.jsx';

function OrderDetails() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5050/api/orders/getOrderInfo")
            .then((res) => {
                console.log(res.data); // Check the response data structure
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5050/api/orders/deleteOrder/${id}`);
            // After deletion, fetch updated data
            const response = await axios.get("http://localhost:5050/api/orders/getOrderInfo");
            setPosts(response.data);
        } catch (error) {
            console.log("Error deleting order:", error);
        }
    };

    return (
        <>
            <NavbarManager />
            <div style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "80%", margin: "auto", textAlign: "center" }}>
                    <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333", marginBottom: "20px",marginTop:"20px" }}>
                        Customer Details
                    </h1>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>Name</th>
                                <th style={tableHeaderStyle}>Address</th>
                                <th style={tableHeaderStyle}>Contact Number</th>
                                <th style={tableHeaderStyle}>Email</th>
                                <th style={tableHeaderStyle}>Special Instructions</th>
                                <th style={tableHeaderStyle}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post) => (
                                <tr key={post._id} style={{ borderBottom: "1px solid black" }}>
                                    <td style={tableCellStyle}>{post.name}</td>
                                    <td style={tableCellStyle}>{post.address}</td>
                                    <td style={tableCellStyle}>{post.contactNumber}</td>
                                    <td style={tableCellStyle}>{post.email}</td>
                                    <td style={tableCellStyle}>{post.specialInstructions}</td>
                                    <td style={tableCellStyle}>
                                        <Button variant="danger" onClick={() => handleDelete(post._id)}>
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Button style={{ width: "10%", marginTop: "2rem", marginBottom: "2rem" }} variant="outline-dark" onClick={() => navigate(-1)}>
                        Back
                    </Button>
                </div>
            </div>
            <Footer />
        </>
    );
}

// Inline styles for table header
const tableHeaderStyle = {
    padding: "12px",
    textAlign: "center",
    borderBottom: "2px solid black",
};

// Inline styles for table cell
const tableCellStyle = {
    padding: "12px",
    textAlign: "center",
};

export default OrderDetails;
