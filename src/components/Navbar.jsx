import React from 'react'
import { NavLink } from 'react-router-dom'
import Custom1Button from './Buttons/Custom1Button'
import Logo from './Logo'
import SearchBar from './SearchBar'
import CartLink from './CartLink'
import Filter from './Filter'
import Links from './Links'
import { getUserImage } from '../API'
import UserIcon from './UserIcon'

export default function Navbar({ loginInfo, cartLength }) {
  return (
    <div className="navbar">
      <div className="header">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <SearchBar />
        <Links>
          <CartLink amount={cartLength} />
          {loginInfo.isLogedIn ? (
            <>
              <NavLink to="/user">
                <UserIcon img={getUserImage(loginInfo.user.image)} size={40} />
              </NavLink>
            </>
          ) : (
            <NavLink to="/login">
              <Custom1Button>Login</Custom1Button>
            </NavLink>
          )}
          {/* <NavLink to="/user">
            <UserLogo
              img="https://www.fairtravel4u.org/wp-content/uploads/2018/06/sample-profile-pic.png"
              size={40}
            />
          </NavLink> */}
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
