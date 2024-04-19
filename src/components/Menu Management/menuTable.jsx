import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/menu/menuTable.css";
import { NavLink } from 'react-router-dom'; // Import NavLink instead of Link
import Swal from 'sweetalert2';
import searchMenu from '../../assets/MenuM/searchMenu.png';
import { Modal } from "react-bootstrap";


const MenTable = ({ items }) => {

    const [allItems, setAllItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [modelState, setModelState] = useState(false);

    const [selectedItemId, setSelectedItemId] = useState(null);

    const [updateItemId, setupdateItemId] = useState("");
    const [updateItemName, setupdateItemName] = useState("");
    const [updateCategory, setupdateCategory] = useState("");
    const [updateprice, setupdateprice] = useState("");
    const [updateDescription, setupdateDescription] = useState("");


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get("http://localhost:5050/item");
                setAllItems(response.data);
                setFilteredItems(response.data); // Initialize filteredItems with all items
            } catch (error) {
                console.error("Error fetching items:", error.message);
            }
        };

        fetchItems();
    }, []);

    const handleSearch = (term) => {
        setSearchTerm(term);
        const filtered = allItems.filter((item) =>
          //  item.itemId.toLowerCase().includes(term.toLowerCase()) ||
            item.itemName.toLowerCase().includes(term.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    const handleClick = async (id) => {
        console.log("Delete button clicked for item ID:", id); // Add this log statement
        try {
            const response = await axios.delete(`http://localhost:5050/item/delete/${id}`);

            if (response.status === 200) {
                // Update the state after successful deletion
                setAllItems(allItems.filter(item => item._id !== id));
                setFilteredItems(filteredItems.filter(item => item._id !== id));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: `Error deleting item: ${error.message}`,
                icon: "error"
            });
        }
    };

    const loadModel = async (id) => {
        try {
            const response = await axios.get(`http://localhost:5050/item/get/${id}`);
            console.log("Item retrieved successfully:", response.data);
            setModelState(true);
            setSelectedItemId(id); // Update selected item ID
            setupdateItemId(response.data.itemId);
            setupdateItemName(response.data.itemName);
            setupdateCategory(response.data.category);
            setupdateprice(response.data.price);
            setupdateDescription(response.data.description);
        } catch (error) {
            console.error("Error retrieving item:", error.message);
            // Handle error as needed
        }
    };


    const updateItem = async (selectedItemId) => {
        try {
            const response = await axios.put(`http://localhost:5050/item/update/${selectedItemId}`, {
                itemId: updateItemId,
                itemName: updateItemName,
                category: updateCategory,
                price: updateprice,
                description: updateDescription
            });
            console.log("Item updated successfully:", response.data);
    
            // Update the state with the new data
            const updatedItems = allItems.map(item => {
                if (item._id === selectedItemId) {
                    return {
                        ...item,
                        itemId: updateItemId,
                        itemName: updateItemName,
                        category: updateCategory,
                        price: updateprice,
                        description: updateDescription
                    };
                } else {
                    return item;
                }
            });
    
            setAllItems(updatedItems);
            setFilteredItems(updatedItems); // Update filteredItems as well if needed
            setModelState(false); 
        } catch (error) {
            console.error("Error updating item:", error.message);
            // Handle error as needed
        }
    }
    


    return (
        <div className="men-table-background">
            <h1 className="topic-text">ITEMS TABLE</h1>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by Item ID or Item Name"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    style={{
                        backgroundImage: `url(${searchMenu})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'calc(100% - 10px) center', // Adjusted position
                        backgroundSize: '30px', // Adjusted size
                        paddingLeft: '40px',
                        height: '50px',
                        border: '1px solid #ccc', // Add border
                        borderRadius: '40px',// Add border radius
                    }}
                />
            </div>

            <div className="men-table-container">
                <table className="men-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>Item Code</th>
                            <th style={{ textAlign: "center" }}>Item Name</th>
                            <th style={{ textAlign: "center" }}>Category</th>
                            <th style={{ textAlign: "center" }}>Price</th>
                            <th style={{ textAlign: "center" }}>Description</th>
                            <th style={{ textAlign: "center" }}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map((item) => (
                            <tr key={item.itemId}>
                                <td>{item.itemId}</td>
                                <td>{item.itemName}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td className="td-status">
                                    <div className="button-container">
                                        <button className="btn2 update-btn" onClick={() => loadModel(item._id)}>Update</button>
                                        <button className="btn1 delete-btn" onClick={() => handleClick(item._id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal show={modelState} onHide={() => setModelState(false)}>
                <Modal.Body style={{ backgroundColor: '#f1f1f1', borderRadius: '15px' }}>
                    <div className="p-4">
                        <h2 style={{ textAlign: 'center' }}>Update Item Details</h2>
                        <form>

                            <div className="mb-3">
                                <label htmlFor="itemId" className="form-label">Item ID</label>
                                <input type="text" className="form-control" id="itemId" value={updateItemId}
                                    onChange={(e) => setupdateItemId(e.target.value)}
                                    style={{ width: '420px' }} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="itemName" className="form-label">Item Name</label>
                                <input type="text" className="form-control" id="itemName" value={updateItemName}
                                    onChange={(e) => setupdateItemName(e.target.value)}
                                    style={{ width: '420px' }} />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <select className="form-select" id="category" value={updateCategory} onChange={(e) => setupdateCategory(e.target.value)} style={{ width: '420px' }}>
                                    <option value="">Select Category</option>
                                    <option value="Beverage">Beverage</option>
                                    <option value="Food">Food</option>
                                    <option value="Set Menu">Set Menu</option>
                                    <option value="Catering Menu">Catering Menu</option>
                                    <option value="Offers">Offers</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" className="form-control" id="price" value={updateprice}
                                    onChange={(e) => setupdateprice(e.target.value)}
                                    style={{ width: '420px' }} />
                            </div>

                            <div className="mb-3" style={{ maxWidth: '420px', margin: '0 auto' }}>
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea className="form-control" id="description" rows="4" value={updateDescription}
                                    onChange={(e) => setupdateDescription(e.target.value)}
                                    style={{ width: '100%' }}></textarea>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button type="button" className="btn2 update-btn" style={{ marginRight: '10px' }} onClick={() => updateItem(selectedItemId)}>Save</button>
                                <button className="btn1 delete-btn" onClick={() => setModelState(false)}>Close</button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MenTable;
