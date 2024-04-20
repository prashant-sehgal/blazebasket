import React from 'react'
import Carousel from '../components/Carousel'
import ProductsContainer from '../components/ProductsContainer'
import ProductPreview from '../components/ProductPreview'

export default function Home() {
  const images = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg']
  return (
    <div className="home">
      <Carousel images={images} size={1200} />
      <ProductsContainer
        title="Discover What's New: Explore Our Latest Arrivals!"
        styles={{ marginTop: 10 }}
      >
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
      </ProductsContainer>
      <ProductsContainer
        title="Top Picks: Explore Our Best Sellers!"
        styles={{ marginTop: 10 }}
      >
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
      </ProductsContainer>
    </div>
  )
}
