import React from 'react'
import { NavLink } from 'react-router-dom'
import FormContainer from '../components/FormContainer'

export default function Login() {
  return (
    <FormContainer className="login">
      <div className="header">
        <h2>Login</h2>
        <p className="text">
          Access your personalized shopping journey with just one click
        </p>
      </div>
      <form className="login-form">
        <div className="form-element">
          <input type="email" placeholder="Enter your email address" required />
        </div>
        <div className="form-element">
          <input type="password" placeholder="Enter password" required />
        </div>
        <button type="submit" className="btn-primary login-btn">
          Login
        </button>
      </form>
      <p className="footer">
        Do not have an account? <NavLink to="/signup">SignUp</NavLink>
      </p>
    </FormContainer>
  )
}
