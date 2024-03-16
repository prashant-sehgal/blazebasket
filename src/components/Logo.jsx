import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Logo() {
  return (
    <NavLink to="/">
      <div className="logo" style={styles.logo}>
        B
        <span className="small" style={styles.span}>
          laze
        </span>
        B
        <span className="small" style={styles.span}>
          asket
        </span>
      </div>
    </NavLink>
  )
}

const styles = {
  logo: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '40px',
    fontWeight: 50,
    flex: '0.1',
    display: 'flex',
    alignItems: 'center',
    color: 'whitesmoke',
  },
  span: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: '32px',
  },
}
