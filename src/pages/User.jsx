import React, { useState } from 'react'
import { getUserImage, login } from '../API'
import { NavLink } from 'react-router-dom'
import Custom2Button from '../components/Buttons/Custom2Button'

export default function User({ loginInfo }) {
  const [img, setImg] = useState()

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImg(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  function deleteCookie(cookieName) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`
  }

  function logout() {
    deleteCookie('jwt')
    window.location.href = '/'
  }

  if (loginInfo.isLogedIn) {
    return (
      <div className="user">
        <div className="page-title">Your Profile</div>
        <div className="user-data">
          <form className="user-form">
            <div className="image-form-element">
              <div className="img">
                <img
                  src={img ? img : getUserImage(loginInfo.user.image)}
                  alt=""
                />
              </div>
              <input
                type="file"
                id="profile-img"
                onChange={handleImageUpload}
                style={{ display: 'none' }}
              />
              <label htmlFor="profile-img" className="uploadBtn">
                <span className="material-symbols-outlined">upload</span>
              </label>
            </div>
          </form>

          <p className="info">{loginInfo.user.name}</p>
          <p className="sub-info">{loginInfo.user.email}</p>
          <NavLink to="/orders">
            <p className="sub-info-btn">Your Orders</p>
          </NavLink>

          <p
            className="sub-info-btn"
            style={{ color: '#dc3545' }}
            onClick={() => logout()}
          >
            Logout
          </p>
        </div>
      </div>
    )
  }
  window.location.href = '/login'
}
