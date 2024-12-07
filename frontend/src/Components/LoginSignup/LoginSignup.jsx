import React, { useState } from 'react';
import './LoginSignup.css';
import { assets } from '../../assets/assets';

const LoginSignup = ({ setLogin }) => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <div className="login-signup">
      <form className="login-signup-container">
        <div className="login-signup-title">
          <h2>{currentState}</h2>
          <img 
            onClick={() => setLogin(false)} 
            src={assets.cross_icon} 
            alt="Close"
          />
        </div>
        <div className="login-signup-inputs">
          {currentState === "Signup" && (
            <input 
              type="text" 
              placeholder="Your name" 
              required 
            />
          )}
          <input 
            type="email" 
            placeholder="Your email" 
            required 
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
          />
        </div>
        <button>
          {currentState === "Signup" ? "Create Account" : "Login"}
        </button>
        <div className="login-signup-condition">
          <input type="checkbox" required />
          <p>By continuing, you've agreed to our terms and policies.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Don't have an account? 
            <span onClick={() => setCurrentState("Signup")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have an account? 
            <span onClick={() => setCurrentState("Login")}> Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginSignup;