import React from 'react';
import { Button } from 'react-bootstrap';

export default function FeedbackItem({ feedback, updateFeedback, deleteFeedback, renderStars }) {
  return (
    <div className='feedback_update-item'>

        {feedback.status && (
            <div className={`feedback-status ${feedback.status.toLowerCase()}`}>
                {feedback.status.toUpperCase()}
            </div>
        )}

        <div className='feedback_update-item-con'>
            <h6>{feedback.name} - {feedback.email}</h6>
            <h6>{renderStars(feedback.rating)}</h6>
            <p>{feedback.message}</p>
        </div>

        <div className='button-container'>
            <Button
                variant="warning"
                onClick={() => updateFeedback(feedback)}
                className='feedback_update-button'>UPDATE
            </Button>
            <Button
                onClick={() => deleteFeedback(feedback._id)}
                variant="danger"
                className='feedback_update-button'>DELETE
            </Button>
        </div>
        
    </div>
  );
}
