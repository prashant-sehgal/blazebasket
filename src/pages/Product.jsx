import React, { useEffect, useRef, useState } from 'react'
import CarouselSlider from '../components/Carousel-slider'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import ProductsContainer from '../components/ProductsContainer'
import Box from '../components/Box'
import SecondaryButton from '../components/Buttons/SecondaryButton'
import QuantityEditor from '../components/QuantityEditor'
import UserLogo from '../components/UserLogo'
import {
  findProductById,
  getProductImage,
  getProductReviews,
  getUserImage,
} from '../API'
import { formatIndianPrice } from '../Utils'
import Review from '../components/Review'
import RatingsDisplay from '../components/RatingsDisplay'
import ReviewForm from '../components/ReviewForm'

export default function Product() {
  const [product, setProduct] = useState()
  const [reviews, setReviews] = useState([])

  const [quantity, setQuantity] = useState(1)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const descContainer = useRef()

  useEffect(function () {
    const urlParams = new URLSearchParams(window.location.search)
    const productId = urlParams.get('id')

    async function loadData() {
      const productData = await findProductById(productId)

      const reviewsData = await getProductReviews(productData._id)

      if (productData) setProduct(productData)
      if (reviewsData) setReviews(reviewsData)

      console.log(reviewsData)
    }

    loadData()
  }, [])

  useEffect(
    function () {
      if (!descContainer.current || !product) return

      const description = product.description.split('\n').join('<br>')

      descContainer.current.innerHTML = ''
      descContainer.current.insertAdjacentHTML('afterbegin', description)
    },
    [product]
  )

  useEffect(function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Optional, adds smooth scrolling animation
    })
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array ensures that effect runs only once on mount

  const carouselSize = screenWidth > 1000 ? 500 : 350
  const boxExpand = screenWidth > 800 ? true : false

  return (
    <div className="product">
      {!product ? (
        'loading'
      ) : (
        <>
          <div className="product-container">
            <div className="product-image-carousel">
              <CarouselSlider
                size={carouselSize}
                images={product.images.map((img) => getProductImage(img))}
              />
            </div>
            <div className="product-details">
              <div className="product-title">
                {product.title}
                <RatingsDisplay color="#c79708" />
              </div>
              <p className="product-desc-short">
                {product.description
                  .split('\n')
                  .slice(0, product.description.split('\n').indexOf(''))
                  .join('\n')}
              </p>
              <QuantityEditor
                style={{ marginTop: 20 }}
                value={quantity}
                setValue={setQuantity}
                size={100}
              />
              <div className="product-price-container">
                <p>{formatIndianPrice(`${product.price}`)}</p>
                <PrimaryButton size={200}>ADD TO CART</PrimaryButton>
              </div>
            </div>
          </div>

          <Box
            title="Details and Specification"
            style={{ marginTop: 10 }}
            defaultExp={boxExpand}
          >
            <div className="product-desc" ref={descContainer}></div>
          </Box>

          <ProductsContainer
            title="Top Picks: Handpicked Recommendations for Every Taste and Need!"
            category={product.category}
          />

          <Box title="REVIEW SECTION" style={{ marginTop: 10 }}>
            {/* <ReviewForm /> */}
            <div className="reviews">
              {reviews.length > 0 ? (
                reviews.map((review) => (
                  <Review
                    user={review.user.name}
                    ratings={review.rating}
                    message={review.thought}
                    img={review.user.image}
                  />
                ))
              ) : (
                <p className="center-text">Be first one to write a review</p>
              )}
            </div>
          </Box>
        </>
      )}
    </div>
  )
}
