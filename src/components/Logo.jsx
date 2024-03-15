import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Logo() {
  return (
    <NavLink to="/">
      <div className="logo">
        B<span className="small">laze</span>B<span>asket</span>
      </div>
    </NavLink>
  )
}
