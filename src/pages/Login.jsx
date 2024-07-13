import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import FormContainer from '../components/FormContainer'
import { login } from '../API'
import decrypt from '../decrypt'

export default function Login({ setLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmitLoginForm(event) {
    event.preventDefault()

    const res = await login(email, password)

    if (res.status === 'fail') return alert(res.message)

    const jwt = decrypt(
      res.authString,
      process.env.REACT_APP_DECRYPTION_KEY,
      res.random
    ).split(',')

    setLogin(jwt)
  }

  return (
    <FormContainer className="login">
      <div className="header">
        <h2>Login</h2>
        <p className="text">
          Access your personalized shopping journey with just one click
        </p>
      </div>
      <form className="login-form" onSubmit={onSubmitLoginForm}>
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
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
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
