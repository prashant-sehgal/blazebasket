import React from 'react'

export default function ProductsContainer({ children, title, styles }) {
  return (
    <div className="products-container" style={styles}>
      <p className="title">{title}</p>
      <div className="content">{children}</div>
    </div>
  )
}
