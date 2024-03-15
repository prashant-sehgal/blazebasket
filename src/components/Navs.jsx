import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navs() {
  const [cart, setCart] = useState(0)
  return (
    <div className="navs">
      <NavsElement to="/cart" className="cart">
        <span class="material-symbols-outlined">shopping_cart</span>
        cart (10)
      </NavsElement>
      <NavsElement to="/login" className="login">
        Login
      </NavsElement>
    </div>
  )
}

function NavsElement({ children, to, className = '' }) {
  return (
    <NavLink to={to}>
      <div className={`navs-element ${className}`}>{children}</div>
    </NavLink>
  )
}
