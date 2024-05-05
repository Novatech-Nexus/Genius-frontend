import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../../assets/order-images/bg.png";
import Navbarnew from "../../components/order/orderCusNavbar.jsx";
import Footer from '../../components/Footer.jsx';

function Posts() {
    const navigate = useNavigate();
    const [latestOrder, setLatestOrder] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [updatedOrder, setUpdatedOrder] = useState({
        name: "",
        address: "",
        contactNumber: "",
        email: "",
        specialInstructions: ""
    });

    useEffect(() => {
        // Fetch the latest order
        axios
            .get("http://localhost:5050/api/orders/getOrder")
            .then((res) => {
                setLatestOrder(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const deleteOrder = (id) => {
        axios
            .delete(`http://localhost:5050/api/orders/deleteOrder/${id}`)
            .then((res) => {
                console.log(res);
                toast.success("Order deleted successfully");
                setLatestOrder(null); // Reset latest order state after deletion
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to delete order");
            });
    };

    const handleUpdate = () => {
        setShowModal(true);
        setUpdatedOrder({
            name: latestOrder.name,
            address: latestOrder.address,
            contactNumber: latestOrder.contactNumber,
            email: latestOrder.email,
            specialInstructions: latestOrder.specialInstructions
        });
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedOrder({
            ...updatedOrder,
            [name]: value
        });
    };

    const handleUpdateOrder = () => {
        axios
            .put(`http://localhost:5050/api/orders/updateOrder/${latestOrder._id}`, updatedOrder)
            .then((res) => {
                console.log(res);
                toast.success("Order updated successfully");
                setLatestOrder({ ...latestOrder, ...updatedOrder });
                setShowModal(false);
            })
            .catch((err) => {
                console.log(err);
                toast.error("Failed to update order");
            });
    };

    return (
        <><Navbarnew /><div style={{ height: "100vh", backgroundImage: `url(${image})`, backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", }}>
            <div style={{ width: "50%", margin: "auto", textAlign: "left" }}>
                <ToastContainer />
                {latestOrder ? (
                    <div style={{ boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2)", transition: "0.3s", padding: "20px", marginTop: "3rem", backgroundColor: "lightgray" }}>
                        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#333", marginBottom: "20px", textAlign: "center" }}>Your Details</h1>
                        <div style={{ border: "solid lightgray 1px", borderRadius: "8px", marginBottom: "1rem", padding: "1rem" }}>
                            <h4>Name : {latestOrder.name}</h4>
                            <h4>Address : {latestOrder.address}</h4>
                            <h4>Contact Number : {latestOrder.contactNumber}</h4>
                            <h4>Email: {latestOrder.email}</h4>
                            <h4>Special Instructions : {latestOrder.specialInstructions}</h4>
                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                                <Button style={{ width: "20%", marginRight: "1rem", marginTop: "2rem", backgroundColor: "green" }} onClick={handleUpdate}>
                                    Update
                                </Button>
                                <Button style={{ width: "20%", marginRight: "1rem", marginTop: "2rem", backgroundColor: "red" }} onClick={() => deleteOrder(latestOrder._id)}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>

                ) : (
                    <p>No order found.</p>

                )}

                <Modal show={showModal} onHide={handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="name" value={updatedOrder.name} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name="address" value={updatedOrder.address} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control type="text" name="contactNumber" value={updatedOrder.contactNumber} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" value={updatedOrder.email} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Special Instructions</Form.Label>
                                <Form.Control type="text" name="specialInstructions" value={updatedOrder.specialInstructions} onChange={handleInputChange} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleModalClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleUpdateOrder}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Button style={{ width: "10%", marginRight: "1rem", marginTop: "2rem" }} variant="outline-dark" onClick={() => navigate(-1)}>
                    Back
                </Button>
                <Button style={{ width: "25%", marginRight: "1rem", marginTop: "2rem" }} onClick={() => navigate("payment")} disabled={!latestOrder}>
                    Proceed to Payment
                </Button>
            </div>
        </div>
        <Footer/>
        </>
    );
}

export default Posts;
