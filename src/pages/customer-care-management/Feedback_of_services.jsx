import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../../styles/CustomerCare.css';
import ApprovedFeedbackTable from '../../components/customer-care/ApprovedFeedbackTable';
import PendingFeedbackTable from '../../components/customer-care/PendingFeedbackTable';
import Footer from '../../components/Footer';
import NavbarManager from '../../components/customer-care/customer-care-navbar.jsx';

export default function Feedback_of_services() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [approvedFeedback, setApprovedFeedback] = useState([]);
  const [pendingFeedback, setPendingFeedback] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get('http://localhost:5050/api/feedback/getFeedback');
        setFeedbackData(response.data);
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };

    fetchFeedbackData();
  }, []);

  useEffect(() => {
    // Filter feedback data based on status
    const approved = feedbackData.filter(feedback => feedback.status === 'approved');
    const pending = feedbackData.filter(feedback => feedback.status === 'pending');
    setApprovedFeedback(approved);
    setPendingFeedback(pending);
  }, [feedbackData]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredApprovedFeedback = approvedFeedback.filter(feedback => {
    const nameMatch = feedback.name.toLowerCase().includes(searchTerm.toLowerCase());
    const emailMatch = feedback.email.toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || emailMatch;
  });

  const filteredPendingFeedback = pendingFeedback.filter(feedback => {
    const nameMatch = feedback.name.toLowerCase().includes(searchTerm.toLowerCase());
    const emailMatch = feedback.email.toLowerCase().includes(searchTerm.toLowerCase());
    return nameMatch || emailMatch;
  });

  return (
    <div className='feedback-services-body'>
        <NavbarManager/>
        <header className='feedback-services-title'>
          <h2>Customer Feedback Approve & Pending List</h2>
        </header>
      

      <div className='feedback-services-cont'>   
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: '100%' }}>
        <Button style={{marginTop:'20px', marginBottom:'30px', width:'20%'}} variant="outline-dark" onClick={() => navigate(-1)}>BACK</Button>
        <div style={{marginTop:'20px', marginBottom:'30px', width:'30%'}}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Form>
        </div>
      </div>

      <ApprovedFeedbackTable feedback={filteredApprovedFeedback} />
      <br /><br />
      <PendingFeedbackTable feedback={filteredPendingFeedback} />
      </div>
      <br/>
      <Footer/>
    </div>
  );
}
