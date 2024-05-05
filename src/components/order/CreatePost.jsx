import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import image from "../../assets/order-images/form_bg.png";
import Navbarnew from "../../components/order/orderCusNavbar.jsx";
import Footer from '../../components/Footer.jsx';

function CreatePost() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    name: "",
    address: "",
    contactNumber: "",
    email: "",
    specialInstructions: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    console.log(post);
  },[post]);

  const handleClick = (event) => {
    event.preventDefault();

    // Validation for contact number (10 digits)
    if (!/^\d{10}$/.test(post.contactNumber)) {
      alert("Please enter a valid contact number with 10 digits.");
      return;
    }

    // Validation for email address (contains @)
    if (!/\S+@\S+\.\S+/.test(post.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    axios
      .post("http://localhost:5050/api/orders/addOrder", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

      navigate("posts");
  };

  return (
    <><Navbarnew /><div style={{ height: "100vh", backgroundImage: `url(${image})`, backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center", }}>
      <div style={{ width: "50%", margin: "auto auto", textAlign: "center" }}>
        <div style={{ boxShadow: "0 4px 10px 0 rgba(0,0,0,0.2)", transition: "0.3s", padding: "20px", marginTop: "3rem", backgroundColor: 'lightgray', marginBottom: "3rem" }}>
          <h3 style={{ marginTop: "1rem", marginBottom: "2rem" }}>Order Details</h3>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={post.name}
                placeholder="Enter your name"
                style={{ marginBottom: "1rem" }}
                onChange={handleChange}
                required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control
                name="address"
                value={post.address}
                placeholder="Enter your address"
                style={{ marginBottom: "1rem" }}
                onChange={handleChange}
                required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                name="contactNumber"
                value={post.contactNumber}
                placeholder="Enter your contact number"
                style={{ marginBottom: "1rem" }}
                onChange={handleChange}
                required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                type="email"
                value={post.email}
                placeholder="Enter your email"
                style={{ marginBottom: "1rem" }}
                onChange={handleChange}
                required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Special Instructions</Form.Label>
              <Form.Control
                name="specialInstructions"
                value={post.specialInstructions}
                placeholder="Any special instructions"
                style={{ marginBottom: "1rem" }}
                onChange={handleChange} />
            </Form.Group>
            <Button
              variant="outline-success"
              style={{ width: "20%", marginBottom: "1rem" }}
              onClick={handleClick}
            >
              Submit
            </Button>
          </Form>
          <Button
            variant="outline-dark"
            style={{ width: "20%" }}
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default CreatePost;
