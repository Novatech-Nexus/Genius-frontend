import React from 'react';

const AverageRatingsTable = ({ feedbackData }) => {
    return (
        <div className='feedback-services-cont'>
            <h4 style={{color:'gray'}}>Average Ratings Of Each Section.</h4>
            <table className='feedback_services-table'>
                <thead>
                    <tr>
                        <th style={{ width: '200px' }}>Name</th>
                        <th style={{ width: '300px' }}>Email</th>
                        <th>Restaurant Rating</th>
                        <th>Menu Selection Rating</th>
                        <th>Online Selection Rating</th>
                        <th>Catering Selection Rating</th>
                        <th>Response Selection Rating</th>
                        <th>Status </th>
                    </tr>
                </thead>
                <tbody>
                    {feedbackData.map(feedback => (
                        <tr key={feedback._id}>
                            <td>{feedback.name}</td>
                            <td>{feedback.email}</td>
                            <td>{feedback.rating}</td>
                            <td>{feedback.menuSelection}</td>
                            <td>{feedback.onlineSelection}</td>
                            <td>{feedback.cateringSelection}</td>
                            <td>{feedback.responseSelection}</td>
                            <td className={feedback.status === 'approved' ? 'approved' : 'pending'}>{feedback.status.toUpperCase()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AverageRatingsTable;
