import { getUserImage } from '../API'
import RatingsDisplay from './RatingsDisplay'

export default function Review({ user, ratings, message, img }) {
  return (
    <div className="review">
      <div className="user">
        <div>
          <div className="review-profile-img">
            <img src={getUserImage(img)} alt={getUserImage(img)} className="" />
          </div>
          {user}
        </div>
        <RatingsDisplay
          ratings={ratings}
          color="#daa520"
          averageRatings={ratings}
        />
      </div>
      <div className="review-message">{message}</div>
    </div>
  )
}
