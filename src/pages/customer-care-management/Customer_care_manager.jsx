import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import approveFeedbackImage from '../../assets/customer-care-images/approveFeedback.png';
import servicesFeedbackImage from '../../assets/customer-care-images/servicesFeedback.png';


export default function Customer_care_manager() {
    const navigate = useNavigate();
    

    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h1>Manager Home page</h1>
                <div style={{ marginTop: "50px", display: "flex", justifyContent: "space-between", width: "70%"}}>
                    <img src={approveFeedbackImage} alt="Approve Feedback" style={{ maxWidth: "25%", maxHeight: "20%", border: 'solid lightgray 1px', borderRadius: '20px' }} onClick={() => navigate("feedbackApproval")} />
                    <img src={servicesFeedbackImage} alt="Feedback Approved/Pending List" style={{ maxWidth: "20%", maxHeight: "20%", border: 'solid lightgray 1px', borderRadius: '20px' }} onClick={() => navigate("servicesFeedback")} />
                </div>
                <br></br>
                <div style={{ marginTop: "50px", display: "flex", justifyContent: "space-between", width: "70%"}}>
                    <Button variant="outline-dark" onClick={() => navigate(-1)}>BACK</Button>
                    <Button variant="outline-dark"  className="d-flex align-items-center">Notifications</Button>
                </div>
            </div>
        </div>
    );
}
