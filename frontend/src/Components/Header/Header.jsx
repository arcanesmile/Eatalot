import React from 'react';
import './Header.css'


const Header = () => {
return (
  <div className='header'>
    <div className='header-content'>
      <h2>Order your favorite food here.</h2>
      <p>choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients that'll satisfy your cravings and elevate your dining experience, one meal at a time.</p>
      <button>view menu</button>
    </div>
  </div>
);
};

export default Header;