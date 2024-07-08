import React, { useEffect, useState } from 'react'
import ProductPreview from '../components/ProductPreview'
import { categoryPicks, getNewProducts, getTopPicks } from '../API'

export default function ProductsContainer({ title, styles, type, category }) {
  const [products, setProducts] = useState()

  useEffect(function () {
    async function mountProducts() {
      let productsData

      if (type === 'new') productsData = await getNewProducts()
      else if (type === 'top-picks') productsData = await getTopPicks()

      if (category) productsData = await categoryPicks(category)

      setProducts(productsData)
    }
    mountProducts()
  }, [])

  return (
    <div
      className="products-container"
      style={{ ...styles, marginTop: '10px' }}
    >
      <p className="title">{title}</p>
      <div className="content">
        {products
          ? products.map((product) => (
              <ProductPreview product={product} key={product._id} />
            ))
          : ''}
      </div>
    </div>
  )
}
