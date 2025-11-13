import './ReviewCard.scss'

export const ReviewCard = ({ review }) => {
  return (
    <article className="review__card">
      <div className="review__header">
        <div className="review__author">
          <div>
            <p className="review__author-name">{review.author_name}</p>
            <p className="review__date">{review.relative_time_description}</p>
          </div>
        </div>

        <p
          className="review__rating"
          aria-label={`${review.rating} étoiles sur 5`}
        >
          {'★'.repeat(review.rating)}
          {'☆'.repeat(5 - review.rating)}
        </p>
      </div>

      <p className="review__text">{review.text}</p>
    </article>
  )
}
