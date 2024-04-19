import React, { useEffect, useRef, useState } from 'react'

export default function Carousel({ images }) {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      forward()
    }, 5000) // 5000 milliseconds = 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(intervalId)
  }, [])

  function reverse() {
    setActiveSlide((value) => {
      if (value === 0) return images.length - 1
      else return value - 1
    })
  }

  function forward() {
    setActiveSlide((value) => {
      if (value === images.length - 1) return 0
      else return value + 1
    })
  }

  return (
    <div className="carousel">
      <div className="controls">
        <button onClick={reverse}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button onClick={forward}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
      <div className="images">
        {images.map((image, key) => (
          <div
            className="image"
            key={key}
            style={{ opacity: `${key === activeSlide ? '1' : '0'}` }}
          >
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  )
}
