import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../../styles/CustomerCare.css'; 
import UpdateFeedbackModal from '../../components/customer-care/FeedbackUpdate.jsx';
import emptyfeedbackPic from '../../assets/customer-care-images/emptypic.png';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import FeedbackItem from '../../components/customer-care/FeedbackItem.jsx';
import Footer from '../../components/Footer.jsx';
import UMnavbar from '../../components/user-management/UMnavbar.jsx';

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
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:5050/api/feedback/deleteFeedback/${feedbackId}`);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                        showConfirmButton: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            window.location.reload();
                        }
                    });
                } catch (error) {
                    console.error('Error deleting feedback:', error);
                }
            }
        });
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
            Swal.fire({
                title: "Your updated feedback is saved !",
                icon: "success",
                showConfirmButton: true
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
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
            
            <UMnavbar/>
                <header className='feedback_update_title'>
                <h2>Your Feedback History</h2>
                </header>
            

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
                    <FeedbackItem
                        key={feedback._id}
                        feedback={feedback}
                        updateFeedback={updateFeedback}
                        deleteFeedback={deleteFeedback}
                        renderStars={renderStars}
                    />
                ))}
            </div>
            )}
            <br/>
            <Footer/>
        </div>
    );
}
