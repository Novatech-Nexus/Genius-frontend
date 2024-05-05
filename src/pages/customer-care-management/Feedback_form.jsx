import React from 'react'
import FeedbackForm from '../../components/customer-care/FeedbackForm.jsx';
import '../../styles/CustomerCare.css';
import Footer from '../../components/Footer.jsx';
import UMnavbar from '../../components/user-management/UMnavbar.jsx';

export default function Feedback_form() {
  return (
    <div className='feedback_form_page'>
        <UMnavbar/>
        <FeedbackForm/> 
        <br/>
        <Footer/>
    </div>
  )
}
