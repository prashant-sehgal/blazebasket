import React, { useState } from 'react'

export default function Carousel({ images, size }) {
  const [activeSlide, setActiveSlide] = useState(0)
  const [slidePositions, setSliderPosition] = useState(
    Array.from({ length: images.length }, (_, index) => index * size)
  )

  function goToNextSlide() {
    let slider
    if (activeSlide === 3) {
      slider = Array.from({ length: images.length }, (_, index) => index * size)
      setActiveSlide(0)
    } else {
      slider = slidePositions.map((value) => value - size)
      setActiveSlide(activeSlide + 1)
    }

    setSliderPosition(slider)
  }

  function goToPreviousSlide() {
    let slider
    if (activeSlide === 0) {
      return 0
    } else {
      slider = slidePositions.map((value) => value + size)
      setActiveSlide(activeSlide - 1)
    }

    setSliderPosition(slider)
  }

  return (
    <div className="carousel-slider">
      <div className="controls">
        <button onClick={goToPreviousSlide}>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button onClick={goToNextSlide}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
      <div className="images" style={{ width: size, height: size }}>
        {images.map((img, i) => (
          <div
            className="img"
            style={{
              left: `${slidePositions[i]}px`,
              width: size,
              height: size,
            }}
            key={i}
          >
            <img src={`./${img}`} />
          </div>
        ))}
      </div>
    </div>
  )
}
