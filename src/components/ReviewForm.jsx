import { useEffect, useState } from 'react'
import { createNewReview, getUserImage } from '../API'
import SecondaryButton from './Buttons/SecondaryButton'
import RatingsInput from './RatingsInput'

export default function ReviewForm({ loginInfo, onSubmit, img, productId }) {
  // console.log(loginInfo)
  const [review, setReview] = useState('')
  const [ratings, setRatings] = useState(3)
  const [isFormExpanded, setIsFormExpanded] = useState(false)

  useEffect(
    function () {
      setRatings(3)
      setReview('')
    },
    [isFormExpanded]
  )

  function decrementRatings() {
    if (ratings === 1) return

    setRatings(ratings - 1)
  }

  function incrementRatings() {
    if (ratings === 5) return

    setRatings(ratings + 1)
  }

  async function onSubmitReviewForm(event) {
    event.preventDefault()
  }

  async function submitReview() {
    try {
      const response = await createNewReview(
        productId,
        review,
        ratings,
        loginInfo.jwt
      )
      if (response.status === 'success') {
        onSubmit()
        setIsFormExpanded(false)
      }
    } catch (error) {
      // showPrompt('error', error.messa)
    }
  }

  return (
    <div className="review-form">
      <div className="user-section">
        {/* <UserLogo style={{ width: 30 }} /> */}
        <img src={getUserImage(img)} alt="" className="review-profile-image" />
        <span style={{ marginLeft: 4, fontStyle: 'italic' }}>
          {loginInfo.user.name}
        </span>
        <div className="btn-right-container">
          <SecondaryButton
            onPress={() => setIsFormExpanded(!isFormExpanded)}
            size={90}
          >
            {isFormExpanded ? 'Cancel' : 'Write Review'}
          </SecondaryButton>
        </div>
      </div>
      <form
        style={{ display: `${isFormExpanded ? 'block' : 'none'}` }}
        onSubmit={onSubmitReviewForm}
      >
        <textarea
          onChange={(event) => setReview(event.target.value)}
          placeholder="Share your thoughts and experiences here..."
          value={review}
        ></textarea>

        <p>Ratings</p>
        <RatingsInput
          ratings={ratings}
          incrementRatings={incrementRatings}
          decrementRatings={decrementRatings}
        />
        <div className="btn-right-container">
          <SecondaryButton onPress={submitReview}>Submit</SecondaryButton>
        </div>
      </form>
    </div>
  )
}
