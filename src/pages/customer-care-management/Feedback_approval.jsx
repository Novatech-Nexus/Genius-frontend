import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import '../../styles/CustomerCare.css';

export default function FeedbackApproval() {
    const [feedbackData, setFeedbackData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    
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
        } catch (error) {
            console.error('Error approving data:', error);
        }
    };

    const deleteFeedback = async (feedbackId) => {
        try {
            await axios.delete(`http://localhost:5050/api/feedback/deleteFeedback/${feedbackId}`);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting feedback:', error);
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    
    const filteredFeedbackData = feedbackData.filter(feedback => {
        const nameMatch = feedback.name.toLowerCase().includes(searchTerm.toLowerCase());
        const emailMatch = feedback.email.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch || emailMatch;
    });

    return (
        <div className="feedback-approval-body">
            <article className="feedback-approval-page">
                <header className="feedback-approval-title">
                    <h2>Customer Feedback Approval</h2>
                </header>
            </article>
            
            <div className='feedback-search'>
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <Button variant="outline-dark">Search</Button>
                </Form>
            </div>

            <table className='feedback-approval-table' >
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Feedback</th>
                    <th>Rating</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredFeedbackData.map(feedback => (
                    <tr key={feedback._id}>
                        <td>{feedback.name}</td>
                        <td>{feedback.email}</td>
                        <td className="feedback-message">{feedback.message}</td>
                        <td>{feedback.rating}</td>
                        <td className='feedback-approval-actions'>
                        {feedback.status === 'pending' ? (
                            <>
                            <Button variant='warning'  onClick={() => handleApprove(feedback._id)}>ACCEPT</Button>
                            <Button variant='danger' onClick={() => deleteFeedback(feedback._id)}>REJECT</Button>
                            </>
                        ) : (
                            <span>Approved</span>
                        )}
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
