import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import AppDownload from './Components/AppDownload/AppDownload';
import Footer from './Components/Footer/Footer';

const App = () => {
  const [Login, setLogin] = useState(false);

  return (
    <>
      {Login && <LoginSignup setLogin={setLogin} />}
      <div className="app">
        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <AppDownload />
      <Footer />
    </>
  );
};

export default App;