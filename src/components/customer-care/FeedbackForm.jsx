import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import '../../styles/CustomerCare.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function FeedbackForm() {
    const [error, setError] = useState(null); 
    const [form, setForm] = useState({
        name:"",
        email:"",
        message:"",
        rating: 0,
        diningExperience: "",
        foodQuality:"",
        service:"",
        price:"",
        menuSelection:0,
        onlineSelection:0,
        cateringSelection:0,
        responseSelection:0,
    });
        
    const navigate = useNavigate();
    const [showErrorModal, setShowErrorModal] = useState(false);
    
    // Function to handle changes in form inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({
        ...prev,
        [name]: value,
        }));
    };
    
    // Function to handle changes in rating
    const handleRatingChange = (index, aspect) => {
        setForm((prev) => ({
        ...prev,
        [aspect]: index + 1,
        }));
    };
    
    // Function to handle changes in checkboxes
    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        setForm((prev) => ({
          ...prev,
          [name]: checked ? value : '',
        }));
    };

    // Function to render star icons for rating
    const renderStars = (rating, handleRatingChange) => {
        return Array(5).fill().map((_, index) => (
          rating >= index + 1 ? 
            <AiFillStar key={index} onClick={() => handleRatingChange(index)} className="FillStar" size ='25px' />
            : <AiOutlineStar key={index} onClick={() => handleRatingChange(index)} className="OutlineStar" size ='25px' />
        ));
    };

    // Function to handle form submission
    const handleClick = async (event) => {
        event.preventDefault();
        let errors = [];
        if (!form.name) {
            errors.push("Name field is required.");
        }
        if (!form.email) {
            errors.push("Email field is required.");
        }
        if (form.rating === 0) {
            errors.push("Please rate our restaurant.");
        }
        if(form.menuSelection === 0 || form.cateringSelection === 0 || form.onlineSelection === 0 || form.responseSelection === 0){
            errors.push("Please rate our all service sections. ")
        }
        if (!form.message) {
            errors.push("Comments field is required.");
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (form.email && !emailRegex.test(form.email)) {
            errors.push("Please enter a valid email address.");
        }
        if (errors.length > 0) {
            setError(errors.join("\n"));
            setShowErrorModal(true); // Show error modal
            return;
        }
        try {
            const res = await fetch('http://localhost:5050/api/feedback/addFeedback', {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            console.log(data);
            if(data.success === false){
                setError(data.message);
                setShowErrorModal(true); // Show error modal
                return;
            }
            navigate("/feedback");
        } catch (error) {
            setError(error.message || 'An error occurred.');
            setShowErrorModal(true); // Show error modal
        }
        Swal.fire({
            icon: "success",
            title: "Feedback submitted successfully. \n THANK YOU!",
            showConfirmButton: false,
            timer: 2000
          });
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
                    value={form.name}
                    placeholder="Name"
                    style={{ marginBottom: "1rem" }}
                    onChange={handleChange}
                />

                <Form.Control
                    name="email"
                    value={form.email}
                    type="email"
                    placeholder="Email"
                    style={{ marginBottom: "1rem" }}
                    onChange={handleChange}
                />
                    
                <div className='servicerate'>
                    <label>Rate Our Restaurant </label>
                    {renderStars(form.rating, (index) => handleRatingChange(index, 'rating'))}
                </div><br/>

                <h6>1. Dining Experience ?</h6>
                <div className='feedback-checkbox'>
                    <input type='checkbox' name="diningExperience" value="Excellent" checked={form.diningExperience === "Excellent"} onChange={handleCheckboxChange}/>Excellent
                    <input type='checkbox' name="diningExperience" value="Very Good" checked={form.diningExperience === "Very Good"} onChange={handleCheckboxChange}/>Very Good
                    <input type='checkbox' name="diningExperience" value="Good" checked={form.diningExperience === "Good"} onChange={handleCheckboxChange}/>Good
                    <input type='checkbox' name="diningExperience" value="Fair" checked={form.diningExperience === "Fair"} onChange={handleCheckboxChange}/>Fair
                    <input type='checkbox' name="diningExperience" value="Poor" checked={form.diningExperience === "Poor"} onChange={handleCheckboxChange}/>Poor
                </div>

                <h6>2. Food Quality ?</h6>
                <div className='feedback-checkbox'>
                    <input type='checkbox' name="foodQuality" value="Excellent" checked={form.foodQuality === "Excellent"} onChange={handleCheckboxChange}/>Excellent
                    <input type='checkbox' name="foodQuality" value="Very Good" checked={form.foodQuality === "Very Good"} onChange={handleCheckboxChange}/>Very Good
                    <input type='checkbox' name="foodQuality" value="Good" checked={form.foodQuality === "Good"} onChange={handleCheckboxChange}/>Good
                    <input type='checkbox' name="foodQuality" value="Fair" checked={form.foodQuality === "Fair"} onChange={handleCheckboxChange}/>Fair
                    <input type='checkbox' name="foodQuality" value="Poor" checked={form.foodQuality === "Poor"} onChange={handleCheckboxChange}/>Poor
                </div>

                <h6>3. Customer Service ?</h6>
                <div className='feedback-checkbox'>
                    <input type='checkbox' name="service" value="Excellent" checked={form.service === "Excellent"} onChange={handleCheckboxChange}/>Excellent
                    <input type='checkbox' name="service" value="Very Good" checked={form.service === "Very Good"} onChange={handleCheckboxChange}/>Very Good
                    <input type='checkbox' name="service" value="Good" checked={form.service === "Good"} onChange={handleCheckboxChange}/>Good
                    <input type='checkbox' name="service" value="Fair" checked={form.service === "Fair"} onChange={handleCheckboxChange}/>Fair
                    <input type='checkbox' name="service" value="Poor" checked={form.service === "Poor"} onChange={handleCheckboxChange}/>Poor
                </div>

                <h6>4. Price and Value ?</h6>
                <div className='feedback-checkbox'>
                    <input type='checkbox' name="price" value="Excellent" checked={form.price === "Excellent"} onChange={handleCheckboxChange}/>Excellent
                    <input type='checkbox' name="price" value="Very Good" checked={form.price === "Very Good"} onChange={handleCheckboxChange}/>Very Good
                    <input type='checkbox' name="price" value="Good" checked={form.price === "Good"} onChange={handleCheckboxChange}/>Good
                    <input type='checkbox' name="price" value="Fair" checked={form.price === "Fair"} onChange={handleCheckboxChange}/>Fair
                    <input type='checkbox' name="price" value="Poor" checked={form.price === "Poor"} onChange={handleCheckboxChange}/>Poor
                </div>

                <label className='servicerate'>Our Service Sections : </label>
                <br></br>

                <div className='servicerate'>
                    <label><h6>5. Menu Selection </h6></label>
                    {renderStars(form.menuSelection, (index) => handleRatingChange(index, 'menuSelection'))}
                </div>

                <div className='servicerate'>
                    <label><h6>6. Online Presence and Reservation System </h6></label>
                    {renderStars(form.onlineSelection, (index) => handleRatingChange(index, 'onlineSelection'))}
                </div>

                <div className='servicerate'>
                    <label><h6>7. Catering Service System </h6></label>
                    {renderStars(form.cateringSelection, (index) => handleRatingChange(index, 'cateringSelection'))}
                </div>
                    
                <div className='servicerate'>
                    <label><h6>8. Management Responsiveness </h6></label>
                    {renderStars(form.responseSelection, (index) => handleRatingChange(index, 'responseSelection'))}
                </div><br></br>

                <Form.Control
                    name="message"
                    value={form.message}
                    as="textarea"
                    rows={3}
                    placeholder="Additional Comments"
                    style={{ marginBottom: "1rem" }}
                    onChange={handleChange}
                />

                <p>Thank you for your feedback. Your input helps us improve our dining experience for all guests.</p>

                <div className='feedback-btns'>
                    <Button
                        className='feedback-submit-btn'
                        variant='warning'
                        onClick={() => navigate(-1)}
                        >BACK
                    </Button>
                    <Button
                        className='feedback-submit-btn'
                        variant='warning'
                        onClick={handleClick}
                        >SEND
                    </Button>
                </div>
            </Form.Group>
        </Form>
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
        </div>
    )
}
