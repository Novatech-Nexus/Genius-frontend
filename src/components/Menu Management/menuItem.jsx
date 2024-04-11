import React, { useState } from "react";
import item3 from "../../assets/MenuM/item3.jpg";
import '../../styles/menu/menuItem.css';

function Itemme() {
    const [itemPrice, setItemPrice] = useState("");
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleItemPriceChange = (e) => {
        const price = e.target.value;
        if (!isNaN(price)) {
            setItemPrice(price);
        } else {
            alert("Please enter only numbers for Item Price.");
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        // Display image preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleUpload = () => {
        if (!image) {
            alert("Please select an image.");
            return;
        }


    };

    return (
        <div style={{ 
            backgroundImage: `url(${item3})`, // Set background image
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#e7e7e7",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
        
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%",marginTop:"15px" }}>
              
              {/* background image */}
                <div className="form" style={{ flex: 1, marginLeft: "20px", marginRight: "20px",boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)',marginBottom:"15px" }}>

                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px",marginTop:"15px" }}>

                    <h1 style={{ color: "Black", fontWeight: "bold", fontSize: "40px", marginTop: "0px", marginBottom: "7px", textAlign: "center" }}>ADD NEW ITEMS</h1>


                    </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <label htmlFor="ItemName" className="form-label">Item Name</label>
                        <input type="text" className="form-control" id="itemname" required />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                        <label htmlFor="Category" className="form-label">Category</label>
                        <select className="form-select" id="category" required>
                            <option value="">Select Category</option>
                            <option value="Beverages">Beverage</option>
                            <option value="Foods">Food</option>
                            <option value="Set Menu">Set Menu</option>
                            <option value="Catering Menu">Catering Menu</option>
                            <option value="Offers">Offers</option>
                            {/* Add more options as needed */}
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
                        <textarea placeholder="Ingredients or any details" id="itemdescription" rows="4" required style={{ border: "1px solid black", width: "500px", borderRadius: "5px" }} />
                    </div>


                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                        <label htmlFor="ItemImage" className="form-label">Add Image</label>
                        <input type="file" accept="image/*" onChange={handleImageChange} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                        <button type="button" className="btn btn-danger" onClick={handleUpload}>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Itemme;
