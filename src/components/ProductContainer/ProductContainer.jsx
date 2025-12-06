import Image from 'next/image'
import './ProductContainer.scss'

export const ProductContainer = ({
  title,
  description,
  accent,
  images = [],
}) => {
  return (
    <article className="product-container">
      <div className="product-container__content">
        <h3>{title}</h3>
        <p>{description}</p>
        {accent && <p className="accent">{accent}</p>}
      </div>

      {images.map((image, index) => (
        <figure key={index}>
          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            //width={image.width}
            //height={image.height}
          />
        </figure>
      ))}
    </article>
  )
}
