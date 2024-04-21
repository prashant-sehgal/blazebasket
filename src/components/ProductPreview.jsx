import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductRatings from './ProductPreviewComponents/ProductRatings'

export default function ProductOverview({ product }) {
  function limitString(text, limit) {
    return `${text.split(' ').slice(0, limit).join(' ')}...`
  }
  return (
    <NavLink to="/product">
      <div className="product-preview">
        <div className="product-image">
          <img src="/sample-product.webp" />
        </div>
        <div className="product-title">
          Samsung Galaxy S24 Ultra 5G Pure Titanium (12GB, 256GB)
        </div>
        <ProductRatings />
        <div className="product-pricing">Rs. 1,29,900</div>
      </div>
    </NavLink>
  )
}
