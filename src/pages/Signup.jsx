import React from 'react'
import FormContainer from '../components/FormContainer'
import { NavLink } from 'react-router-dom'

export default function signup() {
  return (
    <FormContainer className="signup">
      <div className="header">
        <h2>Create Account</h2>
        <p>
          Unlock exclusive deals and seamless shopping experiences – create your
          account today!
        </p>
      </div>
      <form>
        <div className="form-element">
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="form-element">
          <input type="email" placeholder="Enter your email address" required />
        </div>
        <div className="form-element">
          <input type="password" placeholder="Enter your password" required />
        </div>
        <div className="form-element">
          <input type="password" placeholder="Confirm password" required />
        </div>
        <button>Signup</button>
      </form>
      <p className="footer">
        Already have an account? <NavLink to="/login">Login</NavLink>
      </p>
    </FormContainer>
  )
}
