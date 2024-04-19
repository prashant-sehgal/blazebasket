import React from 'react'

export default function Custom1Button({ children, onPress }) {
  return (
    <button className="custome-1-btn" onClick={onPress}>
      {children}
    </button>
  )
}
