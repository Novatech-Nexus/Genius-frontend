import React, { useState, useEffect } from 'react';
import feedbackPic from '../../assets/customer-care-images/feedback-pic.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../../styles/CustomerCare.css';
import Footer from '../../components/Footer';
import UMnavbar from '../../components/user-management/UMnavbar';

export default function Feedback() {  

  const navigate = useNavigate();
  const [pastApprovedFeedback, setPastApprovedFeedback] = useState([]);

  useEffect(() => {
    fetchPastApprovedFeedback();
  }, []);

  const fetchPastApprovedFeedback = async () => {
    try {
      const response = await axios.get('http://localhost:5050/api/feedback/pastApprovedFeedback');
      setPastApprovedFeedback(response.data);
    } catch (error) {
      console.error('Error fetching past approved feedback:', error);
    }
  };


  const renderStars = (rating) => {
    return Array(5).fill().map((_, index) => (
      rating >= index + 1 ?
        <AiFillStar key={index} className="FillStar" size ='1rem'/>
        : <AiOutlineStar key={index} className="OutlineStar" size ='1rem'/>
    ));
  };

  
  return (
    <div className='feedback-main-body'>
      
      <UMnavbar/>
        <header className='feedback_title'>
          <h2>Meet our customers</h2>
        </header>

        <div className="feedback-artical-body">
          <div className='feedback-left'>
            <h5>Would you like to give us feedback ?</h5>
            <p>We're committed to providing excellent service. Tell us how we're doing!</p>
            <div className='feedback-buttons'>
              <Button className='get-btn' onClick={() => navigate("addFeedback")} variant='warning'>Give Feedback</Button>
              <br />
              <Button className='get-btn' onClick={() => navigate("getFeedback")} variant='warning'>Feedback History</Button>
            </div>
          </div>
          <div className='feedback-right'>
            <img src={feedbackPic} className='feedbackPic' alt='' />
          </div>
        </div>

        <h5 className='feedback-subtitle'>Our Customers </h5>
        <div className='feedback-container'>
          
          {pastApprovedFeedback.map((feedback) => (
            <div key={feedback._id} className='feedback-item'>
              <h6>{feedback.name} {renderStars(feedback.rating)} </h6>
              <p>"{feedback.message}"</p>
            </div>
          ))}

        </div>
      
      <br/>
      <Footer/>
    </div>
  );
}
