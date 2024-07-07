import { useState } from 'react'
import { getUserImage } from '../API'
import SecondaryButton from './Buttons/SecondaryButton'

export default function ReviewForm({ onSubmit, img }) {
  const [review, setReview] = useState('')
  const [isFormExpanded, setIsFormExpanded] = useState(false)

  return (
    <div className="review-form">
      <div className="user-section">
        {/* <UserLogo style={{ width: 30 }} /> */}
        <img src={getUserImage(img)} alt="" className="review-profile-image" />
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
