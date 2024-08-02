import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import '../../styles/CustomerCare.css';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import FeedbackApprovalTable from '../../components/customer-care/FeedbackApprovalTable';
import Footer from '../../components/Footer';
import NavbarManager from '../../components/customer-care/customer-care-navbar.jsx'

export default function FeedbackApproval() {
    const [feedbackData, setFeedbackData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchFeedbackData();
    }, []);

    const fetchFeedbackData = async () => {
        try {
            const response = await axios.get('http://localhost:5050/api/feedback/getFeedbackApproval');
            setFeedbackData(response.data);
        } catch (error) {
            console.error('Error fetching feedback data:', error);
        }
    };

    const handleApprove = async (feedbackId) => {
        try {
            const response = await axios.put(`http://localhost:5050/api/feedback/approveFeedback/${feedbackId}`);
            fetchFeedbackData(response.data);
            Swal.fire({
                title: "Feedback approved successfuly !",
                icon: "success",
                showConfirmButton: true
            });
        } catch (error) {
            console.error('Error approving data:', error);
        }
    };

    const deleteFeedback = async (feedbackId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, reject it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:5050/api/feedback/deleteFeedback/${feedbackId}`);
                    Swal.fire({
                        title: "Rejected!",
                        text: "Your file has been rejected.",
                        icon: "success",
                        showConfirmButton: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.reload();
                        }
                    });
                } catch (error) {
                    console.error('Error deleting feedback:', error);
                }
            }
        });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="feedback-approval-body">
            <NavbarManager/>
                <header className="feedback-approval-title">
                    <h2>Customer Feedback Approval</h2>
                </header>
            

            <div className='feedback-approval-cont'>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: '80%' }}>
                <Button style={{marginBottom:'30px', marginTop:'10px', width:'20%'}} variant="outline-dark" onClick={() => navigate(-1)}>BACK</Button>
                <div style={{marginBottom:'30px', marginTop:'10px', width:'30%'}}>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                    </Form>
                </div>
            </div>

            <FeedbackApprovalTable
                feedbackData={feedbackData}
                handleApprove={handleApprove}
                deleteFeedback={deleteFeedback}
                searchTerm={searchTerm}
            />

            </div>
        <br/>
        <Footer/>
        </div>
    );
}
