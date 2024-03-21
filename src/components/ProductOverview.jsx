import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductOverview({ product }) {
  return (
    <NavLink to="/product">
      <div className="product-overview">
        <div className="product-image">
          <img src="/sample-product.webp" alt="product" />
        </div>
        <p className="ratings">
          4.2
          <span className="material-symbols-outlined material-symbols-outlined-fill">
            star
          </span>
        </p>

        <p className="product-title">Samsung Galaxy s24 Ultra...</p>
        <p className="small-desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit...
        </p>
        <p className="product-price">Rs. 22999</p>
      </div>
    </NavLink>
  )
}
