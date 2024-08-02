/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import list from "../../components/order/data.jsx";
import Cards from "../../components/order/Food.jsx";
import '../../styles/order/SearchList.css';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons library

const SearchList = ({ handleClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [itemNotFound, setItemNotFound] = useState(false);

  // Function to handle changes in the search input
  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    // Filter the list of foods based on the search query
    const filtered = list.filter(food => food.name.toLowerCase().includes(query));
    setFilteredFoods(filtered);
    // Set itemNotFound to true if no items are found for the search query
    setItemNotFound(filtered.length === 0);
  };

  return (
    <div className="search-container-order">
      <div className="search-box-order">
        <input
          type="text"
          placeholder="Search foods by name"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <FaSearch className="search-icon" /> {/* Search icon */}
      </div>
      <div className="row-order">
        {/* Display the filtered list of foods */}
        {itemNotFound ? (
          <div className="item-not-found">Item not found</div>
        ) : (
          filteredFoods.map((item) => (
            <div key={item.id} className="col-md-4">
              <div>
                <Cards item={item} handleClick={handleClick} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchList;
