import React from 'react'

export default function PrimaryButton({ children, onPress, size, type = '' }) {
  return (
    <button
      className="primary-button"
      onClick={onPress}
      style={{ width: size }}
      type={type}
    >
      {children}
    </button>
  )
}
