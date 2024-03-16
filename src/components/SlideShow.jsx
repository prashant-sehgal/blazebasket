import React, { useEffect, useState } from 'react'

export default function SlideShow() {
  const [activeSlide, setActiveSlide] = useState(1)

  function goBackToPreviousSlide() {
    if (activeSlide === 1) setActiveSlide(4)
    else setActiveSlide(activeSlide - 1)
  }
  function goToNextSlide() {
    if (activeSlide === 4) setActiveSlide(1)
    else setActiveSlide(activeSlide + 1)
  }
  function goToSlideLink(event) {
    if (event.target.classList.contains('action-buttons')) {
      console.log(`Clicked on slde: ${activeSlide}`)
    }
  }
  return (
    <div className="slide-show">
      <div className="action-buttons" onClick={goToSlideLink}>
        <button onClick={goBackToPreviousSlide}>
          <span className="material-symbols-outlined">arrow_back_ios</span>{' '}
        </button>
        <button onClick={goToNextSlide}>
          <span className="material-symbols-outlined">arrow_forward_ios</span>{' '}
        </button>
      </div>
      <div
        className="image"
        style={{
          opacity: `${activeSlide === 1 ? 1 : 0}`,
        }}
      >
        <img src={`/slide-show/image-${1}.jpg`} alt={`image-${1}`} />
      </div>
      <div
        className="image"
        style={{
          opacity: `${activeSlide === 2 ? 1 : 0}`,
        }}
      >
        <img src={`/slide-show/image-${2}.jpg`} alt={`image-${2}`} />
      </div>
      <div
        className="image"
        style={{
          opacity: `${activeSlide === 3 ? 1 : 0}`,
        }}
      >
        <img src={`/slide-show/image-${3}.jpg`} alt={`image-${3}`} />
      </div>
      <div
        className="image"
        style={{
          opacity: `${activeSlide === 4 ? 1 : 0}`,
        }}
      >
        <img src={`/slide-show/image-${4}.jpg`} alt={`image-${4}`} />
      </div>

      <button></button>
    </div>
  )
}
