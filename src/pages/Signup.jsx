import React, { useState } from 'react'
import FormContainer from '../components/FormContainer'
import { NavLink } from 'react-router-dom'

export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <div className="form-element">
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(event) => setConfirmPassword(event.target.value)}
            required
          />
        </div>
        <button>Signup</button>
      </form>
      <p className="footer">
        Already have an account? <NavLink to="/login">Login</NavLink>
      </p>
    </FormContainer>
  )
}
