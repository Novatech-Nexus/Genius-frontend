import React from 'react';

const FeedbackDataTable = ({ feedbackData }) => {
    return (
        <div className='feedback-services-cont'>
            <h4 style={{color:'gray', marginTop:"20px"}}>Customer Experience Ratings.</h4>
            <table className='feedback_services-table'>
                <thead>
                    <tr>
                        <th style={{ width: '200px' }}>Name</th>
                        <th style={{ width: '300px' }}>Email</th>
                        <th>Dining Experience</th>
                        <th>Food Quality</th>
                        <th>Service</th>
                        <th>Price and Value</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackData.map(feedback => (
                        <tr key={feedback._id}>
                            <td>{feedback.name}</td>
                            <td>{feedback.email}</td>
                            <td>{feedback.diningExperience}</td>
                            <td>{feedback.foodQuality}</td>
                            <td>{feedback.service}</td>
                            <td>{feedback.price}</td>
                            <td className={feedback.status === 'approved' ? 'approved' : 'pending'}>{feedback.status.toUpperCase()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FeedbackDataTable;
