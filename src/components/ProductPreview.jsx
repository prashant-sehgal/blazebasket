import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ProductOverview({ product }) {
  function limitString(text, limit) {
    return `${text.split(' ').slice(0, limit).join(' ')}...`
  }
  return (
    <NavLink to="/">
      <div className="product-preview">
        <div className="product-image">
          <img src="/sample-product.webp" />
        </div>
        <div className="product-title">
          Samsung Galaxy S24 Ultra 5G Pure Titanium (12GB, 256GB)
        </div>
        <div className="product-ratings">
          <div className="ratings">
            3.5 <span className="material-symbols-outlined">grade</span>
          </div>
          <div className="total-ratings">(1,000)</div>
        </div>
        <div className="product-pricing">Rs. 1,29,900</div>
        <div className="product-short-description">
          {limitString(
            `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam amet
          quis accusantium! Minus cum eveniet beatae vero mollitia iusto
          suscipit iure nihil explicabo, doloribus quis impedit error similique
          animi facilis sapiente dicta maiores debitis, consequatur maxime
          incidunt sunt praesentium ad? Eligendi vitae laudantium est aperiam
          officia, iure eius explicabo similique?`,
            20
          )}
        </div>
      </div>
    </NavLink>
  )
}
