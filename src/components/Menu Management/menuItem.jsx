import React, { useState } from "react";
import item3 from "../../assets/MenuM/item3.jpg";
import '../../styles/menu/menuItem.css';
import axios from 'axios';
import Swal from 'sweetalert2';

function Itemme() {
    const [itemId, setItemId] = useState("");
    const [itemName, setItemName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setItemDescription] = useState("");
 //   const [image, setImage] = useState(null);
  //  const [imagePreview, setImagePreview] = useState(null);
    const [itemIdError, setItemIdError] = useState("");
    const [itemNameError, setItemNameError] = useState("");
    const [priceError, setPriceError] = useState("");

    //validation for ItemId
    const handleItemIdChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z0-9_]*$/.test(value)) { 
            setItemId(value);
            setItemIdError("");
        } else {
            setItemIdError("Item Code should only contain alphanumeric characters and underscores.");
        }
    };

    //validation for ItemName
    const handleItemNameChange = (e) => {
        const value = e.target.value;
        if (/^[a-zA-Z0-9_ ]*$/.test(value)) { 
            setItemName(value);
            setItemNameError("");
        } else {
            setItemNameError("Item Name should only contain alphanumeric characters, underscores, and spaces.");
        }
    };

    //validation for only enter Number
    const handleItemPriceChange = (e) => {
        const price = e.target.value;
        if (!isNaN(price)) {
            setPrice(price);
            setPriceError("");
        } else {
            setPriceError("Please enter only numbers for Item Price.");
        }
    };

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         setImage(file.name); // Storing only the file name
    //     } else {
    //         console.error("No file selected.");
    //     }
    // };
    
    //data adding function
    const sendData = (e) => {
        e.preventDefault();

        const newItem = {
            itemId,
            itemName,
            category,
            price,
            description
        };

        axios.post('http://localhost:5050/item/add', newItem)
            .then(response => {
                Swal.fire({
                    title: "Added!",
                    text: "Item has been added.",
                    icon: "success"
                });
                setItemId("");
                setItemName("");
                setCategory("");
                setPrice("");
                setItemDescription("");
                setItemIdError("");
                setItemNameError("");
                setPriceError("");
            })
            .catch(error => {
                if (error.response.status === 400 && error.response.data.error.includes("Item ID already exists")) {
                    setItemIdError("Item Code already exists. Please choose a unique Code.");
                } else {
                    setItemIdError("Item Code already exists. Please choose a unique Code.");
                //    setPriceError("Error adding item.");
                }
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
                    <div className="MMMform" style={{ flex: 1, marginLeft: "20px", marginRight: "20px", boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)', marginBottom: "15px" }}>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px", marginTop: "15px" }}>
                            <h1 style={{ color: "Black", fontWeight: "bold", fontSize: "40px", marginTop: "0px", marginBottom: "7px", textAlign: "center" }}>ADD NEW ITEMS</h1>
                            <label htmlFor="itemid" className="MMMform-label">Item Code</label>
                            <input type="text" className="MMMform-control" id="itemid" value={itemId} onChange={handleItemIdChange} required />
                            {itemIdError && <p style={{ color: "red" }}>{itemIdError}</p>}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <label htmlFor="ItemName" className="MMMform-label">Item Name</label>
                            <input type="text" className="MMMform-control" id="itemname" value={itemName} onChange={handleItemNameChange} required />
                            {itemNameError && <p style={{ color: "red" }}>{itemNameError}</p>}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <label htmlFor="Category" className="MMMform-label">Category</label>
                            <select className="MMMform-select" id="category" value={category} required onChange={(e) => setCategory(e.target.value)}>

                                <option value="">Select Category</option>
                                <option value="Beverage">Beverage</option>
                                <option value="Food">Food</option>
                                <option value="Set Menu">Set Menu</option>
                                <option value="Catering Menu">Catering Menu</option>
                                <option value="Desserts">Desserts</option>
                                <option value="Offers">Offers</option>Desserts
                               
                            </select>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <label htmlFor="ItemPrice" className="MMMform-label">Item Price (Rs.)</label>
                            <input type="text" className="MMMform-control" id="itemprice" value={price}
                                onChange={(e) => {
                                    handleItemPriceChange(e);
                                }}
                                placeholder="Rupees"
                                required
                            />
                            {priceError && <p style={{ color: "red" }}>{priceError}</p>}
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <label htmlFor="ItemDescription" className="MMMform-label" style={{ alignSelf: "flex-start", marginTop: "5px" }}>Item Description</label>
                            <textarea placeholder="Ingredients or any details" id="itemdescription" rows="4" value={description} 
                                style={{ border: "1px solid black", width: "500px", borderRadius: "5px" }}
                                onChange={(e) => { setItemDescription(e.target.value); }}
                            />
                        </div>
                        {/* <div style={{ display: "flex", flexDirection: "column", marginBottom: "15px" }}>
                            <label htmlFor="ItemImage" className="MMMform-label">Add Image</label>
                            <input type="file" accept="image/*" onChange={handleImageChange} />
                            {imagePreview && (
                                <img src={imagePreview} alt="Item Preview" style={{ marginTop: "10px", maxWidth: "300px" }} />
                            )}
                        </div> */}

                        <div style={{ display: "flex", justifyContent: "center", marginTop: "15px" }}>
                            <button type="submit" className="MMMbtn btn-danger">Upload</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Itemme;
