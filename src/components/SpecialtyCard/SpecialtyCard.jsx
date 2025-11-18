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
          quality={100}
          sizes="(max-width: 576px) 100vw, 50vw"
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
