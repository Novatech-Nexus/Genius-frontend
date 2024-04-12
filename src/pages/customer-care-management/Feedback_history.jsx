import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../../styles/CustomerCare.css'; 
import UpdateFeedbackModal from '../../components/customer-care/FeedbackUpdate.jsx';

export default function Feedback_history() {
    const [feedbackData, setFeedbackData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const [updatedFeedback, setUpdatedFeedback] = useState({});

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

    const deleteFeedback = async (feedbackId) => {
        try {
            await axios.delete(`http://localhost:5050/api/feedback/deleteFeedback/${feedbackId}`);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting feedback:', error);
        }
    };

    const updateFeedback = (feedback) => {
        setUpdatedFeedback(feedback);
        handleShowModal();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedFeedback(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const saveUpdatedFeedback = async () => {
        try {
            await axios.put(`http://localhost:5050/api/feedback/updateFeedback/${updatedFeedback._id}`, updatedFeedback);
            handleCloseModal();
            window.location.reload();
        } catch (error) {
            console.error('Error updating feedback:', error);
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

            <UpdateFeedbackModal
                show={showModal}
                handleClose={handleCloseModal}
                updatedFeedback={updatedFeedback}
                handleChange={handleChange}
                handleRatingChange={handleRatingChange}
                saveUpdatedFeedback={saveUpdatedFeedback}
                renderStars={renderStars}
            />

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
                                onClick={() => updateFeedback(feedback)}
                                className='feedback_update-button'>UPDATE
                            </Button>
                            <Button 
                                variant="danger"
                                onClick={() => deleteFeedback(feedback._id)}
                                className='feedback_update-button'>DELETE
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
