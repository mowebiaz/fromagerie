import { ReviewCard } from '../ReviewCard/ReviewCard'
import './ReviewSection.scss'

export const ReviewSection = ({ items }) => {
  return (
    <section id="reviews">
      <div className="container">
        <h2>Ils parlent de nous</h2>
        <ul className="review">
          {items.map((item) => (
            <ReviewCard
              key={item.id}
              review={item}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
