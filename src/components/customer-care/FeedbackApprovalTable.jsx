import React from 'react';
import { Button } from 'react-bootstrap';

export default function FeedbackApprovalTable({ feedbackData, handleApprove, deleteFeedback, searchTerm }) {
    const filteredFeedbackData = feedbackData.filter(feedback => {
        const nameMatch = feedback.name.toLowerCase().includes(searchTerm.toLowerCase());
        const emailMatch = feedback.email.toLowerCase().includes(searchTerm.toLowerCase());
        return nameMatch || emailMatch;
    });

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center",width:'100%'}}>
            {filteredFeedbackData.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '20px', color: 'gray' }}>No results found</div>
            ) : (
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
            )}
        </div>
    );
}
