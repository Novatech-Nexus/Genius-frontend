import React from 'react';
import Card from 'react-bootstrap/Card';
import contactPic from '../../assets/customer-care-images/Contact-pic.png';
import { Button, Form } from 'react-bootstrap';
import '../../styles/CustomerCare.css';

export default function Contact() {
  return (
    <div className='contact-main-body'>
      <article className='contact_page'>
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
                  <Card.Title>Genius Resturent</Card.Title>
                  <Card.Text>
                    No.23 King road, Gampaha.
                  </Card.Text>
                  <Card.Link href='#'>geniusresturent@gmail.com</Card.Link>
                  <br />
                  <Card.Link href='#'>+94 123456789</Card.Link>
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
          <Form style={{ width: '50%' }}>
            <Form.Group>
              <Form.Control
                name="subject"
                placeholder="Subject"
                style={{ marginBottom: "1rem" }}
              />
              <Form.Control
                name="name"
                placeholder="Name"
                style={{ marginBottom: "1rem" }}
              />
              <Form.Control
                name="email"
                type="email"
                placeholder="Email"
                style={{ marginBottom: "1rem" }}
              />
              <Form.Control
                name="message"
                as="textarea"
                rows={4}
                placeholder="Message"
                style={{ marginBottom: "1rem" }}
              />
            </Form.Group>
            <Button  className='get-btn' variant='warning'>
              Give Feedback
            </Button>
          </Form>
        </div>
        <div className='contact-map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.4832668996246!2d80.01130931076688!3d7.06983051654369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2fd2959ac2c39%3A0x1c79f2f4eed59b98!2sGenius%20Restaurant!5e0!3m2!1sen!2slk!4v1710430605828!5m2!1sen!2slk" 
            width="90%" height="600" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </article>
    </div>
  );
}
