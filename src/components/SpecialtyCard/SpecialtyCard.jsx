import Image from 'next/image'
import Link from 'next/link'
import './SpecialtyCard.scss'

export const SpecialtyCard = ({ size, title, content, link, image }) => {
  return (
    <article className={`specialites__card specialites__card--${size}`}>
      <div className="specialites__image">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          //sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, (max-width: 1200px) 33vw, 25vw"
        />
      </div>
      <div className="specialites__content">
        <h3>{title}</h3>
        <p>{content}</p>
        {link && <Link href={link.ref}>{link.text}</Link>}
      </div>
    </article>
  )
}
