import React from 'react'
import { NavLink } from 'react-router-dom'
import UserLogo from './UserLogo'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="header">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <SearchBar />
        <Links>
          <Cart amount={0} />
          {/* <NavLink to="/login">
            <Custom1Button>Login</Custom1Button>
          </NavLink> */}
          <NavLink to="/user">
            <UserLogo
              img="https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png"
              size={40}
            />
          </NavLink>
        </Links>
      </div>
      <div className="mobile-search">
        <SearchBar />
      </div>
      <div className="product-filters">
        <Filter title="smartphones" icon="smartphone" />
        <Filter title="laptops" icon="laptop_mac" />
        <Filter title="smartwatches" icon="watch" />
        <Filter title="headphones" icon="headphones" />
        <Filter title="speakers" icon="speaker" />
      </div>
    </div>
  )
}

function Logo() {
  return <div className="logo">BlazeBasket</div>
}

function SearchBar({ mode = 'desktop' }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Find what you need quickly and effortlessly..."
      />
      <button className="search-button">
        <span className="material-symbols-outlined d">search</span>
      </button>
    </div>
  )
}

function Cart({ amount = 5 }) {
  return (
    <NavLink to="/cart">
      <div className="cart-icon">
        <p className="value">{amount}</p>
        <span className="material-symbols-outlined d">shopping_cart</span>
      </div>
    </NavLink>
  )
}

function Links({ children }) {
  return <div className="links">{children}</div>
}

function Filter({ title, icon }) {
  return (
    <NavLink to={`/${title}`}>
      <div className="filter">
        <span className="material-symbols-outlined">{icon}</span>
        <p className="title">{title}</p>
      </div>
    </NavLink>
  )
}
