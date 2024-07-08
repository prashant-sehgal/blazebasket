import React from 'react'

export default function UserIcon({ img, size = 50 }) {
  return (
    <div className="user-icon" style={{ width: `${size}px` }}>
      <img src={img} alt={img} />
    </div>
  )
}
