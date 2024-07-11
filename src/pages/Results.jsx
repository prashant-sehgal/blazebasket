import React, { useEffect, useState } from 'react'
import ProductOverview from '../components/ProductPreview'
import { categoryPicks, searchProducts } from '../API'
import { useParams } from 'react-router-dom'
import AppLoading from '../components/AppLoading'

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

  if (!products) {
    return <AppLoading />
  } else {
    return (
      <div className="results">
        <div className="products">
          {products !== 'none' ? (
            products.map((product) => (
              <ProductOverview product={product} key={product._id} />
            ))
          ) : (
            <div
              style={{
                textAlign: 'center',
                width: '100%',
                margin: '20px',
              }}
            >
              <p>No Product Found</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
