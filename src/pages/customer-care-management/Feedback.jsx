import React from 'react';
import feedbackPic from '../../assets/customer-care-images/feedback-pic.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../../styles/CustomerCare.css';

export default function Feedback() {  

  const navigate = useNavigate();
  return (
    <div className='feedback-main-body'>
      <article className='feedback_page'>
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
              <Button className='get-btn'  variant='warning'>Feedback History</Button>
            </div>
          </div>
          <div className='feedback-right'>
            <img src={feedbackPic} className='feedbackPic' alt='' />
          </div>
        </div>

        <h5 className='feedback-subtitle'>Our Customers </h5>
        <div className='feedback-container'>
          
        </div>
      </article>
    </div>
  );
}
