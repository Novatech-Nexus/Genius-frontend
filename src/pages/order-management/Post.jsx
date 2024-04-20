/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';

function Posts() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [updatedPost, setUpdatedPost] = useState({});

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        axios
            .get("http://localhost:5050/api/orders/getOrder")
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deletePost = (id) => {
        
        axios
            .delete(`http://localhost:5050/api/orders/deleteOrder/${id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));

        window.location.reload();
    };

    const updatePost = (post) => {
        setUpdatedPost(post);
        handleShow();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUpdatedPost((prev) => {
            return{
                ...prev,
                [name]: value,    
            };
        });
    };

    const saveUpdatedPost = () => {
        axios.put(`http://localhost:5050/api/orders/updateOrder/${updatedPost._id}`, updatedPost)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        handleClose();
        window.location.reload();
    };

    return(
        <div style={{ width: "50%", margin: "auto auto", textAlign: "left" }}>
            <div style={{ boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2)", transition: "0.3s", padding: "20px",marginTop: "3rem", backgroundColor:'lightgray' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#333', marginBottom: '20px', textAlign: "center" }}>Your Details</h1>
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                        <Form.Control 
                            style={{marginBottom: "1rem"}}
                            placeholder= "name"
                            name="name"
                            value={updatedPost.name ? updatedPost.name : ""}
                            onChange={handleChange}
                        />
                        <Form.Control 
                            style={{marginBottom: "1rem"}}
                            placeholder= "address"
                            name="address"
                            value={updatedPost.address ? updatedPost.address : ""}
                            onChange={handleChange}
                        />
                        <Form.Control 
                            style={{marginBottom: "1rem"}}
                            placeholder= "contactNumber"
                            name="contactNumber"
                            value={updatedPost.contactNumber ? updatedPost.contactNumber : ""}
                            onChange={handleChange}
                        />
                        <Form.Control 
                            style={{marginBottom: "1rem"}}
                            placeholder= "email"
                            name="email"
                            value={updatedPost.email ? updatedPost.email : ""}
                            onChange={handleChange}
                        />
                        <Form.Control 
                            placeholder= "specialInstructions"
                            name="specialInstructions"
                            value={updatedPost.specialInstructions ? updatedPost.specialInstructions : ""}
                            onChange={handleChange}
                        />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={saveUpdatedPost}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            {posts ? (
                <>
                    {posts.map(post => {
                        return(
                            <div 
                                key={post._id} 
                                style={{border: "solid lightgray 1px", 
                                borderRadius: "8px", 
                                marginBottom: "1rem",
                                padding: "1rem",
                                }}
                            >
                                <h4>Name : {post.name}</h4>
                                <h4>Address : {post.address}</h4>
                                <h4>Contact Number : {post.contactNumber}</h4>
                                <h4>Email: {post.email}</h4>
                                <h4>Special Instructions : {post.specialInstructions}</h4>
                                <div 
                                    style={{
                                        display:"flex", 
                                        flexDirection:"row",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Button
                                        // variant="outline-info"
                                        onClick={() => updatePost(post)}
                                        style={{width: "20%", marginRight: "1rem", marginTop: "2rem", backgroundColor:'green'}}
                                    >
                                        Update
                                    </Button>
                                    <Button onClick={() => deletePost(post._id)}
                                        // variant="outline-danger"
                                        style={{width: "20%", marginRight: "1rem", marginTop: "2rem", backgroundColor:'red'}}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </div>
                        )
                    })}
                </>
            ) : ""}
            </div>
            <Button style={{width: "10%", marginRight: "1rem", marginTop: "2rem"}} variant="outline-dark" onClick={() => navigate(-1)}>Back</Button>
            <Button
                style={{ width: "25%", marginRight: "1rem", marginTop: "2rem" }}
                onClick={() => navigate("payment")}
                disabled={posts.length === 0} // Disable button if there are no posts
            >
                Proceed to Payment
            </Button>


        </div>
    )
}

export default Posts;