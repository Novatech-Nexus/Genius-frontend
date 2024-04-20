import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import approveFeedbackImage from '../../assets/customer-care-images/approveFeedback.png';
import servicesFeedbackImage from '../../assets/customer-care-images/servicesFeedback.png';
import feedbackAnalysisImage from '../../assets/customer-care-images/feedbackAnalysis.png';

export default function Customer_care_manager() {
    const navigate = useNavigate();
    
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h1>Manager Home Page</h1>
            <div style={{ marginTop: "50px", display: "flex", justifyContent: "space-between", width: "70%" }}>
                <ImageButton image={approveFeedbackImage} label="Feedback Approve" onClick={() => navigate("feedbackApproval")} />
                <ImageButton image={servicesFeedbackImage} label="Feedback Approve & Pending List" onClick={() => navigate("servicesFeedback")} />
                <ImageButton image={feedbackAnalysisImage} label="Feedback Analysis" onClick={() => navigate("feedbackAnalysis")} />
            </div>
            <div style={{ marginTop: "100px", display: "flex", justifyContent: "space-between", width: "70%" }}>
                <Button variant="outline-dark" onClick={() => navigate(-1)}>BACK</Button>
                <Button variant="outline-dark">Notifications</Button>
            </div>
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
