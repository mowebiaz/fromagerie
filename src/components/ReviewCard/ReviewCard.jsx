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

        <span className="review__rating">
          <span className="sr-only">{`${review.rating} étoiles sur 5`}</span>
          <span aria-hidden="true">
            {'★'.repeat(review.rating)}
            {'☆'.repeat(5 - review.rating)}
          </span>
        </span>
      </div>

      <p className="review__text">{review.text}</p>
    </article>
  )
}
