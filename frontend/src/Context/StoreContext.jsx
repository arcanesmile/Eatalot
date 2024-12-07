import { createContext, useState } from 'react';
import { food_list } from '../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [items, setItems] = useState({});

  // Get the count of a specific item
  const itemCount = (id) => items[id] || 0;

  // Increment the count of a specific item
  const incrementCount = (id) => {
    setItems((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  // Decrement the count of a specific item
  const decrementCount = (id) => {
    setItems((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  // Calculate the total cart amount
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in items) {
      if (items[item] > 0) {
        const totalInfo = food_list.find((product) => product._id === item);
        if (totalInfo) {
          totalAmount += totalInfo.price * items[item];
        }
      }
    }
    return totalAmount;
  };

  // Context value object
  const contextValue = {
    food_list,
    itemCount,
    incrementCount,
    decrementCount,
    getTotalCartAmount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;