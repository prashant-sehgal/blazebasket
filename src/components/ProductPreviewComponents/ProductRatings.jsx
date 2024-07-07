import React from 'react'

export default function ProductRatings({ ratings = 3.5, totalRatings = '23' }) {
  return (
    <div className="product-ratings">
      <div className="ratings">
        {ratings}
        <span className="material-symbols-outlined">grade</span>
      </div>
      {/* <div className="total-ratings">({0})</div> */}
    </div>
  )
}
