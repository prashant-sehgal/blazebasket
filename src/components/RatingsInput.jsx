import React from 'react'

export default function RatingsInput({
  ratings,
  incrementRatings,
  decrementRatings,
}) {
  return (
    <div className="ratings-input">
      <div className="star-logo">
        <span className="material-symbols-outlined">star</span>
      </div>
      <div className="value">{ratings}</div>
      <div className="controls">
        <button onClick={incrementRatings}>+</button>
        <button onClick={decrementRatings}>-</button>
      </div>
    </div>
  )
}
