import React from 'react'
import { useState } from "react";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="one">
      <div className="two">
        <h2 className="h2">
          {isSignup ? "Sign Up" : "Login"}
        </h2>
        
        <form className="three">
          {isSignup && (
            <input
              type="text"
              placeholder="Full Name"
              className="text"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="password"
          />
          <button
            type="submit"
            className="button"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="p">
          {isSignup ? "Already have an account?" : "Don't have an account?"} 
          <button
            className="b2"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
}