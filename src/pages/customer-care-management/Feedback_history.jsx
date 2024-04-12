import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../../styles/CustomerCare.css'; 

export default function Feedback_history() {
    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        fetchFeedbackData();
    }, []);

    const fetchFeedbackData = async () => {
        try {
            const response = await axios.get('http://localhost:5050/api/feedback/getFeedback');
            setFeedbackData(response.data);
        } catch (error) {
            console.error('Error fetching feedback data:', error);
        }
    };


    const handleRatingChange = (rating) => {
        setUpdatedFeedback(prev => ({
            ...prev,
            rating: rating,
        }));
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} onClick={() => handleRatingChange(i)}>
                    {i <= rating ? <AiFillStar className="FillStar"/> : <AiOutlineStar className="OutlineStar"/>}
                </span>
            );
        }
        return stars;
    };

    return (
        <div className='feedback_update-body'>
            <article className='feedback_update_page'>
                <header className='feedback_update_title'>
                <h2>Your Feedback History</h2>
                </header>
            </article>

            <div className='feedback_update-container'>
                {feedbackData.map((feedback) => (
                    <div key={feedback._id} className='feedback_update-item'>
                        <div className='feedback_update-item-con'>
                            <h6>{feedback.name } - {feedback.email }</h6>
                            <h6>{renderStars(feedback.rating, 'regular')}</h6>
                            <p>{feedback.message}</p>
                        </div>
                        <div className='button-container'>
                            <Button 
                                variant="warning" 
                                className='feedback_update-button'>UPDATE
                            </Button>
                            <Button 
                                variant="danger"
                                className='feedback_update-button'>DELETE
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
