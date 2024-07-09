import React, { useState } from 'react'
import FormContainer from '../components/FormContainer'
import { NavLink } from 'react-router-dom'
import { signup } from '../API'
import aes256CbcDecrypt from '../decrypt'

export default function Signup({ shopPrompt, setLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  async function onSubmitSignupForm(event) {
    event.preventDefault()
    try {
      if (password !== confirmPassword)
        return shopPrompt('error', 'passwords are not same')

      const res = await signup(name, email, password)

      const jwt = aes256CbcDecrypt(
        res.authString,
        process.env.REACT_APP_DECRYPTION_KEY,
        res.random
      ).split(',')

      setLogin(jwt)
    } catch (error) {
      shopPrompt('error', error.message)
    }
  }

  return (
    <FormContainer className="signup">
      <div className="header">
        <h2>Create Account</h2>
        <p>
          Unlock exclusive deals and seamless shopping experiences – create your
          account today!
        </p>
      </div>
      <form onSubmit={onSubmitSignupForm}>
        <div className="form-element">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
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
