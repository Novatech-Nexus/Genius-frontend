import React, { useState } from "react";
import item3 from "../../assets/MenuM/item3.jpg";
import '../../styles/menu/menuItem.css';
import axios from 'axios';

function Itemme() {
    const [itemId, setItemId] = useState("");
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setItemDescription] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleItemPriceChange = (e) => {
        const price = e.target.value;
        if (!isNaN(price)) {
            setPrice(price);
        } else {
            alert("Please enter only numbers for Item Price.");
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        setImage(file);
        setImage(file);
        // Display image preview
            setImage(file);
        // Display image preview
            const reader = new FileReader();
            reader.onloadend = () => {
                // setImagePreview(reader.result);
                console.log(reader.result); // Log the image preview URL
            };
            reader.readAsDataURL(file);
        } else {
            console.error("No file selected.");
        }
    };

    function sendData(e) {
        e.preventDefault();
    
        // Assuming itemId, itemName, category, price, and description are defined elsewhere
    
        const newItem = {
            itemId,
            itemName,
            category,
            price,
            description
        }
    
        console.log("Sending data:", newItem); // Log the data being sent
    
            axios.post('http://localhost:5050/item/add', newItem)
            .then(response => {
            alert('Item added successfully: ' + JSON.stringify(response.data));
            // Optionally, you can reset the form fields or display a success message here
                })
                .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log('Error adding item. Server responded with:', error.response.data);
                // Display error message to the user
                alert('Error adding item. Server responded with:\n' + JSON.stringify(error.response.data));
            } else if (error.request) {
                // The request was made but no response was received
                console.log('Error adding item. No response received from server.');
                alert('Error adding item. No response received from server.');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error adding item:', error.message);
                alert('Error adding item: ' + error.message);
            }
            // Optionally, you can handle errors here, display an error message, etc.
    });

    
    

    
    };

    return (
        <div style={{
            backgroundImage: `url(${item3})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#e7e7e7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "15px" }}>
                <form onSubmit={sendData}>
                    <div className="form" style={{ flex: 1, marginLeft: "20px", marginRight: "20px", boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)', marginBottom: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px", marginTop: "15px" }}>
                            <h1 style={{ color: "Black", fontWeight: "bold", fontSize: "40px", marginTop: "0px", marginBottom: "7px", textAlign: "center" }}>ADD NEW ITEMS</h1>
                            <label htmlFor="itemid" className="form-label">Item ID</label>
                                <input type="text" className="form-control" id="itemid" onChange={(e) => setItemId(e.target.value)} required />

                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <label htmlFor="ItemName" className="form-label">Item Name</label>
                            <input type="text" className="form-control" id="itemname" onChange={(e) => setItemName(e.target.value)} required />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <label htmlFor="Category" className="form-label">Category</label>
                            <select className="form-select" id="category" required onChange={(e) => setCategory(e.target.value)}>
                                <option value="">Select Category</option>
                                <option value="Beverage">Beverage</option>
                                <option value="Food">Food</option>
                                <option value="Set Menu">Set Menu</option>
                                <option value="Catering Menu">Catering Menu</option>
                                <option value="Offers">Offers</option>
                            </select>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <label htmlFor="ItemPrice" className="form-label">Item Price (Rs.)</label>
                            <input type="text" className="form-control" id="itemprice" value={price}
                                onChange={(e) => {
                                    handleItemPriceChange(e);
                                }}
                                placeholder="Rupees"
                                required
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <label htmlFor="ItemDescription" className="form-label" style={{ alignSelf: "flex-start", marginTop: "5px" }}>Item Description</label>
                            <textarea placeholder="Ingredients or any details" id="itemdescription" rows="4" required
                                style={{ border: "1px solid black", width: "500px", borderRadius: "5px" }}
                                onChange={(e) => { setItemDescription(e.target.value); }}
                            />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <label htmlFor="ItemImage" className="form-label">Add Image</label>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                            {imagePreview && (
                                <img src={imagePreview} alt="Item Preview" style={{ marginTop: "10px", maxWidth: "300px" }} />
                            )}
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                            <button type="submit" className="btn btn-danger">Upload</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Itemme;
