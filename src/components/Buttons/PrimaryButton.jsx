import React from 'react'

export default function PrimaryButton({
  children,
  onPress,
  size,
  type = '',
  style,
}) {
  return (
    <button
      className="primary-button"
      onClick={onPress}
      style={{ width: size, ...style }}
      type={type}
    >
      {children}
    </button>
  )
}
