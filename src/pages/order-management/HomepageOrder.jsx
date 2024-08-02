/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import list from "../../components/order/data.jsx";
import Cards from "../../components/order/Food.jsx";
import SearchList from '../../components/order/SearchList.jsx'


const Amazon = ({ handleClick }) => {
  return (
    
    <div>
      <SearchList handleClick={handleClick} />
      <div className="row">
        {list.map((item) => (
          <div key={item.id} className="col-md-4">
            <div>
              <Cards item={item} handleClick={handleClick} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amazon;
