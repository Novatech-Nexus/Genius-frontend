import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import '../../styles/CustomerCare.css';

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
      <article className='feedback-services-page'>
        <header className='feedback-services-title'>
          <h2>Customer Feedback Approve & Pending List</h2>
        </header>
      </article>

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


      <div>
        <h3 style={{ color: 'green', textAlign:'center',backgroundColor:'rgba(75, 192, 192, 0.2)'}}>Approved Feedback</h3>
        <table className='feedback_services-table'>
          <thead>
            <tr>
              <th style={{ width: '150px' }}>Name</th>
              <th style={{ width: '250px' }}>Email</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {filteredApprovedFeedback.length === 0 ? (
              <tr>
                <td colSpan="3" style={{ color: 'gray' }}>No results found</td>
              </tr>
            ) : (
              filteredApprovedFeedback.map(feedback => (
                <tr key={feedback._id}>
                  <td>{feedback.name}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <br /><br />

      <div>
        <h3 style={{ color: 'orange', textAlign:'center', backgroundColor:'rgba(255, 206, 86, 0.2)' }}>Pending Feedback</h3>
        <table className='feedback_services-table'>
          <thead>
            <tr>
              <th style={{ width: '150px' }}>Name</th>
              <th style={{ width: '250px' }}>Email</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {filteredPendingFeedback.length === 0 ? (
              <tr>
                <td colSpan="3" style={{ color: 'gray' }}>No results found</td>
              </tr>
            ) : (
              filteredPendingFeedback.map(feedback => (
                <tr key={feedback._id}>
                  <td>{feedback.name}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.message}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      </div> 
    </div>
  );
}
