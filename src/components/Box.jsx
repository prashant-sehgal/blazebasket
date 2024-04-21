import React, { useState } from 'react'

export default function Box({
  title = 'title',
  children,
  className,
  style,
  defaultExp = true,
}) {
  const [isExpand, setIsExpand] = useState(defaultExp)
  return (
    <div className={`box ${className}`} style={style}>
      <div className="title">
        <p>{title}</p>
        <button onClick={() => setIsExpand(!isExpand)}>
          <span className="material-symbols-outlined">
            {isExpand ? 'expand_less' : 'expand_more'}
          </span>
        </button>
      </div>
      <div
        className="container"
        style={{ display: `${isExpand ? 'block' : 'none'}` }}
      >
        {children}
      </div>
      <div
        className="footer"
        style={{ display: `${!isExpand ? 'flex' : 'none'}` }}
        onClick={() => setIsExpand(!isExpand)}
      >
        ...
      </div>
    </div>
  )
}
