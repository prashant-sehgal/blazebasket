import React from 'react'
import Carousel from '../components/Carousel'

export default function Home() {
  return (
    <div className="home">
      <Carousel
        images={['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg']}
        size={1200}
      />
    </div>
  )
}
