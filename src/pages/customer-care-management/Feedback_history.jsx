import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../../styles/CustomerCare.css'; 
import UpdateFeedbackModal from '../../components/customer-care/FeedbackUpdate.jsx';
import emptyfeedbackPic from '../../assets/customer-care-images/emptypic.png';
import { useNavigate } from "react-router-dom";

export default function Feedback_history() {
    const [feedbackData, setFeedbackData] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);
    const [updatedFeedback, setUpdatedFeedback] = useState({});
    const navigate = useNavigate();

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
        if (feedback.status === 'approved') {
            // If feedback is already approved, set status to pending
            setUpdatedFeedback({ ...feedback, status: 'pending' });
        } else {
            // Otherwise, set the updated feedback as is
            setUpdatedFeedback(feedback);
        }
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

            {feedbackData.length === 0 ? (
                <div className="empty-feedback">
                    <h4>You don't have any feedback yet.</h4>
                    <div className='empty-feedback-pic'>
                        <img src={emptyfeedbackPic} className='emptypic' alt='' />
                    </div>
                    <Button
                        className='feedback-submit-btn-back'
                        variant='warning'
                        onClick={() => navigate(-1)}
                        >BACK
                    </Button>
                </div>
            ) : (
            <div className='feedback_update-container'>
                {feedbackData.map((feedback) => (
                    <div key={feedback._id} className='feedback_update-item'>
                        {feedback.status && (
                            <div className={`feedback-status ${feedback.status}`}>
                                {feedback.status.toUpperCase()}
                            </div>
                        )}
                        <div className='feedback_update-item-con'>
                            <h6>{feedback.name } - {feedback.email }</h6>
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
                                variant="danger"
                                onClick={() => deleteFeedback(feedback._id)}
                                className='feedback_update-button'>DELETE
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}
