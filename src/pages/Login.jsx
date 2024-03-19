import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <div className="login">
      <div className="header">
        <h2>Login</h2>
        <p className="text">Get access to your favourite brands and products</p>
      </div>
      <form className="login-form">
        <div className="form-element">
          <input type="text" placeholder="Enter username" required />
        </div>
        <div className="form-element">
          <input type="password" placeholder="Enter password" required />
        </div>
        <button type="submit" className="btn-primary login-btn">
          Login
        </button>
      </form>
      <p className="signup-link">
        Do not have an account? <NavLink to="/signup">SignUp</NavLink>
      </p>
    </div>
  )
}
