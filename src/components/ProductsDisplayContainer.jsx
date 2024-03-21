import React from 'react'

export default function ProductsDisplayContainer({ children, title }) {
  return (
    <div className="products-display-container">
      <div className="title">{title}</div>
      <div className="elements">{children}</div>
    </div>
  )
}
