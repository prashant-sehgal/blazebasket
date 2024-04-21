import React, { useEffect, useReducer, useRef, useState } from 'react'
import CarouselSlider from '../components/Carousel-slider'
import PrimaryButton from '../components/Buttons/PrimaryButton'
import ProductPreview from '../components/ProductPreview'
import ProductsContainer from '../components/ProductsContainer'
import Box from '../components/Box'
import SecondaryButton from '../components/Buttons/SecondaryButton'

export default function Product() {
  const [quantity, setQuantity] = useState(1)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const descContainer = useRef()

  useEffect(function () {
    if (!descContainer.current) return

    const description =
      '12 GB RAM | 512 GB ROM\r\n17.02 cm (6.7 inch) Full HD+ Display\r\n50 MP(OIS) +50MP | 32MP Front Camera\r\n4700 mAh Lithium-ion Battery\r\nQualcomm Snapdragon 8+ Gen 1 Processor\r\nLTPO AMOLED (1 Hz - 120 Hz)\r\nInteractive Nothing Phone (2)\r\nDesigned with impressive features and a myriad of thought processes put together, this phone takes you to the next level of interaction and strengthens communication, thus allowing for a more focused space.\r\n\r\n\r\nDevised with Glyph Interface\r\nThis phone is interesting to use as it is built with GLYPH INTERFACE, an improved technology where you are actually using your phone without being on your phone. You get to set different light and sound sequences for each and every contact you have. This light and sound sequence is also applicable for notifications. You can make use of the light for countdown, timer, meter indicator, volume checker in addition to the portable ring light. You also get Glyph composer where you can invoke different colors of light and sound combinations and create a unique Glyph ringtone.\r\n\r\n\r\nAvailable with NOTHING OS 2.0\r\nThis monochrome smartphone is smooth, quick and offers an intuitive experience with 15% faster app launch time. You also get up to three years of OS upgrades. Customized widgets are other interesting features of this phone that includes clock, photos, weather, etc. The Quick setting option on this phone lets you quickly navigate among apps and features. You can access information directly from your home screen from apps such as Weather and Nothing X.\r\n\r\n\r\nBuilt with Impressive Camera\r\nThis phone is built with a 32 MP front camera, letting you take beautiful photos in vibrant colors and in detailed clarity. Videos taken in the 32 MP front camera are spectacular and mind blowing. The 50 MP main + 50 MP ultra-wide camera is upgraded with an 18-bit ISP (Image Signal Processor) to let you take detailed shots. You can capture the minutest details with the 2X Super-res Zoom camera and cherish the moments for years to come. Improve your cinematography experience with the 4K 60 fps on the rear camera and record a clear and quality video. You can also use the Action Mode when you intend to take high-action videos. The availability of 1080P at 60 fps makes you a star by allowing you to record stunning selfie videos. Click awesome portraits with the advanced HDR technology. This also works while using Night Mode where background noise is eliminated and delivers clear shots. Photography is made interesting with the New Motion Capture 2.0 algorithm that uses AI technology to locate moving subjects when you are busy taking photos.\r\n\r\n\r\nDesigned with a Powerful Chipset\r\nThis smartphone is equipped with the Snapdragon 8+ Gen 1 chipset to deliver an incredibly fast performance. This Phone (2) has shown 80% improvement in performance. This Nothing Phone (2) is 17 cm in size and is built with an OLED display, adding in 1600 nits of peak brightness. When not in use, this smartphone can save power with the LTPO and gets adapted to the 120 Hz refresh rate and preserves power. Powered with a mammoth 4700 mAh battery and 15 W Qi wireless charger, you can go places and even power up your Ear (2) on the go.\r\n\r\n\r\nStriking and Sustainable\r\nThis premium smartphone is designed with an idea of making it sustainable and be of use to a vast audience. This Nothing Phone (2) has a reduced carbon footprint of 53.45 kg. You get this mobile in a plastic-free packaging and 60% of the paper used comes from recycled sources.'
        .split('\r\n')
        .join('<br>')

    descContainer.current.innerHTML = ''
    descContainer.current.insertAdjacentHTML('afterbegin', description)
  })

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
      <div className="product-container">
        <div className="product-image-carousel">
          <CarouselSlider
            size={carouselSize}
            images={[
              'sample-product.webp',
              'sample.webp',
              'sample-b.jpg',
              '248-2482328_explore-samsung-mobile-phones-providing-businesses-samsung-galaxy.png',
            ]}
          />
        </div>
        <div className="product-details">
          <div className="product-title">
            Samsung Galaxy S24 Ultra 5G AI Smartphone (Titanium Black, 12GB,
            512GB Storage)
            <RatingsDisplay color="#c79708" />
          </div>
          <p className="product-desc-short">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            magni explicabo architecto asperiores eos, itaque ex fugiat ea
            voluptatem tempore minus quidem nobis ullam cumque quibusdam in
            harum quam, commodi ducimus illum natus corporis ad voluptatibus.
            Quaerat quo tempora quisquam nihil, incidunt culpa, maiores
            quibusdam saepe aperiam beatae earum iusto!...
          </p>
          <QuantityEditor value={quantity} setValue={setQuantity} size={100} />
          <div className="product-price-container">
            <p>Rs. 1,20,000</p>
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

      <Box title="REVIEW SECTION" style={{ marginTop: 10 }}>
        <ReviewForm />
        <div className="reviews">
          <Review
            user="tanya"
            ratings={3}
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officia repudiandae aspernatur autem nesciunt dolorum corporis laboriosam neque, voluptates quod cum odio id ea et! Eaque sit temporibus dolore voluptatum."
          />
          <Review
            user="tanya"
            ratings={3}
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officia repudiandae aspernatur autem nesciunt dolorum corporis laboriosam neque, voluptates quod cum odio id ea et! Eaque sit temporibus dolore voluptatum."
          />
          <Review
            user="tanya"
            ratings={3}
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officia repudiandae aspernatur autem nesciunt dolorum corporis laboriosam neque, voluptates quod cum odio id ea et! Eaque sit temporibus dolore voluptatum."
          />
          <Review
            user="tanya"
            ratings={3}
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officia repudiandae aspernatur autem nesciunt dolorum corporis laboriosam neque, voluptates quod cum odio id ea et! Eaque sit temporibus dolore voluptatum."
          />
          <Review
            user="tanya"
            ratings={3}
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officia repudiandae aspernatur autem nesciunt dolorum corporis laboriosam neque, voluptates quod cum odio id ea et! Eaque sit temporibus dolore voluptatum."
          />
          <Review
            user="tanya"
            ratings={3}
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officia repudiandae aspernatur autem nesciunt dolorum corporis laboriosam neque, voluptates quod cum odio id ea et! Eaque sit temporibus dolore voluptatum."
          />
          <Review
            user="tanya"
            ratings={3}
            message="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores officia repudiandae aspernatur autem nesciunt dolorum corporis laboriosam neque, voluptates quod cum odio id ea et! Eaque sit temporibus dolore voluptatum."
          />
        </div>
      </Box>
    </div>
  )
}

