import React, { useState } from "react";
import logoMe from "../../assets/MenuM/logoMe.png";
import itemm from "../../assets/MenuM/itemm.jpg";

function Itemme() {
    const [itemPrice, setItemPrice] = useState("");

    const handleItemPriceChange = (e) => {
        const price = e.target.value;
        // Check if the entered value is a number
        if (!isNaN(price)) {
            setItemPrice(price);
        } else {
            // Display an alert if a non-numeric value is entered
            alert("Please enter only numbers for Item Price.");
        }
    };

    return (
        <div style={{ backgroundColor: "white", display: "flex", flexDirection: "column", alignItems: "center" }}>
        
            <h1 style={{ fontFamily: "Montserrat, sans-serif", color: "red", fontWeight: "bold", fontSize: "40px", marginTop: "30px", marginBottom: "20px" }}>ADD NEW ITEMS</h1>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>

                <div style={{ flex: 1 }}>
                    <img src={itemm} alt="itemm" style={{ width: "90%", height: "auto", maxWidth: "700px", border: "2px solid black", opacity: "0.8", borderRadius: "10px",marginLeft:"50px" }} />
                </div>

                <div className="form" style={{ flex: 1, background: "#dddddd", padding: "20px", borderRadius: "10px", marginLeft: "20px", marginRight: "20px", maxWidth: "700px" }}>

                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                        <label htmlFor="Itemid" className="form-label" style={{ alignSelf: "flex-start", marginTop: "5px" }}>Item ID</label>
                        <input type="text" className="form-control" id="itemid" required />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                        <label htmlFor="ItemName" className="form-label" style={{ alignSelf: "flex-start", marginTop: "5px" }}>Item Name</label>
                        <input type="text" className="form-control" id="itemname" required />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                        <label htmlFor="Category" className="form-label" style={{ alignSelf: "flex-start", marginTop: "5px" }}>Category</label>
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
                        <label htmlFor="ItemPrice" className="form-label" style={{ alignSelf: "flex-start", marginTop: "5px" }}>Item Price (Rs.)</label>
                        <input type="text" className="form-control" id="itemprice" value={itemPrice} onChange={handleItemPriceChange} required />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                        <label htmlFor="ItemDescription" className="form-label" style={{ alignSelf: "flex-start", marginTop: "5px" }}>Item Description</label>
                        <textarea className="form-control" id="itemdescription" rows="4" required />
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                        <label htmlFor="ItemImage" className="form-label" style={{ alignSelf: "flex-start", marginTop: "5px" }}>Add Image</label>
                    </div>

                    {/* Button */}
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                        <button
                            type="button"
                            style={{
                                color: "white",
                                borderRadius: "15px",
                                backgroundColor: "#FF0000",
                                border: "1px solid #FF0000",
                                padding: "10px 40px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                fontFamily: "Helvetica",
                                transition: "background-color 0.3s, border-color 0.3s",
                            }}
                            onMouseOver={(e) => {
                                e.target.style.backgroundColor = "#B30000";
                                e.target.style.borderColor = "#B30000";
                            }}
                            onMouseOut={(e) => {
                                e.target.style.backgroundColor = "#FF0000";
                                e.target.style.borderColor = "#FF0000";
                            }}
                        >ADD ITEM</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Itemme;
