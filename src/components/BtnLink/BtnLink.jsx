import Link from 'next/link'
import './BtnLink.scss'

export const BtnLink = ({ href, text, className = '' }) => {
  return (
    <Link
      href={href}
      className={`btn-link ${className ? className : ''}`}
    >
      {text}
    </Link>
  )
}