function RatingsDisplay({
  ratings = 3,
  color = '#16427c',
  averageRatings = 3.5,
}) {
  return (
    <div className="ratings-display" style={{ color: color }}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          className={`material-symbols-outlined ${
            value <= ratings ? 'material-symbols-outlined-fill' : ''
          }`}
          key={value}
          style={{ color }}
        >
          star
        </span>
      ))}
      ({averageRatings})
    </div>
  )
}

function QuantityEditor({ value, setValue, style }) {
  return (
    <div className="quantity-editor" style={style}>
      <button onClick={() => setValue(value - 1)}>-</button>
      <p className="value">{value}</p>
      <button onClick={() => setValue(value + 1)}>+</button>
    </div>
  )
}

function UserLogo({ style }) {
  return (
    <div className="user-logo" style={style}>
      <span className="material-symbols-outlined">person</span>
    </div>
  )
}

function Review({ user, ratings, message }) {
  return (
    <div className="review">
      <div className="user">
        <div>
          <UserLogo style={{ marginRight: 10, width: 30 }} />
          {user}
        </div>
        <RatingsDisplay color="#daa520" averageRatings={ratings} />
      </div>
      <div className="review-message">{message}</div>
    </div>
  )
}

function ReviewForm({ onSubmit }) {
  const [review, setReview] = useState('')
  const [isFormExpanded, setIsFormExpanded] = useState(false)

  return (
    <div className="review-form">
      <div className="user-section">
        <UserLogo />{' '}
        <span style={{ marginLeft: 4, fontStyle: 'italic' }}>Tanya</span>
        <div className="btn-right-container">
          <SecondaryButton
            onPress={() => setIsFormExpanded(!isFormExpanded)}
            size={90}
          >
            {isFormExpanded ? 'Cancel' : 'Write Review'}
          </SecondaryButton>
        </div>
      </div>
      <form style={{ display: `${isFormExpanded ? 'block' : 'none'}` }}>
        <textarea
          onChange={(event) => setReview(event.target.value)}
          placeholder="Share your thoughts and experiences here..."
          value={review}
        ></textarea>
        <div className="btn-right-container">
          <SecondaryButton onPress={onSubmit}>Submit</SecondaryButton>
        </div>
      </form>
    </div>
  )
}
