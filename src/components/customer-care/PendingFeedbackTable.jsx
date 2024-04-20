import React from 'react';

export default function PendingFeedbackTable({ feedback }) {
  return (
    <div>
      <h3 style={{ color: 'orange', textAlign: 'center', backgroundColor: 'rgba(255, 206, 86, 0.2)' }}>Pending Feedback</h3>
      <table className='feedback_services-table'>
        <thead>
          <tr>
            <th style={{ width: '150px' }}>Name</th>
            <th style={{ width: '250px' }}>Email</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {feedback.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ color: 'gray' }}>No results found</td>
            </tr>
          ) : (
            feedback.map(feedback => (
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
  );
}
