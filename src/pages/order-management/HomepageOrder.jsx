//import React from 'react';
import Food from '../components/Food';
import foods from '../data';

export default function HomepageOrder() {
  return (
    <div>
      <div className="row">
        {foods.map((food, index) => (
          <div key={index} className="col-md-4">
            <div>
              <Food food={food} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
