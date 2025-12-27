import Link from 'next/link'
import { motion } from 'motion/react'
import Image from 'next-export-optimize-images/image'
import './SpecialtyCard.scss'


export const SpecialtyCard = ({ size, title, content, link, image }) => {
  return (
    <article
      className={`specialites__card specialites__card--${size}`}
/*       whileHover={{ y: -2, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)', borderColor: '#ccc', transition: { duration: 0.1 } }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
      }}
      viewport={{ once: true, amount: 0.3 }} */
    >
      <div className="specialites__image">
        <Image
          src={image.src}
          alt={image.alt}
          fill
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
