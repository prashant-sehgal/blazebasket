import React from 'react'

export default function FormContainer({ children, className }) {
  return <div className={`form-container ${className}`}>{children}</div>
}
