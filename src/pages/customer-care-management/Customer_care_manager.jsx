import React, { useState, useEffect } from 'react';
import { Button, Badge } from 'react-bootstrap'; // Import Badge component
import { useNavigate } from "react-router-dom";
import approveFeedbackImage from '../../assets/customer-care-images/approveFeedback.png';
import servicesFeedbackImage from '../../assets/customer-care-images/servicesFeedback.png';
import feedbackAnalysisImage from '../../assets/customer-care-images/feedbackAnalysis.png';
import axios from 'axios';
import Footer from '../../components/Footer';
import NavbarManager from '../../components/customer-care/customer-care-navbar.jsx';

export default function Customer_care_manager() {
    const navigate = useNavigate();
    const [unreadNotifications, setUnreadNotifications] = useState([]);

    useEffect(() => {
        fetchUnreadNotifications();
    }, []);

    const fetchUnreadNotifications = async () => {
        try {
            const response = await axios.get('http://localhost:5050/api/contact/notifications/unread');
            setUnreadNotifications(response.data || []);
        } catch (error) {
            console.error('Error fetching unread notifications:', error);
            setUnreadNotifications([]);
        }
    };
    
    return (
        <div>
        <NavbarManager/>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1 style={{ marginTop: "20px"}}>Customer-care Management Dashboard</h1>
            <div style={{ marginTop: "50px", display: "flex", justifyContent: "space-between", width: "70%" }}>
                <ImageButton image={approveFeedbackImage} label="Feedback Approve" onClick={() => navigate("feedbackApproval")} />
                <ImageButton image={servicesFeedbackImage} label="Feedback Approve & Pending List" onClick={() => navigate("servicesFeedback")} />
                <ImageButton image={feedbackAnalysisImage} label="Feedback Analysis" onClick={() => navigate("feedbackAnalysis")} />
            </div>
            <div style={{ marginTop: "100px", display: "flex", justifyContent: "space-between", width: "70%" }}>
                <Button variant="outline-dark" onClick={() => navigate(-1)}>BACK</Button>
                {/* Display notifications button with badge */}
                <Button variant="outline-dark" onClick={() => navigate("notifications")} className="d-flex align-items-center">
                    <div>Notifications</div>
                    <div style={{marginLeft:'10px'}}>
                        <Badge bg="danger">{unreadNotifications.length}</Badge>
                    </div>
                </Button>
            </div>
        </div>
        <br/>
        <Footer/>
        </div>
    );
}

function ImageButton({ image, label, onClick }) {
    return (
        <div style={{ width: "25%", border: 'solid lightgray 1px', borderRadius: '20px', textAlign: "center", height: "300px" }}>
            <img src={image} alt={label} style={{ width: "100%", height: "100%", cursor: "pointer" }} onClick={onClick} />
            <h5 style={{ marginTop: "20px", fontWeight: "initial" }}>{label}</h5>
        </div>
    );
}
