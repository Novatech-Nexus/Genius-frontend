import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';
import '../../styles/CustomerCare.css';

export default function FeedbackForm() {
    

    const renderStars = () => {
        return Array(5).fill().map((_, index) => (
            <span key={index}>
                <AiOutlineStar  className="OutlineStar" size='25px' />
            </span>
        ));
    };

    
    return (
        <div>
        <header className='feedback_form_title'>
            <h2>Give your Feedback !</h2>
        </header>
        <div className='feedback-form-all'>
        <Form className='feedback-form'>
            <Form.Group>
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
                    
                <div className='servicerate'>
                    <label>Rate Our Restaurant </label>
                    {renderStars()}
                </div><br/>

                <h6>1. Dining Experience ?</h6>
                <div className='feedback-checkbox'>
                    <input type='checkbox' name="diningExperience" value="Excellent" />Excellent
                    <input type='checkbox' name="diningExperience" value="Very Good" />Very Good
                    <input type='checkbox' name="diningExperience" value="Good" />Good
                    <input type='checkbox' name="diningExperience" value="Fair" />Fair
                    <input type='checkbox' name="diningExperience" value="Poor" />Poor
                </div>

                <h6>2. Food Quality ?</h6>
                <div className='feedback-checkbox'>
                    <input type='checkbox' name="foodQuality" value="Excellent" />Excellent
                    <input type='checkbox' name="foodQuality" value="Very Good" />Very Good
                    <input type='checkbox' name="foodQuality" value="Good" />Good
                    <input type='checkbox' name="foodQuality" value="Fair" />Fair
                    <input type='checkbox' name="foodQuality" value="Poor" />Poor
                </div>

                <h6>3. Customer Service ?</h6>
                <div className='feedback-checkbox'>
                    <input type='checkbox' name="service" value="Excellent" />Excellent
                    <input type='checkbox' name="service" value="Very Good" />Very Good
                    <input type='checkbox' name="service" value="Good" />Good
                    <input type='checkbox' name="service" value="Fair" />Fair
                    <input type='checkbox' name="service" value="Poor" />Poor
                </div>

                <h6>4. Price and Value ?</h6>
                <div className='feedback-checkbox'>
                    <input type='checkbox' name="price" value="Excellent" />Excellent
                    <input type='checkbox' name="price" value="Very Good" />Very Good
                    <input type='checkbox' name="price" value="Good" />Good
                    <input type='checkbox' name="price" value="Fair" />Fair
                    <input type='checkbox' name="price" value="Poor" />Poor
                </div>

                <label className='servicerate'>Our Service Sections : </label>
                <br></br>

                <div className='servicerate'>
                    <label><h6>5. Menu Selection </h6></label>
                    {renderStars()}
                </div>

                <div className='servicerate'>
                    <label><h6>6. Online Presence and Reservation System </h6></label>
                    {renderStars()}
                </div>

                <div className='servicerate'>
                    <label><h6>7. Catering Service System </h6></label>
                    {renderStars()}
                </div>
                    
                <div className='servicerate'>
                    <label><h6>8. Management Responsiveness </h6></label>
                    {renderStars()}
                </div><br></br>

                <Form.Control
                    name="message"
                    as="textarea"
                    rows={3}
                    placeholder="Additional Comments"
                    style={{ marginBottom: "1rem" }}
                />

                <p>Thank you for your feedback. Your input helps us improve our dining experience for all guests.</p>

                <div className='feedback-btns'>
                    <Button
                        className='feedback-submit-btn'
                        variant='warning'
                        >BACK
                    </Button>
                    <Button
                        className='feedback-submit-btn'
                        variant='warning'
                        >SEND
                    </Button>
                </div>
            </Form.Group>
        </Form>
        </div>
        </div>
    )
}
