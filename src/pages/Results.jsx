import React, { useEffect, useState } from 'react'
import ProductOverview from '../components/ProductPreview'
import { categoryPicks, searchProducts } from '../API'
import { useParams } from 'react-router-dom'

export default function Results({ category }) {
  const [products, setProducts] = useState('')

  const { query } = useParams()

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

    async function searchData() {
      const response = await searchProducts(query)

      if (response.length > 0) setProducts(response)
      else setProducts('none')
    }

    if (category === 'search') {
      searchData()
    } else {
      loadData()
    }
  }, [])

  return (
    <div className="results">
      <div className="products">
        {products.length > 0 && products !== 'none' ? (
          products.map((product) => (
            <ProductOverview product={product} key={product._id} />
          ))
        ) : products === 'none' ? (
          <p>No Product Found</p>
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  )
}
