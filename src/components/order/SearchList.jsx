/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import list from "../../components/order/data.jsx";
import Cards from "../../components/order/Food.jsx";
import '../../styles/order/SearchList.css';

const SearchList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);

  // Function to handle changes in the search input
  const handleSearchInputChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    // Filter the list of foods based on the search query
    const filtered = list.filter(food => food.name.toLowerCase().includes(query));
    setFilteredFoods(filtered);
  };

  return (
    <div className="order-search-container">
      <input
        type="text"
        placeholder="Search foods by name"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <div className="row">
        {/* Display the filtered list of foods */}
        {filteredFoods.map((item) => (
          <div key={item.id} className="col-md-4">
            <div>
              <Cards item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchList;
