import React from 'react'

export default function Custom2Button({ onPress, children, color }) {
  return (
    <button className="custom-2-btn" onClick={onPress} style={{ color }}>
      {children}
    </button>
  )
}
