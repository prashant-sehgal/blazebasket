import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function SlideShow() {
  const [activeSlide, setActiveSlide] = useState(1)
  useEffect(function () {
    setTimeout(function () {
      if (activeSlide === 4) setActiveSlide(1)
      else setActiveSlide(activeSlide + 1)
    }, 5000)
  })
  return (
    <div className="slide-show">
      {[1, 2, 3, 4].map((value) => (
        <NavLink to="/cart">
          <div
            className="image"
            style={{
              opacity: `${activeSlide === value ? 1 : 0}`,
            }}
          >
            <img
              src={`/slide-show/image-${value}.jpg`}
              alt={`image-${value}`}
            />
          </div>
        </NavLink>
      ))}

      <button></button>
    </div>
  )
}
