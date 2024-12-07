import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { 
    food_list, 
    itemCount, 
    incrementCount, 
    decrementCount, 
    getTotalCartAmount 
  } = useContext(StoreContext);
  const navigate = useNavigate();
  const handlePlaceOrder = () => {
    navigate('/order');
  };

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove or Add</p>
        </div>
        <hr />
        {food_list.map((item) => {
          const count = itemCount(item._id);
          if (count > 0) {
            return (
              <div key={item._id} className="cart-items-item">
                <img src={item.image} alt="item image" />
                <p>{item.name}</p>
                <p>₦{item.price.toFixed(2)}</p>
                <p>{count}</p>
                <p>₦{(item.price * count).toFixed(2)}</p>
                <div>
                  <button
                    className="increment-btn"
                    onClick={() => incrementCount(item._id)}
                  >
                    +
                  </button>
                  <button
                    className="decrement-btn"
                    onClick={() => decrementCount(item._id)}
                  >
                    -
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₦{getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₦{getTotalCartAmount() === 0 ? '0.00' : '2000.00'}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₦{getTotalCartAmount() === 0 
                  ? '0.00' 
                  : (getTotalCartAmount() + 2000).toFixed(2)}
              </b>
            </div>
          </div>
          <button onClick={handlePlaceOrder}>PROCEED TO ORDER</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Quote a scripture for a free meal, enter it here:</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Quote" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

