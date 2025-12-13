import './ContactCard.scss'

export const ContactCard = ({ title, content, Icon }) => {
  return (
    <article className="contact-card">
      <div className="contact-card__icon">
        <Icon size={15} />
      </div>
      <div className="contact-card__content">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </article>
  )
}
