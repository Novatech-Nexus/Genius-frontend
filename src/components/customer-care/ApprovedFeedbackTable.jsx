import React from 'react';

export default function ApprovedFeedbackTable({ feedback }) {
  return (
    <div>
      <h3 style={{ color: 'green', textAlign: 'center', backgroundColor: 'rgba(75, 192, 192, 0.2)' }}>Approved Feedback</h3>
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
