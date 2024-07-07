import React from 'react'
import ProductRatings from './ProductPreviewComponents/ProductRatings'
import { getProductImage } from '../API'
import { formatIndianPrice } from '../Utils'

export default function ProductOverview({ product }) {
  return (
    <a href={`/product?id=${product._id}`}>
      <div className="product-preview">
        <div className="product-image">
          <img src={getProductImage(product.images[0])} />
        </div>
        <div className="product-title">{product.title}</div>
        <ProductRatings />
        <div className="product-pricing">
          {formatIndianPrice(`${product.price}`)}
        </div>
      </div>
    </a>
  )
}
