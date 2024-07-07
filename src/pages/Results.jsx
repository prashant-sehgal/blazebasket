import React, { useEffect, useState } from 'react'
import ProductOverview from '../components/ProductPreview'
import { categoryPicks } from '../API'

export default function Results({ category }) {
  const [products, setProducts] = useState()
  useEffect(function () {
    async function loadData() {
      const catString =
        category === 'smartwatches'
          ? category
              .split('')
              .slice(0, category.length - 2)
              .join('')
          : category
              .split('')
              .slice(0, category.length - 1)
              .join('')

      const data = await categoryPicks(catString)

      if (data) setProducts(data)
    }
    loadData()
  }, [])

  return (
    <div className="results">
      <div className="products">
        {products
          ? products.map((product) => <ProductOverview product={product} />)
          : ''}
      </div>
    </div>
  )
}
