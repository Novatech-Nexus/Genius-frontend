/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button } from 'react-bootstrap'; // Import Badge component
import { useNavigate } from "react-router-dom";
import reportImage from '../../assets/order-images/orderRep.png';
import cusDetailsImage from '../../assets/order-images/cusDetails.png';
import image from "../../assets/order-images/bg.png";


export default function OrderManager() {
    const navigate = useNavigate();
    
    return (
        <div style={{height: "100vh", backgroundImage: `url(${image})`, backgroundSize: "cover", display: "flex",justifyContent: "center", paddingTop: '50px',alignItems: 'flex-start'}}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px" }}>
            <h1>Manager Home Page</h1>
            <div style={{ marginTop: "30px", display: "flex", justifyContent: "space-between", width: "100%" }}>
                <ImageButton image={reportImage} label="Reports" onClick={() => navigate("reports")} />
                <ImageButton image={cusDetailsImage} label="Customer details" onClick={() => navigate("orderUserDetails")} />
                
            </div>
            <div style={{ marginTop: "100px", display: "flex", justifyContent: "space-between", width: "100%" }}>
                <Button variant="outline-dark" onClick={() => navigate(-1)}>BACK</Button>
                
            </div>
        </div>
        </div>
    );
}

function ImageButton({ image, label, onClick }) {
    return (
        <div style={{ width: "25%", border: 'solid lightgray 1px',textAlign: "center", height: "300px" }}>
            <img src={image} alt={label} style={{ width: "100%", height: "100%", cursor: "pointer" }} onClick={onClick} />
            <h5 style={{ marginTop: "20px", fontWeight: "initial" }}>{label}</h5>
        </div>
    );
}