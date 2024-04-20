import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../styles/CustomerCare.css';

export default function UpdateFeedbackModal({
    show,
    handleClose,
    updatedFeedback,
    handleChange,
    saveUpdatedFeedback,
    renderStars
}) {
    return (
        <Modal 
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update your Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control 
                                name="name"
                                type="String"
                                value={updatedFeedback.name || ""}
                                style={{ marginBottom: "1rem" }}
                                onChange={(e) => handleChange(e)}
                            />
                            <Form.Control 
                                name="email"
                                type="Email"
                                value={updatedFeedback.email || ""}
                                style={{ marginBottom: "1rem" }}
                                onChange={(e) => handleChange(e)}
                            />
                            <div className="star-rating">
                                {renderStars(updatedFeedback.rating)}
                            </div>
                            <Form.Control 
                                name="message"
                                placeholder="Feedback" 
                                as="textarea"
                                value={updatedFeedback.message || ""}
                                style={{ marginBottom: "1rem", marginTop: "1rem" }}
                                onChange={(e) => handleChange(e)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="warning" onClick={saveUpdatedFeedback} >
                    Save Changes
                </Button>
                </Modal.Footer>
        </Modal>
    );
}
