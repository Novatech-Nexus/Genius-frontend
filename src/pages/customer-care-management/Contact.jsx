import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Card from 'react-bootstrap/Card';
import contactPic from '../../assets/customer-care-images/Contact-pic.png';
import { Button, Form, Modal } from 'react-bootstrap';
import '../../styles/CustomerCare.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import Footer from '../../components/Footer.jsx';
import UMnavbar from '../../components/user-management/UMnavbar.jsx';

// Function to create notification
const createNotification = async (notificationData) => {
  try {
    await axios.post('http://localhost:5050/api/contact/notifications', notificationData);
  } catch (error) {
    console.error('Error creating notification:', error);
    throw error;
  }
};

export default function Contact() {
  const [from_name, setName] = useState('');
  const [from_email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [from_subject, setSubject] = useState('');
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    let errors = [];
    if (!from_name) {
      errors.push("Name field is required.");
    }
    if (!from_email) {
      errors.push("Email field is required.");
    }
    if (!message) {
      errors.push("Message field is required.");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (from_email && !emailRegex.test(from_email)) {
      errors.push("Please enter a valid email address.");
    }
    if (errors.length > 0) {
      setError(errors.join("\n"));
      setShowErrorModal(true); // Show error modal
      return;
    }

    try {
      await emailjs.sendForm('service_4syt5bv', 'template_1aid423', e.target, 'GwDWnb2_44Wv-Hxg1');

      // Create notification after successful form submission
      await createNotification({
        subject: `Contact about ${from_subject}`,
        name: `New message from ${from_name}`,
        email: `Email : ${from_email}`,
        message: `Message : ${message}`
      });
      
      console.log('SUCCESS!');
      Swal.fire({
        icon: "success",
        title: "Submitted successfully!",
        showConfirmButton: false,
        timer: 2000
      }).then((result) => {
        window.location.reload();
      });
    } catch (error) {
      console.error('FAILED...', error);
    }
    
  };

  return (
    <div className='contact-main-body'>

      <UMnavbar/>
        <header className='contact_title'>
          <h2>Contact Us</h2>
        </header>

        <div className="contact-artical-body">
          <div className='contact-left'>
            <h5>Welcome! We're excited that you want to reach out to us.</h5> 
            <h5>Whether you have a question, suggestion, or just want to say hello,</h5>
            <h5>we're here and happy to help!</h5>
            <div className='card-container'>
              <Card style={{ width: '100%', maxWidth: '45%', backgroundColor: '#fde19b' }}>
                <Card.Body style={{ textAlign: 'center' }}>
                  <Card.Title>Genius Restaurant</Card.Title>
                  <Card.Text>
                    173/1/B Kandy Rd, Mudungoda
                  </Card.Text>
                  <Card.Link href='mailto:geniusrestaurant3@gmail.com'>geniusrestaurant3@gmail.com</Card.Link>
                  <br />
                  <Card.Link href='tel:+94123456789'>+94 123456789</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className='contact-right'>
            <img src={contactPic} className='contactPic' alt='' />
          </div>
        </div>

        <div className='contact-form'>
          <h5>Feel free to contact us anytime. We're looking forward to hearing from you!</h5><br />
          <Form style={{ width: '50%' }} onSubmit={onSubmit}>
            <Form.Group>
              <Form.Control
                name="from_subject"
                placeholder="Subject"
                style={{ marginBottom: "1rem" }}
                value={from_subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <Form.Control
                name="from_name"
                placeholder="Name"
                style={{ marginBottom: "1rem" }}
                value={from_name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Control
                name="from_email"
                placeholder="Email"
                style={{ marginBottom: "1rem" }}
                value={from_email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Control
                name="message"
                as="textarea"
                rows={4}
                placeholder="Message"
                style={{ marginBottom: "1rem" }}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button className='get-btn' variant='warning' type="submit">
              SEND
            </Button>
          </Form>
        </div>
        <br /><br/>
        
        <h5 style={{marginLeft:'5%'}}>Visit Genius Restaurant Today!</h5>
        <div className='contact-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4832668996246!2d80.01130931076688!3d7.06983051654369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fd2959ac2c39%3A0x1c79f2f4eed59b98!2sGenius%20Restaurant!5e0!3m2!1sen!2slk!4v1710430605828!5m2!1sen!2slk" 
            width="90%" height="600" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <br/>
      <Footer/>

    </div>
  );
}
