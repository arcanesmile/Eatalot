import React, { useContext, useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets'; 
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  
  const { itemCount, incrementCount, decrementCount } = useContext(StoreContext);

  const count = itemCount(id) || 0;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!count ? (
          <img
            className="add"
            onClick={() => incrementCount(id)}  
            src={assets.add_icon_white}
            alt="add icon"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => decrementCount(id)}  
              src={assets.remove_icon_red}
              alt="remove icon red"
            />
            <p>{count}</p>
            <img
              onClick={() => incrementCount(id)}  
              src={assets.add_icon_green}
              alt="add icon green"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₦{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;