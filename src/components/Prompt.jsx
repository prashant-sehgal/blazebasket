import React, { useEffect, useState } from 'react'

export default function Prompt({ prompt }) {
  const [top, setTop] = useState(-60)
  const type = prompt ? prompt.type : ''
  const message = prompt ? prompt.message : ''

  useEffect(
    function () {
      if (prompt) {
        setTop(60)
        setTimeout(function () {
          setTop(-60)
        }, 2000)
      }
    },
    [prompt]
  )

  return (
    <div className={`prompt ${type}`} style={{ top }}>
      <div className="icon">
        <span className="material-symbols-outlined">
          {type === 'success' ? 'done' : type}
        </span>
      </div>
      <p className="message">{message}</p>
    </div>
  )
}
