import React from 'react'

export default function Prompt({ prompt }) {
  const type = prompt.type ? prompt.type : ''
  const message = prompt.message ? prompt.message : ''

  return (
    <div
      className={`prompt ${type}`}
      style={{ top: prompt.visible ? 60 : -60 }}
    >
      <div className="icon">
        <span className="material-symbols-outlined">
          {type ? (type === 'success' ? 'done' : type) : ''}
        </span>
      </div>
      <p className="message">{message ? message : ''}</p>
    </div>
  )
}

// color: var(--custom-red);
// border-bottom: 4px solid var(--custom-red);
