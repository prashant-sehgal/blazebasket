import React from 'react'
import SlideShow from '../components/SlideShow'
import ProductOverview from '../components/ProductOverview'
import ProductsDisplayContainer from '../components/ProductsDisplayContainer'

export default function Home() {
  return (
    <div className="home">
      <SlideShow />

      <ProductsDisplayContainer title="Discover What's New: Explore Our Latest Arrivals!">
        <ProductOverview />
        <ProductOverview />
        <ProductOverview />
        <ProductOverview />
        <ProductOverview />
        <ProductOverview />
        <ProductOverview />
      </ProductsDisplayContainer>
      <ProductsDisplayContainer title="Top Picks: Explore Our Best Sellers!">
        <ProductOverview />
        <ProductOverview />
        <ProductOverview />
        <ProductOverview />
        <ProductOverview />
        <ProductOverview />
        <ProductOverview />
      </ProductsDisplayContainer>
    </div>
  )
}
