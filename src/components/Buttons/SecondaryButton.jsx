import React from 'react'

export default function SecondaryButton({ children, onPress, size }) {
  return (
    <button
      className="secondary-button"
      onClick={onPress}
      style={{ width: size }}
    >
      {children}
    </button>
  )
}
