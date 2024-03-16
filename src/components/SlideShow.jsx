import React, { useEffect, useState } from 'react'

export default function SlideShow() {
  const [activeSlide, setActiveSlide] = useState(1)
  useEffect(function () {
    setTimeout(function () {
      if (activeSlide === 4) setActiveSlide(1)
      else setActiveSlide(activeSlide + 1)
    }, 2000)
  })
  return (
    <div className="slide-show">
      {[1, 2, 3, 4].map((value) => (
        <div
          className="image"
          style={{
            opacity: `${activeSlide === value ? 1 : 0}`,
          }}
        >
          <img src={`/slide-show/image-${value}.jpg`} alt={`image-${value}`} />
        </div>
      ))}

      <button></button>
    </div>
  )
}
